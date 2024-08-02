const readXlsxFile = require('read-excel-file/node')
const prisma = require('../config/db.js')

exports.insertData = async function (req, res) {
    try {
        let arr;
        await readXlsxFile('./assignment_data.xlsx', { sheet: '4' }).then((rows) => {
            arr = rows
        })
        let i = 1;
        while (arr[i]) {
            await prisma.customerByDevice.create({
                data: {
                    "date": new Date(arr[i][0]),
                    "web_sales": arr[i][1],
                    "offline_sales": arr[i][2]
                }
            })
            i += 1;
        }
        res.status(200).send({ message: "Insertion completed" })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

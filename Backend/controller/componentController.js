const prisma = require('../config/db.js')

exports.component2 = async function (req, res) {
    try {
        const component2Data = await prisma.comparison.findMany();
        if(!component2Data.length){
            return res.status(404).send({ success: false, message: "No data available for component 2" })
        }
        res.status(200).send({ success:true , component2Data })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

exports.component4 = async function (req, res) {
    try {
        const row1 = await prisma.customerByDevice.findFirst({
            where: {id: 1 }
        });
        const row540 = await prisma.customerByDevice.findFirst({
            where: {id: 540  }
        });
        if(!row1 || !row540){
            return res.status(404).send({ success: false, message: "No data available for component 4" })
        }
        const webSales = parseInt(((row540.web_sales - row1.web_sales) / 540) * 100)
        const offlineSales = parseInt(((row540.offline_sales - row1.offline_sales) / 540) * 100)
        res.status(200).send({ success:true , webSales, offlineSales })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

exports.component6 = async function (req, res) {
    try {
        const component6Data = await prisma.topProducts.findMany();
        if(!component6Data.length){
            return res.status(404).send({ success: false, message: "No data available for component 6" })
        }
        res.status(200).send({ success:true , component6Data })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { TbWindmillFilled } from "react-icons/tb";
import { LuSettings } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { GrBarChart } from "react-icons/gr";
import { TbLayoutDashboard } from "react-icons/tb";
import { PiPlugBold } from "react-icons/pi";
import { FaList } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { ImSpinner2 } from "react-icons/im";
import { FaStar } from "react-icons/fa";

import { fetchComponent2, fetchComponent6, fetchComponent4_storage } from './redux/storage/storageSlice';
import { fetchComponent1AWS, fetchComponent3AWS, fetchComponent4AWS, fetchComponent5AWS } from './redux/awsApi/awsApiSlice';

import BarChart from './components/BarChart';
import GaugeChart from './components/GaugeChart';
import LineChart from './components/LineChart';
import HorizontalBarChart from './components/HorizontalBarChart';

// add loading states to all places

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const { component6, loadingComponent6 } = useSelector((state) => state.storage);
  const { loadingComponent2 } = useSelector((state) => state.storage);
  const { component4_storage, loadingComponent4_storage } = useSelector((state) => state.storage);

  const { component1, loadingComponent1 } = useSelector((state) => state.awsApi);
  const { component3, loadingComponent3 } = useSelector((state) => state.awsApi);
  const { component5, loadingComponent5 } = useSelector((state) => state.awsApi);

  const loadComponentData = async () => {
    await dispatch(fetchComponent2())
    await dispatch(fetchComponent6())
    await dispatch(fetchComponent4_storage())

    await dispatch(fetchComponent1AWS())
    await dispatch(fetchComponent3AWS())
    await dispatch(fetchComponent4AWS())
    await dispatch(fetchComponent5AWS())
  }

  function numberFormatted(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'b';
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    } else {
      return num.toString();
    }
  }

  function numberWithCommas(num) {
    let numString = num.toString()
    return numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  useEffect(() => {
    loadComponentData()
  }, [])

  return (
    <main className=" bg-[#F8F8FF] flex justify-center items-center" >
      <div className="my-3 w-[97vw] bg-[#F5F5F5] rounded-2xl flex gap-3 p-2 shadow">

        {/* Side Bar */}
        <section className="w-2/12 flex flex-col justify-between my-4" >
          <div>
            <div className="flex items-center gap-3 px-7 mb-3" >
              <TbWindmillFilled className="text-2xl" /><span className="text-xl font-semibold" >Salesway</span>
            </div>
            <ul className="flex flex-col gap-2" >
              <li className="group flex items-center gap-3 hover:bg-white mx-4 py-1 px-4 rounded-md cursor-pointer transition-all duration-300">
                <LuSettings className="group-hover:text-blue-500 group-hover:text-xl font-bold transition-all duration-300" />
                <span className="group-hover:font-medium transition-all duration-0" >Settings</span>
              </li>
              <li className="group flex items-center gap-3 hover:bg-white mx-4 py-1 px-4 rounded-md cursor-pointer transition-all duration-300">
                <FaRegUserCircle className="group-hover:text-blue-500 group-hover:text-xl font-bold transition-all duration-300" />
                <span className="group-hover:font-medium transition-all duration-0" >Team</span>
              </li>
            </ul>
            <p className="text-xs px-10 mt-3 mb-1.5" >MENU</p>
            <ul className="flex flex-col gap-2" >
              <li className="group flex items-center gap-3 bg-white mx-4 py-1 px-4 rounded-md cursor-pointer">
                <TbLayoutDashboard className="text-blue-500 text-xl font-bold " />
                <span className="font-medium" >Dashboard</span>
              </li>
              <li className="group flex items-center gap-3 hover:bg-white mx-4 py-1 px-4 rounded-md cursor-pointer transition-all duration-300">
                <GrBarChart className="group-hover:text-blue-500 group-hover:text-xl font-bold transition-all duration-300" />
                <span className="group-hover:font-medium transition-all duration-0" >Campaign</span>
              </li>
              <li className="group flex items-center gap-3 hover:bg-white mx-4 py-1 px-4 rounded-md cursor-pointer transition-all duration-300">
                <FaRegUserCircle className="group-hover:text-blue-500 group-hover:text-xl font-bold transition-all duration-300" />
                <span className="group-hover:font-medium transition-all duration-0" >Flows</span>
              </li>
              <li className="group flex items-center gap-3 hover:bg-white mx-4 py-1 px-4 rounded-md cursor-pointer transition-all duration-300">
                <PiPlugBold className="group-hover:text-blue-500 group-hover:text-xl font-bold transition-all duration-300" />
                <span className="group-hover:font-medium transition-all duration-0" >Integrations</span>
              </li>
              <li className="group flex items-center gap-3 hover:bg-white mx-4 py-1 px-4 rounded-md cursor-pointer transition-all duration-300">
                <FaList className="group-hover:text-blue-500 group-hover:text-xl font-bold transition-all duration-300" />
                <span className="group-hover:font-medium transition-all duration-0" >Customers</span>
              </li>
            </ul>
          </div>

          {/* Profile Button */}
          <button onClick={() => navigate('/login')} className="flex items-center gap-4 group hover:bg-white mx-4 px-4 py-3 rounded-xl transition-all duration-3000 " >
            <img className="w-8 h-8 object-cover rounded-full" src="./model-img.jpg" alt="profile img" />
            <span className="font-medium group-hover:underline underline-offset-2 " >Tom Wang</span>
          </button>
        </section>

        <section className="bg-white w-7/12 rounded-2xl shadow px-10 py-4" >
          {/* Component 1 */}
          <div className='flex justify-between' >
            <span className='text-2xl font-medium' >Dashboard</span>
            <div className='text-sm font-medium' >
              <span className='mx-2' >Compare to</span>
              <span className="inline-flex items-center gap-1 border-2 px-3 py-1.5 rounded-2xl cursor-pointer">Last year <FaChevronDown /></span>
            </div>
          </div>
          {/* Numbers of component 1 */}
          {loadingComponent1 ? <div className=' my-8' ><ImSpinner2 className='text-3xl animate-spin mx-auto' /></div> :
            <section className='my-4 flex gap-6' >
              <div className='border-2 py-3 px-4 w-1/3 rounded-lg' >
                <p className='text-xs font-medium text-gray-500 mb-2' >Purchases</p>
                <p className='flex gap-3' >
                  <span className='font-medium text-xl' >{numberFormatted(component1.purchases || 0)}</span>
                  <span className='inline-flex items-center gap-1 text-xs font-medium bg-green-100 text-green-600 border border-green-300 px-2 rounded-2xl' >+32% <FaArrowTrendUp /></span>
                </p>
              </div>
              <div className='border-2 py-3 px-4 w-1/3 rounded-lg' >
                <p className='text-xs font-medium text-gray-500 mb-2' >Revenue</p>
                <p className='flex gap-3' >
                  <span className='font-medium text-xl' >${numberFormatted(component1.refunds || 0)}</span>
                  <span className='inline-flex items-center gap-1 text-xs font-medium bg-green-100 text-green-600 border border-green-300 px-2 rounded-2xl' >+49% <FaArrowTrendUp /></span>
                </p>
              </div>
              <div className='border-2 py-3 px-4 w-1/3 rounded-lg' >
                <p className='text-xs font-medium text-gray-500 mb-2' >Refunds</p>
                <p className='flex gap-3' >
                  <span className='font-medium text-xl' >${numberFormatted(component1.revenue || 0)}</span>
                  <span className='inline-flex items-center gap-1 text-xs font-medium bg-red-100 text-red-600 border border-red-300 px-2 rounded-2xl' >+7% <FaArrowTrendDown /></span>
                </p>
              </div>
            </section>
          }

          {/* Component 2 */}
          <div className='flex justify-between items-center' >
            <span className='font-bold text-lg' >Comparison</span>
            <span className="inline-flex items-center gap-1 border-2 px-3 py-1.5 rounded-2xl text-sm font-medium cursor-pointer">6 months<FaChevronDown /></span>
          </div>
          {/* Bar Chart */}
          <section className='h-72 my-3 flex justify-center items-center' >
            {loadingComponent2 ? <ImSpinner2 className='text-3xl animate-spin mx-auto' /> : <BarChart />}
          </section>

          {/* Component 6 */}
          <div className='flex justify-between items-center' >
            <span className='font-bold text-lg' >Top Products</span>
            <span className="border-2 px-3 py-1.5 rounded-2xl text-sm font-medium cursor-pointer">Full results</span>
          </div>
          {/* Table */}
          <section className='my-2 ' >
            {loadingComponent6 ?
              <div className=' my-20 py-3' ><ImSpinner2 className='text-3xl animate-spin mx-auto' /></div> :
              <table className="w-full bg-slate-0" >
                <thead className='border-b-2'>
                  <tr>
                    <th className='font-medium text-sm py-3 text-left w-1/3 ' >Product</th>
                    <th className='font-medium text-sm py-3 text-center w-1/6 ' >Sold amount</th>
                    <th className='font-medium text-sm py-3 text-center w-1/6 ' >Unit price</th>
                    <th className='font-medium text-sm py-3 text-center w-1/6' >Revenue</th>
                    <th className='font-medium text-sm py-3 text-center ' >Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {component6.map((val) => {
                    return (
                      <tr key={val.id} className=' ' >
                        <td className='pt-4 inline-flex items-center gap-4 font-semibold ' ><img src={`./top products/${val.id}.png`} className='w-8 bg-gray-200 p-0.5 rounded-md' alt="product img" />{val.product}</td>
                        <td className='pt-4 font-medium text-center' >{val.sold_amount}</td>
                        <td className='pt-4 font-medium text-center' >${val.unit_price}</td>
                        <td className='pt-4 font-medium text-center' >${numberWithCommas(val.revenue)}</td>
                        <td className='pt-4 inline-flex items-center gap-1 w-full justify-center' ><FaStar className='text-yellow-400 text-xs ' /><span className='font-bold' >{val.rating}</span></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            }
          </section>
        </section>

        {/* Chart 3,4,5 */}
        <section className="w-3/12 flex flex-col gap-3" >
          {/* Component 3 */}
          <section className='shadow bg-white rounded-2xl px-8 py-7'>
            {/* Gauge Chart */}
            <div className='h-28' >{loadingComponent3 ? <ImSpinner2 className='text-3xl animate-spin mx-auto' /> : <GaugeChart />}</div>

            <hr className='my-5 border' />
            <p className='font-bold text-lg my-1.5' >{component3.title}</p>
            <p className='text-gray-500' >{component3.message}</p>
            <button className='border-2 px-4 py-2 mt-4 text-sm font-semibold rounded-3xl' >Improve your score</button>
          </section>

          {/* Component 4 */}
          <section className='shadow bg-white rounded-2xl py-6 px-8'>
            <p className='font-bold text-lg ' >Customers by device</p>
            {/* Line Chart */}
            <div className='h-44 mt-3 '><LineChart /></div>

            {!loadingComponent4_storage &&
              <div className='font-medium' >
                <span className='pl-12 pr-14' >{numberWithCommas(component4_storage.webSales || 0)}%</span>
                <span>{numberWithCommas(component4_storage.offlineSales || 0)}%</span>
              </div>}
          </section>

          {/* Component 5 */}
          <section className='shadow bg-white rounded-2xl py-5 px-6'>
            {loadingComponent5 ? <div className='h-28' ><ImSpinner2 className='text-3xl animate-spin mx-auto' /></div> :
              <>
                <p className='text-sm text-slate-400 px-2' >Community feedback</p>
                <p className='font-bold text-lg px-2' >Mostly positive</p>
                {/* Horizontal bar chart */}
                <div className='h-4 my-2' >
                  <HorizontalBarChart />
                </div>

                <div className='text-sm flex gap-8 font-medium px-2' >
                  <p className='flex flex-col ' ><span className='text-gray-400' >Negative</span><span className='font-bold pl-0.5 text-base' >{component5.negative}</span></p>
                  <p className='flex flex-col ' ><span className='text-gray-400' >Neutral</span><span className='font-bold pl-0.5 text-base' >{component5.neutral}</span></p>
                  <p className='flex flex-col ' ><span className='text-gray-400' >Positive</span><span className='font-bold pl-0.5 text-base' >{component5.positive}</span></p>
                </div>
              </>}
          </section>
        </section>
      </div>
    </main>
  )
}

export default App
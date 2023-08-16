"use client"

import Link from 'next/link';
import React from 'react';
import photo from "../../../public/images/dashboard/sagittarius.png"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CategoryScale,
  LinearScale,
  Chart as CHARTJS,
  LineElement,
  Tooltip,
  Legend,
  PointElement,
  BarElement,
  ArcElement 
} from 'chart.js';
import { Line,Bar,Pie } from 'react-chartjs-2';

CHARTJS.register( CategoryScale,LinearScale,LineElement,Tooltip,Legend,PointElement,BarElement,ArcElement)

const DashboardPage = () => {
   const router = useRouter();
   const handleClick = (e) => {
      e.preventDefault();
      router.push("/admin/warehouse")
   }

   //dummy data for react-chartjs-2 (Line)
   const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        data: [75, 89, 60, 81, 96],
      },
    ],
  };

  //dummy data for react-chartjs-2 (Pie)
  const dataPie = {
    labels: ['23/08', 'yesterday', 'Today', 'Tomorrow', '27/08'],
    datasets: [
      {
        label: 'Bookings',
        fill: false,
        lineTension: 0.5,
        backgroundColor: [ 'rgba(75,192,192,0.4)','#000080',' #FF1493','#964B00','rgba(75,192,192,0.4)'],
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        data: [65, 99, 60, 81, 86],
      },
    ],
  };

  //dummy data for react-chartjs-2 (bar)
  const dataBar = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Earnings',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        data: [55, 69, 80, 95, 82],
      },
    ],
  };

  //dummy options for react-chartjs-2
  const options =  {
   
  };


  return (
    <div className="flex h-full panel pb-5">
      {/* Left Panel */}
      <div className="w-60 border-r-2 flex justify-center pt-16 border-white/10">
        <div className="text-white mb-4">
          <Image
            src={photo}
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-white/20 mx-auto"
          />
          <p className="text-white/30 font-space-grostek mt-1 text-center">@johndoe</p>
          <div>
            <p className="font-space-grostek mt-5 text-lg text-center">John Doe</p>
            <div className='flex flex-col'>
               <button className='px-5 rounded-full border-2 border-white/10 font-space-grostek mt-2'>Edit</button>
               {/* <button onClick={handleClick} className='mt-[26rem] rounded-2xl border-2 bg-white/10 border-white/20 px-5 py-1'>
                  Go To Warehouse
               </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full">
         <div className='py-3 border-b-2 border-white/10 text-center text-5xl text-white font-odesans-semibold'>
            Recyclit
         </div>
        <div className="flex px-4 mt-3">
          {/* Top Row */}
          <Link href="/admin/home/warehouse" className="w-1/3 p-4">
            <div className="cursor-pointer flex flex-col justify-between p-5 bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-md shadow-neutral-950 text-white">
               <p className=' text-center text-2xl'>Warehouse</p>
               {/* svg/image here */}
            </div>
          </Link>
          <Link href="/admin/home/wishlist" className="w-1/3 p-4">
            <div className="cursor-pointer p-5 flex flex-col justify-between bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-md shadow-neutral-950 text-white">
            <p className=' text-center text-2xl'>Wishlist</p>
              {/* svg/image here */}
            </div>
          </Link>
          <Link href="/admin/home/wastebought" className="w-1/3 p-4">
            <div className="cursor-pointer flex flex-col justify-between p-5 bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-md shadow-neutral-950 text-white">
               <p className=' text-center text-2xl'>Waste Bought</p>
               <Line data={data} options={options} className=''/>
            </div>
          </Link>
        </div>

        <div className="flex px-4">
          {/* Bottom Row */}
          <Link href="/admin/home/booking" className="w-1/3 p-4">
            <div className="cursor-pointer p-8 flex flex-col justify-between  bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-lg hover:shadow-xl shadow-neutral-950 text-white">
               <p className=' text-center text-2xl'>Booking</p>
               <Pie data={dataPie} options={options} className=' w-1/2 ml-6 p-2'/>
            </div>
          </Link>
          <Link href="/admin/home/earning" className="w-1/3 p-4">
            <div className="cursor-pointer p-5 flex flex-col justify-between bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-md shadow-neutral-950 text-white">
               <p className=' text-center text-2xl'>Earnings</p>
                <Bar data={dataBar} options={options}/>
            </div>
          </Link>
          <Link href="/admin/home/faq" className="w-1/3 p-4">
            <div className="cursor-pointer p-5 flex flex-col justify-between bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-md shadow-neutral-950 text-white">
               <p className=' text-center text-2xl'>FAQs</p>
               {/* Insert svg/ */}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

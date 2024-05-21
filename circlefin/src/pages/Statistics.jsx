import React from 'react';
import Chart from 'react-apexcharts';
import HistogramGraph from '../Graphs/HistogramGraph';
import { agriCompanies } from '../utils/data';

const Statistics = () => {
  const getChartOptions = () => {
    return {
      series: [52.8, 26.8, 20.4],
      colors: ["#b7fa7f", "#daf88d", "#ffc6ab"],
      chart: {
        height: 420,
        width: "100%",
        type: "pie",
      },
      stroke: {
        colors: ["white"],
        lineCap: "",
      },
      plotOptions: {
        pie: {
          labels: {
            show: true,
          },
          size: "100%",
          dataLabels: {
            offset: -25,
          },
        },
      },
      labels: ["Farmers", "Merchants", "Investor"],
      dataLabels: {
        enabled: true,
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
      legend: {
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + "%";
          },
        },
      },
      xaxis: {
        labels: {
          formatter: function (value) {
            return value + "%";
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    };
  };
    const randomNo = ()=>{
     return  Math.floor(Math.random() * (100000 - 20000 + 1)) + 20000
    }
  return (
    <div>
       <div className='flex flex-wrap gap-2 justify-evenly mt-5'>
          <div className='rounded-md border-2 w-[12rem] border-lime-400  p-2'>
            <h1 className='font-bold'>Average loan amount</h1>
            <p>₹ 25000</p>

          </div>
          <div className='rounded-md border-2 w-[12rem] border-lime-400  p-2'>
            <h1 className='font-bold'>Average loan duration</h1>
            <p>8 months</p>
          </div>
          <div className='rounded-md border-2 w-[12rem] border-lime-400  p-2'>
            <h1 className='font-bold'>Average interest rate</h1>
            <p>9.0%</p>
          </div>
          <div className='rounded-md border-2 w-[12rem] border-lime-400  p-2'>
            <h1 className='font-bold'>Loans issued</h1>
          
          <p>₹ 49.2cr</p>
          </div>
          <div className='rounded-md border-2 w-[12rem] border-lime-400  p-2'>
            <h1 className='font-bold'>Net return</h1>
            <p>6.3%</p>
          </div>
        </div>
       
      <div className='mt-24 flex justify-evenly'>
       
        <div>
        <Chart options={getChartOptions()} series={getChartOptions().series} type="pie" height={420} />

        </div>
        <div className='w-[50vw] ' >
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis neque corporis voluptate esse beatae recusandae, vitae architecto sequi explicabo odio a distinctio amet tempora, id reprehenderit doloribus! Magnam maiores cupiditate fuga itaque odit iure veniam corporis, quod quis magni inventore id ratione? Ullam, ab doloribus veniam vel quas temporibus aut vitae nisi exercitationem consequatur doloremque adipisci necessitatibus placeat, sit fugiat perspiciatis similique modi eum illo odio, eos error? Quidem eligendi illum ipsam. Voluptate, ratione iure reprehenderit aliquid possimus, sunt excepturi voluptatibus quod sit, officiis sapiente obcaecati saepe neque accusantium. Amet quam veniam molestiae dolorem ipsam alias expedita. Aut, saepe impedit.</p>

        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-2xl">
          <HistogramGraph />
        </div>
      </div>
      <div className='mx-10' >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis maxime architecto eaque alias exercitationem temporibus placeat natus voluptatum, soluta, eos consequuntur nihil assumenda deserunt asperiores magni. Cumque neque rerum suscipit quaerat eaque iusto quam dolorum quo magnam laudantium ullam nemo delectus, vitae minima quasi sit eum repellendus accusantium aspernatur perspiciatis debitis voluptatem deleniti iste harum. Sit ducimus cupiditate, nostrum, sed aspernatur corrupti distinctio eligendi cumque, voluptas quae tempore optio quisquam qui iste saepe illo ad commodi veritatis. Libero officiis, at facere ipsa autem voluptate aliquid nulla, veniam rerum animi amet eveniet asperiores corporis dolorem assumenda necessitatibus quibusdam itaque natus odio?
      </div>

     <div> 

     <div className='mx-10 flex flex-wrap  justify-evenly gap-5' >
        {
          agriCompanies.map((company,idx)=>(
            <div key={idx} className='p-7 rounded-xl w-[15rem] bg-lime-200'>
              <h1 className='text-center'>{company}</h1>
              <p className='text-center'>₹ {randomNo()}</p>

            </div>
          ))
        }
      </div>



     </div>
      

    </div>
  );
}

export default Statistics;

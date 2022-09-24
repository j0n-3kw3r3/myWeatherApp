import React from 'react'
import Typed from 'react-typed'

function Report({data}) {

    console.log(data)
    
  return (
      <div>
        
              
               <div className=' w-[80%] bg-slate-400 dark:bg-slate-800 rounded mt-8 text-slate-800  flex mx-auto  p-2 justify-center dark:text-white  '>
        <div className=' w-[90%]  md:pb-1'>
        
          <p className=' sm:text-xl mt-4 font-semibold w-full text-center text-xs '>Right now in </p>
          <h1 className='font-extrabold sm:text-xl md:text-4xl w-full text-xl text-center'>
          »
          <Typed
              
              strings={[
                data.location.name, data.location.country]}
                typeSpeed={100}
                backSpeed={40}
                loop />«
                </h1>
          
          <p className=' sm:text-xl text-sm w-full text-center font-semibold   '>It's <span> 
              {data.current.weather_descriptions}
          </span>
            </p>
        
          <div className='flex justify-center'>
        <img src={data.current.weather_icons[0]} alt="" className=' h-12 mr-2 mt-8 rounded-full border' />
            <h1 className='text-9xl font-semibold'>{ data.current.temperature}</h1><p className='text-xl mt-2'>℃</p>
          </div>
          <h1 className='flex justify-center text-lg'>{ data.current.weather_descriptions}</h1>
          <h1 className='flex justify-center text-lg'>  <span className=' font-semibold' >Time of observation:</span> {data.current.observation_time}</h1>
          <div className='sm:flex justify-between  my-1 sm:text-md text-xs'>
            <p className='p-2'> <span className=' font-semibold' >Feels Like:</span>  { data.current.feelslike}</p>
            <p className='p-2'> <span className=' font-semibold' >Wind: </span>{ data.current.wind_speed}</p>
            <p className='p-2'> <span className=' font-semibold' >Visibility: </span>{ data.current.feelslike}</p>
            <p className='p-2'> <span className=' font-semibold' >Barometer:</span> { data.current.pressure
}</p>
            <p className='p-2'> <span className=' font-semibold' >Humidity:</span> { data.current.humidity}</p>
            <p className='p-2'> <span className=' font-semibold' >Wind Degree:</span> { data.current.wind_degree}</p>
            <p className='p-2'> <span className=' font-semibold' >UV Index: :</span>{ data.current.uv_index}</p>
          </div>
        </div>
        </div>
           
   
    </div>
  )
}

export default Report
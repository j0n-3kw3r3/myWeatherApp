import Header from './Header'
import { useEffect, useState } from 'react'
import Report from './Report'
import { Routes, Route, BrowserRouter, Link,  } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState()
  const [location, setLocation] = useState('')
  const [timeline, setTimeline] = useState('current')
  
  
  useEffect(() => {
    const getApi  = async () => {
      const key = process.env.REACT_APP_API_KEY 
      const getUrl = process.env.REACT_APP_WEATHER_API
      if (location) {
        var url = `${getUrl}${timeline}?access_key=${key}&query=${location}`
        await fetch(url, {
          method: "GET",
          mode:'cors',
          header: {
            "X-Auth-Token": key
          }
        })
          .then(resp => resp.json())
          .then((data) => {
           setData(data)
          })
          .catch((err) => {
          console.log(err)
        })
      } else {
        url = `${getUrl}${timeline}?access_key=${key}`
          await fetch(url, {
        method: "GET",
        mode:'cors',
        header: {
          "X-Auth-Token": key
        }
      })
        .then(resp => resp.json())
        .then((data) => {
        console.log(data)
         setData(data)
        })
        .catch((err) => {
        console.log(err)
      })
     }
    
    }
    getApi()
  
  }, [location])
  
  console.log(location)
  
  return (
    <BrowserRouter>
      <Header onChange={(value) => setLocation(value)}  />

      {/* timeline */}
      <div className=' w-[80%] h-[40px] rounded sm:mt-1 text-white  flex mx-auto items-end justify-evenly sm:text-lg text-xs '>
        <Link to='/current' className={timeline === 'current'? ' bg-slate-800 border border-slate-800  rounded sm:px-4 px-2 py-1':'border border-slate-800  rounded text-slate-800 px-4 py-1'}  onClick={()=>setTimeline('current')}>Current</Link>
        <button className={timeline === 'forecast'? ' bg-slate-800 border border-slate-800  rounded sm:px-4 px-2 py-1':'border border-slate-800  rounded text-slate-800 px-4 py-1'} onClick={()=>setTimeline('forecast')}>Forecast</button>
      </div>

      
      {/* weather report */}
 
       
        <Routes>
        <Route path="/current" element={ <Report data={data} />} />
      </Routes>
     
    </BrowserRouter>
  )
}

export default Home

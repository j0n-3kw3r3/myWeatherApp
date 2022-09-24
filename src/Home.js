import Header from './Header'
import { useEffect, useState } from 'react'
import Report from './Report'


const Home = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState()
  const [timeline, setTimeline] = useState('current')

navigator.geolocation.getCurrentPosition((success) => {
        const lat = success.coords.latitude
        const long = success.coords.longitude
        const loc = `${lat}, ${long}`
        setLocation(loc)
        console.log(location);


      }
      );

  console.log(data)


  useEffect(() => {
    const getApi = async () => {
      const key = process.env.REACT_APP_API_KEY
      const getUrl = process.env.REACT_APP_WEATHER_API
      

      if (location) {
        var url = `${getUrl}${timeline}?access_key=${key}&query=${location}`
        await fetch(url, {
          method: "GET",
          mode: 'cors',
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
          mode: 'cors',
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

  }, [location]);


  return (
    <>
      <Header onChange={(value) => setLocation(value)} />

      {/* timeline */}
      <div className=' w-[80%] h-[40px] rounded sm:mt-1 text-white  flex mx-auto items-end justify-evenly sm:text-lg text-xs '>
        <button className={timeline === 'current' ? ' bg-slate-800 border border-slate-800  rounded sm:px-4 px-2 py-1' : 'border border-slate-800  rounded text-slate-800 px-4 py-1'} onClick={() => setTimeline('current')}>Current</button>
        <button className={timeline === 'forecast' ? ' bg-slate-800 border border-slate-800  rounded sm:px-4 px-2 py-1' : 'border border-slate-800  rounded text-slate-800 px-4 py-1'} onClick={() => setTimeline('forecast')}>Forecast</button>
      </div>


      {/* weather report */}

      { data && <Report data={data} />
      }

    </>
  )
}

export default Home

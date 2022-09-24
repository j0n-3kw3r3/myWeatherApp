import React, { useState } from 'react'
import logo from './assets/icons/logo/logo.png'
import search from'./assets/icons/search.png'

function Header(props) {
  const [darkMode, setDarkMode] = useState(false)
  const [location, setLocation]=useState('')

  
  
    if (localStorage.theme ==='dark' || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme:dark)"))) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  
    const dark = () => {
      localStorage.setItem('theme', 'dark')
      setDarkMode(false)
    }
    const light = () => {
      localStorage.setItem('theme', 'light')
      setDarkMode(true)
  }


  

  
  return (
    <div>
    <div className=' h-[50px] sm:h-[75px] w-full sm:p-5 px-4  py-1 md:px-16 dark:bg-slate-800  bg-slate-200 flex justify-between sm:items-end  items-center shadow-lg   border-b border-slate-400  '>
      <div className='   sm:h-10 w-40  flex items-center relative  '>
            <img src={ logo} alt="" srcSet="" className=' w-4 h-4 sm:w-7 sm:h-7 mr-2 rounded-full dark:ring-white ring-2 ring-slate-900  '   />
            <h1 className='sm:text-sm text-xs sm:font-[600] pb-0 text-slate-900 dark:text-white  mt-2 right-2 '>myWeatherApp</h1>
      </div>

              <div className='flex  items-center relative'>

          <form   onSubmit={
            (e) => {
                      e.preventDefault()
              props.onChange(location)
              setLocation('')
                    }
                    } >

            <img src={search} alt="" className=':sm:h-4 h-[10px] left-2 bottom-[1px] absolute border-r   border-slate-400 pr-1 flex items-center mb-1 cursor-pointer'
              onClick={
                (e) => {
                  e.preventDefault()
                  props.onChange(location)
                  setLocation('')
                }
            }
            />
                  <input type="text" className='  sm:h-6 w-[140px] sm:w-[300px] h-5 pl-10 sm:mt-1 rounded-xl  border border-slate-400  mr-2 placeholder:text-sm pb-1 ' placeholder='Location'
                  onChange={
                    (e) => {
                      setLocation(e.target.value)
                    }
                  }
                
            
            // onKeyPress={location}
          />
              </form>
      {
          darkMode === true ?
          <button onClick={dark} className=' text-slate-900 border border-slate-400 py-1 px-2  sm:text-xs text-[6px]  rounded' >Dark mode</button> :
          <button onClick={light} className='text-white  border py-1 px-2  sm:text-xs text-[6px] rounded  ' >Light mode</button>
        }
        </div>
       

        </div>
  </div>
  )
}

export default Header

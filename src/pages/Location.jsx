import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../axios/axiosHttps'
import LocationCards from '../components/LocationCards'

const Location = () => {
  const [location, setLocation] = useState()
  console.log(location)

  useEffect(()=>{
    axiosInstance.get("/location")
    .then((res)=>setLocation(res?.data?.results));
  }, [])
  return (
    <div className="container">
    <div className="card-parent">
      {location?.map((item) => (
        <LocationCards key={item?.id} {...item} />
      ))}
    </div>
  </div>
  )
}

export default Location
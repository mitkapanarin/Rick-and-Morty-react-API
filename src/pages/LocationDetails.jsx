import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../axios/axiosHttps'


const LocationDetails = () => {
  const params = useParams()
  const [data, setData] = useState()
  console.log(data)

  useEffect(()=>{
    axiosInstance.get(`/location/${params.id}`).then((res)=>setData(res?.data))
  })
  return (
    <div>
      <h2>{data?.name}</h2>
          <p>Type: {data?.type}</p>
          <p>Dimension: {data?.dimension}</p>
    </div>
  )
}

export default LocationDetails
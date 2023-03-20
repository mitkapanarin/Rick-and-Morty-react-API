import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../axios/axiosHttps'

const EpisodeDitails = () => {
  const params = useParams()
  const [data, setData] = useState()
  console.log(data)

  useEffect(()=>{
    axiosInstance.get(`/episode/${params.id}`).then((res)=>setData(res?.data))
  })
  return (
    <div>
      <h1>{data?.name}</h1>
      <p>Characters: {data?.characters}</p>
      <p>Episode: {data?.episode}</p>
      <p>Create: {data?.created}</p>
    </div>
  )
}

export default EpisodeDitails
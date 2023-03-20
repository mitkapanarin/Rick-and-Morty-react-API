import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../axios/axiosHttps'

const CharactersDetails = () => {
  const params = useParams()
  const [data, setData] = useState()
  console.log(data)

  useEffect(() => {
    axiosInstance.get(`/character/${params.id}`)
      .then((res) => setData(res?.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <img src={data?.image} alt="" />
      <h1>{data?.name}</h1>
      <p>Status: {data?.status}</p>
      <p>Species: {data?.species}</p>
    </div>
  )
}

export default CharactersDetails
'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Home() {

  const [ points, setPoints ] = useState<string>('')

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const data = await axios.get('/api/eigenPoints')
        console.log('data from GET Request', data)
        setPoints(data?.data?.eigenLayerPointsApi)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPoints()
  }, [])


  return (
    <main className='flex flex-col justify-center items-center mx-auto min-h-screen'>
      <h1>EigenPoints:</h1>
      <p>{points ? points : 'loading...'}</p>
    </main> 
  )
}

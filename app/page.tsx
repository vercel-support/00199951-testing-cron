'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Home() {

  const [ points, setPoints ] = useState<string>('')

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const data = await axios.get('/api/globalStats')
        console.log('data from GET Request', data?.data?.globalStats?.eigenPoints)
        if (data?.data?.globalStats?.eigenPoints) {
          setPoints(data?.data?.globalStats?.eigenPoints)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchPoints()
  }, [])

  // useEffect(() => {
  //   console.log('points', points)
  // }, [points])


  return (
    <main className='flex flex-col justify-center items-center mx-auto min-h-screen'>
      <h1>EigenPoints:</h1>
      <p>{points ? points : 'loading...'}</p>
    </main> 
  )
}

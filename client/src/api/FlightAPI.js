import { useEffect, useState } from 'react'
import axios from 'axios'

function FlightAPI() {
    const [flights,setFlights]= useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

    const getFlights= async () => {
        const res = await axios.get('/api/flights') 
        setFlights(res.data.flights)
   }
   useEffect(() => {
       getFlights()
   },[])

   useEffect(() =>{
    const getFlights = async () => {
        const res = await axios.get(`/api/flights?limit=${page*9}&${sort}&title[regex]=${search}`)
        setFlights(res.data.flights)
        setResult(res.data.result)
    }
    getFlights()
},[callback, sort, search, page])

   return {
      flights: [flights,setFlights],
      callback: [callback, setCallback],
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
        result: [result, setResult]
}
}

export default FlightAPI
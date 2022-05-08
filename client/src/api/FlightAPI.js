import {useState, useEffect} from 'react'
import axios from 'axios'


function FlightAPI() {
    const [flights, setFlights] = useState([])
    const [callback, setCallback] = useState(false)
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [searsh, setSearsh] = useState('')

    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

    useEffect(() =>{
        const getFlights = async () => {
            const res = await axios.get(`/api/flights?limit=${page*9}&${category}&${sort}&Destination[regex]=${search}`)
            setFlights(res.data.flights)
            setResult(res.data.result)
        }
        getFlights()
    },[callback, category, sort, search, page])
    useEffect(() =>{
        const getFlights = async () => {
            const res = await axios.get(`/api/flights?DatOp[regex]=${searsh}`)
            setFlights(res.data.flights)
            setResult(res.data.result)
        }
        getFlights()
    },[callback,searsh])
    return {
        flights: [flights, setFlights],
        callback: [callback, setCallback],
        category: [category, setCategory],
        sort: [sort, setSort],
        search: [search, setSearch],
        searsh: [searsh, setSearsh],

        page: [page, setPage],
        result: [result, setResult]
    }
}

export default FlightAPI
import React, {useContext} from 'react'
import {GlobalState} from '../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories
    const [category, setCategory] = state.flightAPI.category
    const [sort, setSort] = state.flightAPI.sort
    const [search, setSearch] = state.flightAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="filter_menu">
            <div className="row">
                <span>Pays: </span>
                <select name="category" value={category} onChange={handleCategory} >
                    <option value=''>All Flights</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input type="text" value={search} placeholder="Enter your search!"
            onChange={e => setSearch(e.target.value.toLowerCase())} />

            <div className="row sort">
                <span>Sort By: </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Newest</option>
                    <option value='sort=oldest'>Oldest</option>
                    {/* <option value='sort=-sold'>Best sales</option> */}
                    <option value='sort=-Price'>Price: Hight-Low</option>
                    <option value='sort=Price'>Price: Low-Hight</option>
                </select>
            </div>
        </div>
    )
}

export default Filters
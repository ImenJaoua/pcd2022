import React, {useContext} from 'react'
import {GlobalState} from '../../GlobalState'

function LoadMore() {
    const state = useContext(GlobalState)
    const [page, setPage] = state.flightAPI.page
    const [result] = state.flightAPI.result

    return (
        <div className="load_more">
            {
                result < page * 9 ? ""
                : <button onClick={() => setPage(page+1)}>Load more</button>
            }
        </div>
    )
}

export default LoadMore
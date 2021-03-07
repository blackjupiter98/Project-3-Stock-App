import React from 'react'
import api from '../api'

const IndexPage = () => {
    // Create state variables
    let [responseData, setResponseData] = React.useState('')
    let [ticker, setTicker] = React.useState('')
    let [message, setMessage] = React.useState('')

    // fetches data
    const fetchData = (e) => {
        e.preventDefault()

        setMessage('Loading...')

         // api.stockTimeSeries(ticker)
        // .then((response)=>{
        //    setResponseData(response.data)
        //    setMessage('')
        //    console.log(response)
        // })
        // .catch((error) => {
        //    setMessage('Error')
        //    console.log(error)
        // })

    }


    return (
        <div>
            <h1>{responseData.title}</h1>

            <button onClick={(e) => fetchData(e)} type='button'>Click Me For Data</button>

            {responseData.dates && responseData.dates.map(date => {
                return <p>{date}</p>
            })}
        </div>
    )
}

export default IndexPage
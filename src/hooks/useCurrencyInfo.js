import { useEffect,useState } from "react";

/**
 * A custom React hook that fetches currency information from an external API based on the provided currency code.
 * @param {string} currency - The currency code to fetch information for.
 * @returns {object} - An object containing the fetched currency information.
 */

function useCurrencyInfo(currency) {
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res) => setData(res[currency]))
    },[currency])
    return data
}

export default useCurrencyInfo;


const url = "https://dummyjson.com/"



export const fecthData = async (req) => {
    const data = await fetch(url+req)
    const getData = data.json()
    return getData
}


//**Data Url
const url = "https://dummyjson.com/"

//** Data Fecthing ---->
export const fecthData = async (req) => {
    const data = await fetch(url + req)
    const getData = data.json()
    return getData
}

export const deleteData = async (req) => {
    const data = await fetch(url + req, {
        method: 'DELETE',
      })
    const getData = data.json()
    return getData
}
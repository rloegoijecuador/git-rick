import axios from "axios"
import { useState } from "react"


const useFetch = (url) => {
    const [infoApi, setinfoApi] = useState()
    const [isloading, setisloading] = useState(true)
    const [haserror, sethaserror] = useState(false)

    const getApi =() =>{
        setisloading(true)
        axios.get(url)
        .then(res=>{
            setinfoApi(res.data)
           sethaserror(false)
        })
        .catch(err=>{
            console.log(err)
            sethaserror(true)
        })
        .finally(()=>setisloading(false))



    }
return [ infoApi, getApi, isloading, haserror]

  
}

export default useFetch
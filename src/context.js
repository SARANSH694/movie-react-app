import React , { useContext , useState , useEffect } from 'react'


export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

// Creating context
const AppContext = React.createContext()

// Creating Provider
const AppProvider = ({children}) => {

    const [ isLoading , setIsLoading] = useState(true)
    const [movie , setMovie] = useState([])
    const [isError , setIsError] = useState({show : "false" , msg : ""})
    const [query , setQuery] = useState("avengers")

    const getMovies = async(url) =>{
    setIsLoading(true)
    try{
        const res = await fetch(url)
        const data = await res.json()

        console.log(data)

        if(data.Response === "True"){
            setIsLoading(false)
            setMovie(data.Search)
        }else{
            setIsError({ show : true , msg : data.Error })
        }
    } catch(error){
        console.log(error)
    }
}

useEffect( () => {

   let timer =  setTimeout(() => {
        getMovies(`${API_URL}&s=${query}`)
    }, 1000)

    return () => {
        clearTimeout(timer)
    }

}, [query])

    return( 
    <AppContext.Provider value={{isLoading , isError , movie , query , setQuery}}>
        {children}
    </AppContext.Provider>
    )
}

// Creat
const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext , AppProvider , useGlobalContext}
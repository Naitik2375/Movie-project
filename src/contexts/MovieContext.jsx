import { createContext , useState , useContext , useEffect } from "react";

const MovieContect = createContext()

export const usemovieContext = () => useContext(MovieContext)

export const movieProvider = (children) => {

    const [favorites, setfavorites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if(storedFavs) setfavorites(JSON.parse(stpreFavs))
    },[])

    useEffect(() => {
        localStorage.setItem(`favorites`, JSON.stringify(favorites))
    },[favorites])

    const addFavorites = (movie) =>{
        setfavorites(ProgressEvent)
    }

    const isFavorite = () => {
        return favorites.some(movie => movie.id === movieId)
    }


    return <MovieContext.provider >
        {children}
    </MovieContext.provider>
}
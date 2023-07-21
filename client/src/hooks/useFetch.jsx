import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
    const [gifUrl, setGifUrl] = useState("");

    const fetchGifs = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`)
            const  { data }  = await response.json();
            setGifUrl(data[0]?.images?.downsized_medium?.url) //?.: This is called the optional chaining operator. It's used to protect against errors when accessing properties of an object that may be null or undefined.
        } catch (error) {
            setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284")
            console.log(error)
        }
    }
    useEffect(() =>{
       if(keyword) fetchGifs();
    },[keyword])

    return gifUrl;
}

export default useFetch;
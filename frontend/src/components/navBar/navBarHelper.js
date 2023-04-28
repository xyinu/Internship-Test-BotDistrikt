import { useState, useEffect } from "react";
import axios from "axios";

export const useNavBar = () =>{
    const [authors,setAuthors]=useState([])


    useEffect(()=>{
        axios.get('http://localhost:4000/author')
            .then((res)=>{
                setAuthors(res.data)
            })
        },[])
    
    return {
        authors
    }
}
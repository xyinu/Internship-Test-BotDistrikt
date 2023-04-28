import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useBookFormBody = () =>{
    const navigate = useNavigate();
    const handleSubmit = ({id,author,title,publisher,year}) =>
    {
        console.log(id,"test")
        if(id){
            axios.put(`http://localhost:4000/book/${id}`,{title,publisher,year,author})
            navigate('/')
        }else{
            axios.post('http://localhost:4000/book',{title,publisher,year,author})
            navigate('/')
        }
    }

    
    return {
        handleSubmit
    }

}
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useBookFormBody = () =>{
    const navigate = useNavigate();
    const handleSubmit = async ({id,author,title,publisher,year}) =>
    {
        if(id){
            await axios.put(`http://localhost:4000/book/${id}`,{title,publisher,year,author})
            navigate('/')
        }else{
            await axios.post('http://localhost:4000/book',{title,publisher,year,author})
            navigate('/')
        }
    }

    
    return {
        handleSubmit
    }

}
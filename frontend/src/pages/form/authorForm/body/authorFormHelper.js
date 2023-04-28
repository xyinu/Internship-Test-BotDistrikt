import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useAuthorForm = () =>{
    const navigate = useNavigate();
    const handleSubmit = async ({id,name,biography}) =>
    {
        if(id){
            await axios.put(`http://localhost:4000/author/${id}`,{name,biography})
            navigate('/')
        }else{
            await axios.post('http://localhost:4000/author',{name,biography})
            navigate('/')
        }
    }

    
    return {
        handleSubmit
    }

}
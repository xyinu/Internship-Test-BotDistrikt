import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useAuthorForm = () =>{
    const navigate = useNavigate();
    const handleSubmit = ({id,name,biography}) =>
    {
        console.log(id,"test")
        if(id){
            axios.put(`http://localhost:4000/author/${id}`,{name,biography})
            navigate('/')
        }else{
            axios.post('http://localhost:4000/author',{name,biography})
            navigate('/')
        }
    }

    
    return {
        handleSubmit
    }

}
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const useHomePageBody = () =>{
    const [author,setAuthor]=useState([])
    const [book,setBook]=useState({})
    const [deleted,setDeleted]=useState(false)
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:4000/author')
            .then((res)=>{
                res.data.sort((a,b)=>a.id-b.id)
                const authorLink=res.data.map((author)=>{
                    return{
                        ...author,
                        onClickAdd:()=>navigate('/form',{
                            state:{
                                authorForm:false,
                                currentAuthor:author.name,
                                biography:author.biography,
                                authors:res.data
                            }}),
                        onClickEdit:()=>navigate('/form',{
                            state:{
                                authorForm:true,
                                currentAuthor:author.name,
                                biography:author.biography,
                                authorIndex:author.id
                            }
                        }),
                        onClickDelete:()=>{
                            axios.delete(`http://localhost:4000/author/${author.id}`)
                            setDeleted((prev)=>!prev)
                        }
                    }
                })
                setAuthor(authorLink)
                res.data.map((val)=>{
                    axios.get(`http://localhost:4000/book/${val.name}`)
                        .then((books)=>{
                            books.data.sort((a,b)=>a.id-b.id)
                            let test={}
                            const bookLink=books.data.map((book)=>{
                                return {
                                    ...book,
                                    onClickEdit:()=>navigate('/form', {
                                        state:{
                                            authorForm:false,
                                            bookIndex:book.id,
                                            title:book.title,
                                            publisher:book.publisher,
                                            year:book.year,
                                            currentAuthor:book.authorId,
                                            authors:res.data
                                        }}),
                                    onClickDelete:()=>{
                                        axios.delete(`http://localhost:4000/book/${book.id}`)
                                        setDeleted((prev)=>!prev)
                                    }
                                }
                            })
                            test[val.name]=bookLink
                            setBook((prev)=>{
                                return {...prev,...test}
                            })
                        })
                })
            })
    },[deleted])
    
    return {
        author,
        book
    }

}
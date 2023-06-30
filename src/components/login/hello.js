import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';

const Hello = () => {
    const { state } = useLocation();
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const getData = async (jwt) =>{
        const config = {
            headers: { Authorization: `Bearer ${state?.jwt}` }
        };
        if(state?.jwt){
           const result =await  axios.get("https://reqres.in/api/unknown", config)
           setUsername(result?.data?.data[0]?.name);
        }
    }

    useEffect(()=>{
        if(!state?.jwt){
            navigate('/');
        }
        getData(state?.jwt)

    },[])
    return <>
        <h4>Hello {username}</h4>
    </>

}
export default Hello;
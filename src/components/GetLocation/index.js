import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const GL = ({setLocation}) => {
    const location = useLocation()
    useEffect(()=>{
        setLocation(location)
    },[])
    return (
        <></>
    )
}

export default GL

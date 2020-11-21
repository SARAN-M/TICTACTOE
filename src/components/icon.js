import React from "react"
import {FaTimes,FaPen,FaRegCircle} from "react-icons/fa"
const Icons=({name})=>{
    switch(name){
        case "circle":
            return <FaRegCircle className="icons"/>
            break
        case "cross":
            return <FaTimes className="icons"/>
            break
        default:
            return <FaPen className="icons"/>
            break
    }

}
export default Icons;
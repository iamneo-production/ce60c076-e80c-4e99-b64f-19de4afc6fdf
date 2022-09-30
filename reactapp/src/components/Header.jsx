 import {  useNavigate } from "react-router-dom"

 export default function Header(){
     let navigate = useNavigate()

     const handleswitch = () => {
         navigate('/enrolledcourse')
     }

     const handleswitchacademy = () => {
        navigate('/viewacademy')
     }

     return()
 }
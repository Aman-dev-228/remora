import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Registration from "./pages/Registration"
function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/login' element = {<Registration/>}/>


        </Routes>      
    </div>
  )
}

export default Routing

import {Routes,Route} from 'react-router-dom'
import Login from "./Login";
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
            {/* <Route path="/admin" element = {<AdminPage/>}/> */}
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )
}

export default MainRoutes;
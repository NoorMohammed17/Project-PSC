import { Routes, Route } from 'react-router-dom'
import Login from "./Login";
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";
import PrivateRoute from '../hoc/PrivateRoute';
import AdminPage from './AdminPage';
//import EditProduct from './EditProduct';
import SingleProductPage from './SingleProductPage';
//import Cart from './Cart';
import Checkout from './Checkout';
import PaymentPage from './PaymentPage';
import ReviewPage from './ReviewPage';
import Final from './final';



const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<PrivateRoute><AdminPage /></PrivateRoute>} />
            <Route path="/products/:id" element={<SingleProductPage />} />
            {/* <Route path="/products/:id" element={<PrivateRoute><SingleProductPage /></PrivateRoute>} /> */}
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/payment" element={<PaymentPage/>}/>
            <Route path="/review" element={<ReviewPage/>}/>
            <Route path="/final" element={<Final/>}/>
            <Route path="*" element={<ErrorPage />} />
           
        </Routes>
    )
}

export default MainRoutes;
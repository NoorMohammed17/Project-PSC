import { Routes, Route } from 'react-router-dom'
import Login from "./Login";
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";
import PrivateRoute from '../hoc/PrivateRoute';
import AdminPage from './AdminPage';
import EditProduct from './EditProduct';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<PrivateRoute><AdminPage /></PrivateRoute>} />
            <Route path="/products/:id" element={<PrivateRoute><EditProduct /></PrivateRoute>} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default MainRoutes;
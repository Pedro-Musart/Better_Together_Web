import { Navigate, Route, Routes } from "react-router-dom";
import Home from '../pages/home'

export default function Router() {
    return (
        <Routes>
            <Route>
                <Route path="*" element={<Navigate replace to="/" />} />
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}
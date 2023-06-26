import { Navigate, Route, Routes } from "react-router-dom";
import Home from '../pages/home'
import Action from '../pages/action'
import Donation from '../pages/donation'

export default function Router() {
    return (
        <Routes>
            <Route>
                <Route path="*" element={<Navigate replace to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/action" element={<Action />} />
                <Route path="/donation" element={<Donation />} />
            </Route>
        </Routes>
    )
}
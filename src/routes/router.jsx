import { Navigate, Route, Routes } from "react-router-dom";
import Home from '../pages/home'
import Action from '../pages/action'
import Blood from '../pages/blood'

export default function Router() {
    return (
        <Routes>
            <Route>
                <Route path="*" element={<Navigate replace to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/action" element={<Action />} />
                <Route path="/blood-donation" element={<Blood />} />
            </Route>
        </Routes>
    )
}
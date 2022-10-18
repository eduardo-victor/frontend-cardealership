import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import PageList from "./pages/ListPage"
import { ManagePage } from "./pages/ManagePage"

export const MyRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/list-cars" element={<PageList/>}/>
            <Route path="/manage-cars" element={<ManagePage/>}/>
        </Routes>
    )
}
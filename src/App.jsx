import Navbar from "./components/Navbar"
import { MainPage } from "./pages/MainPage"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PageList from "./pages/ListPage"
import { ManagePage } from "./pages/ManagePage"

function App() {

  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/list-cars" element={<PageList/>}/>
        <Route path="/manage-cars" element={<ManagePage/>}/>
      </Routes>
    </Router>
  )
}

export default App

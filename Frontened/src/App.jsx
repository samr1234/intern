
import UserCreateForm from "./Components/UserCreateForm";
import AdminPage from "./pages/AdminPage";
import EmployesPage from "./pages/EmployesPage";
import { Route, Routes } from "react-router-dom";
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div className="">

<Routes>
<Route path="/" element={<EmployesPage/>} />
<Route path="/update/:id" element={<UserCreateForm />} />

<Route path="/admin" element={<AdminPage/>} />
</Routes>

{/* <UserCreateForm/> */}
    </div>
  )
}

export default App
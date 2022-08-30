import "./App.css";
import { useEffect } from "react";
import { getALLProducts } from "./JS/actions/productActions";
import { useDispatch } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import ProductList from "./Components/ProductList/ProductList";
import StaffList from "./Components/StaffList/StaffList";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/footer/Footer";
import Login from "./Components/Login/Login"
import SignUp from "./Components/SignUp/SignUp";
import { getCurrent } from "./JS/actions/userActions";
import { getALLStaffs } from "./JS/actions/staffActions";
import PrivateRoute from "./Components/PrivateRoute";
import Home from "./pages/main/Home.js";
import About from "./pages/about/About";
import Room from "./pages/rooms/Room";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import AddRoom from "./Components/AddProduct/AddRoom";
import EditRoom from "./Components/EditRoom/EditRoom";
import SocialMedia from "./Components/SocialMedia/SocialMedia"
import Feedback from "./Components/Feedback/Feedback"
import Profil from "./Components/Profile/Profil";
import AddStaffs from "./Components/AddStaffs/AddStaffs";
import EditStaffs from "./Components/EditStaffs/EditStaffs";




function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getALLProducts());
    dispatch(getCurrent());
    dispatch(getALLStaffs());
  },[]);

  return (
    <div className="App">
    <NavBar/>
    <SocialMedia/>
      <Routes>
     
        <Route
          path="/"
          element={
            <div>
         <Home/>
              <ProductList />
              <StaffList/>
    {localStorage.getItem("token")&&<Link to="/addProduct"><div ><button className="ADD">ADD PRODUCT</button></div></Link>}
             
    {localStorage.getItem("token")&&<Link to="/addStaff"><div ><button className="ADD">ADD STAFF</button></div></Link>}
             
              <Feedback/>
               
            </div>
          }
        />
        <Route path="/about" element={<About/>}></Route>
        <Route path="/room" element={<Room/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/addProduct" element={<PrivateRoute> <AddRoom /> </PrivateRoute>} />
        <Route path="/editProduct/:id" element={<PrivateRoute><EditRoom/></PrivateRoute> } />
        <Route path="/editStaff/:id" element={<PrivateRoute><EditStaffs/></PrivateRoute> } />
        <Route path="/addStaff" element={<PrivateRoute> <AddStaffs/> </PrivateRoute>} />
        <Route path="/editProduct/:id" element={<PrivateRoute><EditRoom/></PrivateRoute> } />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<SignUp/>} />
       
      </Routes> 
     <Footer/>
    </div>
  );
}

export default App;

// import "./App.css";
import Create from "./crud/Create";
import Home from "./crud/Home";
// import TodoList from "./todoList/TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./crud/Update";
import Index from "./try/Index";
import Crete from "./try/Crete";
import Updt from "./try/Updt";
import Cart from "./simpleEcommerce/pages/cart/Cart";
import HomePage from "./simpleEcommerce/pages/home/HomePage";
import Navbar from "./simpleEcommerce/components/Navbar";
import { ShopContextProvider } from "./simpleEcommerce/context/ShopContext";
import Login from "./crud/Login";
import Register from "./crud/Register";

// function App() {
//   return (
//     <>
//       {/* <TodoList /> */}
//       <Index />
//     </>
//   );
// }
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
// function App() {
//   return (
//     <ShopContextProvider>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<HomePage />}></Route>
//           <Route path='/cart' element={<Cart />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </ShopContextProvider>
//   );
// }

export default App;

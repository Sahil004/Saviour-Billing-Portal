import './App.css';
import ClientComponent from './components/ClientComponent';
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListClientComponent from "./components/ListClientComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './components/Register';
import LoginComponenet from './components/LoginComponenet';
import SignIn from './components/SignIn';

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          {/* http:/localhost:3000 */}
          <Route path='/' element={<LoginComponenet/>}></Route>
          {/* http:/localhost:3000/admin */}
          <Route path='/admin' element={<Register/>}></Route>
          {/* http:/localhost:3000/clients */}
          <Route path='/clients' element={<ListClientComponent/>}></Route>
          {/* http:/localhost:3000/add-client */}
          <Route path='/add-client' element={<ClientComponent/>}></Route>
          {/* http:/localhost:3000/edit-client/id */}
          <Route path="edit-client/:id" element={<ClientComponent/>}></Route>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;

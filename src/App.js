import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import { HomeGuest } from "./components";


function App() {
  return (
    <Routes>
      <Route exact path='/' element={<HomeGuest/>}/>
    </Routes>
  );
}

export default App;

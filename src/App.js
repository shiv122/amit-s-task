
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Options from './components/Options';
import Product from './components/Product';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Options />} />
        <Route path="/task2" element={<Product />} />
      </Routes>
    </BrowserRouter >
  );
}




export default App;

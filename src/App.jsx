import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Books from './Components/Books';
import AddBooks from './Components/AddBooks';
import EditBook from './Components/EditBook';
import Footer from './Components/Footer';
import BookDetails from './Components/BookDetails';
const App = () => {
   const [id, setId] = useState(0);
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/addBooks" element={<AddBooks />} />
          <Route path="/bookDetails" element={<BookDetails />} />
          <Route path="/edit/:id" element={<EditBook id={id} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
     
    </div>
  );
};

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Slider from './pages/Slider';
import Faq from './pages/Faq';
import Quote from './pages/Quote';
import ShoppingList from './pages/ShoppingList';
import GithubUserSearch from './pages/GithubUserSearch';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="slider" element={<Slider />} />
          <Route path="faq" element={<Faq />} />
          <Route path="quote" element={<Quote />} />
          <Route path="shopping-list" element={<ShoppingList />} />
          <Route path="github-user-search" element={<GithubUserSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); 



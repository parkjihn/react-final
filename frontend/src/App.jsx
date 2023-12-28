
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import HomePage from "./components/pages/HomePage/HomePage";
import CategoriesPage from "./components/pages/CategoriesPage";
import CategoryPage from "./components/pages/CategoryPage";
import ProductListPage from "./components/pages/ProductListPage/ProductListPage";
import ProductPage from "./components/pages/ProductPage";
import CartPage from "./components/pages/CartPage/CartPage";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";

export const BASE_URL = 'http://localhost:3333/'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/categories/all' element={<CategoriesPage />}></Route>
          <Route path='/categories/:id' element={<CategoryPage />}></Route>
          <Route path='/products/all' element={<ProductListPage type={'all'} title={'All Products'} />}></Route>
          <Route path='/products/sales' element={<ProductListPage type={'sale'} title={'Discounted items'} />}></Route>
          <Route path='/products/:id' element={<ProductPage />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
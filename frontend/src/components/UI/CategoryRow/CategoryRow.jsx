
import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import ProductListPage from '../../pages/ProductListPage';
import categoryRow from './CategoryRow.module.css';

function CategoryRow() {
  return (
    <div>
      <h2>Categories</h2>
      <div className="categories">
        <Link to={'/category/fertilizer'}>
          <div className="category">
            <img src="fertilizer.jpg" alt="Fertilizer" />
            <p>Fertilizer</p>
          </div>
        </Link>
        <Link to={'/category/protective-gear'}>
          <div className="category">
            <img src="protective-gear.jpg" alt="Protective products and septic tanks" />
            <p>Protective products and septic tanks</p>
          </div>
        </Link>
        <Link to={'/category/planting-material'}>
          <div className="category">
            <img src="planting-material.jpg" alt="Planting material" />
            <p>Planting material</p>
          </div>
        </Link>
        <Link to={'/category/tools-equipment'}>
          <div className="category">
            <img src="tools-equipment.jpg" alt="Tools and equipment" />
            <p>Tools and equipment</p>
          </div>
        </Link>
      </div>
      <Routes>
        <Route path="/category" element={<ProductListPage type='categories'/>}/>
     
      </Routes>
    </div>
  );
}

export default CategoryRow;

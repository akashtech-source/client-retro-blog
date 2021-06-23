import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const Category = () => {
    return (
        <div className="">
            <div className="display-5 text-center mt-5">
                Browse Your Favorite Category
            </div>
            <div className="d-flex justify-content-center ms-md-5">
            <div className="row container g-3 ms-md-5 mt-5">
                <Link className="col-md-3 me-5 category-item">Blogging</Link>
                <Link className="col-md-3 me-5 category-item">Cinematography</Link>
                <Link className="col-md-3 me-5 category-item">Technology</Link>
                <Link className="col-md-3 me-5 category-item">Food</Link>
                <Link className="col-md-3 me-5 category-item">Tourism</Link>
                <Link className="col-md-3 me-5 category-item">Entertainment</Link>
            </div>
            </div>
        </div>
    );
};

export default Category;
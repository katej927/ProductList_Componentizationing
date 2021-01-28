import React, { Component } from "react";
import Product from "../Product/Product";
import Nutrition from "../Nutrition/Nutrition";
import "./SubCategory.scss";

export default class SubCategory extends Component {
  render() {
    const { currentId, categories } = this.props;
    const currentId2 = currentId === 2;
    console.log(currentId, categories, currentId2);
    return (
      <div className="subCategory">
        <div className="subCategoryDiv">
          {categories.map((category) => {
            console.log(category.name, category.description);
            return (
              <span>{category.name}</span>
              // (<span>{!currentId2 && category.description}</span>)
            );
          })}
        </div>

        {/* 사진으로보기_상품 1개 mapping
        <div className="productContainer">
          {products.map((product) => {
            return (
              <Product
                id={product.id}
                image={product.image}
                isnew={product.isnew}
                isseason={product.isseason}
                title={product.title}
              />
            );
          })}
        </div> */}
      </div>
    );
  }
}

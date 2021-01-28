import React, { Component } from "react";
import ProductCategory from "./Components/ProductCategory/ProductCategory";
import ClassificationBox from "./Components/ClassificationBox/ClassificationBox";
import "./ProductList.scss";

export default class ProductList extends Component {
  state = {
    categories: [],
  };

  // 데이터 로딩
  componentDidMount() {
    fetch("/data/productList.json")
      .then((res) => res.json())
      .then((res) => this.setState({ categories: res.results }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="productlist">
        <nav>네브바 자리</nav>
        <header>
          <p>음료</p>
          <div>MENU 음료</div>
        </header>
        <ClassificationBox categories={categories} />
        <ProductCategory categories={categories} />
      </div>
    );
  }
}

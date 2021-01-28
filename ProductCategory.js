import React, { Component } from "react";
import styled from "styled-components";
import SubCategory from "../SubCategory/SubCategory";
// import Nutrition from "../Nutrition/Nutrition";
import "./ProductCategory.scss";

export default class ProductCategory extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
    };
  }

  clickHandler = (id) => {
    this.setState({ currentId: id });
  };

  render() {
    const { categories } = this.props;
    const { currentId } = this.state;

    // // 사진/영양정보 컴포넌트 객체묶음
    // const MAPPING_OBJ = {
    //   1: <SubCategory categories={categories} />,
    //   2: <Nutrition />,
    // };

    return (
      <main className="productcategory">
        <BtnWrap>
          {BTN_WATCH_THROUGH.map((btn, idx) => {
            return (
              <BTN
                key={idx}
                onClick={() => this.clickHandler(idx + 1)}
                className={btn}
              >
                {btn}
              </BTN>
            );
          })}
        </BtnWrap>

        <SubCategory categories={categories} currentId={currentId} />

        {/* 추후 부활
        <select>
          <option value="">상세분류</option>
          <option value="new">신규 출시된 메뉴</option>
          <option value="season">한정기간 출시되는 시즌성 메뉴</option>
        </select> */}

        {/* {categories.map((category) => {
          return (
            <SubCategory
              key={category.subcategory_id}
              name={category.name}
              desc={category.description}
              products={category.products}
            />
          );
        })} */}

        {/* <Nutrition
          key={category.subcategory_id}
          name={category.name}
          kcal={category.kcal}
        /> */}
      </main>
    );
  }
}

// 사진/영양정보 버튼 text
const BTN_WATCH_THROUGH = ["사진으로 보기", "영양정보로 보기"];

////// 스타일드 컴포넌트

const BtnWrap = styled.section`
  border: 1px solid black;
`;

const BTN = styled.button`
  width: 108px;
  height: 28px;
  border: 1px solid #ddd;
  margin-right: 15px;
  &: last-child {
    margin-right: 0px;
  }
`;

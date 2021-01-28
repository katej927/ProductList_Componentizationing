import React from "react";
import styled from "styled-components";

export default function ClassificationBox({ categories }) {
  console.log(categories);
  return (
    <Wrapper>
      <CategoryBtn>카테고리</CategoryBtn>
      {categories.map((category) => {
        return (
          <Label>
            <Checkbox />
            <CheckboxText>{category.name}</CheckboxText>
          </Label>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border: 1px solid #ddd;
  height: 244px;
`;

const CategoryBtn = styled.button`
  height: 35px;
  width: 200px;
  border-radius: 3px;
  color: white;
  background-color: #006633;
`;

// 체크박스 묶음
const Label = styled.label``;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  height: 20px;
`;

const CheckboxText = styled.span``;

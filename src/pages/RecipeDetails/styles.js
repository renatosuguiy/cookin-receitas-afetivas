import styled from "styled-components";

export const ContainerRecipes = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;

  @media (min-width: 500px) {
    width: 700px;
  }
`;

export const ContainerHeader = styled.div`
  width: 100%;
  padding: 20px;
  padding-top: 60px;
  color: #414144;
  background-color: #f0d0c0;

  @media (min-width: 500px) {
    width: 450px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background-color: #ffffff;
  }
`;

export const BoxAuthor = styled.div`
  display: flex;
  padding: 10px 0px;
`;

export const BoxIconLogout = styled.div`
  display: flex;
  position: absolute;
  left: 20px;
  top: 18px;

  @media (min-width: 500px) {
    left: 5px;
    top: 50px;
  }
`;

export const BoxIconsButton = styled.div`
  display: flex;
  position: absolute;
  right: 5px;
  top: 8px;

  @media (min-width: 500px) {
    right: 5px;
    top: 40px;
  }

  button {
    margin: 2px;
    border-radius: 100%;
    padding: 10px;
    background-color: #ededed;
    box-shadow: 0 0 0.4em #ededed;
  }
`;

export const ContainerIngredients = styled.div`
  padding-top: 10px;

  @media (min-width: 500px) {
    border-top: 1px solid #c0c0c0;
    border-bottom: 1px solid #c0c0c0;
  }
`;

export const ContainerInstructions = styled.div`
  padding-top: 10px;
`;

export const ListInstructions = styled.div`
  width: 300px;
  margin-left: 10px;
  padding: 10px 0px;

  @media (min-width: 500px) {
    width: 620px;
    margin: 0 auto;
  }
`;

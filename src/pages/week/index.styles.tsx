import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F38181;
  padding: 100px 90px 0;
  box-sizing: border-box;
  min-height: 100vh;
`;

export const WeekWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px repeat(7, 1fr);
  transition: margin-top 0.5s ease;

  &.hide {
    margin-top: -607px;
    transition: margin-top 0.5s ease;
  }
`;

export const DayWrapper = styled.div<{last?: boolean}>`
  display: flex;
  flex-direction: column; 
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    text-transform: uppercase;
    margin: 0;
    height: 50px;
    border-bottom: 1px solid rgba(0,0,0,0.5);
    font-family: 'Alba Super';
    font-size: 55px;
    color: #e5ffcf;
    z-index: 2;

    > .MuiSvgIcon-root {
      font-size: 30px;
    }
  }


  .cell {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    height: 35px;
    border: 1px solid transparent;
    cursor: pointer;
    border-right: ${({last}) => !last ? '1px solid rgba(0,0,0,0.5)' : 'none'};

    > .MuiSvgIcon-root {
      font-size: 42px;
      color: #FCE38A;
    }

    &.space-3 {
      height: 149px;
    }
    &.bordered {
      border-right: 1px solid rgba(0,0,0,0.5);
      border-bottom: 1px solid rgba(0,0,0,0.5);
      cursor: default;
    }
  }
`;

export const IngredientsWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px repeat(7, 1fr);
  padding-bottom: 35px;
  background-color: #EAFFD0;
  flex-grow: 1;
  margin-top: 30px;
  border-radius: 15px 15px 0 0;
`;

export const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  h4 {
    margin: 12px 0;
    font-size: 20px;
    color: #58998e;
  }
`;

export const Ingredient = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin-left: 15px;
  font-size: 13px;

  .MuiCheckbox-root {
    padding: 0;
  }
  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate {
    color: #58998e;
  }

  .name {
    flex-grow: 1;
  }
  .quantity {
    flex-shrink: 0;
  }
`;

export const ButtonsWrapper = styled.div`
  position: sticky;
  top: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 65px 65px 65px;
  grid-gap: 10px;
  margin-top: 10px;

  .MuiSvgIcon-root {
    color: #58998e;
    font-size: 40px;
  }
`;

export const TotalWrapper = styled.div`
  width: 535px;
  padding: 20px;
  background-color: #ffb4b2;
  min-height: 100vh;
  box-sizing: border-box;

  .title {
    text-align: center;
    font-family: 'Alba Super';
    font-size: 68px;
    margin: 45px 0 42px;
    color: #EAFFD0;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 29px 27px;
    background-color: #EAFFD0;
    margin: 0 28px;
    border-radius: 7px;
    color: #3d6d65;
    font-size: 18px;
    font-weight: 500;
  }

  .ingredient {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    
    .name {
      flex-grow: 1;
    }
    .quantity {
      flex-shrink: 0;
    }
  }
`;

export const DialogWrapper = styled.div`
  width: 400px;
  padding: 30px;
  background-color: #95E1D3;
  border-radius: 8px;
  position: relative;
  overflow: auto;

  h3 {
    position: relative;
    font-size: 40px;
    margin: 30px 0;
    z-index: 2;
    color: #5a5a5a;
  }

  .question {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 150px;
    font-family: 'Alba Super';
    z-index: 1;
    color: #3d6d65;
  }

  .buttons {
    display: flex;
    justify-content: space-around;

    .cancel {
      width: 100px;
      background-color: #FCE38A;
      color: #3a3a3a;
      box-shadow: none;
      font-size: 18px;
    }

    .submit {
      width: 100px;
      background-color: #ffb4b2;
      color: #3a3a3a;
      box-shadow: none;
      font-size: 18px;
    }
  }
`;
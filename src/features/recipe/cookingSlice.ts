import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { breakfastMeals, proteinMeals, garnishList, combinedMealsList, snackMeals } from 'constants/meals';

export type CookingState = {
  day: string;
  meals: {
    title: string;
    ingredients: {
      name: string;
      quantity?: string;
      unit?: string;
      checked: boolean;
    }[]
  }[]
}[]

const initialState: CookingState = [
  {day: 'Mon', meals: Array(8).fill(undefined)},
  {day: 'Tue', meals: Array(8).fill(undefined)},
  {day: 'Wed', meals: Array(8).fill(undefined)},
  {day: 'Thu', meals: Array(8).fill(undefined)},
  {day: 'Fri', meals: Array(8).fill(undefined)},
  {day: 'Sat', meals: Array(8).fill(undefined)},
  {day: 'Sun', meals: Array(8).fill(undefined)},
]

const cookingSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addMeal: (state, action: PayloadAction<{dayIndex: number, meal: CookingState[0]['meals'][0], mealIndex: number}>) => {
      state[action.payload.dayIndex].meals[action.payload.mealIndex] = action.payload.meal
    },
    toggleIngredient: (state, action: PayloadAction<{dayIndex: number, mealIndex: number, ingredientName: string, checked: boolean}>) => {
      // @ts-ignore
      state[action.payload.dayIndex].meals[action.payload.mealIndex].ingredients.find(ing => ing.name === action.payload.ingredientName).checked = action.payload.checked
    },
    reset: (state: CookingState, payload: any) => {
      return initialState
    },
    uncheckAll: (state: CookingState, action: PayloadAction<{dayIndex: number, mealIndex: number}>) => {
      state[action.payload.dayIndex].meals[action.payload.mealIndex].ingredients.map(ing => ing.checked = false)
    },
    //@ts-ignore
    randomize: (state: CookingState, payload: any) => {
      return initialState.map((item) => {
        let lunchRandomize = Math.floor(Math.random() * 2);
        let dinnerRandomize = Math.floor(Math.random() * 2);
        let randomMeals = item.meals.map((meal, index) => {
          switch(index) {
            case 0:
              let breakfastRandom = Math.floor(Math.random() * breakfastMeals.length)
              return breakfastMeals[breakfastRandom]
            case 1:
              if (lunchRandomize === 0) {
                let proteinRandom = Math.floor(Math.random() * proteinMeals.length)
                return proteinMeals[proteinRandom]  
              } else {
                return undefined
              }
            case 2:
              if (lunchRandomize === 0) {
                let garnishRandom = Math.floor(Math.random() * garnishList.length)
              return garnishList[garnishRandom]
              } else {
                return undefined;
              }
            case 3:
              if (lunchRandomize === 1) {
              let combinedRandom = Math.floor(Math.random() * combinedMealsList.length)
              return combinedMealsList[combinedRandom]
              } else {
                return undefined
              }
            case 4:
              if (dinnerRandomize === 0) {
                let proteinRandom = Math.floor(Math.random() * proteinMeals.length)
                return proteinMeals[proteinRandom]  
              } else {
                return undefined
              }
            case 5:
              if (dinnerRandomize === 0) {
                let garnishRandom = Math.floor(Math.random() * garnishList.length)
              return garnishList[garnishRandom]
              } else {
                return undefined;
              }
            case 6:
              if (dinnerRandomize === 1) {
              let combinedRandom = Math.floor(Math.random() * combinedMealsList.length)
              return combinedMealsList[combinedRandom]
              } else {
                return undefined
              }
            case 7:
              let snackRandom = Math.floor(Math.random() * snackMeals.length)
              return snackMeals[snackRandom]
            default:
              return undefined
          }
        });

        return {
          day: item.day,
          meals: randomMeals
        }
      })
    }
  }
})

export const {addMeal, toggleIngredient, reset, randomize, uncheckAll} = cookingSlice.actions;

export default cookingSlice.reducer
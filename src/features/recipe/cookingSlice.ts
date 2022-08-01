import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type CookingState = {
  day: string;
  meals: {
    title?: string;
    ingredients?: {
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
      //@ts-ignore
      state[action.payload.dayIndex].meals[action.payload.mealIndex].ingredients.find(ing => ing.name === action.payload.ingredientName).checked = action.payload.checked
    },
    reset: () => {
      return initialState
    }
  }
})

export const {addMeal, toggleIngredient, reset} = cookingSlice.actions;

export default cookingSlice.reducer
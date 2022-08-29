import React from 'react'
import { useAppSelector, useAppDispatch } from 'redux/hooks'
import { uncheckAll } from 'features/recipe/cookingSlice'
import { Ingredients } from './index.styles'
import IngredientCheckbox from './components/ingredient-checkbox'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { IconButton } from '@mui/material'

const IngredientsList = () => {
  const weekState = useAppSelector((state) => state.app)
  const dispatch = useAppDispatch()

  return (
    <>
      {weekState.map((item, index) => {
        return (
          <Ingredients key={item.day}>
            {item.meals.map((meal, mealIndex) => {
              if (!meal) return null
              return (
                <div key={meal.title ? meal.title + mealIndex : meal.title}>
                  <h4>
                    {meal.title}
                    <IconButton
                      size="small"
                      onClick={() =>
                        dispatch(uncheckAll({ dayIndex: index, mealIndex }))
                      }
                    >
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                  </h4>
                  {meal.ingredients?.map((ingredient) => {
                    return (
                      <IngredientCheckbox
                        key={ingredient.name + mealIndex}
                        checked={ingredient.checked}
                        dayIndex={index}
                        mealIndex={mealIndex}
                        ingredientName={ingredient.name}
                        ingredientQuantity={ingredient.quantity}
                        ingredientUnit={ingredient.unit}
                      />
                    )
                  })}
                </div>
              )
            })}
          </Ingredients>
        )
      })}
    </>
  )
}

export default React.memo(IngredientsList)

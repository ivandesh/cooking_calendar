import React from 'react'
import { useAppSelector } from 'redux/hooks'
import { Ingredients } from './index.styles'
import IngredientCheckbox from './components/ingredient-checkbox'

const IngredientsList = () => {
  const weekState = useAppSelector((state) => state.app)

  return (
    <>
      {weekState.map((item, index) => {
        return (
          <Ingredients key={item.day}>
            {item.meals.map((meal, mealIndex) => {
              if (!meal) return null
              return (
                <div key={meal.title ? meal.title + mealIndex : meal.title}>
                  <h4>{meal.title}</h4>
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

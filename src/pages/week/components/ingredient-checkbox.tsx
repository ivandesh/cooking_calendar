import React from 'react'
import { Checkbox } from '@mui/material'
import { useAppDispatch } from 'redux/hooks'
import { toggleIngredient } from 'features/recipe/cookingSlice'
import { Ingredient } from '../index.styles'

const CheckboxCustom = ({
  checked,
  dayIndex,
  mealIndex,
  ingredientName,
  ingredientQuantity,
  ingredientUnit,
}: {
  checked: boolean
  dayIndex: number
  mealIndex: number
  ingredientName: string
  ingredientQuantity?: string
  ingredientUnit?: string
}) => {
  const dispatch = useAppDispatch()
  const handleCheckboxChange = React.useCallback(
    (e: any, dayIndex: number, mealIndex: number, ingredientName: string) => {
      dispatch(
        toggleIngredient({
          dayIndex,
          mealIndex,
          ingredientName,
          checked: e.target.checked,
        })
      )
    },
    [dispatch]
  )

  return (
    <Ingredient>
      <Checkbox
        checked={checked}
        onChange={(e: any) =>
          handleCheckboxChange(e, dayIndex, mealIndex, ingredientName)
        }
      />
      <span className="name">{ingredientName}</span>
      <span className="quantity">
        {ingredientQuantity} {ingredientUnit}
      </span>
    </Ingredient>
  )
}

export default React.memo(CheckboxCustom)

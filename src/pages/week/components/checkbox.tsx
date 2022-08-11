import React from 'react'
import { Checkbox } from '@mui/material'
import { useAppDispatch } from 'redux/hooks'
import { toggleIngredient } from 'features/recipe/cookingSlice'

const CheckboxCustom = ({
  checked,
  dayIndex,
  mealIndex,
  ingredientName,
}: {
  checked: boolean
  dayIndex: number
  mealIndex: number
  ingredientName: string
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
    <Checkbox
      checked={checked}
      onChange={(e: any) =>
        handleCheckboxChange(e, dayIndex, mealIndex, ingredientName)
      }
    />
  )
}

export default React.memo(CheckboxCustom)

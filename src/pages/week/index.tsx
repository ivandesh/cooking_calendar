import { useState } from 'react'
import {
  WeekWrapper,
  DayWrapper,
  IngredientsWrapper,
  Ingredients,
  Ingredient,
  ButtonsWrapper,
  Wrapper,
} from './index.styles'
import { useAppSelector, useAppDispatch } from 'redux/hooks'
import Cell from './components/cell'
import { Checkbox } from '@mui/material'
import { toggleIngredient, reset, randomize } from 'features/recipe/cookingSlice'
import TotalIngredients from './components/total'
import IconButton from '@mui/material/IconButton'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ConfirmResetDialog from './components/confirm-reset'
import WbTwilightIcon from '@mui/icons-material/WbTwilight'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import CircleIcon from '@mui/icons-material/Circle'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LocalDiningIcon from '@mui/icons-material/LocalDining'
import CasinoIcon from '@mui/icons-material/Casino'

const Week = () => {
  const weekState = useAppSelector((state) => state.app)
  const dispatch = useAppDispatch()
  const [isTotalOpen, setIsTotalOpen] = useState(false)
  const [showCalendar, setShowCalendar] = useState(true)
  const [resetDialogOpen, setResetDialogOpen] = useState(false)

  return (
    <Wrapper>
      <WeekWrapper className={`${showCalendar ? 'show' : 'hide'}`}>
        <DayWrapper>
          <h4 className="title margin-10"> </h4>
          <div className="cell">
            <div className='cell-inner bordered'>
              <WbTwilightIcon />
            </div>
          </div>
          <div className="cell">
            <div className='cell-inner space-3 bordered'>
              <LightModeIcon />
            </div>
          </div>
          <div className="cell">
            <div className='cell-inner space-3 bordered'>
              <DarkModeIcon />
            </div>
          </div>
          <div className="cell">
            <div className='cell-inner bordered'>
              <CircleIcon />
            </div>
          </div>
        </DayWrapper>
        {weekState.map((item, index) => {
          return (
            <DayWrapper
              key={item.day}
              last={index === weekState.length - 1 ? true : false}
            >
              <h4 className="title">{item.day}</h4>
              {item.meals.map((meal, mealIndex) => {
                return (
                  <Cell
                    key={mealIndex}
                    meal={meal}
                    mealIndex={mealIndex}
                    dayIndex={index}
                  />
                )
              })}
            </DayWrapper>
          )
        })}
      </WeekWrapper>
      <IngredientsWrapper>
        <Ingredients>
          <ButtonsWrapper>
            <IconButton
              size="small"
              onClick={() => setShowCalendar((prev) => !prev)}
            >
              {showCalendar ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              size="small"
              onClick={() => dispatch(randomize({type: 'random'}))}
            >
              <CasinoIcon />
            </IconButton>
            <IconButton
              size="small"
              onClick={() => setIsTotalOpen(true)}
            >
              <ShoppingCartIcon />
            </IconButton>
            <IconButton
              size="small"
              onClick={() => setResetDialogOpen(true)}
            >
              <LocalDiningIcon />
            </IconButton>
          </ButtonsWrapper>
        </Ingredients>
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
                        <Ingredient key={ingredient.name + mealIndex}>
                          <Checkbox
                            checked={ingredient.checked}
                            onChange={(e) =>
                              dispatch(
                                toggleIngredient({
                                  dayIndex: index,
                                  mealIndex,
                                  ingredientName: ingredient.name,
                                  checked: e.target.checked,
                                })
                              )
                            }
                          />
                          <span className="name">{ingredient.name}</span>
                          <span className="quantity">
                            {ingredient.quantity} {ingredient.unit}
                          </span>
                        </Ingredient>
                      )
                    })}
                  </div>
                )
              })}
            </Ingredients>
          )
        })}
      </IngredientsWrapper>
      <TotalIngredients
        isTotalOpen={isTotalOpen}
        setIsTotalOpen={setIsTotalOpen}
      />
      <ConfirmResetDialog
        open={resetDialogOpen}
        handleClose={() => setResetDialogOpen(false)}
        handleSuccess={() => {
          setResetDialogOpen(false)
          dispatch(reset({type: 'reset'}))
        }}
      />
    </Wrapper>
  )
}

export default Week

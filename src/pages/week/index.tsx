import { useState } from 'react'
import {
  WeekWrapper,
  DayWrapper,
  IngredientsWrapper,
  Ingredients,
  ButtonsWrapper,
  Wrapper,
} from './index.styles'
import { useAppDispatch } from 'redux/hooks'
import { reset, randomize } from 'features/recipe/cookingSlice'
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
import CasinoIcon from '@mui/icons-material/Casino';
import Calendar from './calendar';
import IngredientsList from './ingredients';

const Week = () => {
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

        <Calendar />

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

        <IngredientsList />

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

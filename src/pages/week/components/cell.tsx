import React, { useEffect, useState, useRef } from 'react';
import { breakfastMeals, proteinMeals, garnishList, combinedMealsList, snackMeals, TMeal } from 'constants/meals';
import { useAppDispatch } from 'redux/hooks';
import { addMeal } from 'features/recipe/cookingSlice';
import { colors } from 'theme/colors';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


const getSortedKeysList = (arr: TMeal[]) => {
  return arr.map(item => item.title).sort((a, b) => {
    if ( a < b ){
      return -1;
    }
    if ( a > b ){
      return 1;
    }
    return 0;
  })
}


const Cell = ({meal, mealIndex, dayIndex}: {meal: {title?: string}, mealIndex: number, dayIndex: number}) => {
  const [mode, setMode] = useState('view');
  const [value, setValue] = useState(meal ? meal.title : undefined);
  const [mealList, setMealList] = useState<TMeal[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const autocompleteRef = useRef<HTMLInputElement>()

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (mealIndex === 0) {
      setMealList(breakfastMeals)
      setOptions(getSortedKeysList(breakfastMeals))
    } else if (mealIndex === 1 || mealIndex === 4) {
      setMealList(proteinMeals)
      setOptions(getSortedKeysList(proteinMeals))
    } else if (mealIndex === 2 || mealIndex === 5) {
      setMealList(garnishList)
      setOptions(getSortedKeysList(garnishList))
    } else if (mealIndex === 7) {
      setMealList(snackMeals)
      setOptions(getSortedKeysList(snackMeals))
    } else {
      setMealList(combinedMealsList)
      setOptions(getSortedKeysList(combinedMealsList))
    }
  }, [mealIndex])

  useEffect(() => {
    setValue(meal ? meal.title : undefined)
  }, [meal])

  useEffect(() => {
    if (mode === 'edit') {
      autocompleteRef?.current?.focus()
    }
  }, [mode])

  const handleChange = (event: React.SyntheticEvent<Element, Event>, value: string | null, reason: any) => {
    setValue(value as string);
    let meal = mealList.find(item => item.title === value)
    dispatch(addMeal({dayIndex, meal, mealIndex }));
    setMode('view');
  };

  const indexToColor = [[0,1,1,1,0,0,0,1], [1,0,0,0,1,1,1,0]]

  if (mode === 'edit') {
    return (
      <div className={`cell`} style={{backgroundColor: colors[indexToColor[dayIndex%2][mealIndex]]}}>
          <Autocomplete
            options={options}
            open
            value={value}
            onChange={handleChange}
            fullWidth
            blurOnSelect
            onBlur={() => setMode('view')}
            renderInput={(params) => <TextField inputRef={autocompleteRef} {...params} />}
          />
      </div>
    )
  }
  return ( 
    <div className='cell' style={{backgroundColor: colors[indexToColor[dayIndex%2][mealIndex]]}}>
      <div className='cell-inner' onClick={() => {
        setMode('edit')}}>{meal ? meal.title : '-'}
      </div>
    </div>
  )
}

export default React.memo(Cell)
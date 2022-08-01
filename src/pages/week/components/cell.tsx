import { useEffect, useState } from 'react';
import { breakfastMeals, proteinMeals, garnishList, combinedMealsList, snackMeals, TMeal } from 'constants/meals';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useAppDispatch } from 'redux/hooks';
import { addMeal } from 'features/recipe/cookingSlice';
import { colors } from 'theme/colors';

const Cell = ({meal, mealIndex, dayIndex}: {meal: {title?: string}, mealIndex: number, dayIndex: number}) => {
  const [mode, setMode] = useState('view');
  const [value, setValue] = useState('');
  const [mealList, setMealList] = useState<TMeal[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (mealIndex === 0) {
      setMealList(breakfastMeals)
    } else if (mealIndex === 1 || mealIndex === 4) {
      setMealList(proteinMeals)
    } else if (mealIndex === 2 || mealIndex === 5) {
      setMealList(garnishList)
    } else if (mealIndex === 7) {
      setMealList(snackMeals)
    } else {
      setMealList(combinedMealsList)
    }
  }, [mealIndex])

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    //@ts-ignore
    dispatch(addMeal({dayIndex, meal: mealList.find(item => item.title === event.target.value), mealIndex }));
    setMode('view');
  };
  const indexToColor = [[0,1,1,1,0,0,0,1], [1,0,0,0,1,1,1,0]]

  if (mode === 'edit') {
    return (
      <div className={`cell`} style={{backgroundColor: colors[indexToColor[dayIndex%2][mealIndex]]}}>
        <Select
            value={value}
            fullWidth
            defaultOpen
            onChange={handleChange}
            onBlur={() =>setMode('view')}
          >
            <MenuItem value={''}>-</MenuItem>
            {mealList.map((item: TMeal) => {
              return <MenuItem key={item.title} value={item.title }>{item.title}</MenuItem>
            })}
          </Select>
      </div>
    )
  }
  return ( 
    <div className='cell' style={{backgroundColor: colors[indexToColor[dayIndex%2][mealIndex]]}} onClick={() => setMode('edit')}>{meal ? meal.title : '-'}</div>
  )
}

export default Cell
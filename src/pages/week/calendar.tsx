import React from 'react';
import { useAppSelector } from 'redux/hooks'
import { DayWrapper } from './index.styles';
import Cell from './components/cell';

const Calendar = () => {
  const weekState = useAppSelector((state) => state.app);

  return (
    <>
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
    </>
  )
}

export default React.memo(Calendar);
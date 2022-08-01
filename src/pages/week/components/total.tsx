import Drawer from '@mui/material/Drawer'
import { TotalWrapper } from '../index.styles'
import { useAppSelector } from 'redux/hooks'

function unique(arr: any, keyProps: string[]) {
  const kvArray = arr.map((entry: any) => {
    const key = keyProps.map((k) => entry[k]).join('|')
    return [key, entry]
  })
  const map = new Map(kvArray)
  return Array.from(map.values())
}

const TotalIngredients = ({
  isTotalOpen,
  setIsTotalOpen,
}: {
  isTotalOpen: boolean
  setIsTotalOpen: any
}) => {
  const weekState = useAppSelector((state) => state.app)

  const ingredientsList = weekState
    .map((item) => {
      let ingredients: any[] = []
      item.meals.forEach((meal) => {
        if (meal) {
          ingredients.push(meal.ingredients)
        }
      })
      return ingredients.flat()
    })
    .flat()
    .filter((ing: any) => ing.checked)
    .sort((a: any, b: any) => (a.type > b.type ? -1 : 1))

  let addedQuantity = ingredientsList.map((item: any, index) => {
    let possibleDuplicates = ingredientsList.filter(
      (ing: any) => ing.name === item.name && ing.unit === item.unit
    )
    if (possibleDuplicates.length > 1) {
      let quantity = 0
      possibleDuplicates.forEach((ing: any) => {
        if (ing.quantity) {
          quantity += ing.quantity
        }
      })
      return {
        name: item.name,
        quantity,
        unit: item.unit,
        checked: item.checked,
        type: item.type,
      }
    } else {
      return item
    }
  })

  let uniqueIngredients = unique(addedQuantity, ['name', 'unit'])

  return (
    <Drawer
      open={isTotalOpen}
      onClose={() => setIsTotalOpen(false)}
      anchor="right"
    >
      <TotalWrapper>
        <h3 className="title">Shopping List</h3>
        <div className="list">
          {uniqueIngredients.map((item: any, index: number) => {
            return (
              <div className="ingredient" key={index}>
                <span className="name">{item.name}</span>
                <span className="quantity">
                  {item?.quantity} {item?.unit}
                </span>
              </div>
            )
          })}
        </div>
      </TotalWrapper>
    </Drawer>
  )
}

export default TotalIngredients

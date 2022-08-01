const parseData = (data: any) => {
  return data.map((item: any) => {
  let parseIngredients = (meal: any) => {
    let ingredients = [];
    let i = 1;
    while (Object.keys(meal).includes(`ing${i}`) && !!meal[`ing${i}`]) {
      let [name, quantity, unit, type] = meal[`ing${i}`].split(',')
      ingredients.push({
        name,
        quantity,
        unit,
        type,
        checked: true,
      })
      i++
    }
    return ingredients
  }
  return {
    name: item.name,
    ingredients: [...parseIngredients(item)]
  }
})
}

export default parseData;
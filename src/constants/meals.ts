export type TMeal = {
  title?: string;
  ingredients?: {
    name: string;
    quantity?: number;
    unit?: 'гр' | 'мл' | 'шт' | 'ст л';
    checked: boolean;
    type: 'vegetable' | 'meat' | 'dairy' | 'bacaly' | 'sweets' | 'pastry' | 'frozen' | 'fish' | 'other'
  }[]
};

export const breakfastMeals: TMeal[] = [
  {
    title: 'Яйця з ковбасою',
    ingredients: [
      {
        name: 'Яйця',
        quantity: 4,
        unit: 'шт',
        checked: true,
        type: 'dairy'
      },
      {
        name: 'Ковбаса',
        quantity: 300,
        unit: 'гр',
        checked: true,
        type: 'meat'

      },
    ]
  },
]

export const proteinMeals: TMeal[] = [
  {
    title: 'Котлета по-київськи',
    ingredients: [
      {
        name: 'Філе курки',
        quantity: 2,
        unit: 'шт',
        checked: true,
        type: 'meat'
      },
      {
        name: 'Панірувальні сухарі',
        quantity: 1,
        unit: 'шт',
        checked: true,
        type: 'bacaly'

      },
      {
        name: 'Яйця',
        quantity: 2,
        unit: 'шт',
        checked: true,
        type: 'dairy'

      },
      {
        name: 'Борошно',
        quantity: 100,
        unit: 'гр',
        checked: true,
        type: 'bacaly'

      },
      {
        name: 'Вершкове масло',
        quantity: 100,
        unit: 'гр',
        checked: true,
        type: 'dairy'
      },
      {
        name: 'Зелень',
        checked: true,
        type: 'vegetable',
        quantity: 1,
        unit: 'шт'
      },
      {
        name: 'Часник',
        checked: true,
        type: 'vegetable',
        quantity: 1,
        unit: 'шт'
      }
    ]
  },
  {
    title: 'Шведські мітболи',
    ingredients: [
      {
        name: 'Фарш',
        quantity: 700,
        unit: 'гр',
        checked: true,
        type: 'meat'
      },
      {
        name: 'Цибуля',
        quantity: 1,
        unit: 'шт',
        checked: true,
        type: 'vegetable'
      },
      {
        name: 'Часник',
        quantity: 1,
        unit: 'шт',
        checked: true,
        type: 'vegetable'
      },
      {
        name: 'Панірувальні сухарі',
        quantity: 100,
        unit: 'гр',
        checked: true,
        type: 'bacaly'
      },
      {
        name: 'Яйця',
        quantity: 1,
        unit: 'шт',
        checked: true,
        type: 'dairy'
      },
      {
        name: 'Вершкове масло',
        quantity: 40,
        unit: 'гр',
        checked: true,
        type: 'dairy'
      },
      {
        name: 'Борошно',
        quantity: 40,
        unit: 'гр',
        checked: true,
        type: 'bacaly'
      },
      {
        name: 'Бульйон',
        quantity: 300,
        unit: 'мл',
        checked: true,
        type: 'bacaly'
      },
      {
        name: 'Вершки 30-50%',
        quantity: 150,
        unit: 'мл',
        checked: true,
        type: 'dairy'
      },
    ]
  },
  {
    title: 'Нагетси',
    ingredients: [{
      name: 'Заморожені нагетси',
      quantity: 1,
      unit: 'шт',
      checked: true,
      type: 'frozen'
    }]
  }
]

export const garnishList: TMeal[] = [
  {
    title: 'Банош',
    ingredients: [
      {
        name: 'Кукурудзяна крупа',
        quantity: 150,
        unit: 'гр',
        checked: true,
        type: 'bacaly'
      },
      {
        name: 'Молоко 2,5',
        quantity: 450,
        unit: 'мл',
        checked: true,
        type: 'dairy'
      },
      {
        name: 'Сметана 15%',
        quantity: 1,
        unit: 'шт',
        checked: true,
        type: 'dairy'
      },
    ]
  },
  {
    title: 'Картопляні діпи у духовці',
    ingredients: [
      {
        name: 'Картопля',
        quantity: 500,
        unit: 'гр',
        checked: true,
        type: 'vegetable'
      },
      {
        name: 'Часник',
        quantity: 4,
        unit: 'шт',
        checked: true,
        type: 'vegetable'
      }
    ]
  },
  {
    title: 'Салат Стандартний',
    ingredients: [
      {
        name: 'Помідор',
        quantity: 2,
        unit: 'шт',
        checked: true,
        type: 'vegetable'
      },
      {
        name: 'Огірок',
        quantity: 2,
        unit: 'шт',
        checked: true,
        type: 'vegetable'
      },
      {
        name: 'Цибуля маленька',
        quantity: 1,
        unit: 'шт',
        checked: true,
        type: 'vegetable'
      },
      {
        name: 'Цибуля зелена',
        checked: true,
        type: 'vegetable',
        quantity: 1,
        unit: 'шт'
      },
      {
        name: 'Сметана',
        quantity: 2,
        unit: 'ст л',
        checked: true,
        type: 'dairy'
      },
    ]
  },
  {
    title: 'Спагетті',
    ingredients: [
      {
        name: 'Спагетті',
        quantity: 180,
        unit: 'гр',
        checked: true,
        type: 'bacaly'
      },
    ]
  },
]

export const combinedMealsList: TMeal[] = [
  {
    title: 'Цезар',
    ingredients: [
      {
        name: 'Айсберг',
        quantity: 0.5,
        unit: 'шт',
        checked: true,
        type: 'vegetable'
      },
      {
        name: 'Філе курки',
        quantity: 2,
        unit: 'шт',
        checked: true,
        type: 'meat'
      },
      {
        name: 'Помідор',
        quantity: 3,
        unit: 'шт',
        checked: true,
        type: 'vegetable'
      },
      {
        name: 'Яйця',
        quantity: 3,
        unit: 'шт',
        checked: true,
        type: 'dairy'
      },
      {
        name: 'Xліб',
        quantity: 0.5,
        unit: 'шт',
        checked: true,
        type: 'pastry'
      },
      {
        name: 'Сметана',
        quantity: 100,
        unit: 'гр',
        checked: true,
        type: 'dairy'
      },
      {
        name: 'Майонез',
        quantity: 100,
        unit: 'гр',
        checked: true,
        type: 'dairy'
      },
      {
        name: 'Часник',
        quantity: 1,
        unit: 'шт',
        checked: true,
        type: 'vegetable'
      },
      {
        name: 'Соєвий соус',
        checked: true,
        type: 'bacaly',
        quantity: 30,
        unit: 'мл'
      },
    ]
  },
  {
    title: 'Спрінгроли',
    ingredients: [
      {
        name: 'Рисовий папір',
        quantity: 8,
        unit: 'шт',
        checked: true,
        type: 'bacaly'
      },
      {
        name: 'Скляна лапша швидкого приготування',
        quantity: 1,
        unit: 'шт',
        checked: true,
        type: 'bacaly'
      },
      {
        name: 'Айсберг',
        quantity: 0.5,
        unit: 'шт',
        checked: true,
        type: 'vegetable'
      },
      {
        name: 'Огірок',
        quantity: 3,
        unit: 'шт',
        checked: true,
        type: 'vegetable'
      },
      {
        name: 'Морква',
        quantity: 2,
        unit: 'шт',
        checked: true,
        type: 'vegetable'
      },
      {
        name: 'Філе курки',
        quantity: 1,
        unit: 'шт',
        checked: true,
        type: 'meat'
      },
      {
        name: 'Солена або копчена риба',
        quantity: 150,
        unit: 'гр',
        checked: true,
        type: 'fish'
      },
      {
        name: 'Горіховий соус',
        quantity: 100,
        unit: 'гр',
        checked: true,
        type: 'bacaly'
      },
    ]
  },
]

export const snackMeals: TMeal[] = [
  {
    title: 'Гуакамоле',
    ingredients: [
      {
        name: 'Авокадо',
        quantity: 1,
        unit: 'шт',
        checked: true,
        type: 'vegetable'
      },
      {
        name: 'Цибуля',
        quantity: 1,
        unit: 'шт',
        checked: true,
        type: 'vegetable'
      },
      {
        name: 'Помідор',
        quantity: 1,
        unit: 'шт',
        checked: true,
        type: 'vegetable'
      },
      {
        name: 'Лимон',
        quantity: 0.5,
        unit: 'шт',
        checked: true,
        type: 'vegetable'
      },
    ]
  },
]
export type TMeal = {
  title?: string;
  ingredients?: {
    name: string;
    quantity?: number;
    unit?: 'гр' | 'мл' | 'шт' | 'ст л' | 'ст' | 'ч л' | 'л';
    checked: boolean;
    type: 'vegetable' | 'meat' | 'dairy' | 'bacaly' | 'sweets' | 'pastry' | 'frozen' | 'fish' | 'other'
  }[]
};

export const breakfastMeals: TMeal[] = [
  {
      "title": "Французькі тости",
      "ingredients": [
          {
              "name": "Хліб",
              "quantity": 0.5,
              "unit": "шт",
              "type": "pastry",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 3,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          }
      ]
  },
  {
      "title": "Яйця з ковбасою",
      "ingredients": [
          {
              "name": "Яйця",
              "quantity": 4,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Ковбаса",
              "quantity": 100,
              "unit": "гр",
              "type": "meat",
              "checked": true
          }
      ]
  },
  {
      "title": "Гуакамоле",
      "ingredients": [
          {
              "name": "Авокадо",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Цибуля",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Помідор",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Лимон",
              "quantity": 0.5,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Хліб",
              "quantity": 0.5,
              "unit": "шт",
              "type": "pastry",
              "checked": true
          }
      ]
  },
  {
      "title": "Сирники",
      "ingredients": [
          {
              "name": "Творог",
              "quantity": 450,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Борошно",
              "quantity": 3,
              "unit": "ст л",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Цукор",
              "quantity": 3,
              "unit": "ст л",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 1,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Ванільний цукор",
              "quantity": 10,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Крок мадам",
      "ingredients": [
          {
              "name": "Хліб",
              "quantity": 0.5,
              "unit": "шт",
              "type": "pastry",
              "checked": true
          },
          {
              "name": "Сир",
              "quantity": 50,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Шинка",
              "quantity": 100,
              "unit": "гр",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 2,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Масло",
              "quantity": 50,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Борошно",
              "quantity": 50,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Молоко",
              "quantity": 200,
              "unit": "мл",
              "type": "dairy",
              "checked": true
          }
      ]
  },
  {
      "title": "Крок місьє",
      "ingredients": [
          {
              "name": "Хліб",
              "quantity": 0.5,
              "unit": "шт",
              "type": "pastry",
              "checked": true
          },
          {
              "name": "Сир",
              "quantity": 50,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Шинка",
              "quantity": 100,
              "unit": "гр",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Масло",
              "quantity": 50,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Борошно",
              "quantity": 50,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Молоко",
              "quantity": 200,
              "unit": "мл",
              "type": "dairy",
              "checked": true
          }
      ]
  },
  {
      "title": "Вівсянка",
      "ingredients": [
          {
              "name": "Пакетик вівсяної каші",
              "quantity": 2,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Яйця бенедикт",
      "ingredients": [
          {
              "name": "Хліб",
              "quantity": 0.5,
              "unit": "шт",
              "type": "pastry",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 5,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Бекон",
              "quantity": 100,
              "unit": "гр",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Масло",
              "quantity": 50,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Лимон",
              "quantity": 0.5,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          }
      ]
  },
  {
      "title": "Млинці",
      "ingredients": [
          {
              "name": "Заморожені млинці",
              "quantity": 1,
              "unit": "шт",
              "type": "frozen",
              "checked": true
          }
      ]
  },
  {
      "title": "Гарячі бутерброди",
      "ingredients": [
          {
              "name": "Хліб",
              "quantity": 0.5,
              "unit": "шт",
              "type": "pastry",
              "checked": true
          },
          {
              "name": "Ковбаса",
              "quantity": 200,
              "unit": "гр",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Сир",
              "quantity": 100,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          }
      ]
  },
  {
      "title": "Форшмак",
      "ingredients": [
          {
              "name": "Хліб",
              "quantity": 0.5,
              "unit": "шт",
              "type": "pastry",
              "checked": true
          },
          {
              "name": "Форшмак з Веладісу",
              "quantity": 200,
              "unit": "гр",
              "type": "fish",
              "checked": true
          }
      ]
  }
]

export const proteinMeals: TMeal[] = [
  {
      "title": "Котлета по-київськи",
      "ingredients": [
          {
              "name": "Куряче філе",
              "quantity": 2,
              "unit": "шт",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 2,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Панірувальні сухарі",
              "quantity": 200,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Борошно",
              "quantity": 100,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Масло",
              "quantity": 100,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Олія",
              "quantity": 300,
              "unit": "мл",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Шведські мітболи",
      "ingredients": [
          {
              "name": "Фарш",
              "quantity": 500,
              "unit": "гр",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 1,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Панірувальні сухарі",
              "quantity": 100,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Борошно",
              "quantity": 50,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Масло",
              "quantity": 50,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Цибуля",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Вершки",
              "quantity": 100,
              "unit": "мл",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Бульйон курячий",
              "quantity": 150,
              "unit": "мл",
              "type": "other",
              "checked": true
          }
      ]
  },
  {
      "title": "Смажене куряче філе",
      "ingredients": [
          {
              "name": "Куряче філе",
              "quantity": 1,
              "unit": "шт",
              "type": "meat",
              "checked": true
          }
      ]
  },
  {
      "title": "Смажені курячі стегна",
      "ingredients": [
          {
              "name": "Курячі стегна",
              "quantity": 2,
              "unit": "шт",
              "type": "meat",
              "checked": true
          }
      ]
  },
  {
      "title": "Відбивна в паніровці",
      "ingredients": [
          {
              "name": "Куряче філе",
              "quantity": 1,
              "unit": "шт",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 2,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Панірувальні сухарі",
              "quantity": 100,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Борошно",
              "quantity": 50,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Запечена риба",
      "ingredients": [
          {
              "name": "Тіляпія",
              "quantity": 2,
              "unit": "шт",
              "type": "fish",
              "checked": true
          },
          {
              "name": "Скумбрія",
              "quantity": 1,
              "unit": "шт",
              "type": "fish",
              "checked": true
          },
          {
              "name": "Хек",
              "quantity": 2,
              "unit": "шт",
              "type": "fish",
              "checked": true
          },
          {
              "name": "Риба",
              "quantity": 2,
              "unit": "шт",
              "type": "fish",
              "checked": true
          }
      ]
  },
  {
      "title": "Смажений лосось",
      "ingredients": [
          {
              "name": "Червона риба",
              "quantity": 300,
              "unit": "гр",
              "type": "fish",
              "checked": true
          },
          {
              "name": "Масло",
              "quantity": 50,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          }
      ]
  },
  {
      "title": "Смажені гриби",
      "ingredients": [
          {
              "name": "Гливи",
              "quantity": 500,
              "unit": "гр",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Печериці",
              "quantity": 500,
              "unit": "гр",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Ерінги",
              "quantity": 500,
              "unit": "гр",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Цибуля",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          }
      ]
  },
  {
      "title": "Курячі шлуночки",
      "ingredients": [
          {
              "name": "Курячі шлуночки",
              "quantity": 1,
              "unit": "шт",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Сметана",
              "quantity": 200,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          }
      ]
  },
  {
      "title": "Жульєн",
      "ingredients": [
          {
              "name": "Куряче філе",
              "quantity": 1,
              "unit": "шт",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Масло",
              "quantity": 50,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Цибуля",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Сметана",
              "quantity": 200,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          }
      ]
  },
  {
      "title": "Крильця в духовці",
      "ingredients": [
          {
              "name": "Куряче філе",
              "quantity": 1,
              "unit": "шт",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Борошно",
              "quantity": 100,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Розпушувач",
              "quantity": 1,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Соус",
              "quantity": 1,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Нагетси",
      "ingredients": [
          {
              "name": "Заморожені нагетси",
              "quantity": 1,
              "unit": "шт",
              "type": "frozen",
              "checked": true
          }
      ]
  },
  {
      "title": "Грудинка свині по-азійськи",
      "ingredients": [
          {
              "name": "Грудна частина свині",
              "quantity": 1,
              "unit": "шт",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Крохмаль",
              "quantity": 50,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Тростинний цукор",
              "quantity": 30,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Соєвий соус",
              "quantity": 50,
              "unit": "мл",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Стейк ескалоп свинячий",
      "ingredients": [
          {
              "name": "Ескалоп",
              "quantity": 2,
              "unit": "шт",
              "type": "meat",
              "checked": true
          }
      ]
  },
  {
      "title": "Біф велінгтон",
      "ingredients": [
          {
              "name": "Яловича вирізка",
              "quantity": 500,
              "unit": "гр",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 1,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Печериці",
              "quantity": 500,
              "unit": "гр",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Листкове тісто",
              "quantity": 500,
              "unit": "гр",
              "type": "frozen",
              "checked": true
          },
          {
              "name": "Бекон",
              "quantity": 200,
              "unit": "гр",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Цибуля",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Гірчиця лагідна мелена",
              "quantity": 2,
              "unit": "ст л",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Масло",
              "quantity": 50,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          }
      ]
  },
  {
      "title": "Смажені кабачки",
      "ingredients": [
          {
              "name": "Кабачок",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Борошно",
              "quantity": 100,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          }
      ]
  }
]

export const garnishList: TMeal[] = [
  {
      "title": "Спагетті",
      "ingredients": [
          {
              "name": "Спагетті",
              "quantity": 180,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Пшенична каша",
      "ingredients": [
          {
              "name": "Пшенична крупа",
              "quantity": 150,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Рис",
      "ingredients": [
          {
              "name": "Рис",
              "quantity": 150,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Салат стандартний",
      "ingredients": [
          {
              "name": "Помідор",
              "quantity": 2,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Огірок",
              "quantity": 2,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Зелень",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Сметана",
              "quantity": 100,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          }
      ]
  },
  {
      "title": "Кіноа",
      "ingredients": [
          {
              "name": "Кіноа",
              "quantity": 150,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Сочевиця",
      "ingredients": [
          {
              "name": "Сочевиця",
              "quantity": 150,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Квасоля",
      "ingredients": [
          {
              "name": "Консервована квасоля",
              "quantity": 1,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Картопляне пюре",
      "ingredients": [
          {
              "name": "Картопля",
              "quantity": 600,
              "unit": "гр",
              "type": "vegetable",
              "checked": true
          }
      ]
  },
  {
      "title": "Смажена картопля",
      "ingredients": [
          {
              "name": "Картопля",
              "quantity": 600,
              "unit": "гр",
              "type": "vegetable",
              "checked": true
          }
      ]
  },
  {
      "title": "Батат печений",
      "ingredients": [
          {
              "name": "Батат",
              "quantity": 600,
              "unit": "гр",
              "type": "vegetable",
              "checked": true
          }
      ]
  },
  {
      "title": "Печена картопля",
      "ingredients": [
          {
              "name": "Картопля",
              "quantity": 600,
              "unit": "гр",
              "type": "vegetable",
              "checked": true
          }
      ]
  },
  {
      "title": "Заморожені овочі",
      "ingredients": [
          {
              "name": "Заморожені овочі",
              "quantity": 1,
              "unit": "шт",
              "type": "frozen",
              "checked": true
          }
      ]
  },
  {
      "title": "Кукурудза",
      "ingredients": [
          {
              "name": "Консервована кукурудза",
              "quantity": 0.5,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Гречка",
      "ingredients": [
          {
              "name": "Гречка",
              "quantity": 150,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Кукурудзяна крупа",
      "ingredients": [
          {
              "name": "Кукурудзяна крупа",
              "quantity": 150,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Грецький салат",
      "ingredients": [
          {
              "name": "Помідор",
              "quantity": 2,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Огірок",
              "quantity": 2,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Цибуля",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Фета",
              "quantity": 100,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          }
      ]
  },
  {
      "title": "Смажений рис",
      "ingredients": [
          {
              "name": "Відварений рис",
              "quantity": 200,
              "unit": "гр",
              "type": "other",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 2,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Часник",
              "quantity": 2,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Зелена цибуля",
              "quantity": 4,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          }
      ]
  }
]

export const combinedMealsList: TMeal[] = [
  {
      "title": "Карбонара",
      "ingredients": [
          {
              "name": "Спагетті",
              "quantity": 200,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Жирний бочок",
              "quantity": 150,
              "unit": "гр",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Сир пекоріно",
              "quantity": 50,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 2,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Часник",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          }
      ]
  },
  {
      "title": "Лазанья",
      "ingredients": [
          {
              "name": "Листи Лазаньї",
              "quantity": 150,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Фарш",
              "quantity": 800,
              "unit": "гр",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Морква",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Цибуля",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Твердий сир",
              "quantity": 300,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Томатна паста пірамідка",
              "quantity": 1,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Часник",
              "quantity": 3,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Борошно",
              "quantity": 80,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Масло",
              "quantity": 80,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Молоко",
              "quantity": 400,
              "unit": "мл",
              "type": "dairy",
              "checked": true
          }
      ]
  },
  {
      "title": "Болоньєзе",
      "ingredients": [
          {
              "name": "Макарани",
              "quantity": 150,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Фарш",
              "quantity": 300,
              "unit": "гр",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Морква",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Цибуля",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Селера",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Томатна паста пірамідка",
              "quantity": 1,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Кесаділья",
      "ingredients": [
          {
              "name": "Лаваш маленький",
              "quantity": 2,
              "unit": "шт",
              "type": "pastry",
              "checked": true
          },
          {
              "name": "Сметана",
              "quantity": 100,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Майонез",
              "quantity": 100,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Часник",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Соєвий соус",
              "quantity": 2,
              "unit": "ч л",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Сулугуні",
              "quantity": 200,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Цибуля",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Консервована кукурудза",
              "quantity": 0.3,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Консервована квасоля",
              "quantity": 0.5,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Солодкий перець",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Куряче філе",
              "quantity": 1,
              "unit": "шт",
              "type": "meat",
              "checked": true
          }
      ]
  },
  {
      "title": "Фіш енд чипс",
      "ingredients": [
          {
              "name": "Філе Тіляпії",
              "quantity": 600,
              "unit": "гр",
              "type": "fish",
              "checked": true
          },
          {
              "name": "Картопля",
              "quantity": 600,
              "unit": "гр",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Майонез",
              "quantity": 100,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Лимон",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Солоні огірки",
              "quantity": 0.1,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 1,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Пиво",
              "quantity": 50,
              "unit": "мл",
              "type": "other",
              "checked": true
          },
          {
              "name": "Борошно",
              "quantity": 50,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Крохмаль",
              "quantity": 50,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Олія",
              "quantity": 300,
              "unit": "мл",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Шаурма",
      "ingredients": [
          {
              "name": "Лаваш",
              "quantity": 2,
              "unit": "шт",
              "type": "pastry",
              "checked": true
          },
          {
              "name": "Сметана",
              "quantity": 100,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Майонез",
              "quantity": 100,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Часник",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Соєвий соус",
              "quantity": 2,
              "unit": "ч л",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Куряче філе",
              "quantity": 1,
              "unit": "шт",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Айсберг",
              "quantity": 0.5,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Огірок",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Цибуля",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Помідор",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          }
      ]
  },
  {
      "title": "Тейк аут",
      "ingredients": [
          {
              "name": "Pepsi",
              "quantity": 1,
              "unit": "л",
              "type": "other",
              "checked": true
          }
      ]
  },
  {
      "title": "Хачапурі",
      "ingredients": [
          {
              "name": "Борошно",
              "quantity": 400,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Вода",
              "quantity": 180,
              "unit": "мл",
              "type": "other",
              "checked": true
          },
          {
              "name": "Молоко",
              "quantity": 120,
              "unit": "мл",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Олія",
              "quantity": 2,
              "unit": "ст л",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Дріжді сухі",
              "quantity": 1,
              "unit": "ч л",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Цукор",
              "quantity": 1,
              "unit": "ч л",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Сулугуні",
              "quantity": 450,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Творог",
              "quantity": 150,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 4,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          }
      ]
  },
  {
      "title": "Кіш з куркою",
      "ingredients": [
          {
              "name": "Борошно",
              "quantity": 250,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 5,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Масло",
              "quantity": 125,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Вершки",
              "quantity": 100,
              "unit": "мл",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Сир",
              "quantity": 150,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Куряче філе",
              "quantity": 2,
              "unit": "шт",
              "type": "meat",
              "checked": true
          }
      ]
  },
  {
      "title": "Цибулевий пиріг",
      "ingredients": [
          {
              "name": "Борошно",
              "quantity": 400,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 6,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Масло",
              "quantity": 200,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Куряче філе",
              "quantity": 2,
              "unit": "шт",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Цибуля",
              "quantity": 4,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Гауда з пажитником",
              "quantity": 300,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          }
      ]
  },
  {
      "title": "Пад тай",
      "ingredients": [
          {
              "name": "Пшенична локшина",
              "quantity": 130,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Куряче філе",
              "quantity": 1,
              "unit": "шт",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Цибуля",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Морква",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 2,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Соєвий соус",
              "quantity": 6,
              "unit": "ст л",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Арахіс",
              "quantity": 30,
              "unit": "гр",
              "type": "vegetable",
              "checked": true
          }
      ]
  },
  {
      "title": "Спрінгроли",
      "ingredients": [
          {
              "name": "Рисовий папір",
              "quantity": 8,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Скляна лапша швидкого приготування",
              "quantity": 1,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Айсберг",
              "quantity": 0.5,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Огірок",
              "quantity": 3,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Морква",
              "quantity": 2,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Горіховий соус",
              "quantity": 100,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Куряче філе",
              "quantity": 1,
              "unit": "шт",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Cолона або копчена риба",
              "quantity": 1,
              "unit": "шт",
              "type": "fish",
              "checked": true
          }
      ]
  },
  {
      "title": "Цезар",
      "ingredients": [
          {
              "name": "Айсберг",
              "quantity": 0.5,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Куряче філе",
              "quantity": 2,
              "unit": "шт",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Помідор",
              "quantity": 2,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 3,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Хліб",
              "quantity": 0.2,
              "unit": "шт",
              "type": "pastry",
              "checked": true
          },
          {
              "name": "Сметана",
              "quantity": 100,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Майонез",
              "quantity": 100,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Часник",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Соєвий соус",
              "quantity": 2,
              "unit": "ч л",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Онігірі",
      "ingredients": [
          {
              "name": "Круглий рис",
              "quantity": 200,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Норі",
              "quantity": 1,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Рисовий оцет",
              "quantity": 2,
              "unit": "ст л",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Рибна ікорка",
              "quantity": 1,
              "unit": "шт",
              "type": "fish",
              "checked": true
          },
          {
              "name": "Крабові палички",
              "quantity": 100,
              "unit": "гр",
              "type": "fish",
              "checked": true
          },
          {
              "name": "Консервований тунець",
              "quantity": 1,
              "unit": "шт",
              "type": "fish",
              "checked": true
          }
      ]
  },
  {
      "title": "Суші",
      "ingredients": [
          {
              "name": "Круглий рис",
              "quantity": 200,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Норі",
              "quantity": 4,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Рисовий оцет",
              "quantity": 2,
              "unit": "ст л",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Cолона або копчена риба",
              "quantity": 1,
              "unit": "шт",
              "type": "fish",
              "checked": true
          },
          {
              "name": "Огірок",
              "quantity": 2,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Філадельфія",
              "quantity": 100,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Авокадо",
              "quantity": 0.5,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          }
      ]
  },
  {
      "title": "Картопля по-французьки",
      "ingredients": [
          {
              "name": "Картопля",
              "quantity": 1500,
              "unit": "гр",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Свинина",
              "quantity": 500,
              "unit": "гр",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Цибуля",
              "quantity": 2,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Сир",
              "quantity": 200,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Майонез",
              "quantity": 200,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          }
      ]
  },
  {
      "title": "Борщ",
      "ingredients": [
          {
              "name": "Свинячі ребра",
              "quantity": 600,
              "unit": "гр",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Cуповий набір",
              "quantity": 1,
              "unit": "шт",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Буряк",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Томатна паста пірамідка",
              "quantity": 1,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Капуста",
              "quantity": 0.2,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Картопля",
              "quantity": 5,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Морква",
              "quantity": 2,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Цибуля",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Лавровий лист",
              "quantity": 3,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Вода",
              "quantity": 4000,
              "unit": "мл",
              "type": "other",
              "checked": true
          }
      ]
  },
  {
      "title": "Рамен",
      "ingredients": [
          {
              "name": "Яєчна локшина",
              "quantity": 150,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Свиняча вирізка",
              "quantity": 400,
              "unit": "гр",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Місо паста",
              "quantity": 1,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Cуповий набір",
              "quantity": 1,
              "unit": "шт",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Соєвий соус",
              "quantity": 6,
              "unit": "ст л",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 2,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Вода",
              "quantity": 2000,
              "unit": "мл",
              "type": "other",
              "checked": true
          }
      ]
  },
  {
      "title": "Деруни",
      "ingredients": [
          {
              "name": "Картопля",
              "quantity": 800,
              "unit": "гр",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 2,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Борошно",
              "quantity": 1,
              "unit": "ст л",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Цибуля",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          }
      ]
  },
  {
      "title": "Батер чікен",
      "ingredients": [
          {
              "name": "Куряче стегно",
              "quantity": 500,
              "unit": "гр",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Помідор",
              "quantity": 3,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Червона цибуля",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Часник",
              "quantity": 3,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Бульйон курячий",
              "quantity": 150,
              "unit": "мл",
              "type": "other",
              "checked": true
          },
          {
              "name": "Томатна паста пірамідка",
              "quantity": 1,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Масло",
              "quantity": 50,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Цукор",
              "quantity": 1,
              "unit": "ч л",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Йогурт натуральний",
              "quantity": 125,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          }
      ]
  },
  {
      "title": "Банош",
      "ingredients": [
          {
              "name": "Кукурудзяна крупа",
              "quantity": 150,
              "unit": "гр",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Молоко",
              "quantity": 450,
              "unit": "мл",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Фета",
              "quantity": 100,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Бекон",
              "quantity": 200,
              "unit": "гр",
              "type": "meat",
              "checked": true
          }
      ]
  },
  {
      "title": "Пиріжечки з куркою",
      "ingredients": [
          {
              "name": "Листкове тісто",
              "quantity": 500,
              "unit": "гр",
              "type": "frozen",
              "checked": true
          },
          {
              "name": "Куряче філе",
              "quantity": 2,
              "unit": "шт",
              "type": "meat",
              "checked": true
          },
          {
              "name": "Цибуля",
              "quantity": 2,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Масло",
              "quantity": 50,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 1,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Кунжут",
              "quantity": 1,
              "unit": "ст л",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Сир",
              "quantity": 200,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          }
      ]
  }
]

export const snackMeals: TMeal[] = [
  {
      "title": "Ягоди",
      "ingredients": [
          {
              "name": "Малина",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Ожина",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Полуниця",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Чорниця",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          }
      ]
  },
  {
      "title": "Фрукти",
      "ingredients": [
          {
              "name": "Яблуко",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Банан",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Нектарин",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Груша",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Апельсин",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Мандарин",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          }
      ]
  },
  {
      "title": "Солодощі",
      "ingredients": [
          {
              "name": "Солодощі",
              "quantity": 1,
              "unit": "шт",
              "type": "sweets",
              "checked": true
          }
      ]
  },
  {
      "title": "Сік",
      "ingredients": [
          {
              "name": "Сік",
              "quantity": 1,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Шоколадний торт",
      "ingredients": [
          {
              "name": "Какао",
              "quantity": 4,
              "unit": "ст л",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Цукор",
              "quantity": 1,
              "unit": "ст",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Яйця",
              "quantity": 2,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Масло",
              "quantity": 400,
              "unit": "гр",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Молоко",
              "quantity": 1,
              "unit": "ст",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Пісочне печиво",
              "quantity": 600,
              "unit": "гр",
              "type": "sweets",
              "checked": true
          },
          {
              "name": "Горіхи",
              "quantity": 150,
              "unit": "гр",
              "type": "vegetable",
              "checked": true
          }
      ]
  },
  {
      "title": "Вафельний торт",
      "ingredients": [
          {
              "name": "Вафельні коржі",
              "quantity": 1,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Горіхова іриска",
              "quantity": 1,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Горіхи",
              "quantity": 150,
              "unit": "гр",
              "type": "vegetable",
              "checked": true
          }
      ]
  },
  {
      "title": "Сємкі",
      "ingredients": [
          {
              "name": "Соняшникове насіння",
              "quantity": 1,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          }
      ]
  },
  {
      "title": "Овочі",
      "ingredients": [
          {
              "name": "Огірок",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Помідор",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Солодкий перець",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Морква",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Капуста",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Кабачок",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          },
          {
              "name": "Баклажан",
              "quantity": 1,
              "unit": "шт",
              "type": "vegetable",
              "checked": true
          }
      ]
  },
  {
      "title": "Соус",
      "ingredients": [
          {
              "name": "Майонез",
              "quantity": 1,
              "unit": "шт",
              "type": "dairy",
              "checked": true
          },
          {
              "name": "Кетчуп",
              "quantity": 1,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Горіховий соус",
              "quantity": 1,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Солодкий чилі",
              "quantity": 1,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Соєвий соус",
              "quantity": 1,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          },
          {
              "name": "Теріякі",
              "quantity": 1,
              "unit": "шт",
              "type": "bacaly",
              "checked": true
          }
      ]
  }
]
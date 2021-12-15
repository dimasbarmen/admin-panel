const orderStatuses = ['Новый', 'Рассчет', 'Подтвержден', 'Отложен', 'Выполнен', 'Отменен'];

const orders = [
  {
    "date": "2021-02-03",
    "time": "08:04",
    "status": "Рассчет",
    "itemCount": 5,
    "items": [
      {
        "itemCode": "rt.15170",
        "name": "Нанопятки",
        "price": 387
      },
      {
        "itemCode": "al.15210",
        "name": "Коврик для мыши Samsung",
        "price": 780
      },
      {
        "itemCode": "rt.53444",
        "name": "Ручка дверная Fate",
        "price": 950
      },
      {
        "itemCode": "al.77544",
        "name": "Детский набор Vegetables",
        "price": 763
      },
      {
        "itemCode": "rt.19985",
        "name": "Creman Ice",
        "price": 920
      },
    ],
    "sum": 3800,
    "currency": "₽",
    "customer": "Тихонова Алина Давидовна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-15",
    "time": "18:00",
    "status": "Новый",
    "itemCount": 6,
    "items": [
      {
        "itemCode": "rt.21212",
        "name": "Корм для сов Jerichno 25кг",
        "price": 15339
      },
      {
        "itemCode": "al.34326",
        "name": "Iphone 13z киберстекло",
        "price": 36544
      },
      {
        "itemCode": "rt.67215",
        "name": "Кофеварка SberCoffee",
        "price": 24012
      },
      {
        "itemCode": "al.11522",
        "name": "Тапочки Gucci 1989 год",
        "price": 13488
      },
      {
        "itemCode": "rt.38600",
        "name": "Стилус Akon Self",
        "price": 5048
      },
      {
        "itemCode": "al.45459",
        "name": "Газонокосилка Xiaomi GAZlighter",
        "price": 7476
      },
    ],
    "sum": 101907,
    "currency": "₽",
    "customer": "Чернышев Филипп Семенович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-17",
    "time": "22:45",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.75221",
        "name": "Набор для рисования Funny Family",
        "price": 12311
      },
    ],
    "sum": 12311,
    "currency": "₽",
    "customer": "Зверева Арина Николаевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Андрей",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-12",
    "time": "05:15",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.12024",
        "name": "Стил блейдс фо грасс",
        "price": 24503
      },
      {
        "itemCode": "al.24600",
        "name": "Газонокосилка Apple Magic Grass Remover",
        "price": 75500
      },
    ],
    "sum": 98003,
    "currency": "₽",
    "customer": "Филиппов Степан Васильевич",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-04",
    "time": "12:12",
    "status": "Отложен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.11647",
        "name": "Наковальня русская",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Судакова Анастасия Ильинична",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-21",
    "time": "13:32",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.66666",
        "name": "Самоучитель по Пагинации",
        "price": 5700
      },
    ],
    "sum": 5700,
    "currency": "₽",
    "customer": "Александрова Юлия Никитична",
    "loyality": "Новичок"
  },
  {
    "date": "2020-12-07",
    "time": "08:57",
    "status": "Выполнен",
    "itemCount": 3,
    "items": [
      {
        "itemCode": "rt.33258",
        "name": "Велотренажер Healthy Thighs",
        "price": 62555
      },
      {
        "itemCode": "al.44611",
        "name": "Надувной бассейн Весна",
        "price": 28017
      },
      {
        "itemCode": "rt.62573",
        "name": "Бинокль таёжный 256x Big Eye",
        "price": 27238
      },
    ],
    "sum": 117810,
    "currency": "₽",
    "customer": "Карташов Максим Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2020-11-07",
    "time": "18:52",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.54000",
        "name": "Зелье для увеличения объема фантазии 5плюс",
        "price": 17008
      },
    ],
    "sum": 17008,
    "currency": "₽",
    "customer": "Васильев Вадим Даниилович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "София",
    "loyality": "Новичок"
  },
  {
    "date": "2021-07-25",
    "time": "17:03",
    "status": "Рассчет",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.53338",
        "name": "Кеды зимние Stone Island",
        "price": 8881
      },
      {
        "itemCode": "al.21590",
        "name": "Кожаный ремень Flex Shrink",
        "price": 1658
      },
    ],
    "sum": 10539,
    "currency": "₽",
    "customer": "Сырников Кирилл Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-09-01",
    "time": "18:01",
    "status": "Новый",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.45168",
        "name": "Chevrolet Tahoe модель Zoomers",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Фриманов Максим Джокондович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-07",
    "time": "23:36",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.77748",
        "name": "Костюм парашютиста El Satan",
        "price": 97560
      },
      {
        "itemCode": "al.15684",
        "name": "Зеркало переносное Self me",
        "price": 48844
      },
    ],
    "sum": 146404,
    "currency": "₽",
    "customer": "Киркоров Антон Бедросович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-17",
    "time": "16:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Стелла",
    "loyality": "Новичок"
  },
  {
    "date": "2021-10-10",
    "time": "10:16",
    "status": "Новый",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.14166",
        "name": "Индийский чай Rahmat",
        "price": 5750
      },
      {
        "itemCode": "al.34588",
        "name": "Грузинский чай Silas",
        "price": 730
      },
    ],
    "sum": 6480,
    "currency": "₽",
    "customer": "Шульман Мария Дмитриевна",
    "loyality": "Новичок"
  },
  //////
  {
    "date": "2021-02-03",
    "time": "08:04",
    "status": "Рассчет",
    "itemCount": 5,
    "items": [
      {
        "itemCode": "rt.15170",
        "name": "Нанопятки",
        "price": 387
      },
      {
        "itemCode": "al.15210",
        "name": "Коврик для мыши Samsung",
        "price": 780
      },
      {
        "itemCode": "rt.53444",
        "name": "Ручка дверная Fate",
        "price": 950
      },
      {
        "itemCode": "al.77544",
        "name": "Детский набор Vegetables",
        "price": 763
      },
      {
        "itemCode": "rt.19985",
        "name": "Creman Ice",
        "price": 920
      },
    ],
    "sum": 3800,
    "currency": "₽",
    "customer": "Тихонова Алина Давидовна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-15",
    "time": "18:00",
    "status": "Новый",
    "itemCount": 6,
    "items": [
      {
        "itemCode": "rt.21212",
        "name": "Корм для сов Jerichno 25кг",
        "price": 15339
      },
      {
        "itemCode": "al.34326",
        "name": "Iphone 13z киберстекло",
        "price": 36544
      },
      {
        "itemCode": "rt.67215",
        "name": "Кофеварка SberCoffee",
        "price": 24012
      },
      {
        "itemCode": "al.11522",
        "name": "Тапочки Gucci 1989 год",
        "price": 13488
      },
      {
        "itemCode": "rt.38600",
        "name": "Стилус Akon Self",
        "price": 5048
      },
      {
        "itemCode": "al.45459",
        "name": "Газонокосилка Xiaomi GAZlighter",
        "price": 7476
      },
    ],
    "sum": 101907,
    "currency": "₽",
    "customer": "Чернышев Филипп Семенович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-17",
    "time": "22:45",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.75221",
        "name": "Набор для рисования Funny Family",
        "price": 12311
      },
    ],
    "sum": 12311,
    "currency": "₽",
    "customer": "Зверева Арина Николаевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Андрей",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-12",
    "time": "05:15",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.12024",
        "name": "Стил блейдс фо грасс",
        "price": 24503
      },
      {
        "itemCode": "al.24600",
        "name": "Газонокосилка Apple Magic Grass Remover",
        "price": 75500
      },
    ],
    "sum": 98003,
    "currency": "₽",
    "customer": "Филиппов Степан Васильевич",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-04",
    "time": "12:12",
    "status": "Отложен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.11647",
        "name": "Наковальня русская",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Судакова Анастасия Ильинична",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-21",
    "time": "13:32",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.66666",
        "name": "Самоучитель по Пагинации",
        "price": 5700
      },
    ],
    "sum": 5700,
    "currency": "₽",
    "customer": "Александрова Юлия Никитична",
    "loyality": "Новичок"
  },
  {
    "date": "2020-12-07",
    "time": "08:57",
    "status": "Выполнен",
    "itemCount": 3,
    "items": [
      {
        "itemCode": "rt.33258",
        "name": "Велотренажер Healthy Thighs",
        "price": 62555
      },
      {
        "itemCode": "al.44611",
        "name": "Надувной бассейн Весна",
        "price": 28017
      },
      {
        "itemCode": "rt.62573",
        "name": "Бинокль таёжный 256x Big Eye",
        "price": 27238
      },
    ],
    "sum": 117810,
    "currency": "₽",
    "customer": "Карташов Максим Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2020-11-07",
    "time": "18:52",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.54000",
        "name": "Зелье для увеличения объема фантазии 5плюс",
        "price": 17008
      },
    ],
    "sum": 17008,
    "currency": "₽",
    "customer": "Васильев Вадим Даниилович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "София",
    "loyality": "Новичок"
  },
  {
    "date": "2021-07-25",
    "time": "17:03",
    "status": "Рассчет",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.53338",
        "name": "Кеды зимние Stone Island",
        "price": 8881
      },
      {
        "itemCode": "al.21590",
        "name": "Кожаный ремень Flex Shrink",
        "price": 1658
      },
    ],
    "sum": 10539,
    "currency": "₽",
    "customer": "Сырников Кирилл Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-09-01",
    "time": "18:01",
    "status": "Новый",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.45168",
        "name": "Chevrolet Tahoe модель Zoomers",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Фриманов Максим Джокондович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-07",
    "time": "23:36",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.77748",
        "name": "Костюм парашютиста El Satan",
        "price": 97560
      },
      {
        "itemCode": "al.15684",
        "name": "Зеркало переносное Self me",
        "price": 48844
      },
    ],
    "sum": 146404,
    "currency": "₽",
    "customer": "Киркоров Антон Бедросович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-17",
    "time": "16:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Стелла",
    "loyality": "Новичок"
  },
  {
    "date": "2021-10-10",
    "time": "10:16",
    "status": "Новый",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.14166",
        "name": "Индийский чай Rahmat",
        "price": 5750
      },
      {
        "itemCode": "al.34588",
        "name": "Грузинский чай Silas",
        "price": 730
      },
    ],
    "sum": 6480,
    "currency": "₽",
    "customer": "Шульман Мария Дмитриевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-03",
    "time": "08:04",
    "status": "Рассчет",
    "itemCount": 5,
    "items": [
      {
        "itemCode": "rt.15170",
        "name": "Нанопятки",
        "price": 387
      },
      {
        "itemCode": "al.15210",
        "name": "Коврик для мыши Samsung",
        "price": 780
      },
      {
        "itemCode": "rt.53444",
        "name": "Ручка дверная Fate",
        "price": 950
      },
      {
        "itemCode": "al.77544",
        "name": "Детский набор Vegetables",
        "price": 763
      },
      {
        "itemCode": "rt.19985",
        "name": "Creman Ice",
        "price": 920
      },
    ],
    "sum": 3800,
    "currency": "₽",
    "customer": "Тихонова Алина Давидовна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-15",
    "time": "18:00",
    "status": "Новый",
    "itemCount": 6,
    "items": [
      {
        "itemCode": "rt.21212",
        "name": "Корм для сов Jerichno 25кг",
        "price": 15339
      },
      {
        "itemCode": "al.34326",
        "name": "Iphone 13z киберстекло",
        "price": 36544
      },
      {
        "itemCode": "rt.67215",
        "name": "Кофеварка SberCoffee",
        "price": 24012
      },
      {
        "itemCode": "al.11522",
        "name": "Тапочки Gucci 1989 год",
        "price": 13488
      },
      {
        "itemCode": "rt.38600",
        "name": "Стилус Akon Self",
        "price": 5048
      },
      {
        "itemCode": "al.45459",
        "name": "Газонокосилка Xiaomi GAZlighter",
        "price": 7476
      },
    ],
    "sum": 101907,
    "currency": "₽",
    "customer": "Чернышев Филипп Семенович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-17",
    "time": "22:45",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.75221",
        "name": "Набор для рисования Funny Family",
        "price": 12311
      },
    ],
    "sum": 12311,
    "currency": "₽",
    "customer": "Зверева Арина Николаевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Андрей",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-12",
    "time": "05:15",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.12024",
        "name": "Стил блейдс фо грасс",
        "price": 24503
      },
      {
        "itemCode": "al.24600",
        "name": "Газонокосилка Apple Magic Grass Remover",
        "price": 75500
      },
    ],
    "sum": 98003,
    "currency": "₽",
    "customer": "Филиппов Степан Васильевич",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-04",
    "time": "12:12",
    "status": "Отложен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.11647",
        "name": "Наковальня русская",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Судакова Анастасия Ильинична",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-21",
    "time": "13:32",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.66666",
        "name": "Самоучитель по Пагинации",
        "price": 5700
      },
    ],
    "sum": 5700,
    "currency": "₽",
    "customer": "Александрова Юлия Никитична",
    "loyality": "Новичок"
  },
  {
    "date": "2020-12-07",
    "time": "08:57",
    "status": "Выполнен",
    "itemCount": 3,
    "items": [
      {
        "itemCode": "rt.33258",
        "name": "Велотренажер Healthy Thighs",
        "price": 62555
      },
      {
        "itemCode": "al.44611",
        "name": "Надувной бассейн Весна",
        "price": 28017
      },
      {
        "itemCode": "rt.62573",
        "name": "Бинокль таёжный 256x Big Eye",
        "price": 27238
      },
    ],
    "sum": 117810,
    "currency": "₽",
    "customer": "Карташов Максим Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2020-11-07",
    "time": "18:52",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.54000",
        "name": "Зелье для увеличения объема фантазии 5плюс",
        "price": 17008
      },
    ],
    "sum": 17008,
    "currency": "₽",
    "customer": "Васильев Вадим Даниилович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "София",
    "loyality": "Новичок"
  },
  {
    "date": "2021-07-25",
    "time": "17:03",
    "status": "Рассчет",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.53338",
        "name": "Кеды зимние Stone Island",
        "price": 8881
      },
      {
        "itemCode": "al.21590",
        "name": "Кожаный ремень Flex Shrink",
        "price": 1658
      },
    ],
    "sum": 10539,
    "currency": "₽",
    "customer": "Сырников Кирилл Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-09-01",
    "time": "18:01",
    "status": "Новый",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.45168",
        "name": "Chevrolet Tahoe модель Zoomers",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Фриманов Максим Джокондович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-07",
    "time": "23:36",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.77748",
        "name": "Костюм парашютиста El Satan",
        "price": 97560
      },
      {
        "itemCode": "al.15684",
        "name": "Зеркало переносное Self me",
        "price": 48844
      },
    ],
    "sum": 146404,
    "currency": "₽",
    "customer": "Киркоров Антон Бедросович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-17",
    "time": "16:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Стелла",
    "loyality": "Новичок"
  },
  {
    "date": "2021-10-10",
    "time": "10:16",
    "status": "Новый",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.14166",
        "name": "Индийский чай Rahmat",
        "price": 5750
      },
      {
        "itemCode": "al.34588",
        "name": "Грузинский чай Silas",
        "price": 730
      },
    ],
    "sum": 6480,
    "currency": "₽",
    "customer": "Шульман Мария Дмитриевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-03",
    "time": "08:04",
    "status": "Рассчет",
    "itemCount": 5,
    "items": [
      {
        "itemCode": "rt.15170",
        "name": "Нанопятки",
        "price": 387
      },
      {
        "itemCode": "al.15210",
        "name": "Коврик для мыши Samsung",
        "price": 780
      },
      {
        "itemCode": "rt.53444",
        "name": "Ручка дверная Fate",
        "price": 950
      },
      {
        "itemCode": "al.77544",
        "name": "Детский набор Vegetables",
        "price": 763
      },
      {
        "itemCode": "rt.19985",
        "name": "Creman Ice",
        "price": 920
      },
    ],
    "sum": 3800,
    "currency": "₽",
    "customer": "Тихонова Алина Давидовна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-15",
    "time": "18:00",
    "status": "Новый",
    "itemCount": 6,
    "items": [
      {
        "itemCode": "rt.21212",
        "name": "Корм для сов Jerichno 25кг",
        "price": 15339
      },
      {
        "itemCode": "al.34326",
        "name": "Iphone 13z киберстекло",
        "price": 36544
      },
      {
        "itemCode": "rt.67215",
        "name": "Кофеварка SberCoffee",
        "price": 24012
      },
      {
        "itemCode": "al.11522",
        "name": "Тапочки Gucci 1989 год",
        "price": 13488
      },
      {
        "itemCode": "rt.38600",
        "name": "Стилус Akon Self",
        "price": 5048
      },
      {
        "itemCode": "al.45459",
        "name": "Газонокосилка Xiaomi GAZlighter",
        "price": 7476
      },
    ],
    "sum": 101907,
    "currency": "₽",
    "customer": "Чернышев Филипп Семенович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-17",
    "time": "22:45",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.75221",
        "name": "Набор для рисования Funny Family",
        "price": 12311
      },
    ],
    "sum": 12311,
    "currency": "₽",
    "customer": "Зверева Арина Николаевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Андрей",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-12",
    "time": "05:15",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.12024",
        "name": "Стил блейдс фо грасс",
        "price": 24503
      },
      {
        "itemCode": "al.24600",
        "name": "Газонокосилка Apple Magic Grass Remover",
        "price": 75500
      },
    ],
    "sum": 98003,
    "currency": "₽",
    "customer": "Филиппов Степан Васильевич",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-04",
    "time": "12:12",
    "status": "Отложен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.11647",
        "name": "Наковальня русская",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Судакова Анастасия Ильинична",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-21",
    "time": "13:32",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.66666",
        "name": "Самоучитель по Пагинации",
        "price": 5700
      },
    ],
    "sum": 5700,
    "currency": "₽",
    "customer": "Александрова Юлия Никитична",
    "loyality": "Новичок"
  },
  {
    "date": "2020-12-07",
    "time": "08:57",
    "status": "Выполнен",
    "itemCount": 3,
    "items": [
      {
        "itemCode": "rt.33258",
        "name": "Велотренажер Healthy Thighs",
        "price": 62555
      },
      {
        "itemCode": "al.44611",
        "name": "Надувной бассейн Весна",
        "price": 28017
      },
      {
        "itemCode": "rt.62573",
        "name": "Бинокль таёжный 256x Big Eye",
        "price": 27238
      },
    ],
    "sum": 117810,
    "currency": "₽",
    "customer": "Карташов Максим Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2020-11-07",
    "time": "18:52",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.54000",
        "name": "Зелье для увеличения объема фантазии 5плюс",
        "price": 17008
      },
    ],
    "sum": 17008,
    "currency": "₽",
    "customer": "Васильев Вадим Даниилович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "София",
    "loyality": "Новичок"
  },
  {
    "date": "2021-07-25",
    "time": "17:03",
    "status": "Рассчет",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.53338",
        "name": "Кеды зимние Stone Island",
        "price": 8881
      },
      {
        "itemCode": "al.21590",
        "name": "Кожаный ремень Flex Shrink",
        "price": 1658
      },
    ],
    "sum": 10539,
    "currency": "₽",
    "customer": "Сырников Кирилл Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-09-01",
    "time": "18:01",
    "status": "Новый",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.45168",
        "name": "Chevrolet Tahoe модель Zoomers",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Фриманов Максим Джокондович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-07",
    "time": "23:36",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.77748",
        "name": "Костюм парашютиста El Satan",
        "price": 97560
      },
      {
        "itemCode": "al.15684",
        "name": "Зеркало переносное Self me",
        "price": 48844
      },
    ],
    "sum": 146404,
    "currency": "₽",
    "customer": "Киркоров Антон Бедросович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-17",
    "time": "16:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Стелла",
    "loyality": "Новичок"
  },
  {
    "date": "2021-10-10",
    "time": "10:16",
    "status": "Новый",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.14166",
        "name": "Индийский чай Rahmat",
        "price": 5750
      },
      {
        "itemCode": "al.34588",
        "name": "Грузинский чай Silas",
        "price": 730
      },
    ],
    "sum": 6480,
    "currency": "₽",
    "customer": "Шульман Мария Дмитриевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-03",
    "time": "08:04",
    "status": "Рассчет",
    "itemCount": 5,
    "items": [
      {
        "itemCode": "rt.15170",
        "name": "Нанопятки",
        "price": 387
      },
      {
        "itemCode": "al.15210",
        "name": "Коврик для мыши Samsung",
        "price": 780
      },
      {
        "itemCode": "rt.53444",
        "name": "Ручка дверная Fate",
        "price": 950
      },
      {
        "itemCode": "al.77544",
        "name": "Детский набор Vegetables",
        "price": 763
      },
      {
        "itemCode": "rt.19985",
        "name": "Creman Ice",
        "price": 920
      },
    ],
    "sum": 3800,
    "currency": "₽",
    "customer": "Тихонова Алина Давидовна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-15",
    "time": "18:00",
    "status": "Новый",
    "itemCount": 6,
    "items": [
      {
        "itemCode": "rt.21212",
        "name": "Корм для сов Jerichno 25кг",
        "price": 15339
      },
      {
        "itemCode": "al.34326",
        "name": "Iphone 13z киберстекло",
        "price": 36544
      },
      {
        "itemCode": "rt.67215",
        "name": "Кофеварка SberCoffee",
        "price": 24012
      },
      {
        "itemCode": "al.11522",
        "name": "Тапочки Gucci 1989 год",
        "price": 13488
      },
      {
        "itemCode": "rt.38600",
        "name": "Стилус Akon Self",
        "price": 5048
      },
      {
        "itemCode": "al.45459",
        "name": "Газонокосилка Xiaomi GAZlighter",
        "price": 7476
      },
    ],
    "sum": 101907,
    "currency": "₽",
    "customer": "Чернышев Филипп Семенович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-17",
    "time": "22:45",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.75221",
        "name": "Набор для рисования Funny Family",
        "price": 12311
      },
    ],
    "sum": 12311,
    "currency": "₽",
    "customer": "Зверева Арина Николаевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Андрей",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-12",
    "time": "05:15",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.12024",
        "name": "Стил блейдс фо грасс",
        "price": 24503
      },
      {
        "itemCode": "al.24600",
        "name": "Газонокосилка Apple Magic Grass Remover",
        "price": 75500
      },
    ],
    "sum": 98003,
    "currency": "₽",
    "customer": "Филиппов Степан Васильевич",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-04",
    "time": "12:12",
    "status": "Отложен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.11647",
        "name": "Наковальня русская",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Судакова Анастасия Ильинична",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-21",
    "time": "13:32",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.66666",
        "name": "Самоучитель по Пагинации",
        "price": 5700
      },
    ],
    "sum": 5700,
    "currency": "₽",
    "customer": "Александрова Юлия Никитична",
    "loyality": "Новичок"
  },
  {
    "date": "2020-12-07",
    "time": "08:57",
    "status": "Выполнен",
    "itemCount": 3,
    "items": [
      {
        "itemCode": "rt.33258",
        "name": "Велотренажер Healthy Thighs",
        "price": 62555
      },
      {
        "itemCode": "al.44611",
        "name": "Надувной бассейн Весна",
        "price": 28017
      },
      {
        "itemCode": "rt.62573",
        "name": "Бинокль таёжный 256x Big Eye",
        "price": 27238
      },
    ],
    "sum": 117810,
    "currency": "₽",
    "customer": "Карташов Максим Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2020-11-07",
    "time": "18:52",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.54000",
        "name": "Зелье для увеличения объема фантазии 5плюс",
        "price": 17008
      },
    ],
    "sum": 17008,
    "currency": "₽",
    "customer": "Васильев Вадим Даниилович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "София",
    "loyality": "Новичок"
  },
  {
    "date": "2021-07-25",
    "time": "17:03",
    "status": "Рассчет",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.53338",
        "name": "Кеды зимние Stone Island",
        "price": 8881
      },
      {
        "itemCode": "al.21590",
        "name": "Кожаный ремень Flex Shrink",
        "price": 1658
      },
    ],
    "sum": 10539,
    "currency": "₽",
    "customer": "Сырников Кирилл Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-09-01",
    "time": "18:01",
    "status": "Новый",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.45168",
        "name": "Chevrolet Tahoe модель Zoomers",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Фриманов Максим Джокондович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-07",
    "time": "23:36",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.77748",
        "name": "Костюм парашютиста El Satan",
        "price": 97560
      },
      {
        "itemCode": "al.15684",
        "name": "Зеркало переносное Self me",
        "price": 48844
      },
    ],
    "sum": 146404,
    "currency": "₽",
    "customer": "Киркоров Антон Бедросович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-17",
    "time": "16:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Стелла",
    "loyality": "Новичок"
  },
  {
    "date": "2021-10-10",
    "time": "10:16",
    "status": "Новый",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.14166",
        "name": "Индийский чай Rahmat",
        "price": 5750
      },
      {
        "itemCode": "al.34588",
        "name": "Грузинский чай Silas",
        "price": 730
      },
    ],
    "sum": 6480,
    "currency": "₽",
    "customer": "Шульман Мария Дмитриевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-03",
    "time": "08:04",
    "status": "Рассчет",
    "itemCount": 5,
    "items": [
      {
        "itemCode": "rt.15170",
        "name": "Нанопятки",
        "price": 387
      },
      {
        "itemCode": "al.15210",
        "name": "Коврик для мыши Samsung",
        "price": 780
      },
      {
        "itemCode": "rt.53444",
        "name": "Ручка дверная Fate",
        "price": 950
      },
      {
        "itemCode": "al.77544",
        "name": "Детский набор Vegetables",
        "price": 763
      },
      {
        "itemCode": "rt.19985",
        "name": "Creman Ice",
        "price": 920
      },
    ],
    "sum": 3800,
    "currency": "₽",
    "customer": "Тихонова Алина Давидовна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-15",
    "time": "18:00",
    "status": "Новый",
    "itemCount": 6,
    "items": [
      {
        "itemCode": "rt.21212",
        "name": "Корм для сов Jerichno 25кг",
        "price": 15339
      },
      {
        "itemCode": "al.34326",
        "name": "Iphone 13z киберстекло",
        "price": 36544
      },
      {
        "itemCode": "rt.67215",
        "name": "Кофеварка SberCoffee",
        "price": 24012
      },
      {
        "itemCode": "al.11522",
        "name": "Тапочки Gucci 1989 год",
        "price": 13488
      },
      {
        "itemCode": "rt.38600",
        "name": "Стилус Akon Self",
        "price": 5048
      },
      {
        "itemCode": "al.45459",
        "name": "Газонокосилка Xiaomi GAZlighter",
        "price": 7476
      },
    ],
    "sum": 101907,
    "currency": "₽",
    "customer": "Чернышев Филипп Семенович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-17",
    "time": "22:45",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.75221",
        "name": "Набор для рисования Funny Family",
        "price": 12311
      },
    ],
    "sum": 12311,
    "currency": "₽",
    "customer": "Зверева Арина Николаевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Андрей",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-12",
    "time": "05:15",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.12024",
        "name": "Стил блейдс фо грасс",
        "price": 24503
      },
      {
        "itemCode": "al.24600",
        "name": "Газонокосилка Apple Magic Grass Remover",
        "price": 75500
      },
    ],
    "sum": 98003,
    "currency": "₽",
    "customer": "Филиппов Степан Васильевич",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-04",
    "time": "12:12",
    "status": "Отложен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.11647",
        "name": "Наковальня русская",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Судакова Анастасия Ильинична",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-21",
    "time": "13:32",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.66666",
        "name": "Самоучитель по Пагинации",
        "price": 5700
      },
    ],
    "sum": 5700,
    "currency": "₽",
    "customer": "Александрова Юлия Никитична",
    "loyality": "Новичок"
  },
  {
    "date": "2020-12-07",
    "time": "08:57",
    "status": "Выполнен",
    "itemCount": 3,
    "items": [
      {
        "itemCode": "rt.33258",
        "name": "Велотренажер Healthy Thighs",
        "price": 62555
      },
      {
        "itemCode": "al.44611",
        "name": "Надувной бассейн Весна",
        "price": 28017
      },
      {
        "itemCode": "rt.62573",
        "name": "Бинокль таёжный 256x Big Eye",
        "price": 27238
      },
    ],
    "sum": 117810,
    "currency": "₽",
    "customer": "Карташов Максим Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2020-11-07",
    "time": "18:52",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.54000",
        "name": "Зелье для увеличения объема фантазии 5плюс",
        "price": 17008
      },
    ],
    "sum": 17008,
    "currency": "₽",
    "customer": "Васильев Вадим Даниилович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "София",
    "loyality": "Новичок"
  },
  {
    "date": "2021-07-25",
    "time": "17:03",
    "status": "Рассчет",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.53338",
        "name": "Кеды зимние Stone Island",
        "price": 8881
      },
      {
        "itemCode": "al.21590",
        "name": "Кожаный ремень Flex Shrink",
        "price": 1658
      },
    ],
    "sum": 10539,
    "currency": "₽",
    "customer": "Сырников Кирилл Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-09-01",
    "time": "18:01",
    "status": "Новый",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.45168",
        "name": "Chevrolet Tahoe модель Zoomers",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Фриманов Максим Джокондович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-07",
    "time": "23:36",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.77748",
        "name": "Костюм парашютиста El Satan",
        "price": 97560
      },
      {
        "itemCode": "al.15684",
        "name": "Зеркало переносное Self me",
        "price": 48844
      },
    ],
    "sum": 146404,
    "currency": "₽",
    "customer": "Киркоров Антон Бедросович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-17",
    "time": "16:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Стелла",
    "loyality": "Новичок"
  },
  {
    "date": "2021-10-10",
    "time": "10:16",
    "status": "Новый",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.14166",
        "name": "Индийский чай Rahmat",
        "price": 5750
      },
      {
        "itemCode": "al.34588",
        "name": "Грузинский чай Silas",
        "price": 730
      },
    ],
    "sum": 6480,
    "currency": "₽",
    "customer": "Шульман Мария Дмитриевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-03",
    "time": "08:04",
    "status": "Рассчет",
    "itemCount": 5,
    "items": [
      {
        "itemCode": "rt.15170",
        "name": "Нанопятки",
        "price": 387
      },
      {
        "itemCode": "al.15210",
        "name": "Коврик для мыши Samsung",
        "price": 780
      },
      {
        "itemCode": "rt.53444",
        "name": "Ручка дверная Fate",
        "price": 950
      },
      {
        "itemCode": "al.77544",
        "name": "Детский набор Vegetables",
        "price": 763
      },
      {
        "itemCode": "rt.19985",
        "name": "Creman Ice",
        "price": 920
      },
    ],
    "sum": 3800,
    "currency": "₽",
    "customer": "Тихонова Алина Давидовна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-15",
    "time": "18:00",
    "status": "Новый",
    "itemCount": 6,
    "items": [
      {
        "itemCode": "rt.21212",
        "name": "Корм для сов Jerichno 25кг",
        "price": 15339
      },
      {
        "itemCode": "al.34326",
        "name": "Iphone 13z киберстекло",
        "price": 36544
      },
      {
        "itemCode": "rt.67215",
        "name": "Кофеварка SberCoffee",
        "price": 24012
      },
      {
        "itemCode": "al.11522",
        "name": "Тапочки Gucci 1989 год",
        "price": 13488
      },
      {
        "itemCode": "rt.38600",
        "name": "Стилус Akon Self",
        "price": 5048
      },
      {
        "itemCode": "al.45459",
        "name": "Газонокосилка Xiaomi GAZlighter",
        "price": 7476
      },
    ],
    "sum": 101907,
    "currency": "₽",
    "customer": "Чернышев Филипп Семенович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-17",
    "time": "22:45",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.75221",
        "name": "Набор для рисования Funny Family",
        "price": 12311
      },
    ],
    "sum": 12311,
    "currency": "₽",
    "customer": "Зверева Арина Николаевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Андрей",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-12",
    "time": "05:15",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.12024",
        "name": "Стил блейдс фо грасс",
        "price": 24503
      },
      {
        "itemCode": "al.24600",
        "name": "Газонокосилка Apple Magic Grass Remover",
        "price": 75500
      },
    ],
    "sum": 98003,
    "currency": "₽",
    "customer": "Филиппов Степан Васильевич",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-04",
    "time": "12:12",
    "status": "Отложен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.11647",
        "name": "Наковальня русская",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Судакова Анастасия Ильинична",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-21",
    "time": "13:32",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.66666",
        "name": "Самоучитель по Пагинации",
        "price": 5700
      },
    ],
    "sum": 5700,
    "currency": "₽",
    "customer": "Александрова Юлия Никитична",
    "loyality": "Новичок"
  },
  {
    "date": "2020-12-07",
    "time": "08:57",
    "status": "Выполнен",
    "itemCount": 3,
    "items": [
      {
        "itemCode": "rt.33258",
        "name": "Велотренажер Healthy Thighs",
        "price": 62555
      },
      {
        "itemCode": "al.44611",
        "name": "Надувной бассейн Весна",
        "price": 28017
      },
      {
        "itemCode": "rt.62573",
        "name": "Бинокль таёжный 256x Big Eye",
        "price": 27238
      },
    ],
    "sum": 117810,
    "currency": "₽",
    "customer": "Карташов Максим Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2020-11-07",
    "time": "18:52",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.54000",
        "name": "Зелье для увеличения объема фантазии 5плюс",
        "price": 17008
      },
    ],
    "sum": 17008,
    "currency": "₽",
    "customer": "Васильев Вадим Даниилович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "София",
    "loyality": "Новичок"
  },
  {
    "date": "2021-07-25",
    "time": "17:03",
    "status": "Рассчет",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.53338",
        "name": "Кеды зимние Stone Island",
        "price": 8881
      },
      {
        "itemCode": "al.21590",
        "name": "Кожаный ремень Flex Shrink",
        "price": 1658
      },
    ],
    "sum": 10539,
    "currency": "₽",
    "customer": "Сырников Кирилл Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-09-01",
    "time": "18:01",
    "status": "Новый",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.45168",
        "name": "Chevrolet Tahoe модель Zoomers",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Фриманов Максим Джокондович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-07",
    "time": "23:36",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.77748",
        "name": "Костюм парашютиста El Satan",
        "price": 97560
      },
      {
        "itemCode": "al.15684",
        "name": "Зеркало переносное Self me",
        "price": 48844
      },
    ],
    "sum": 146404,
    "currency": "₽",
    "customer": "Киркоров Антон Бедросович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-17",
    "time": "16:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Стелла",
    "loyality": "Новичок"
  },
  {
    "date": "2021-10-10",
    "time": "10:16",
    "status": "Новый",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.14166",
        "name": "Индийский чай Rahmat",
        "price": 5750
      },
      {
        "itemCode": "al.34588",
        "name": "Грузинский чай Silas",
        "price": 730
      },
    ],
    "sum": 6480,
    "currency": "₽",
    "customer": "Шульман Мария Дмитриевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-03",
    "time": "08:04",
    "status": "Рассчет",
    "itemCount": 5,
    "items": [
      {
        "itemCode": "rt.15170",
        "name": "Нанопятки",
        "price": 387
      },
      {
        "itemCode": "al.15210",
        "name": "Коврик для мыши Samsung",
        "price": 780
      },
      {
        "itemCode": "rt.53444",
        "name": "Ручка дверная Fate",
        "price": 950
      },
      {
        "itemCode": "al.77544",
        "name": "Детский набор Vegetables",
        "price": 763
      },
      {
        "itemCode": "rt.19985",
        "name": "Creman Ice",
        "price": 920
      },
    ],
    "sum": 3800,
    "currency": "₽",
    "customer": "Тихонова Алина Давидовна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-15",
    "time": "18:00",
    "status": "Новый",
    "itemCount": 6,
    "items": [
      {
        "itemCode": "rt.21212",
        "name": "Корм для сов Jerichno 25кг",
        "price": 15339
      },
      {
        "itemCode": "al.34326",
        "name": "Iphone 13z киберстекло",
        "price": 36544
      },
      {
        "itemCode": "rt.67215",
        "name": "Кофеварка SberCoffee",
        "price": 24012
      },
      {
        "itemCode": "al.11522",
        "name": "Тапочки Gucci 1989 год",
        "price": 13488
      },
      {
        "itemCode": "rt.38600",
        "name": "Стилус Akon Self",
        "price": 5048
      },
      {
        "itemCode": "al.45459",
        "name": "Газонокосилка Xiaomi GAZlighter",
        "price": 7476
      },
    ],
    "sum": 101907,
    "currency": "₽",
    "customer": "Чернышев Филипп Семенович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-17",
    "time": "22:45",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.75221",
        "name": "Набор для рисования Funny Family",
        "price": 12311
      },
    ],
    "sum": 12311,
    "currency": "₽",
    "customer": "Зверева Арина Николаевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Андрей",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-12",
    "time": "05:15",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.12024",
        "name": "Стил блейдс фо грасс",
        "price": 24503
      },
      {
        "itemCode": "al.24600",
        "name": "Газонокосилка Apple Magic Grass Remover",
        "price": 75500
      },
    ],
    "sum": 98003,
    "currency": "₽",
    "customer": "Филиппов Степан Васильевич",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-04",
    "time": "12:12",
    "status": "Отложен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.11647",
        "name": "Наковальня русская",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Судакова Анастасия Ильинична",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-21",
    "time": "13:32",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.66666",
        "name": "Самоучитель по Пагинации",
        "price": 5700
      },
    ],
    "sum": 5700,
    "currency": "₽",
    "customer": "Александрова Юлия Никитична",
    "loyality": "Новичок"
  },
  {
    "date": "2020-12-07",
    "time": "08:57",
    "status": "Выполнен",
    "itemCount": 3,
    "items": [
      {
        "itemCode": "rt.33258",
        "name": "Велотренажер Healthy Thighs",
        "price": 62555
      },
      {
        "itemCode": "al.44611",
        "name": "Надувной бассейн Весна",
        "price": 28017
      },
      {
        "itemCode": "rt.62573",
        "name": "Бинокль таёжный 256x Big Eye",
        "price": 27238
      },
    ],
    "sum": 117810,
    "currency": "₽",
    "customer": "Карташов Максим Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2020-11-07",
    "time": "18:52",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.54000",
        "name": "Зелье для увеличения объема фантазии 5плюс",
        "price": 17008
      },
    ],
    "sum": 17008,
    "currency": "₽",
    "customer": "Васильев Вадим Даниилович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "София",
    "loyality": "Новичок"
  },
  {
    "date": "2021-07-25",
    "time": "17:03",
    "status": "Рассчет",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.53338",
        "name": "Кеды зимние Stone Island",
        "price": 8881
      },
      {
        "itemCode": "al.21590",
        "name": "Кожаный ремень Flex Shrink",
        "price": 1658
      },
    ],
    "sum": 10539,
    "currency": "₽",
    "customer": "Сырников Кирилл Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-09-01",
    "time": "18:01",
    "status": "Новый",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.45168",
        "name": "Chevrolet Tahoe модель Zoomers",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Фриманов Максим Джокондович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-07",
    "time": "23:36",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.77748",
        "name": "Костюм парашютиста El Satan",
        "price": 97560
      },
      {
        "itemCode": "al.15684",
        "name": "Зеркало переносное Self me",
        "price": 48844
      },
    ],
    "sum": 146404,
    "currency": "₽",
    "customer": "Киркоров Антон Бедросович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-17",
    "time": "16:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Стелла",
    "loyality": "Новичок"
  },
  {
    "date": "2021-10-10",
    "time": "10:16",
    "status": "Новый",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.14166",
        "name": "Индийский чай Rahmat",
        "price": 5750
      },
      {
        "itemCode": "al.34588",
        "name": "Грузинский чай Silas",
        "price": 730
      },
    ],
    "sum": 6480,
    "currency": "₽",
    "customer": "Шульман Мария Дмитриевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-03",
    "time": "08:04",
    "status": "Рассчет",
    "itemCount": 5,
    "items": [
      {
        "itemCode": "rt.15170",
        "name": "Нанопятки",
        "price": 387
      },
      {
        "itemCode": "al.15210",
        "name": "Коврик для мыши Samsung",
        "price": 780
      },
      {
        "itemCode": "rt.53444",
        "name": "Ручка дверная Fate",
        "price": 950
      },
      {
        "itemCode": "al.77544",
        "name": "Детский набор Vegetables",
        "price": 763
      },
      {
        "itemCode": "rt.19985",
        "name": "Creman Ice",
        "price": 920
      },
    ],
    "sum": 3800,
    "currency": "₽",
    "customer": "Тихонова Алина Давидовна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-15",
    "time": "18:00",
    "status": "Новый",
    "itemCount": 6,
    "items": [
      {
        "itemCode": "rt.21212",
        "name": "Корм для сов Jerichno 25кг",
        "price": 15339
      },
      {
        "itemCode": "al.34326",
        "name": "Iphone 13z киберстекло",
        "price": 36544
      },
      {
        "itemCode": "rt.67215",
        "name": "Кофеварка SberCoffee",
        "price": 24012
      },
      {
        "itemCode": "al.11522",
        "name": "Тапочки Gucci 1989 год",
        "price": 13488
      },
      {
        "itemCode": "rt.38600",
        "name": "Стилус Akon Self",
        "price": 5048
      },
      {
        "itemCode": "al.45459",
        "name": "Газонокосилка Xiaomi GAZlighter",
        "price": 7476
      },
    ],
    "sum": 101907,
    "currency": "₽",
    "customer": "Чернышев Филипп Семенович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-17",
    "time": "22:45",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.75221",
        "name": "Набор для рисования Funny Family",
        "price": 12311
      },
    ],
    "sum": 12311,
    "currency": "₽",
    "customer": "Зверева Арина Николаевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Андрей",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-12",
    "time": "05:15",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.12024",
        "name": "Стил блейдс фо грасс",
        "price": 24503
      },
      {
        "itemCode": "al.24600",
        "name": "Газонокосилка Apple Magic Grass Remover",
        "price": 75500
      },
    ],
    "sum": 98003,
    "currency": "₽",
    "customer": "Филиппов Степан Васильевич",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-04",
    "time": "12:12",
    "status": "Отложен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.11647",
        "name": "Наковальня русская",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Судакова Анастасия Ильинична",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-21",
    "time": "13:32",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.66666",
        "name": "Самоучитель по Пагинации",
        "price": 5700
      },
    ],
    "sum": 5700,
    "currency": "₽",
    "customer": "Александрова Юлия Никитична",
    "loyality": "Новичок"
  },
  {
    "date": "2020-12-07",
    "time": "08:57",
    "status": "Выполнен",
    "itemCount": 3,
    "items": [
      {
        "itemCode": "rt.33258",
        "name": "Велотренажер Healthy Thighs",
        "price": 62555
      },
      {
        "itemCode": "al.44611",
        "name": "Надувной бассейн Весна",
        "price": 28017
      },
      {
        "itemCode": "rt.62573",
        "name": "Бинокль таёжный 256x Big Eye",
        "price": 27238
      },
    ],
    "sum": 117810,
    "currency": "₽",
    "customer": "Карташов Максим Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2020-11-07",
    "time": "18:52",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.54000",
        "name": "Зелье для увеличения объема фантазии 5плюс",
        "price": 17008
      },
    ],
    "sum": 17008,
    "currency": "₽",
    "customer": "Васильев Вадим Даниилович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "София",
    "loyality": "Новичок"
  },
  {
    "date": "2021-07-25",
    "time": "17:03",
    "status": "Рассчет",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.53338",
        "name": "Кеды зимние Stone Island",
        "price": 8881
      },
      {
        "itemCode": "al.21590",
        "name": "Кожаный ремень Flex Shrink",
        "price": 1658
      },
    ],
    "sum": 10539,
    "currency": "₽",
    "customer": "Сырников Кирилл Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-09-01",
    "time": "18:01",
    "status": "Новый",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.45168",
        "name": "Chevrolet Tahoe модель Zoomers",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Фриманов Максим Джокондович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-07",
    "time": "23:36",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.77748",
        "name": "Костюм парашютиста El Satan",
        "price": 97560
      },
      {
        "itemCode": "al.15684",
        "name": "Зеркало переносное Self me",
        "price": 48844
      },
    ],
    "sum": 146404,
    "currency": "₽",
    "customer": "Киркоров Антон Бедросович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-17",
    "time": "16:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Стелла",
    "loyality": "Новичок"
  },
  {
    "date": "2021-10-10",
    "time": "10:16",
    "status": "Новый",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.14166",
        "name": "Индийский чай Rahmat",
        "price": 5750
      },
      {
        "itemCode": "al.34588",
        "name": "Грузинский чай Silas",
        "price": 730
      },
    ],
    "sum": 6480,
    "currency": "₽",
    "customer": "Шульман Мария Дмитриевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-03",
    "time": "08:04",
    "status": "Рассчет",
    "itemCount": 5,
    "items": [
      {
        "itemCode": "rt.15170",
        "name": "Нанопятки",
        "price": 387
      },
      {
        "itemCode": "al.15210",
        "name": "Коврик для мыши Samsung",
        "price": 780
      },
      {
        "itemCode": "rt.53444",
        "name": "Ручка дверная Fate",
        "price": 950
      },
      {
        "itemCode": "al.77544",
        "name": "Детский набор Vegetables",
        "price": 763
      },
      {
        "itemCode": "rt.19985",
        "name": "Creman Ice",
        "price": 920
      },
    ],
    "sum": 3800,
    "currency": "₽",
    "customer": "Тихонова Алина Давидовна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-15",
    "time": "18:00",
    "status": "Новый",
    "itemCount": 6,
    "items": [
      {
        "itemCode": "rt.21212",
        "name": "Корм для сов Jerichno 25кг",
        "price": 15339
      },
      {
        "itemCode": "al.34326",
        "name": "Iphone 13z киберстекло",
        "price": 36544
      },
      {
        "itemCode": "rt.67215",
        "name": "Кофеварка SberCoffee",
        "price": 24012
      },
      {
        "itemCode": "al.11522",
        "name": "Тапочки Gucci 1989 год",
        "price": 13488
      },
      {
        "itemCode": "rt.38600",
        "name": "Стилус Akon Self",
        "price": 5048
      },
      {
        "itemCode": "al.45459",
        "name": "Газонокосилка Xiaomi GAZlighter",
        "price": 7476
      },
    ],
    "sum": 101907,
    "currency": "₽",
    "customer": "Чернышев Филипп Семенович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-17",
    "time": "22:45",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.75221",
        "name": "Набор для рисования Funny Family",
        "price": 12311
      },
    ],
    "sum": 12311,
    "currency": "₽",
    "customer": "Зверева Арина Николаевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Андрей",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-12",
    "time": "05:15",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.12024",
        "name": "Стил блейдс фо грасс",
        "price": 24503
      },
      {
        "itemCode": "al.24600",
        "name": "Газонокосилка Apple Magic Grass Remover",
        "price": 75500
      },
    ],
    "sum": 98003,
    "currency": "₽",
    "customer": "Филиппов Степан Васильевич",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-04",
    "time": "12:12",
    "status": "Отложен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.11647",
        "name": "Наковальня русская",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Судакова Анастасия Ильинична",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-21",
    "time": "13:32",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.66666",
        "name": "Самоучитель по Пагинации",
        "price": 5700
      },
    ],
    "sum": 5700,
    "currency": "₽",
    "customer": "Александрова Юлия Никитична",
    "loyality": "Новичок"
  },
  {
    "date": "2020-12-07",
    "time": "08:57",
    "status": "Выполнен",
    "itemCount": 3,
    "items": [
      {
        "itemCode": "rt.33258",
        "name": "Велотренажер Healthy Thighs",
        "price": 62555
      },
      {
        "itemCode": "al.44611",
        "name": "Надувной бассейн Весна",
        "price": 28017
      },
      {
        "itemCode": "rt.62573",
        "name": "Бинокль таёжный 256x Big Eye",
        "price": 27238
      },
    ],
    "sum": 117810,
    "currency": "₽",
    "customer": "Карташов Максим Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2020-11-07",
    "time": "18:52",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.54000",
        "name": "Зелье для увеличения объема фантазии 5плюс",
        "price": 17008
      },
    ],
    "sum": 17008,
    "currency": "₽",
    "customer": "Васильев Вадим Даниилович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "София",
    "loyality": "Новичок"
  },
  {
    "date": "2021-07-25",
    "time": "17:03",
    "status": "Рассчет",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.53338",
        "name": "Кеды зимние Stone Island",
        "price": 8881
      },
      {
        "itemCode": "al.21590",
        "name": "Кожаный ремень Flex Shrink",
        "price": 1658
      },
    ],
    "sum": 10539,
    "currency": "₽",
    "customer": "Сырников Кирилл Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-09-01",
    "time": "18:01",
    "status": "Новый",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.45168",
        "name": "Chevrolet Tahoe модель Zoomers",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Фриманов Максим Джокондович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-07",
    "time": "23:36",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.77748",
        "name": "Костюм парашютиста El Satan",
        "price": 97560
      },
      {
        "itemCode": "al.15684",
        "name": "Зеркало переносное Self me",
        "price": 48844
      },
    ],
    "sum": 146404,
    "currency": "₽",
    "customer": "Киркоров Антон Бедросович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-17",
    "time": "16:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Стелла",
    "loyality": "Новичок"
  },
  {
    "date": "2021-10-10",
    "time": "10:16",
    "status": "Новый",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.14166",
        "name": "Индийский чай Rahmat",
        "price": 5750
      },
      {
        "itemCode": "al.34588",
        "name": "Грузинский чай Silas",
        "price": 730
      },
    ],
    "sum": 6480,
    "currency": "₽",
    "customer": "Шульман Мария Дмитриевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-03",
    "time": "08:04",
    "status": "Рассчет",
    "itemCount": 5,
    "items": [
      {
        "itemCode": "rt.15170",
        "name": "Нанопятки",
        "price": 387
      },
      {
        "itemCode": "al.15210",
        "name": "Коврик для мыши Samsung",
        "price": 780
      },
      {
        "itemCode": "rt.53444",
        "name": "Ручка дверная Fate",
        "price": 950
      },
      {
        "itemCode": "al.77544",
        "name": "Детский набор Vegetables",
        "price": 763
      },
      {
        "itemCode": "rt.19985",
        "name": "Creman Ice",
        "price": 920
      },
    ],
    "sum": 3800,
    "currency": "₽",
    "customer": "Тихонова Алина Давидовна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-15",
    "time": "18:00",
    "status": "Новый",
    "itemCount": 6,
    "items": [
      {
        "itemCode": "rt.21212",
        "name": "Корм для сов Jerichno 25кг",
        "price": 15339
      },
      {
        "itemCode": "al.34326",
        "name": "Iphone 13z киберстекло",
        "price": 36544
      },
      {
        "itemCode": "rt.67215",
        "name": "Кофеварка SberCoffee",
        "price": 24012
      },
      {
        "itemCode": "al.11522",
        "name": "Тапочки Gucci 1989 год",
        "price": 13488
      },
      {
        "itemCode": "rt.38600",
        "name": "Стилус Akon Self",
        "price": 5048
      },
      {
        "itemCode": "al.45459",
        "name": "Газонокосилка Xiaomi GAZlighter",
        "price": 7476
      },
    ],
    "sum": 101907,
    "currency": "₽",
    "customer": "Чернышев Филипп Семенович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-17",
    "time": "22:45",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.75221",
        "name": "Набор для рисования Funny Family",
        "price": 12311
      },
    ],
    "sum": 12311,
    "currency": "₽",
    "customer": "Зверева Арина Николаевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Андрей",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-12",
    "time": "05:15",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.12024",
        "name": "Стил блейдс фо грасс",
        "price": 24503
      },
      {
        "itemCode": "al.24600",
        "name": "Газонокосилка Apple Magic Grass Remover",
        "price": 75500
      },
    ],
    "sum": 98003,
    "currency": "₽",
    "customer": "Филиппов Степан Васильевич",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-04",
    "time": "12:12",
    "status": "Отложен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.11647",
        "name": "Наковальня русская",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Судакова Анастасия Ильинична",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-21",
    "time": "13:32",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.66666",
        "name": "Самоучитель по Пагинации",
        "price": 5700
      },
    ],
    "sum": 5700,
    "currency": "₽",
    "customer": "Александрова Юлия Никитична",
    "loyality": "Новичок"
  },
  {
    "date": "2020-12-07",
    "time": "08:57",
    "status": "Выполнен",
    "itemCount": 3,
    "items": [
      {
        "itemCode": "rt.33258",
        "name": "Велотренажер Healthy Thighs",
        "price": 62555
      },
      {
        "itemCode": "al.44611",
        "name": "Надувной бассейн Весна",
        "price": 28017
      },
      {
        "itemCode": "rt.62573",
        "name": "Бинокль таёжный 256x Big Eye",
        "price": 27238
      },
    ],
    "sum": 117810,
    "currency": "₽",
    "customer": "Карташов Максим Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2020-11-07",
    "time": "18:52",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.54000",
        "name": "Зелье для увеличения объема фантазии 5плюс",
        "price": 17008
      },
    ],
    "sum": 17008,
    "currency": "₽",
    "customer": "Васильев Вадим Даниилович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "София",
    "loyality": "Новичок"
  },
  {
    "date": "2021-07-25",
    "time": "17:03",
    "status": "Рассчет",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.53338",
        "name": "Кеды зимние Stone Island",
        "price": 8881
      },
      {
        "itemCode": "al.21590",
        "name": "Кожаный ремень Flex Shrink",
        "price": 1658
      },
    ],
    "sum": 10539,
    "currency": "₽",
    "customer": "Сырников Кирилл Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-09-01",
    "time": "18:01",
    "status": "Новый",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.45168",
        "name": "Chevrolet Tahoe модель Zoomers",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Фриманов Максим Джокондович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-07",
    "time": "23:36",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.77748",
        "name": "Костюм парашютиста El Satan",
        "price": 97560
      },
      {
        "itemCode": "al.15684",
        "name": "Зеркало переносное Self me",
        "price": 48844
      },
    ],
    "sum": 146404,
    "currency": "₽",
    "customer": "Киркоров Антон Бедросович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-17",
    "time": "16:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Стелла",
    "loyality": "Новичок"
  },
  {
    "date": "2021-10-10",
    "time": "10:16",
    "status": "Новый",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.14166",
        "name": "Индийский чай Rahmat",
        "price": 5750
      },
      {
        "itemCode": "al.34588",
        "name": "Грузинский чай Silas",
        "price": 730
      },
    ],
    "sum": 6480,
    "currency": "₽",
    "customer": "Шульман Мария Дмитриевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-03",
    "time": "08:04",
    "status": "Рассчет",
    "itemCount": 5,
    "items": [
      {
        "itemCode": "rt.15170",
        "name": "Нанопятки",
        "price": 387
      },
      {
        "itemCode": "al.15210",
        "name": "Коврик для мыши Samsung",
        "price": 780
      },
      {
        "itemCode": "rt.53444",
        "name": "Ручка дверная Fate",
        "price": 950
      },
      {
        "itemCode": "al.77544",
        "name": "Детский набор Vegetables",
        "price": 763
      },
      {
        "itemCode": "rt.19985",
        "name": "Creman Ice",
        "price": 920
      },
    ],
    "sum": 3800,
    "currency": "₽",
    "customer": "Тихонова Алина Давидовна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-15",
    "time": "18:00",
    "status": "Новый",
    "itemCount": 6,
    "items": [
      {
        "itemCode": "rt.21212",
        "name": "Корм для сов Jerichno 25кг",
        "price": 15339
      },
      {
        "itemCode": "al.34326",
        "name": "Iphone 13z киберстекло",
        "price": 36544
      },
      {
        "itemCode": "rt.67215",
        "name": "Кофеварка SberCoffee",
        "price": 24012
      },
      {
        "itemCode": "al.11522",
        "name": "Тапочки Gucci 1989 год",
        "price": 13488
      },
      {
        "itemCode": "rt.38600",
        "name": "Стилус Akon Self",
        "price": 5048
      },
      {
        "itemCode": "al.45459",
        "name": "Газонокосилка Xiaomi GAZlighter",
        "price": 7476
      },
    ],
    "sum": 101907,
    "currency": "₽",
    "customer": "Чернышев Филипп Семенович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-17",
    "time": "22:45",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.75221",
        "name": "Набор для рисования Funny Family",
        "price": 12311
      },
    ],
    "sum": 12311,
    "currency": "₽",
    "customer": "Зверева Арина Николаевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Андрей",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-12",
    "time": "05:15",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.12024",
        "name": "Стил блейдс фо грасс",
        "price": 24503
      },
      {
        "itemCode": "al.24600",
        "name": "Газонокосилка Apple Magic Grass Remover",
        "price": 75500
      },
    ],
    "sum": 98003,
    "currency": "₽",
    "customer": "Филиппов Степан Васильевич",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-04",
    "time": "12:12",
    "status": "Отложен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.11647",
        "name": "Наковальня русская",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Судакова Анастасия Ильинична",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-21",
    "time": "13:32",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.66666",
        "name": "Самоучитель по Пагинации",
        "price": 5700
      },
    ],
    "sum": 5700,
    "currency": "₽",
    "customer": "Александрова Юлия Никитична",
    "loyality": "Новичок"
  },
  {
    "date": "2020-12-07",
    "time": "08:57",
    "status": "Выполнен",
    "itemCount": 3,
    "items": [
      {
        "itemCode": "rt.33258",
        "name": "Велотренажер Healthy Thighs",
        "price": 62555
      },
      {
        "itemCode": "al.44611",
        "name": "Надувной бассейн Весна",
        "price": 28017
      },
      {
        "itemCode": "rt.62573",
        "name": "Бинокль таёжный 256x Big Eye",
        "price": 27238
      },
    ],
    "sum": 117810,
    "currency": "₽",
    "customer": "Карташов Максим Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2020-11-07",
    "time": "18:52",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.54000",
        "name": "Зелье для увеличения объема фантазии 5плюс",
        "price": 17008
      },
    ],
    "sum": 17008,
    "currency": "₽",
    "customer": "Васильев Вадим Даниилович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "София",
    "loyality": "Новичок"
  },
  {
    "date": "2021-07-25",
    "time": "17:03",
    "status": "Рассчет",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.53338",
        "name": "Кеды зимние Stone Island",
        "price": 8881
      },
      {
        "itemCode": "al.21590",
        "name": "Кожаный ремень Flex Shrink",
        "price": 1658
      },
    ],
    "sum": 10539,
    "currency": "₽",
    "customer": "Сырников Кирилл Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-09-01",
    "time": "18:01",
    "status": "Новый",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.45168",
        "name": "Chevrolet Tahoe модель Zoomers",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Фриманов Максим Джокондович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-07",
    "time": "23:36",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.77748",
        "name": "Костюм парашютиста El Satan",
        "price": 97560
      },
      {
        "itemCode": "al.15684",
        "name": "Зеркало переносное Self me",
        "price": 48844
      },
    ],
    "sum": 146404,
    "currency": "₽",
    "customer": "Киркоров Антон Бедросович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-17",
    "time": "16:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Стелла",
    "loyality": "Новичок"
  },
  {
    "date": "2021-10-10",
    "time": "10:16",
    "status": "Новый",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.14166",
        "name": "Индийский чай Rahmat",
        "price": 5750
      },
      {
        "itemCode": "al.34588",
        "name": "Грузинский чай Silas",
        "price": 730
      },
    ],
    "sum": 6480,
    "currency": "₽",
    "customer": "Шульман Мария Дмитриевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-03",
    "time": "08:04",
    "status": "Рассчет",
    "itemCount": 5,
    "items": [
      {
        "itemCode": "rt.15170",
        "name": "Нанопятки",
        "price": 387
      },
      {
        "itemCode": "al.15210",
        "name": "Коврик для мыши Samsung",
        "price": 780
      },
      {
        "itemCode": "rt.53444",
        "name": "Ручка дверная Fate",
        "price": 950
      },
      {
        "itemCode": "al.77544",
        "name": "Детский набор Vegetables",
        "price": 763
      },
      {
        "itemCode": "rt.19985",
        "name": "Creman Ice",
        "price": 920
      },
    ],
    "sum": 3800,
    "currency": "₽",
    "customer": "Тихонова Алина Давидовна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-15",
    "time": "18:00",
    "status": "Новый",
    "itemCount": 6,
    "items": [
      {
        "itemCode": "rt.21212",
        "name": "Корм для сов Jerichno 25кг",
        "price": 15339
      },
      {
        "itemCode": "al.34326",
        "name": "Iphone 13z киберстекло",
        "price": 36544
      },
      {
        "itemCode": "rt.67215",
        "name": "Кофеварка SberCoffee",
        "price": 24012
      },
      {
        "itemCode": "al.11522",
        "name": "Тапочки Gucci 1989 год",
        "price": 13488
      },
      {
        "itemCode": "rt.38600",
        "name": "Стилус Akon Self",
        "price": 5048
      },
      {
        "itemCode": "al.45459",
        "name": "Газонокосилка Xiaomi GAZlighter",
        "price": 7476
      },
    ],
    "sum": 101907,
    "currency": "₽",
    "customer": "Чернышев Филипп Семенович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-17",
    "time": "22:45",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.75221",
        "name": "Набор для рисования Funny Family",
        "price": 12311
      },
    ],
    "sum": 12311,
    "currency": "₽",
    "customer": "Зверева Арина Николаевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Андрей",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-12",
    "time": "05:15",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.12024",
        "name": "Стил блейдс фо грасс",
        "price": 24503
      },
      {
        "itemCode": "al.24600",
        "name": "Газонокосилка Apple Magic Grass Remover",
        "price": 75500
      },
    ],
    "sum": 98003,
    "currency": "₽",
    "customer": "Филиппов Степан Васильевич",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-04",
    "time": "12:12",
    "status": "Отложен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.11647",
        "name": "Наковальня русская",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Судакова Анастасия Ильинична",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-21",
    "time": "13:32",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.66666",
        "name": "Самоучитель по Пагинации",
        "price": 5700
      },
    ],
    "sum": 5700,
    "currency": "₽",
    "customer": "Александрова Юлия Никитична",
    "loyality": "Новичок"
  },
  {
    "date": "2020-12-07",
    "time": "08:57",
    "status": "Выполнен",
    "itemCount": 3,
    "items": [
      {
        "itemCode": "rt.33258",
        "name": "Велотренажер Healthy Thighs",
        "price": 62555
      },
      {
        "itemCode": "al.44611",
        "name": "Надувной бассейн Весна",
        "price": 28017
      },
      {
        "itemCode": "rt.62573",
        "name": "Бинокль таёжный 256x Big Eye",
        "price": 27238
      },
    ],
    "sum": 117810,
    "currency": "₽",
    "customer": "Карташов Максим Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2020-11-07",
    "time": "18:52",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.54000",
        "name": "Зелье для увеличения объема фантазии 5плюс",
        "price": 17008
      },
    ],
    "sum": 17008,
    "currency": "₽",
    "customer": "Васильев Вадим Даниилович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "София",
    "loyality": "Новичок"
  },
  {
    "date": "2021-07-25",
    "time": "17:03",
    "status": "Рассчет",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.53338",
        "name": "Кеды зимние Stone Island",
        "price": 8881
      },
      {
        "itemCode": "al.21590",
        "name": "Кожаный ремень Flex Shrink",
        "price": 1658
      },
    ],
    "sum": 10539,
    "currency": "₽",
    "customer": "Сырников Кирилл Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-09-01",
    "time": "18:01",
    "status": "Новый",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.45168",
        "name": "Chevrolet Tahoe модель Zoomers",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Фриманов Максим Джокондович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-07",
    "time": "23:36",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.77748",
        "name": "Костюм парашютиста El Satan",
        "price": 97560
      },
      {
        "itemCode": "al.15684",
        "name": "Зеркало переносное Self me",
        "price": 48844
      },
    ],
    "sum": 146404,
    "currency": "₽",
    "customer": "Киркоров Антон Бедросович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-17",
    "time": "16:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Стелла",
    "loyality": "Новичок"
  },
  {
    "date": "2021-10-10",
    "time": "10:16",
    "status": "Новый",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.14166",
        "name": "Индийский чай Rahmat",
        "price": 5750
      },
      {
        "itemCode": "al.34588",
        "name": "Грузинский чай Silas",
        "price": 730
      },
    ],
    "sum": 6480,
    "currency": "₽",
    "customer": "Шульман Мария Дмитриевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-03",
    "time": "08:04",
    "status": "Рассчет",
    "itemCount": 5,
    "items": [
      {
        "itemCode": "rt.15170",
        "name": "Нанопятки",
        "price": 387
      },
      {
        "itemCode": "al.15210",
        "name": "Коврик для мыши Samsung",
        "price": 780
      },
      {
        "itemCode": "rt.53444",
        "name": "Ручка дверная Fate",
        "price": 950
      },
      {
        "itemCode": "al.77544",
        "name": "Детский набор Vegetables",
        "price": 763
      },
      {
        "itemCode": "rt.19985",
        "name": "Creman Ice",
        "price": 920
      },
    ],
    "sum": 3800,
    "currency": "₽",
    "customer": "Тихонова Алина Давидовна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-15",
    "time": "18:00",
    "status": "Новый",
    "itemCount": 6,
    "items": [
      {
        "itemCode": "rt.21212",
        "name": "Корм для сов Jerichno 25кг",
        "price": 15339
      },
      {
        "itemCode": "al.34326",
        "name": "Iphone 13z киберстекло",
        "price": 36544
      },
      {
        "itemCode": "rt.67215",
        "name": "Кофеварка SberCoffee",
        "price": 24012
      },
      {
        "itemCode": "al.11522",
        "name": "Тапочки Gucci 1989 год",
        "price": 13488
      },
      {
        "itemCode": "rt.38600",
        "name": "Стилус Akon Self",
        "price": 5048
      },
      {
        "itemCode": "al.45459",
        "name": "Газонокосилка Xiaomi GAZlighter",
        "price": 7476
      },
    ],
    "sum": 101907,
    "currency": "₽",
    "customer": "Чернышев Филипп Семенович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-17",
    "time": "22:45",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.75221",
        "name": "Набор для рисования Funny Family",
        "price": 12311
      },
    ],
    "sum": 12311,
    "currency": "₽",
    "customer": "Зверева Арина Николаевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Андрей",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-12",
    "time": "05:15",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.12024",
        "name": "Стил блейдс фо грасс",
        "price": 24503
      },
      {
        "itemCode": "al.24600",
        "name": "Газонокосилка Apple Magic Grass Remover",
        "price": 75500
      },
    ],
    "sum": 98003,
    "currency": "₽",
    "customer": "Филиппов Степан Васильевич",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-04",
    "time": "12:12",
    "status": "Отложен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.11647",
        "name": "Наковальня русская",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Судакова Анастасия Ильинична",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-21",
    "time": "13:32",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.66666",
        "name": "Самоучитель по Пагинации",
        "price": 5700
      },
    ],
    "sum": 5700,
    "currency": "₽",
    "customer": "Александрова Юлия Никитична",
    "loyality": "Новичок"
  },
  {
    "date": "2020-12-07",
    "time": "08:57",
    "status": "Выполнен",
    "itemCount": 3,
    "items": [
      {
        "itemCode": "rt.33258",
        "name": "Велотренажер Healthy Thighs",
        "price": 62555
      },
      {
        "itemCode": "al.44611",
        "name": "Надувной бассейн Весна",
        "price": 28017
      },
      {
        "itemCode": "rt.62573",
        "name": "Бинокль таёжный 256x Big Eye",
        "price": 27238
      },
    ],
    "sum": 117810,
    "currency": "₽",
    "customer": "Карташов Максим Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2020-11-07",
    "time": "18:52",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.54000",
        "name": "Зелье для увеличения объема фантазии 5плюс",
        "price": 17008
      },
    ],
    "sum": 17008,
    "currency": "₽",
    "customer": "Васильев Вадим Даниилович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "София",
    "loyality": "Новичок"
  },
  {
    "date": "2021-07-25",
    "time": "17:03",
    "status": "Рассчет",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.53338",
        "name": "Кеды зимние Stone Island",
        "price": 8881
      },
      {
        "itemCode": "al.21590",
        "name": "Кожаный ремень Flex Shrink",
        "price": 1658
      },
    ],
    "sum": 10539,
    "currency": "₽",
    "customer": "Сырников Кирилл Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-09-01",
    "time": "18:01",
    "status": "Новый",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.45168",
        "name": "Chevrolet Tahoe модель Zoomers",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Фриманов Максим Джокондович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-07",
    "time": "23:36",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.77748",
        "name": "Костюм парашютиста El Satan",
        "price": 97560
      },
      {
        "itemCode": "al.15684",
        "name": "Зеркало переносное Self me",
        "price": 48844
      },
    ],
    "sum": 146404,
    "currency": "₽",
    "customer": "Киркоров Антон Бедросович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-17",
    "time": "16:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Стелла",
    "loyality": "Новичок"
  },
  {
    "date": "2021-10-10",
    "time": "10:16",
    "status": "Новый",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.14166",
        "name": "Индийский чай Rahmat",
        "price": 5750
      },
      {
        "itemCode": "al.34588",
        "name": "Грузинский чай Silas",
        "price": 730
      },
    ],
    "sum": 6480,
    "currency": "₽",
    "customer": "Шульман Мария Дмитриевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-03",
    "time": "08:04",
    "status": "Рассчет",
    "itemCount": 5,
    "items": [
      {
        "itemCode": "rt.15170",
        "name": "Нанопятки",
        "price": 387
      },
      {
        "itemCode": "al.15210",
        "name": "Коврик для мыши Samsung",
        "price": 780
      },
      {
        "itemCode": "rt.53444",
        "name": "Ручка дверная Fate",
        "price": 950
      },
      {
        "itemCode": "al.77544",
        "name": "Детский набор Vegetables",
        "price": 763
      },
      {
        "itemCode": "rt.19985",
        "name": "Creman Ice",
        "price": 920
      },
    ],
    "sum": 3800,
    "currency": "₽",
    "customer": "Тихонова Алина Давидовна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-15",
    "time": "18:00",
    "status": "Новый",
    "itemCount": 6,
    "items": [
      {
        "itemCode": "rt.21212",
        "name": "Корм для сов Jerichno 25кг",
        "price": 15339
      },
      {
        "itemCode": "al.34326",
        "name": "Iphone 13z киберстекло",
        "price": 36544
      },
      {
        "itemCode": "rt.67215",
        "name": "Кофеварка SberCoffee",
        "price": 24012
      },
      {
        "itemCode": "al.11522",
        "name": "Тапочки Gucci 1989 год",
        "price": 13488
      },
      {
        "itemCode": "rt.38600",
        "name": "Стилус Akon Self",
        "price": 5048
      },
      {
        "itemCode": "al.45459",
        "name": "Газонокосилка Xiaomi GAZlighter",
        "price": 7476
      },
    ],
    "sum": 101907,
    "currency": "₽",
    "customer": "Чернышев Филипп Семенович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-17",
    "time": "22:45",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.75221",
        "name": "Набор для рисования Funny Family",
        "price": 12311
      },
    ],
    "sum": 12311,
    "currency": "₽",
    "customer": "Зверева Арина Николаевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Андрей",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-12",
    "time": "05:15",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.12024",
        "name": "Стил блейдс фо грасс",
        "price": 24503
      },
      {
        "itemCode": "al.24600",
        "name": "Газонокосилка Apple Magic Grass Remover",
        "price": 75500
      },
    ],
    "sum": 98003,
    "currency": "₽",
    "customer": "Филиппов Степан Васильевич",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-04",
    "time": "12:12",
    "status": "Отложен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.11647",
        "name": "Наковальня русская",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Судакова Анастасия Ильинична",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-21",
    "time": "13:32",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.66666",
        "name": "Самоучитель по Пагинации",
        "price": 5700
      },
    ],
    "sum": 5700,
    "currency": "₽",
    "customer": "Александрова Юлия Никитична",
    "loyality": "Новичок"
  },
  {
    "date": "2020-12-07",
    "time": "08:57",
    "status": "Выполнен",
    "itemCount": 3,
    "items": [
      {
        "itemCode": "rt.33258",
        "name": "Велотренажер Healthy Thighs",
        "price": 62555
      },
      {
        "itemCode": "al.44611",
        "name": "Надувной бассейн Весна",
        "price": 28017
      },
      {
        "itemCode": "rt.62573",
        "name": "Бинокль таёжный 256x Big Eye",
        "price": 27238
      },
    ],
    "sum": 117810,
    "currency": "₽",
    "customer": "Карташов Максим Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2020-11-07",
    "time": "18:52",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.54000",
        "name": "Зелье для увеличения объема фантазии 5плюс",
        "price": 17008
      },
    ],
    "sum": 17008,
    "currency": "₽",
    "customer": "Васильев Вадим Даниилович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "София",
    "loyality": "Новичок"
  },
  {
    "date": "2021-07-25",
    "time": "17:03",
    "status": "Рассчет",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.53338",
        "name": "Кеды зимние Stone Island",
        "price": 8881
      },
      {
        "itemCode": "al.21590",
        "name": "Кожаный ремень Flex Shrink",
        "price": 1658
      },
    ],
    "sum": 10539,
    "currency": "₽",
    "customer": "Сырников Кирилл Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-09-01",
    "time": "18:01",
    "status": "Новый",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.45168",
        "name": "Chevrolet Tahoe модель Zoomers",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Фриманов Максим Джокондович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-07",
    "time": "23:36",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.77748",
        "name": "Костюм парашютиста El Satan",
        "price": 97560
      },
      {
        "itemCode": "al.15684",
        "name": "Зеркало переносное Self me",
        "price": 48844
      },
    ],
    "sum": 146404,
    "currency": "₽",
    "customer": "Киркоров Антон Бедросович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-17",
    "time": "16:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Стелла",
    "loyality": "Новичок"
  },
  {
    "date": "2021-10-10",
    "time": "10:16",
    "status": "Новый",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.14166",
        "name": "Индийский чай Rahmat",
        "price": 5750
      },
      {
        "itemCode": "al.34588",
        "name": "Грузинский чай Silas",
        "price": 730
      },
    ],
    "sum": 6480,
    "currency": "₽",
    "customer": "Шульман Мария Дмитриевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-03",
    "time": "08:04",
    "status": "Рассчет",
    "itemCount": 5,
    "items": [
      {
        "itemCode": "rt.15170",
        "name": "Нанопятки",
        "price": 387
      },
      {
        "itemCode": "al.15210",
        "name": "Коврик для мыши Samsung",
        "price": 780
      },
      {
        "itemCode": "rt.53444",
        "name": "Ручка дверная Fate",
        "price": 950
      },
      {
        "itemCode": "al.77544",
        "name": "Детский набор Vegetables",
        "price": 763
      },
      {
        "itemCode": "rt.19985",
        "name": "Creman Ice",
        "price": 920
      },
    ],
    "sum": 3800,
    "currency": "₽",
    "customer": "Тихонова Алина Давидовна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-15",
    "time": "18:00",
    "status": "Новый",
    "itemCount": 6,
    "items": [
      {
        "itemCode": "rt.21212",
        "name": "Корм для сов Jerichno 25кг",
        "price": 15339
      },
      {
        "itemCode": "al.34326",
        "name": "Iphone 13z киберстекло",
        "price": 36544
      },
      {
        "itemCode": "rt.67215",
        "name": "Кофеварка SberCoffee",
        "price": 24012
      },
      {
        "itemCode": "al.11522",
        "name": "Тапочки Gucci 1989 год",
        "price": 13488
      },
      {
        "itemCode": "rt.38600",
        "name": "Стилус Akon Self",
        "price": 5048
      },
      {
        "itemCode": "al.45459",
        "name": "Газонокосилка Xiaomi GAZlighter",
        "price": 7476
      },
    ],
    "sum": 101907,
    "currency": "₽",
    "customer": "Чернышев Филипп Семенович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-17",
    "time": "22:45",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.75221",
        "name": "Набор для рисования Funny Family",
        "price": 12311
      },
    ],
    "sum": 12311,
    "currency": "₽",
    "customer": "Зверева Арина Николаевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Андрей",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-12",
    "time": "05:15",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.12024",
        "name": "Стил блейдс фо грасс",
        "price": 24503
      },
      {
        "itemCode": "al.24600",
        "name": "Газонокосилка Apple Magic Grass Remover",
        "price": 75500
      },
    ],
    "sum": 98003,
    "currency": "₽",
    "customer": "Филиппов Степан Васильевич",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-04",
    "time": "12:12",
    "status": "Отложен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.11647",
        "name": "Наковальня русская",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Судакова Анастасия Ильинична",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-21",
    "time": "13:32",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.66666",
        "name": "Самоучитель по Пагинации",
        "price": 5700
      },
    ],
    "sum": 5700,
    "currency": "₽",
    "customer": "Александрова Юлия Никитична",
    "loyality": "Новичок"
  },
  {
    "date": "2020-12-07",
    "time": "08:57",
    "status": "Выполнен",
    "itemCount": 3,
    "items": [
      {
        "itemCode": "rt.33258",
        "name": "Велотренажер Healthy Thighs",
        "price": 62555
      },
      {
        "itemCode": "al.44611",
        "name": "Надувной бассейн Весна",
        "price": 28017
      },
      {
        "itemCode": "rt.62573",
        "name": "Бинокль таёжный 256x Big Eye",
        "price": 27238
      },
    ],
    "sum": 117810,
    "currency": "₽",
    "customer": "Карташов Максим Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2020-11-07",
    "time": "18:52",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.54000",
        "name": "Зелье для увеличения объема фантазии 5плюс",
        "price": 17008
      },
    ],
    "sum": 17008,
    "currency": "₽",
    "customer": "Васильев Вадим Даниилович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "София",
    "loyality": "Новичок"
  },
  {
    "date": "2021-07-25",
    "time": "17:03",
    "status": "Рассчет",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.53338",
        "name": "Кеды зимние Stone Island",
        "price": 8881
      },
      {
        "itemCode": "al.21590",
        "name": "Кожаный ремень Flex Shrink",
        "price": 1658
      },
    ],
    "sum": 10539,
    "currency": "₽",
    "customer": "Сырников Кирилл Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-09-01",
    "time": "18:01",
    "status": "Новый",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.45168",
        "name": "Chevrolet Tahoe модель Zoomers",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Фриманов Максим Джокондович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-07",
    "time": "23:36",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.77748",
        "name": "Костюм парашютиста El Satan",
        "price": 97560
      },
      {
        "itemCode": "al.15684",
        "name": "Зеркало переносное Self me",
        "price": 48844
      },
    ],
    "sum": 146404,
    "currency": "₽",
    "customer": "Киркоров Антон Бедросович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-17",
    "time": "16:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Стелла",
    "loyality": "Новичок"
  },
  {
    "date": "2021-10-10",
    "time": "10:16",
    "status": "Новый",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.14166",
        "name": "Индийский чай Rahmat",
        "price": 5750
      },
      {
        "itemCode": "al.34588",
        "name": "Грузинский чай Silas",
        "price": 730
      },
    ],
    "sum": 6480,
    "currency": "₽",
    "customer": "Шульман Мария Дмитриевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-03",
    "time": "08:04",
    "status": "Рассчет",
    "itemCount": 5,
    "items": [
      {
        "itemCode": "rt.15170",
        "name": "Нанопятки",
        "price": 387
      },
      {
        "itemCode": "al.15210",
        "name": "Коврик для мыши Samsung",
        "price": 780
      },
      {
        "itemCode": "rt.53444",
        "name": "Ручка дверная Fate",
        "price": 950
      },
      {
        "itemCode": "al.77544",
        "name": "Детский набор Vegetables",
        "price": 763
      },
      {
        "itemCode": "rt.19985",
        "name": "Creman Ice",
        "price": 920
      },
    ],
    "sum": 3800,
    "currency": "₽",
    "customer": "Тихонова Алина Давидовна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-15",
    "time": "18:00",
    "status": "Новый",
    "itemCount": 6,
    "items": [
      {
        "itemCode": "rt.21212",
        "name": "Корм для сов Jerichno 25кг",
        "price": 15339
      },
      {
        "itemCode": "al.34326",
        "name": "Iphone 13z киберстекло",
        "price": 36544
      },
      {
        "itemCode": "rt.67215",
        "name": "Кофеварка SberCoffee",
        "price": 24012
      },
      {
        "itemCode": "al.11522",
        "name": "Тапочки Gucci 1989 год",
        "price": 13488
      },
      {
        "itemCode": "rt.38600",
        "name": "Стилус Akon Self",
        "price": 5048
      },
      {
        "itemCode": "al.45459",
        "name": "Газонокосилка Xiaomi GAZlighter",
        "price": 7476
      },
    ],
    "sum": 101907,
    "currency": "₽",
    "customer": "Чернышев Филипп Семенович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-17",
    "time": "22:45",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.75221",
        "name": "Набор для рисования Funny Family",
        "price": 12311
      },
    ],
    "sum": 12311,
    "currency": "₽",
    "customer": "Зверева Арина Николаевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Андрей",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-12",
    "time": "05:15",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.12024",
        "name": "Стил блейдс фо грасс",
        "price": 24503
      },
      {
        "itemCode": "al.24600",
        "name": "Газонокосилка Apple Magic Grass Remover",
        "price": 75500
      },
    ],
    "sum": 98003,
    "currency": "₽",
    "customer": "Филиппов Степан Васильевич",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-04",
    "time": "12:12",
    "status": "Отложен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.11647",
        "name": "Наковальня русская",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Судакова Анастасия Ильинична",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-21",
    "time": "13:32",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.66666",
        "name": "Самоучитель по Пагинации",
        "price": 5700
      },
    ],
    "sum": 5700,
    "currency": "₽",
    "customer": "Александрова Юлия Никитична",
    "loyality": "Новичок"
  },
  {
    "date": "2020-12-07",
    "time": "08:57",
    "status": "Выполнен",
    "itemCount": 3,
    "items": [
      {
        "itemCode": "rt.33258",
        "name": "Велотренажер Healthy Thighs",
        "price": 62555
      },
      {
        "itemCode": "al.44611",
        "name": "Надувной бассейн Весна",
        "price": 28017
      },
      {
        "itemCode": "rt.62573",
        "name": "Бинокль таёжный 256x Big Eye",
        "price": 27238
      },
    ],
    "sum": 117810,
    "currency": "₽",
    "customer": "Карташов Максим Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2020-11-07",
    "time": "18:52",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.54000",
        "name": "Зелье для увеличения объема фантазии 5плюс",
        "price": 17008
      },
    ],
    "sum": 17008,
    "currency": "₽",
    "customer": "Васильев Вадим Даниилович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "София",
    "loyality": "Новичок"
  },
  {
    "date": "2021-07-25",
    "time": "17:03",
    "status": "Рассчет",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.53338",
        "name": "Кеды зимние Stone Island",
        "price": 8881
      },
      {
        "itemCode": "al.21590",
        "name": "Кожаный ремень Flex Shrink",
        "price": 1658
      },
    ],
    "sum": 10539,
    "currency": "₽",
    "customer": "Сырников Кирилл Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-09-01",
    "time": "18:01",
    "status": "Новый",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.45168",
        "name": "Chevrolet Tahoe модель Zoomers",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Фриманов Максим Джокондович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-07",
    "time": "23:36",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.77748",
        "name": "Костюм парашютиста El Satan",
        "price": 97560
      },
      {
        "itemCode": "al.15684",
        "name": "Зеркало переносное Self me",
        "price": 48844
      },
    ],
    "sum": 146404,
    "currency": "₽",
    "customer": "Киркоров Антон Бедросович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-17",
    "time": "16:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Стелла",
    "loyality": "Новичок"
  },
  {
    "date": "2021-10-10",
    "time": "10:16",
    "status": "Новый",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.14166",
        "name": "Индийский чай Rahmat",
        "price": 5750
      },
      {
        "itemCode": "al.34588",
        "name": "Грузинский чай Silas",
        "price": 730
      },
    ],
    "sum": 6480,
    "currency": "₽",
    "customer": "Шульман Мария Дмитриевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-03",
    "time": "08:04",
    "status": "Рассчет",
    "itemCount": 5,
    "items": [
      {
        "itemCode": "rt.15170",
        "name": "Нанопятки",
        "price": 387
      },
      {
        "itemCode": "al.15210",
        "name": "Коврик для мыши Samsung",
        "price": 780
      },
      {
        "itemCode": "rt.53444",
        "name": "Ручка дверная Fate",
        "price": 950
      },
      {
        "itemCode": "al.77544",
        "name": "Детский набор Vegetables",
        "price": 763
      },
      {
        "itemCode": "rt.19985",
        "name": "Creman Ice",
        "price": 920
      },
    ],
    "sum": 3800,
    "currency": "₽",
    "customer": "Тихонова Алина Давидовна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-02-15",
    "time": "18:00",
    "status": "Новый",
    "itemCount": 6,
    "items": [
      {
        "itemCode": "rt.21212",
        "name": "Корм для сов Jerichno 25кг",
        "price": 15339
      },
      {
        "itemCode": "al.34326",
        "name": "Iphone 13z киберстекло",
        "price": 36544
      },
      {
        "itemCode": "rt.67215",
        "name": "Кофеварка SberCoffee",
        "price": 24012
      },
      {
        "itemCode": "al.11522",
        "name": "Тапочки Gucci 1989 год",
        "price": 13488
      },
      {
        "itemCode": "rt.38600",
        "name": "Стилус Akon Self",
        "price": 5048
      },
      {
        "itemCode": "al.45459",
        "name": "Газонокосилка Xiaomi GAZlighter",
        "price": 7476
      },
    ],
    "sum": 101907,
    "currency": "₽",
    "customer": "Чернышев Филипп Семенович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-17",
    "time": "22:45",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.75221",
        "name": "Набор для рисования Funny Family",
        "price": 12311
      },
    ],
    "sum": 12311,
    "currency": "₽",
    "customer": "Зверева Арина Николаевна",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Андрей",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-12",
    "time": "05:15",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.12024",
        "name": "Стил блейдс фо грасс",
        "price": 24503
      },
      {
        "itemCode": "al.24600",
        "name": "Газонокосилка Apple Magic Grass Remover",
        "price": 75500
      },
    ],
    "sum": 98003,
    "currency": "₽",
    "customer": "Филиппов Степан Васильевич",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-04",
    "time": "12:12",
    "status": "Отложен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.11647",
        "name": "Наковальня русская",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Судакова Анастасия Ильинична",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-21",
    "time": "13:32",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "rt.66666",
        "name": "Самоучитель по Пагинации",
        "price": 5700
      },
    ],
    "sum": 5700,
    "currency": "₽",
    "customer": "Александрова Юлия Никитична",
    "loyality": "Новичок"
  },
  {
    "date": "2020-12-07",
    "time": "08:57",
    "status": "Выполнен",
    "itemCount": 3,
    "items": [
      {
        "itemCode": "rt.33258",
        "name": "Велотренажер Healthy Thighs",
        "price": 62555
      },
      {
        "itemCode": "al.44611",
        "name": "Надувной бассейн Весна",
        "price": 28017
      },
      {
        "itemCode": "rt.62573",
        "name": "Бинокль таёжный 256x Big Eye",
        "price": 27238
      },
    ],
    "sum": 117810,
    "currency": "₽",
    "customer": "Карташов Максим Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2020-11-07",
    "time": "18:52",
    "status": "Выполнен",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.54000",
        "name": "Зелье для увеличения объема фантазии 5плюс",
        "price": 17008
      },
    ],
    "sum": 17008,
    "currency": "₽",
    "customer": "Васильев Вадим Даниилович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-01-19",
    "time": "10:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "София",
    "loyality": "Новичок"
  },
  {
    "date": "2021-07-25",
    "time": "17:03",
    "status": "Рассчет",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.53338",
        "name": "Кеды зимние Stone Island",
        "price": 8881
      },
      {
        "itemCode": "al.21590",
        "name": "Кожаный ремень Flex Shrink",
        "price": 1658
      },
    ],
    "sum": 10539,
    "currency": "₽",
    "customer": "Сырников Кирилл Кириллович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-09-01",
    "time": "18:01",
    "status": "Новый",
    "itemCount": 1,
    "items": [
      {
        "itemCode": "al.45168",
        "name": "Chevrolet Tahoe модель Zoomers",
        "price": 20500
      },
    ],
    "sum": 20500,
    "currency": "₽",
    "customer": "Фриманов Максим Джокондович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-12-07",
    "time": "23:36",
    "status": "Подтвержден",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.77748",
        "name": "Костюм парашютиста El Satan",
        "price": 97560
      },
      {
        "itemCode": "al.15684",
        "name": "Зеркало переносное Self me",
        "price": 48844
      },
    ],
    "sum": 146404,
    "currency": "₽",
    "customer": "Киркоров Антон Бедросович",
    "loyality": "Новичок"
  },
  {
    "date": "2021-03-17",
    "time": "16:28",
    "status": "Отменен",
    "itemCount": 0,
    "items": [],
    "sum": 0,
    "currency": "₽",
    "customer": "Стелла",
    "loyality": "Новичок"
  },
  {
    "date": "2021-10-10",
    "time": "10:16",
    "status": "Новый",
    "itemCount": 2,
    "items": [
      {
        "itemCode": "rt.14166",
        "name": "Индийский чай Rahmat",
        "price": 5750
      },
      {
        "itemCode": "al.34588",
        "name": "Грузинский чай Silas",
        "price": 730
      },
    ],
    "sum": 6480,
    "currency": "₽",
    "customer": "Шульман Мария Дмитриевна",
    "loyality": "Новичок"
  },
];

export function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        orders: orders.map((order, id) => ({
          ...order,
          id: (id + 1).toString().padStart(7, '0')
        })),
        statuses: orderStatuses,
      })
    }, 750);
  });
}

# Кінопошук

Створи базову маршрутизацію для застосунку пошуку і зберігання фільмів. Прев'ю
робочого застосунку
[дивись за посиланням](https://drive.google.com/file/d/1vR0hi3n1236Q5Bg4-se-8JVKD9UKSfId/view?usp=sharing).

### themoviedb.org API

Для бекенду використовуй themoviedb.org API. Необхідно зареєструватися (можна
ввести довільні дані) та отримати API-ключ. У цій роботі будуть
використовуватися наступні ендпоінти.

- /trending/get-trending список найпопулярніших фільмів на сьогодні для
  створення колекції на головній сторінці.
- /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
- /movies/get-movie-details запит повної інформації про фільм для сторінки
  кінофільму.
- /movies/get-movie-credits запит інформації про акторський склад для сторінки
  кінофільму.
- /movies/get-movie-reviews запит оглядів для сторінки кінофільму. Посилання на
  документацію

### Маршрути

У застосунку повинні бути такі маршрути. Якщо користувач зайшов за неіснуючим
маршрутом, його необхідно перенаправляти на домашню сторінку.

- `'/'` – компонент `Home`, домашня сторінка зі списком популярних кінофільмів.
- `/movies` – компонент `Movies`, сторінка пошуку кінофільмів за ключовим
  словом.
- `/movies/:movieId` – компонент MovieDetails, сторінка з детальною інформацією
  про кінофільм.
- `/movies/:movieId/cast` – компонент `Cast`, інформація про акторський склад.
  Рендериться на сторінці `MovieDetails`.
- `/movies/:movieId/reviews` – компонент `Reviews`, інформація про огляди.
  Рендериться на сторінці `MovieDetails`.

### Code Splitting (поділ коду)

Додай асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи
React.lazy() і Suspense.

---

## Installation

Після виконнання команди `npm i` є такі помилки:

```
npm WARN deprecated source-map-resolve@0.6.0: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
```

Для оновлення:

```
npm install source-map-resolve@latest --save-dev

npm install svgo@latest --save-dev
```

### Підключення нормалайзеру (найоптимальніший варіант)

https://cdnjs.com/libraries/modern-normalize

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/2.0.0/modern-normalize.min.css"
  integrity="sha512-4xo8blKMVCiXpTaLzQSLSw3KFOVPWhm/TRtuPVc4WG6kUgjH6J03IBuG7JZPkcWMxJ5huwaBpOpnwYElP/m6wg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

вставимо код в **index.html**

### Встановимо Styled Components:

`npm install styled-components`

є такі помилки:

```
npm WARN deprecated @babel/plugin-proposal-class-properties@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-class-properties instead.

npm WARN deprecated @babel/plugin-proposal-object-rest-spread@7.20.7: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-object-rest-spread instead.
```

Оновимо залежності Babel:

```
npm update @babel/core @babel/preset-env

npm install --save-dev @babel/plugin-transform-private-property-in-object
```

### Встановимо бібліотеку для маршрутизації (React Router)

`React Router` надає набір компонентів та хуків для створення маршрутизації,
управління історією навігації користувача та відображення різних компонетів в
залежності від поточного значення URL в адресному рядку браузера.

```
npm install react-router-dom
```

### axios:

[https://axios-http.com](https://axios-http.com/ru/docs/intro)

```
$ npm install axios
```

### react-loader-spinner

[https://react-loader-spinner](https://github.com/mhnpd/react-loader-spinner)
[https://react-loader-spinner/color-ring](https://mhnpd.github.io/react-loader-spinner/docs/components/color-ring)

```
npm install react-loader-spinner --save
```

---

# Виконання

Створення стрінок (`pages`) => `rafce`

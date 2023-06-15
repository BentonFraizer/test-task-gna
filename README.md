# test-task-gna

Задание.

Ограничения:

- Обязательно использование React, Typescript;
- Желательно использовать UI-библиотеку готовых компонентов (прекрасно если Ant Design, но допустимо также Material UI и любые другие);
- Желательно использовать сервис для подготовки mock API (см. примечания), например Mockoon;
- В остальном разрешено использовать любые библиотеки которые посчитаешь уместными (Redux, Mobx, Axios и др.)

Задача:

1. Подготовить эндпоинты /documents1 и /documents2
   С обоих возвращаются данные в формате :

   ```
   {
      id: string,
      name: string,
      quantity: number,
      deliveryDate: string,
      price: number,
      currency: ‘USD’ | ‘RUB’,
   } []
   ```

2. Создать таблицу в которой будут данные из обоих запросов, по умолчанию отсортированные по deliveryDate.
   Все поля кроме id, являются столбцами этой таблицы.

3. Добавить возможность сортировки по всем столбцам этой таблицы.

4. Для каждой строки таблицы нужно добавить галочку выбора товара, а также в заголовке таблицы галочку выбора всех товаров.

5. В последней строке таблицы вывести результирующий показатель «Общее количество» (сумма всех quantity).

6. Добавить кнопку «Аннулировать», при нажатии на которую должно появляться модальное окно с текстом
   «Вы уверены что хотите аннулировать товар(ы): [названия выбранных товаров через запятую]»,
   и кнопки «Применить», «Отклонить».

Если пользователь нажимает кнопку «Применить» отправить запрос на эндпоинт /cancel с перечислением id товаров которые мы хотим аннулировать.
Если пользователь нажимает кнопку «Отклонить» закрыть модальное окно.

Примечания:

1. Допустимо захардкодить данные, получаемые с сервера по эндпоинтам /documents1 и /documents2 и отправляемые на сервер по эндпоинту /cancel, но будет плюсом имитировать клиент-серверное взаимодействие через сервис mock API или backend-сервис.
2. Требований к дизайну нет, все на усмотрение разработчика.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

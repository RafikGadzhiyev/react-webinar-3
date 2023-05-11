import React from 'react';
import {createRoot} from 'react-dom/client';
import {createElement, GenerateId} from './utils.js';
import App from './app.js';
import Store from './store.js';

const store = new Store({
  list: [
    {code: GenerateId(), title: 'Название элемента', clicked: 0},
    {code: GenerateId(), title: 'Некий объект', clicked: 0},
    {code: GenerateId(), title: 'Заголовок', clicked: 0},
    {code: GenerateId(), title: 'Очень длинное название элемента из семи слов'},
    {code: GenerateId(), title: 'Запись', clicked: 0},
    {code: GenerateId(), title: 'Шестая запись', clicked: 0},
    {code: GenerateId(), title: 'Седьмая запись', clicked: 0},
  ]
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(<App store={store}/>);
});

// Первый рендер приложения
root.render(<App store={store}/>);

# Тестовое задание - верстка части лендинга обучающих курсов от stats4market 

[Опубликованная версия](https://olgamorozova88.github.io/Stat4market/).

---


## Используемые инструменты

* `gulp` - объединение задач и слежение за изменением файлов.
* `sass`, `autoprefixer`, `csso` - сборка стилей.
* `imagemin` - оптимизация графики.


## Особенности реализации

* Для организации разметки и стилей использована методология БЭМ.
* Адаптивная вёрстка "mobile first" - дефолтной является мобильная версия. Медиазапросы строятся от меньшего к большему.
* Поддержка webp - в разметке через `<picture>`, в стилях через директиву `@supports`.
* `html` `css` проходят валидацию без ошибок на сервисе [W3C Markup Validation Service](https://validator.w3.org).
* Поддержка последних 2-х версий браузеров `Google Chrome`, `Mozila Firefox`, `Safari (macOS)`
* Pixel Perfect.

## Структура

* `build` - каталог для сборки. Не коммитится.
* `src` - каталог исходников.


## Установка

* Выполните команду `npm i`.


## Команды

* `npm run build` - сборка и минификация разметки и стилей. Оптимизация изображений.
* `npm start` - сборка и запуск в режиме раработки.

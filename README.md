# Общая информация
Использованы следующие технологии:
1. Angular
2. TypeScript
3. json-server
4. rxjs
5. fontawesome

# Настройка таблицы

С помощью файла tableconfig.json можно настроить общие параметры отображения таблицы.
Пример:
````
[
    {
        "type": "id",
        "viewTitle": "ID"
        
    },
    {
        "type": "delbutton",
        "viewTitle": ""
        
    },
    {
        "type": "username",
        "viewTitle": "Имя"
        
    },
    {
        "type": "message",
        "viewTitle": "Сообщение"
        
    },
    {
        "type": "datetime",
        "viewTitle": "Время"
        
    }
]
````
Имеется пять типов столбцов: id, delbutton, username, message, datetime. 
Порядок объектов в массиве = порядок столбцов в таблице. 
Если какой-то объект отсутствует, то отсутсвует и этот столбец.
Также, с помощью ствойства viewTitle, можно назначить заголовки столбцов.
Есть некоторые ограничения:
1. Обязательна должен присутствовать столбец delbutton
2. Должен быть как минимум один столбец кроме delbutton
3. Не может быть меньше 2 и больше 5 столбцов
4. Не может быть дубликатов столбцов

В случае этих и других ошибок, конфиг отклоняется и берутся настройки по умолчанию.

# Запуск приложения
1. Скачать архив
2. Распаковать архив в папку
3. Запустить команду ````npm install````
4. Запустить приложение командой ````npm start````


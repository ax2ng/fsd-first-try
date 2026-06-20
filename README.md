6 слоев (насколько я понял processes - deprecated)
app  => роутинг: какую страницу показать + навигация
pages  => team-page, tasks-page (собирают экраны из блоков (виджетов в идеале))
widgets  => task-board (склейка task + toggle-task)
features  =>  toggle-task (действие пользователя)
entities  => user, task (данные + их базовый UI)
shared  => config (адрес бэка)
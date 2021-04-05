## README

- [English](README.md)
- [Русский](README-ru.md)

## Дерево проекта

```bash
tree --charset ascii -I "node_modules"
```

```
.
|-- README*.md          // Файл с информацией
|-- docker-compose.yml  // Настройки Docker
|-- package.json        // Версии пакетов для установки
|-- public              // Папка которая не компилирует файлы
`-- src                 // Папка с исходным кодом
```

## Установка пакетов (1 раз)

(1-ый вариант. Через Docker)

```bash
sudo docker-compose up install
```

(2-ой вариант. Если установлена NodeJS)

```bash
npm i
```

## Запуск сервера

(1-ый вариант. Через Docker)

```bash
sudo docker-compose run start
```

(2-ой вариант. Если установлена NodeJS)

```bash
npm run start
```

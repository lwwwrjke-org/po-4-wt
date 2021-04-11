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

```bash
sudo docker-compose run install
```

## Запуск сервера

```bash
sudo docker-compose up serve
```

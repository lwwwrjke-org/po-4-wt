## README

- [English](README.md)
- [Русский](README-ru.md)

## Project tree

```bash
tree --charset ascii -I "node_modules"
```

```
.
|-- README*.md          // Information file
|-- docker-compose.yml  // Docker settings
|-- package.json        // Versions of packages to install
|-- public              // A folder that does not compile files
`-- src                 // Source code folder
```

## Install packages (1 time)

```bash
sudo docker-compose run install
```

## Server start

```bash
sudo docker-compose up serve
```

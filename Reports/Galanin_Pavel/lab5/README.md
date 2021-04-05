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

(1st option. Via Docker)

```bash
sudo docker-compose up install
```

(2nd option. If NodeJS is installed)

```bash
npm i
```

## Server start

(1st option. Via Docker)

```bash
sudo docker-compose run start
```

(2nd option. If NodeJS is installed)

```bash
npm run start
```

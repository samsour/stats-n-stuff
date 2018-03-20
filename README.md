# Stats and Stuff

![Screenshot](./src/assets/img/screenshots/laptop-mdpi-screen.png?raw=true "Stats and Stuff - Desktop")

New-tab widget for fancy information and nice stats!

It has a Gulp-powered build system with these features:
- Handlebars HTML templates with Panini (in progress)
- Sass compilation and prefixing
- JavaScript module bundling with webpack (in progress)
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - HTML compression
  - Image compression

## Stack Dependencies

To use this stack, your need:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Yarn](https://yarnpkg.com/en/docs/install) (used instead of npm for dependency management)
- [Git](https://git-scm.com/)

## Setup

Open the project folder in your command line, and install the needed dependencies:

```bash
cd projectname
yarn
```

Finally, run the following command to start the Gulp-powered build system: 
```
yarn start
```
Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run: 
```
yarn run build:production
```

## Installing Frontend Dependencies
Check the [yarn documentation](https://yarnpkg.com/en/docs/managing-dependencies) for information on how to manage dependencies in this project.
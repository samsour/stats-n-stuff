# Stats and Stuff

![Screenshot](./src/assets/img/screenshots/laptop-mdpi-screen.png?raw=true "Stats and Stuff - Desktop")

New-tab widget for fancy information and nice stats!
At this time you can:
- Display the weather at ~~your current~~ a location
- Add cryptocoins (Top 100)
- ~~Add~~ Use some Bookmarks

## ToDo's

- Widgets
  - ~~Weather~~
  - ~~Cryptocoins~~
  - RMV-Api
  - ~~App Section~~
- Dynamic background changing
- Analog clock
- Start Screen (Name & Location input)
- ~~Settings Menu~~
- ~~Save options (local storage)~~
- Current location request
- Date API
- Parallax Scrolling
- Remove Coin Function (CSS already done)


## Environment

It has a Gulp-powered build system with these features:
- Sass compilation and prefixing
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - HTML compression
  - Image compression

In progress:
- Handlebars HTML templates with Panini
- JavaScript module bundling with webpack


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
# TestTest

TestTest is a simple project that demonstrates how to use React with Firebase for task management. It follows the composition pattern to structure components, and styles are implemented using Styled Components.

## Installation

To install TestTest, clone this repository to your local machine and run the following commands:

```js
npm install
npm run dev
npm run build
```

This will install all the necessary dependencies listed in the package.json file.

### Database Structure

The tasks are stored in the following structure:

```js
|- tasks
|- 0
|- id: 2
|- title: "Write code"
|- 1
|- id: 1
|- title: "Create app"
|- 2
|- id: 3
|- title: "Read book"
```

The endpoint for the Firebase Realtime Database is [https://testtask-6e9d3-default-rtdb.firebaseio.com](https://testtask-6e9d3-default-rtdb.firebaseio.com).

### Folder Structure

```js
src
|- components
| |- Form
| | |- Icon
| | |- Field
| | |- Button
|- pages
| |- Home
| |- Sign
| |- Login
```

The `components` folder contains reusable components used throughout the application. Each component is further divided into subfolders based on functionality.

The `pages` folder contains the main pages of the application, such as the Home page, Sign up page, and Login page.

## Composition Pattern

TestTest is developed using the composition pattern, which is a design pattern that promotes building complex components by composing simpler ones. This pattern encourages the creation of small, reusable components that are combined together to create larger, more complex components. You can learn more about the composition pattern [here](https://medium.com/@guilherme.pomp/creating-react-components-with-the-composition-pattern-f59c895f27bc).

## Firebase Integration

Instead of a traditional backend, TestTest utilizes Firebase for user authentication and data storage. User registration and authentication are handled using Firebase Authentication with email and password. The data, including tasks, is stored in a Google Firebase Realtime Database.

## Styled Components

The styles in TestTest are implemented using Styled Components, a CSS-in-JS library that allows you to write CSS directly in your JavaScript files. Styled Components provides a more maintainable and organized way to style React components. You can find more information about Styled Components [here](https://styled-components.com/).

## Code Organization

The code in TestTest is structured in a modular and organized manner. It follows the SOLID principles, specifically the Open/Closed Principle (OCP), by separating concerns and keeping functions separate from visuals. This promotes better maintainability, extensibility, and reusability of the codebase.

## Usage

TestTest comes with several scripts that you can use to develop, build, and lint your project. Refer to the Usage section in the README for more details.

## Dependencies

TestTest relies on the following dependencies:

- Firebase - A platform developed by Google for creating mobile and web applications.
- React - A JavaScript library for building user interfaces.
- React DOM - React package for working with the DOM.
- React Icons - A collection of icons for React applications.
- React Router DOM - DOM bindings for React Router.
- Styled Components - A CSS-in-JS library for styling React components.

## Dev Dependencies

TestTest uses the following dev dependencies:

- @types/react - TypeScript type definitions for React.
- @types/react-dom - TypeScript type definitions for React DOM.
- @typescript-eslint/eslint-plugin - ESLint plugin for TypeScript.
- @typescript-eslint/parser - TypeScript parser for ESLint.
- @vitejs/plugin-react - Vite plugin for React.
- eslint - A pluggable JavaScript linter.
- eslint-plugin-react-hooks - ESLint plugin for React hooks.
- eslint-plugin-react-refresh - ESLint plugin for React refresh.
- typescript - A typed superset of JavaScript that compiles to plain JavaScript.
- vite - A next-generation front-end tooling that provides fast refresh and hot module replacement (HMR) out of the box.

## Contributing

If you'd like to contribute to TestTest, please fork the repository and submit a pull request. You can also open an issue if you find any bugs or have any feature requests.
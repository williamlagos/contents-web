# Frontend Example with Contents Headless CMS

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules, integrated with the Contents Headless Content Management System framework.

## Features

- React with Vite for fast development
- ESLint for code quality
- Cypress for E2E testing
- Storybook for UI component development
- Jest for unit testing

## Running the Project

To run the project locally, use the following commands:

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Running Tests

### Unit Tests

To run unit tests with Jest:

```sh
npm run test
```

### E2E Tests

To run end-to-end tests with Cypress:

1. Open Cypress Test Runner:

   ```sh
   npm run cypress:open
   ```

2. Run Cypress tests in headless mode:

   ```sh
   npm run cypress:run
   ```

## Storybook

To develop and test UI components in isolation, use Storybook:

1. Start Storybook:

   ```sh
   npm run storybook
   ```

2. Build Storybook:

   ```sh
   npm run build-storybook
   ```

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level [`parserOptions`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fwilliam%2FDeveloper%2Fcontents%2Fweb%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A54%2C%22character%22%3A27%7D%7D%5D%2C%22e78daa89-e017-450f-bb9e-81fedfed8120%22%5D 'Go to definition') property like this:

  ```js
  export default {
    // other rules...
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: ['./tsconfig.json', './tsconfig.node.json'],
      tsconfigRootDir: __dirname
    }
  }
  ```

- Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the [`extends`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fwilliam%2FDeveloper%2Fcontents%2Fweb%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A56%2C%22character%22%3A5%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fwilliam%2FDeveloper%2Fcontents%2Fweb%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A70%2C%22character%22%3A155%7D%7D%5D%2C%22e78daa89-e017-450f-bb9e-81fedfed8120%22%5D 'Go to definition') list

## Project Structure

```
.gitignore
.prettierrc
.storybook/
  main.ts
  preview.ts
cypress/
  downloads/
  e2e/
    spec.cy.js
  fixtures/
    example.json
  screenshots/
  support/
    commands.js
    e2e.js
cypress.config.js
eslint.config.js
index.html
jest.config.cjs
LICENSE
package.json
README.md
src/
  components/
    molecules/
      Footer/
      Header/
      index.ts
    organisms/
      Contents/
      index.ts
      Session/
    pages/
      ...
    templates/
  index.css
  index.tsx
  types.ts
  vite-env.d.ts
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## License

This project is licensed under the MIT License.

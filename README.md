# flow-aware-swc-jest

Use `@swc/jest` even if you are using flow.

<table>
  <tr>
    <th>babel-jest (61s)</th>
    <th>flow-aware-swc-jest (23s)</th>
  </tr>
  <tr>
<td>
  
<img width="385" alt="Screenshot 2024-02-09 at 1 30 58 AM" src="https://github.com/changwoolab/react-native-fast-jest/assets/64240134/f07ecabf-76b6-4417-88b9-747f5c7d97f5">

</td>
<td>

<img width="392" alt="Screenshot 2024-02-09 at 1 27 52 AM" src="https://github.com/changwoolab/react-native-fast-jest/assets/64240134/7360d9d1-3bd0-45ec-a555-e0ea8f8dafbf">

</td>
  </tr>
</table>

## Installation

```
npm i --save-dev flow-aware-swc-jest
```

## Configuration

Configure jest config transform

```js
transform: {
  '^.+\\.(t|j)sx?$': 'flow-aware-swc-jest',
},
```

[Optional] You may configure your own `.swcrc` like below.

```json
{
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "jsx": true,
      "tsx": true,
      "dynamicImport": false,
      "privateMethod": false,
      "functionBind": false,
      "exportDefaultFrom": false,
      "exportNamespaceFrom": false,
      "decorators": false,
      "decoratorsBeforeExport": false,
      "topLevelAwait": false,
      "importMeta": false,
      "preserveAllComments": false
    },
    "transform": null,
    "target": "es5",
    "loose": true,
    "externalHelpers": false,
    "keepClassNames": false
  },
  "isModule": true
}
```

## I have error when jest.spyOn

`TypeError: Cannot redefine property` or `TypeError: Cannot read properties of undefined`

You need to do mock as a esModule

```js
jest.mock("./path_to_spy", () => {
  return {
    __esModule: true, // <- Important!
    ...jest.requireActual("./path_to_spy"),
  };
});
```

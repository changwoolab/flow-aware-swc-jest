# react-native-fast-jest

Run testing 3x faster than babel-jest!

Internally using @swc/jest

<table>
  <tr>
    <th>babel-jest (61s)</th>
    <th>react-native-fast-jest (23s)</th>
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
npm i --save-dev react-native-fast-jest
```
## Configuration

1. You need to configure `.swcrc` like below.
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

2. Configure jest config trasform
```js
transform: {
  '^.+\\.(t|j)sx?$': 'react-native-fast-jest',
},
```

## I have error when jest.spyOn 
`TypeError: Cannot redefine property` or `TypeError: Cannot read properties of undefined`

You need to do mock as a esModule
```js
jest.mock('./path_to_spy', () => {
    return {
        __esModule: true, // <- Important!
        ...jest.requireActual('./path_to_spy'),
    };
});
```

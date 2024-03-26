const flowRemoveTypes = require("flow-remove-types");
const createSwcTransformer = require("@swc/jest").createTransformer;

const swcTransformer = createSwcTransformer({
  jsc: {
    parser: {
      syntax: "typescript",
      jsx: true,
      tsx: true,
      dynamicImport: false,
      privateMethod: false,
      functionBind: false,
      exportDefaultFrom: false,
      exportNamespaceFrom: false,
      decorators: false,
      decoratorsBeforeExport: false,
      topLevelAwait: false,
      importMeta: false,
      preserveAllComments: false,
    },
    transform: null,
    target: "es5",
    loose: true,
    externalHelpers: false,
    // Requires v1.2.50 or upper and requires target to be es2016 or upper.
    keepClassNames: false,
  },
});

module.exports = {
  process(src, filename, jestOptions) {
    const flowRemoved = flowRemoveTypes(src, jestOptions).toString();
    return swcTransformer.process(flowRemoved, filename, jestOptions);
  },
  processAsync(src, filename, jestOptions) {
    const flowRemoved = flowRemoveTypes(src).toString();
    return swcTransformer.processAsync(flowRemoved, filename, jestOptions);
  },
  getCacheKey(src, filename, jestOptions) {
    const flowRemoved = flowRemoveTypes(src).toString();
    return swcTransformer.getCacheKey(flowRemoved, filename, jestOptions);
  },
};

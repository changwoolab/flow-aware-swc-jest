const flowRemoveTypes = require("flow-remove-types");
const createTransformer = require("@swc/jest").createTransformer;

module.exports = {
  process(src, filename, jestOptions) {
    const flowRemoved = flowRemoveTypes(src, jestOptions).toString();
    const result = createTransformer().process(
      flowRemoved,
      filename,
      jestOptions
    );
    return result;
  },
  processAsync(src, filename, jestOptions) {
    const flowRemoved = flowRemoveTypes(src).toString();
    return createTransformer().processAsync(flowRemoved, filename, jestOptions);
  },
  getCacheKey(src, filename, jestOptions) {
    const flowRemoved = flowRemoveTypes(src).toString();
    return createTransformer().getCacheKey(flowRemoved, filename, jestOptions);
  },
};

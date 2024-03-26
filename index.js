const flowRemoveTypes = require("flow-remove-types");
const createSwcTransformer = require("@swc/jest").createTransformer;

const swcTransformer = createSwcTransformer();

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

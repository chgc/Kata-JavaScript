module.exports = function() {
  return {
    files: ['src/**/*.js', 'src/**/*.ts'],

    tests: ['spec/**/*.test.js', 'spec/**/*.test.ts'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest'
  };
};

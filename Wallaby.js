module.exports = function() {
  return {
    files: ['src/**/*.js'],

    tests: ['spec/**/*.test.js'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest'
  };
};

module.exports = {
  extends: ['custom/react'],
  rules: {
    'import/no-extraneous-dependencies': 0,
  },
  // exclude panda.config.ts
  ignorePatterns: ['panda.config.ts'],
}

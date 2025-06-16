module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@styles': './src/styles',
          '@api': './src/api',
          '@repositories': './src/repositories',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@contexts': './src/contexts',
          '@types': './src/types'
        },
      },
    ],
  ],
};

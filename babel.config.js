module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.json', '.jsx'],
          alias: {
            '@': './src',
          },
        },
        'react-native-reanimated/plugin',
      ],
    ],
  };
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'react-native-dynamic-vector-icons': '../',
          react: './node_modules/react',
          'react-native-vector-icons':
            './node_modules/react-native-vector-icons',
        },
      },
    ],
  ],
};

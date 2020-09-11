/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require("path");
const packagePath = path.resolve(__dirname, "..");

module.exports = {
  resolver: {
    extraNodeModules: {
      "@babel/runtime": path.resolve(__dirname, "node_modules/@babel/runtime"),
      'react': path.resolve(__dirname, 'node_modules/react'),
      "react-native-dynamic-vector-icons": packagePath,
      "react-native-vector-icons": path.resolve(__dirname, "node_modules/react-native-vector-icons"),
    },
  },
  watchFolders: [packagePath],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};

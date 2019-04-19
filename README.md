<img alt="React Native Bottom Bar" src="https://github.com/WrathChaos/react-native-dynamic-vector-icons/blob/master/assets/Sreenshots/logo.png" width="1050"/>

Wrapper of react-native-vector-icons to use dynamic types. 

[![npm version](https://img.shields.io/npm/v/react-native-dynamic-vector-icons.svg)](https://www.npmjs.com/package/react-native-dynamic-vector-icons)
![expo-compatible](https://img.shields.io/badge/Expo-compatible-9cf.svg)
[![npm downloads](https://img.shields.io/npm/dm/react-native-dynamic-vector-icons.svg)](https://www.npmjs.com/package/react-native-dynamic-vector-icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)


## Installation

Add the dependency:

### Pure React Native:

```ruby
npm i react-native-dynamic-vector-icons
```


### Expo Version: 

```ruby
"react-native-dynamic-vector-icons": "WrathChaos/react-native-dynamic-vector-icons#expo"
```


## Peer Dependencies

##### IMPORTANT! You need install them.

```
"react": ">= 16.x",
"react-native": ">= 0.55.x",
"react-native-vector-icons": ">= 6.x.x"
```


## Basic Usage

```ruby
<Icon name="github" type="AntDesign" size={30} color="purple" />
```

### Configuration - Props


| Property |  Type  | Default | Description                         |
| -------- | :----: | :-----: | ----------------------------------- |
| style    | style  |  style  | use this to change the Icon's style |
| name     | string |  null   | use this to change icon's itself    |
| type     | string |  null   | set the icon's type                 |
| size     | number |  null   | changes the icon's size             |
| color    | color  |  null   | use this to change icon's color     |

### Credits

Special thanks to [oblador, react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) to make a great icon library :) This library is a little wrapper for react-native-vector-icons to make their icon type dynamically.

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Dynamic Vector Icons Library is available under the MIT license. See the LICENSE file for more info.
))
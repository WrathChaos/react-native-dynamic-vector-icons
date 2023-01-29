import * as React from "react";
import { TextProps, GestureResponderEvent, TextStyle } from "react-native";


export enum IconType  {
  FontAwesome=  "FontAwesome",
  AntDesign= "AntDesign",
  MaterialIcons= "MaterialIcons",
  EvilIcons = "EvilIcons",
  Entypo= "Entypo",
  Foundation= "Foundation",
    Ionicons   = "Ionicons",
    MaterialCommunityIcons = "MaterialCommunityIcons",
    Zocial = "Zocial",
    Octicons  = "Octicons",
    SimpleLineIcons= "SimpleLineIcons",
    Fontisto= "Fontisto",
    Feather= "Feather",
    FontAwesome5 = "FontAwesome5",
}

export interface IconProps extends TextProps {
  type: IconType;
  name: string;
  size?: number;
  color?: string;
  brand?: string;
  solid?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: TextStyle;
}

const Icon = (props: IconProps): JSX.Element => {
  const { name, color, size, onPress, style, ...textProps } = props;

  switch (props.type) {
    case "AntDesign": {
      const AntDesign = require("react-native-vector-icons/AntDesign").default;
      return (
        <AntDesign
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "Entypo": {
      const Entypo = require("react-native-vector-icons/Entypo").default;
      return (
        <Entypo
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "Ionicons": {
      const Ionicons = require("react-native-vector-icons/Ionicons").default;
      return (
        <Ionicons
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "SimpleLineIcons": {
      const SimpleLineIcons =
        require("react-native-vector-icons/SimpleLineIcons").default;
      return (
        <SimpleLineIcons
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "EvilIcons": {
      const EvilIcons = require("react-native-vector-icons/EvilIcons").default;
      return (
        <EvilIcons
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "MaterialIcons": {
      const MaterialIcons =
        require("react-native-vector-icons/MaterialIcons").default;
      return (
        <MaterialIcons
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "FontAwesome": {
      const FontAwesome =
        require("react-native-vector-icons/FontAwesome").default;
      return (
        <FontAwesome
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "FontAwesome5": {
      const FontAwesome5 =
        require("react-native-vector-icons/FontAwesome5").default;
      const { brand, solid } = props;
      return (
        <FontAwesome5
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
          brand={brand}
          solid={solid}
        />
      );
    }
    case "Foundation": {
      const Foundation =
        require("react-native-vector-icons/Foundation").default;
      return (
        <Foundation
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "MaterialCommunityIcons": {
      const MaterialCommunityIcons =
        require("react-native-vector-icons/MaterialCommunityIcons").default;
      return (
        <MaterialCommunityIcons
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "Zocial": {
      const Zocial = require("react-native-vector-icons/Zocial").default;
      return (
        <Zocial
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "Octicons": {
      const Octicons = require("react-native-vector-icons/Octicons").default;
      return (
        <Octicons
          {...textProps}
          name={name}
          style={style}
          color={color}
          size={size ? size : 18}
          onPress={onPress}
        />
      );
    }
    case "Fontisto": {
      const Fontisto = require("react-native-vector-icons/Fontisto").default;
      return (
        <Fontisto
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "Feather": {
      const Feather = require("react-native-vector-icons/Feather").default;
      return (
        <Feather
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    default: {
      const MaterialIcons =
        require("react-native-vector-icons/MaterialIcons").default;
      return (
        <MaterialIcons
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
  }
};

Icon.defaultProps = {
  size: 20,
  style: {},
  onPress: null,
  color: "#757575",
};

export default Icon;

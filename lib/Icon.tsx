import * as React from "react";
import { TextProps, GestureResponderEvent, TextStyle } from "react-native";

export enum IconType {
  FontAwesome = "FontAwesome",
  AntDesign = "AntDesign",
  MaterialIcons = "MaterialIcons",
  EvilIcons = "EvilIcons",
  Entypo = "Entypo",
  Foundation = "Foundation",
  Ionicons = "Ionicons",
  MaterialCommunityIcons = "MaterialCommunityIcons",
  Zocial = "Zocial",
  Octicons = "Octicons",
  SimpleLineIcons = "SimpleLineIcons",
  Fontisto = "Fontisto",
  Feather = "Feather",
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

const iconComponents = {
  [IconType.AntDesign]: require("react-native-vector-icons/AntDesign").default,
  [IconType.Entypo]: require("react-native-vector-icons/Entypo").default,
  [IconType.Ionicons]: require("react-native-vector-icons/Ionicons").default,
  [IconType.SimpleLineIcons]:
    require("react-native-vector-icons/SimpleLineIcons").default,
  [IconType.EvilIcons]: require("react-native-vector-icons/EvilIcons").default,
  [IconType.MaterialIcons]: require("react-native-vector-icons/MaterialIcons")
    .default,
  [IconType.FontAwesome]: require("react-native-vector-icons/FontAwesome")
    .default,
  [IconType.FontAwesome5]: require("react-native-vector-icons/FontAwesome5")
    .default,
  [IconType.Foundation]: require("react-native-vector-icons/Foundation")
    .default,
  [IconType.MaterialCommunityIcons]:
    require("react-native-vector-icons/MaterialCommunityIcons").default,
  [IconType.Zocial]: require("react-native-vector-icons/Zocial").default,
  [IconType.Octicons]: require("react-native-vector-icons/Octicons").default,
  [IconType.Fontisto]: require("react-native-vector-icons/Fontisto").default,
  [IconType.Feather]: require("react-native-vector-icons/Feather").default,
};

const Icon = (props: IconProps): JSX.Element => {
  const {
    type,
    name,
    color = "#757575",
    size = 20,
    onPress = null,
    style = {},
    brand,
    solid,
    ...textProps
  } = props;
  const IconComponent =
    iconComponents[type] || iconComponents[IconType.MaterialIcons];

  return (
    <IconComponent
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
};

export default Icon;

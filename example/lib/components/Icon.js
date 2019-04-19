import React from "react";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  Zocial,
  SimpleLineIcons
} from "@expo/vector-icons";

const IconTypes = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  Zocial,
  SimpleLineIcons
};

const Icon = ({ name, type, size, color, style }) => {
  let Icon;
  if (IconTypes[type]) {
    Icon = IconTypes[type];
    return <Icon name={name} style={style} color={color} size={size} />;
  }
  return null;
};

export default Icon;

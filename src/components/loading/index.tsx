import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { colors } from "@/styles/colors";
import { s } from "./styles";

export default function Loading() {
  return <ActivityIndicator color={colors.green.base} style={s.container} />;
}

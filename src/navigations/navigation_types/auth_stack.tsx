import { StackScreenProps } from "@react-navigation/stack";

export type AuthStackParamList = {
  LoginScreen: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> =
  StackScreenProps<AuthStackParamList, Screen>;

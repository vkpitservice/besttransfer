import { Platform } from "react-native";

export const DefaultConstants = {
    BASE_URL : "https://uat.besttransfer.com/",
    SOURCE_NAME : Platform.OS == 'android' ? "android_app" : "ios_app"
}
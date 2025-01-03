import { Platform } from "react-native";
const ENVIRONMENT = "production";
export const DefaultConstants = {
    BASE_URL : ENVIRONMENT=='uat' ? "https://uat.besttransfer.com/" : "https://api.besttransfer.com/",
    FX_BASE_URL :  ENVIRONMENT=='uat' ? "https://fxmaster-dev-apim.azure-api.net/fxmaster-api/v1/" : "https://fxmaster-prod-apim.azure-api.net/fxmaster-api-prod/v1/",
    FX_SUBSCRIPTION_KEY : ENVIRONMENT=='uat' ? "b294ef51d42f41f093c951d7ffe7bbbb" : "83a68075ae6b41b88ee508722b29ed35",
    FX_TOKEN_USERNAME : ENVIRONMENT=='uat' ? "besttransfer@fxmaster.co.uk" : "besttransfertoken@fxmaster.co.uk",
    FX_TOKEN_PASSWORD : ENVIRONMENT=='uat' ? "123456" : "852951",
    SOURCE_NAME : Platform.OS == 'android' ? "android_app" : "ios_app"
}
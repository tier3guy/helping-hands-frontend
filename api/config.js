/**
 * @description - This is the mode of the app. It can be either 'development' or 'production'
 * @type {String}
 * @constant
 * @default - 'development'
 * @permissbleValues - 'development' | 'production'
 */
export const MODE = "production";

/**
 * @description - This is the API URL of the app.
 * @type {String}
 * @constant
 * @default - 'http://localhost:8001/api'
 * @restrictions - Do not change this value unless you know what you are doing.
 */
export const TEST_API_URL = "http://localhost:8001";
export const PROD_API_URL = "https://helping-hands-server-nine.vercel.app";

/**
 * @description - This is the ML MODEL API URL of the app.
 * @type {String}
 * @constant
 * @default - 'http://localhost:8001/predict
 * @method - POST
 */
export const ML_MODEL_TEST_URL = "http://localhost:8000/predict";
export const ML_MODEL_PROD_URL =
  "https://credit-wizard-2qil.onrender.com/predict";

// Constants
import {
  MODE,
  TEST_API_URL,
  PROD_API_URL,
  ML_MODEL_TEST_URL,
  ML_MODEL_PROD_URL,
} from "./config";
import { ASYNC_STORAGE_ACCESS_KEY } from "../globals/constants";

// External Libraries
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = MODE === "development" ? TEST_API_URL : PROD_API_URL;
const ML_MODEL_URL =
  MODE === "development" ? ML_MODEL_TEST_URL : ML_MODEL_PROD_URL;

export const SignupFunction = async (
  data,
  setErrorMessages,
  setUser,
  setLoader
) => {
  const { fullName, email, phone, password } = data;

  setLoader(true);

  fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: fullName,
      email,
      phone,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "failed" && data.result === "Email already exists") {
        setErrorMessages("Email already exists");
        setLoader(false);
        return;
      }
      if (data.status === "failed" && data.result === "Phone already exists") {
        setErrorMessages("Phone already exists");
        setLoader(false);
        return;
      }
      if (data.status === "success") {
        setUser(data.result);
        setLoader(false);
        AsyncStorage.setItem(
          ASYNC_STORAGE_ACCESS_KEY,
          JSON.stringify(data.result)
        );
        return;
      }
      return data;
    })
    .catch((error) => {
      console.log(error);
      setLoader(false);
      return {
        status: "failed",
        result: error,
      };
    });
};

export const LoginFunction = (data, setErrorMessages, setUser, setLoader) => {
  setLoader(true);

  const { emailOrPhone, password } = data;
  const isEmail = emailOrPhone.includes("@");

  fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: isEmail ? emailOrPhone : "",
      phone: isEmail ? "" : emailOrPhone,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "failed" && data.result === "Wrong password") {
        setErrorMessages("Either email or password is invalid");
        setLoader(false);
        return;
      }
      if (data.status === "failed" && data.result === "No result found") {
        setErrorMessages("User is not registered");
        setLoader(false);
        return;
      }
      if (data.status === "success") {
        setUser(data.result);
        AsyncStorage.setItem(
          ASYNC_STORAGE_ACCESS_KEY,
          JSON.stringify(data.result)
        );
        setLoader(false);
        return;
      }
      return data;
    })
    .catch((error) => {
      setLoader(false);
      return {
        status: "failed",
        result: error,
      };
    });
};

export const ResetPasswordFunction = async (data) => {};

export const UpdatePasswordFunction = async (data) => {};

export const UpdateProfileFunction = async (
  data,
  setErrorMessages,
  setUser,
  setLoader
) => {};

export const GenerateOtpFunction = (length) => {
  if (!length) length = 6;

  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const sendOtpFunction = (data) => {
  const { email, setLoader, setError, navigation, otp, setOtp } = data;
  setOtp(GenerateOtpFunction(6));

  setLoader(true);

  fetch(`${API_URL}/sendOtp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mail: email,
      otp,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "failed" && data.result === "No result found") {
        setError("User is not registered");
        setLoader(false);
        return;
      }

      if (data.status === "success") {
        setLoader(false);
        setError("");
        if (navigation) navigation.navigate("OtpScreen", { email, otp });
        return {
          status: "success",
          result: otp,
        };
      }
      return data;
    })
    .catch((error) => {
      setLoader(false);
      setError("Internal server error. Please try again.");
      return {
        status: "failed",
        result: error,
      };
    });
};

export const verifyOtpFunction = (data) => {
  const { email, phone, setLoader, setError, navigation, setUser } = data;

  setLoader(true);

  fetch(`${API_URL}/setEmail`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mail: email,
      phone,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "failed" && data.result === "No result found") {
        setError("User is not registered");
        setLoader(false);
        return;
      }

      if (data.status === "success") {
        setLoader(false);
        setError("");
        setUser(data.result);
        AsyncStorage.setItem(
          ASYNC_STORAGE_ACCESS_KEY,
          JSON.stringify(data.result)
        );
        if (navigation) navigation.navigate("Home");
        return {
          status: "success",
          result: otp,
        };
      }
      return data;
    })
    .catch((error) => {
      setLoader(false);
      setError("Internal server error. Please try again.");
      return {
        status: "failed",
        result: error,
      };
    });
};

export const predictLoanVerdictFunction = (data) => {
  const { setTyping, setMessages, values } = data;

  const inputs = {
    Loan_ID: values[0],
    Gender: values[1],
    Married: values[2],
    Dependents: values[3],
    Education: values[4],
    Self_Employed: values[5],
    ApplicantIncome: values[6],
    CoapplicantIncome: values[7],
    LoanAmount: values[8],
    Loan_Amount_Term: values[9],
    Credit_History: values[10],
    Property_Area: values[11],
  };

  console.log(inputs);

  setTyping(true);

  fetch(`${ML_MODEL_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputs),
  })
    .then((response) => response.json())
    .then((data) => {
      const status = data[0];
      if (status === "0") {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            src: "other",
            message: "Sorry! but your loan application cannot be approved.",
          },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            src: "other",
            message:
              "Congratulations! Your loan application has been approved.",
          },
        ]);
      }
      setTyping(false);
    })
    .catch((error) => {
      console.log(error);
    });
};

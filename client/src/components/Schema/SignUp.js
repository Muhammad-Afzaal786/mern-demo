// import * as Yup from "yup";

// export const SignUp = Yup.object({
//   name: Yup.string().max(20).min(2).required("Please Enter Your Name"),
//   username: Yup.string().max(20).min(2).required("Please Enter Your UserName"),
//   password: Yup.string().min(6).required("Please Enter Your Password"),
//   confirm_password: Yup.string()
//     .required()
//     .oneOf([Yup.ref("password"), null], "Password Must Match"),
// });
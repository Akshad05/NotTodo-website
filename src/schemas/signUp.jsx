import * as Yup from "yup";

export const signUpSchema = Yup.object({
    username2: Yup.string().min(2).max(25).required("Please enter your name"),
    password2: Yup.string().min(6).required("Please enter your password"),
    confirmPassword2: Yup.string().min(6).required("Please Confirm your password"),
    email: Yup.string().email().required("Please enetr your email"),
})
import * as Yup from "yup";

export const signInSchema = Yup.object({
    //username: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enetr your email"),
    password: Yup.string().min(6).required("Please enetr your password"),
})


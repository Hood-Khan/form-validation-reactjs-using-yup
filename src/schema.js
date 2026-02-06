import * as yup from "yup";

export const registerSchema = yup.object({
    name: yup.string().required("Name is required").test("no-admin","Admin not allowed",value => value !== "admin").trim().lowercase(),
    email: yup.string().email("Please enter a valid email address").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Password must match").required(),
})
import { object, string } from "yup";

export const validationSchema = object({
  email: string()
    .required("email is required")
    .matches(/^\S+@\S+\.\S+$/, "Valid email required"),
});

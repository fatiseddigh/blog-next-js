import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Input from "@/components/FormInput";
import Head from "next/head";
import Layout from "@/containers/Layout";

//  initial values
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

//  validation schema
const validationSchema = Yup.object({
  name: Yup.string()
    .required("enter your name and family name")
    .min(6, "name and family name at least must be 6 character"),
  email: Yup.string().required(" enter your email ").email("email is invalid"),
  phoneNumber: Yup.string()
    .required("enter your phone number")
    .matches(/^[0-9]{11}$/, "phone umber at least must be 11 character")
    .nullable(),
  password: Yup.string()
    .required("Enter your password")
    .min(8, " Password must be 8 character"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], " enter your password again")
    .required("password not match"),
});

const Signup = () => {
  //  onSubmit
  const onSubmit = (values) => {
    const { name, email, phoneNumber, password } = values;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <Layout>
      <Head>
        <title>Signup</title>
      </Head>
      <div className="md:max-w-md px-4 md:px-4 container  mx-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-4"
        >
          <h1 className="font-black text-2xl text-violet-700 mb-4">Register</h1>
          <Input label="name and family name" name="name" formik={formik} />
          <Input label="email" name="email" formik={formik} />
          <Input
            type="tel"
            label="phoneNumber"
            name="phoneNumber"
            formik={formik}
            placeholder="09000000000"
          />
          <Input
            label="password"
            name="password"
            type="password"
            formik={formik}
          />
          <Input
            label="confirm Password"
            name="confirmPassword"
            type="password"
            formik={formik}
          />

          <button
            type="submit"
            disabled={!formik.isValid}
            className="w-full py-2 rounded-lg bg-violet-800 text-white"
          >
            register{" "}
          </button>
          <Link href="/signin">
            <p className="mt-4 py-4 cursor-pointer">
              Already have an account? Login
            </p>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;

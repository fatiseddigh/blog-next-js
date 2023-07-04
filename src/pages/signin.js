import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Input from "@/components/FormInput";
import Head from "next/head";
import Layout from "@/containers/Layout";

//  initial values
const initialValues = {
  email: "",
  password: "",
};

//  validation schema
const validationSchema = Yup.object({
  email: Yup.string().required("Enter your email ").email("Email not valid"),
  password: Yup.string()
    .required("Enter your password")
    .min(8, " Password must be 8 character"),
});

const SignIn = () => {
  //  onSubmit
  const onSubmit = (values) => {
    console.log(values);
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
        <title> Signup</title>
      </Head>
      <div className="md:max-w-md px-4 md:px-4 container  mx-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-4"
        >
          <h1 className="font-black text-2xl text-violet-700 mb-4">LOGIN</h1>
          <Input label="email" name="email" formik={formik} />
          <Input
            label="password"
            name="password"
            type="password"
            formik={formik}
          />

          <button
            type="submit"
            disabled={!formik.isValid}
            className="w-full py-2 rounded-lg bg-violet-800 text-white"
          >
            login
          </button>
          <Link href="/signup">
            <p className="mt-4 py-4 cursor-pointer">not a member ? Signup</p>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default SignIn;

"use client";

import GoogleSvg from "@/components/icons/GoogleSvg";
import AppleIcon from "@mui/icons-material/Apple";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import PasswordFelid from "@/components/ui/PasswordField";
import ContainedButton from "@/components/ui/ContainedButton";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { useFormik } from "formik";
import SignupBanner from "./SignupBanner";
import axios, { AxiosError } from "axios";
import ENVIRONMENT from "@/config/environment";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import FacebookSvg from "@/components/icons/FacebookSvg";

const validationSchema = yup.object({
  name: yup.string().required("Enter your name"),
  email: yup.string().email("Enter valid email").required("Enter your email"),
  password: yup
    .string()
    .required("Enter your password")
    .min(8, "Password must be at least 8 characters")
    .matches(/[0-9]/, "Password must contain at least 1 number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least 1 special character"
    )
    .matches(/[A-Z]/, "Password must contain at least 1 uppercase letter")
    .matches(/[a-z]/, "Password must contain at least 1 lowercase letter"),
  confirmPassword: yup
    .string()
    .required("Re-type your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const SignupPageView = () => {
  const router = useRouter();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAgree: false,
  };

  const handleGoogleSignup = () => signIn("cognito");

  const { values, touched, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values, { resetForm, setSubmitting }) => {
        const { isAgree, email, password, name } = values;
        if (isAgree) {
          setSubmitting(true);
          try {
            await axios.post(`${ENVIRONMENT.BASE_URL}/auth/signup`, {
              email,
              password,
              name,
            });
            router.push("/signin");
            toast.success(
              `Signup successful! A verification email has been sent to '${email}'`
            );
          } catch (error) {
            if (error instanceof AxiosError) {
              const errorMessage =
                error.response?.data?.error?.message ?? "Something went wrong!";
              toast.error(errorMessage);
            } else {
              toast.error("Something went wrong!");
            }
            resetForm({});
          }
          setSubmitting(false);
        } else {
          toast.info(
            "You did not agree to our terms and conditions. Please agree to continue."
          );
        }
      },
    });

  return (
    <div style={{ width: "100%" }}>
      <Box
        height="100vh"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
      >
        {/* Hide SignupBanner on small screens */}
        <Box
          width={{ xs: "100%", md: "50%" }}
          display={{ xs: "none", md: "flex" }}
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <SignupBanner />
        </Box>

        <Box
          height="100%"
          width={{ xs: "100%", md: "50%" }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding={{ xs: "40px", md: "80px" }}
        >
          <Box display="flex" width="100%" justifyContent="end" mb={2}>
            <Button sx={{ textTransform: "none", color: "#000000" }}>Help</Button>
            <ContainedButton onClick={() => router.push("/signin")}>
              Login
            </ContainedButton>
          </Box>

          <Box width="100%">
            <Typography component="h5" fontSize="25px" fontWeight="700" textAlign="center">
              Sign Up on WexelCode
            </Typography>
            <Box mt={3}>
              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <TextField
                  fullWidth
                  onChange={handleChange}
                  name="name"
                  label="Name"
                  variant="outlined"
                  value={values.name}
                  helperText={touched.name && errors.name}
                  error={touched.name && Boolean(errors.name)}
                  sx={{ marginBottom: 3 }}
                />
                <TextField
                  fullWidth
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  variant="outlined"
                  value={values.email}
                  helperText={touched.email && errors.email}
                  error={touched.email && Boolean(errors.email)}
                  sx={{ marginBottom: 3 }}
                />
                <PasswordFelid
                  onChange={handleChange}
                  name="password"
                  value={values.password}
                  helperText={touched.password && errors.password}
                  error={touched.password && Boolean(errors.password)}
                  sx={{ marginBottom: 3 }}
                  label="Password"
                />
                <PasswordFelid
                  onChange={handleChange}
                  name="confirmPassword"
                  value={values.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                  label="Confirm Password"
                />
              </form>
            </Box>

            <Divider textAlign="center" flexItem sx={{ marginY: 2.5 }}>
              OR
            </Divider>
            <Box display="flex" gap={1.5} justifyContent="space-between" mt={2} width="100%">
              <Tooltip title="Login with Google">
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ height: "50px", borderColor: "grey.500", justifyContent:"center",alignItems:"center" }}
                  onClick={handleGoogleSignup}
                >
                  <GoogleSvg />
                </Button>
              </Tooltip>
              <Tooltip title="Login with Apple">
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ height: "50px", borderColor: "grey.500" }}
                >
                  <AppleIcon sx={{ color: "#555555", fontSize: "33px" }} />
                </Button>
              </Tooltip>
              <Tooltip title="Login with Facebook">
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ height: "50px", borderColor: "grey.500", justifyContent:"center",alignItems:"center" }}
                >
                  <FacebookSvg />
                </Button>
              </Tooltip>
            </Box>
            <FormControlLabel
              label={
                <Box display="flex" fontSize={14}>
                  <div>I agree to the WexelCode</div>
                  <Link href="#" style={{ textDecoration: "underline", paddingLeft:"10px" }}>
                    Terms of Service
                  </Link>
                  <div style={{ paddingLeft:"10px" }}>and</div>
                  <Link href="#" style={{ textDecoration: "underline",paddingLeft:"10px" }}>
                    Privacy Policy
                  </Link>
                </Box>
              }
              control={<Checkbox name="isAgree" checked={values.isAgree} size="small" />}
              onChange={handleChange}
              sx={{ marginY: 2.5 }}
            />
            <ContainedButton
              fullWidth
              type="submit"
              disabled={isSubmitting}
              sx={{ height: "42px", fontWeight: 600, mt: 2 }}
            >
              Sign Up
            </ContainedButton>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              mt={2}
              color="#6C6C6C"
            >
              <div>Already have an account?&nbsp;</div>
              <Link href="/signin" style={{ color: "#A51008", textDecoration: "underline" }}>
                Login here
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SignupPageView;

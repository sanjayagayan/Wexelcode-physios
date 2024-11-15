"use client";

import GoogleSvg from "@/components/icons/GoogleSvg";
import AppleIcon from "@mui/icons-material/Apple";

import {
  Box,
  Button,
  Divider,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import PasswordFelid from "@/components/ui/PasswordField";
import ContainedButton from "@/components/ui/ContainedButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import FacebookSvg from "@/components/icons/FacebookSvg";
import SignupBanner from "modules/signup/SignupBanner";

const validationSchema = yup.object({
  email: yup.string().email("Enter valid email").required("Enter your email"),
  password: yup.string().required("Enter your password"),
});

const SigninPageView = () => {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleGoogleSignin = () => signIn("cognito");

  const { values, touched, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values, { resetForm, setSubmitting }) => {
        setSubmitting(true);
        const response = await signIn("credentials", {
          username: values.email,
          password: values.password,
          redirect: false,
        });

        if (response?.ok) {
          router.push("/dashboard");
          return;
        } else if (response?.status === 401) {
          let message = "Email or password is incorrect";
          if (response.error === "User is not confirmed.") {
            message = `Email not verified. A verification email has been sent to '${values.email}'. Please verify it before logging in!`;
          }
          toast.error(message);
          return;
        }

        toast.error("Something went wrong!");
        setSubmitting(false);
        resetForm({});
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
          <ContainedButton onClick={() => router.push("/signup")}>
            Register
          </ContainedButton>
        </Box>

        <Box width="100%">
          <Typography component="h5" fontSize="25px" fontWeight="700" textAlign="center">
            Login to your account
          </Typography>
          <Box mt={3}>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              fullWidth
              onChange={handleChange}
              name="email"
              label="Email"
              variant="outlined"
              type="text"
              value={values.email}
              helperText={touched.email && errors.email}
              error={touched.email && Boolean(errors.email)}
              sx={{ marginBottom: 3 }}
            />
            <PasswordFelid
              fullWidth
              onChange={handleChange}
              name="password"
              value={values.password}
              helperText={touched.password && errors.password}
              error={touched.password && Boolean(errors.password)}
              label="Password"
            />
            <Box
              display="flex"
              justifyContent="end"
              marginY={3}
            >
              <Link
                href="/"
              >
                Forgot Password?
              </Link>
            </Box>
            
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
                sx={{ height: "50px", borderColor: "grey.500" }}
                onClick={handleGoogleSignin}
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
                <AppleIcon sx={{ color: "#555555", fontSize: "32px" }} />
              </Button>
            </Tooltip>
            <Tooltip title="Login with Facebook">
              <Button
                variant="outlined"
                fullWidth
                sx={{ height: "50px", borderColor: "grey.500" }}
              >
                <FacebookSvg />
              </Button>
            </Tooltip>
          </Box>
          <ContainedButton
              fullWidth
              type="submit"
              disabled={isSubmitting}
              sx={{ height: "42px", fontWeight: 600, marginTop: "30px" }}
            >
              Login and Continue
            </ContainedButton>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            mt={2}
            color="#6C6C6C"
          >
            <Box
          display="flex"
          justifyContent="center"
          marginTop={1.8}
          width="100%"
        >
          <div style={{ color: "#6C6C6C" }}>Don&apos;t have an account? </div>
          <Link
            href="/signup"
            style={{ color: "#A51008", textDecoration: "underline" }}
          >
            Sign Up Now
          </Link>
        </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </div>
  );
};

export default SigninPageView;

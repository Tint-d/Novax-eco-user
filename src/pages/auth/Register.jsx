import React, { useEffect } from "react";
import Lottie from "lottie-react";
import { Paper, Checkbox, Anchor, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { IconBrandGoogle } from "@tabler/icons-react";
import toast, { Toaster } from "react-hot-toast";
import { BiLoaderAlt } from "react-icons/bi";
import { getAuth, signInWithRedirect } from "firebase/auth";
import { getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";

import InputText from "../../components/auth/InputText";
import InputPassword from "../../components/auth/InputPassword";

import authAnimation from "../../assets/auth-animation.json";
import { paths } from "../../routes/path";
import { useRegisterAccountMutation } from "../../redux/api/authApi";
import { addUser } from "../../redux/services/authSlice";
import { auth, provider } from "../../firebase/config";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerAccount, { data, isLoading }] = useRegisterAccountMutation();

  const form = useForm({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validate: {
      first_name: (value) =>
        value.length < 2 ? "First name must have at least 2 letters" : null,
      last_name: (value) =>
        value.length < 2 ? "Last name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "Your password must be at least 8 characters" : null,
      password_confirmation: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  const onSubmitHandler = async (values) => {
    const { data, error } = await registerAccount(values);

    if (data?.token) {
      toast.success(data.message);
      dispatch(addUser(data));

      navigate("/login");
    } else if (error) {
      toast.error("Registration fail");
    }
  };

  useEffect(() => {
    const oAuth = getAuth();
    getRedirectResult(oAuth)
      .then((result) => {
        if (result?.user) {
          navigate("/");
        }
      })
      .catch((error) => {
        // ...
      });
  }, []);

  const handleGoogleSignIn = () => {
    signInWithRedirect(auth, provider).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="w-full flex md:flex-row flex-col-reverse items-center authScrollbar ">
      <Toaster position="bottom-center" />

      <div className="md:w-[50%] w-full min-h-screen py-[30px]  sm:px-[10px] px-[5px]">
        <form
          onSubmit={form.onSubmit((values) => onSubmitHandler(values))}
          className="w-full flex justify-center items-center"
        >
          <Paper
            className="sm:w-[460px] w-full shadow-2xl  py-[30px] lg:px-[40px] sm:px-[30px] px-[15px] flex flex-col items-center gap-[10px]
           border border-opacity-10"
            radius="md"
          >
            <h1 className="text-center text-2xl text-[#2E2A2A] font-bold">
              Welcome back
            </h1>

            <p className="text-center text-base font-medium text-[#645D5D] mb-[10px]">
              Let's start by creating you account
            </p>

            <InputText
              form={form}
              label={"First Name"}
              placeholder={"John"}
              value={"first_name"}
            />

            <InputText
              form={form}
              label={"Last Name"}
              placeholder={"Doe"}
              value={"last_name"}
            />

            <InputText
              form={form}
              label={"Email"}
              placeholder={"eg. example@gmail.com"}
              value={"email"}
            />

            <InputPassword form={form} placeholder={"••••••••"} />

            <InputPassword form={form} confirmation placeholder={"••••••••"} />

            <div className="flex justify-start items-center w-full my-[20px]">
              <Checkbox
                required
                label="I agree the &nbsp;"
                sx={{
                  ["& .mantine-Checkbox-input:checked"]: {
                    backgroundColor: "#FFE500",
                    borderColor: "#FFE500",
                  },
                }}
                classNames={{ label: "text-[#5A5959] font-medium" }}
              />
              <Anchor
                component="button"
                size="sm"
                className="text-[#0946E2]"
                underline={false}
              >
                Terms of Service
              </Anchor>
            </div>

            <button
              type="submit"
              className=" h-[50px] bg-[#FFD93D] border border-[#FFE500] text-white font-medium text-lg w-full 
              rounded-xl mt-3 flex justify-center items-center"
            >
              {isLoading ? (
                <BiLoaderAlt className=" animate-spin" size={22} />
              ) : (
                <>Sign Up</>
              )}
            </button>

            <Button
              onClick={handleGoogleSignIn}
              leftIcon={<IconBrandGoogle />}
              classNames={{
                root: "bg-white border border-[#242424] h-[50px] my-3 rounded-xl hover:border-[#FFD93D] hover:bg-white ",
                inner:
                  "text-[#131212] hover:text-[#FFD93D] text-lg font-medium",
              }}
              fullWidth
            >
              Sign in with Google
            </Button>

            <h6 className="text-sm text-[#4B4949] text-center">
              Already have an account? &nbsp;
              <Anchor
                href={paths.Login}
                size="sm"
                className="text-[#0946E2]"
                underline={false}
              >
                Sign In
              </Anchor>
            </h6>
          </Paper>
        </form>
      </div>

      <div className="w-[50%] h-screen fixed top-0 right-0 md:flex hidden justify-center items-center">
        <div className="w-[600px] ">
          <Lottie animationData={authAnimation} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Register;

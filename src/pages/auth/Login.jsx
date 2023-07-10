import React, { useEffect } from "react";
import Lottie from "lottie-react";
import { Paper, Checkbox, Anchor, Button } from "@mantine/core";
import { useForm } from "@mantine/form";

import InputText from "../../components/auth/InputText";
import InputPassword from "../../components/auth/InputPassword";

import authAnimation from "../../assets/auth-animation.json";
import { IconBrandGoogle } from "@tabler/icons-react";
import { paths } from "../../routes/path";
import { Toaster, toast } from "react-hot-toast";
import { useLoginAccountMutation } from "../../redux/api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/services/authSlice";
import { BiLoaderAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { getAuth, getRedirectResult, signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../../firebase/config";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginAccount, { data, isLoading }] = useLoginAccountMutation();

  const form = useForm({
    initialValues: {
      email: "novax@gmail.com",
      password: "11223344",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "password must be at least 8 characters long" : null,
    },
  });

  const onSubmitHandler = async (values) => {
    console.log(values);

    const { data, error } = await loginAccount(values);

    if (data?.token) {
      toast.success(data.message);
      dispatch(addUser(data));

      navigate("/");
    } else if (error) {
      toast.error(error.message);
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
      // console.log(data);
    });
  };

  return (
    <div className="w-full flex md:flex-row flex-col-reverse items-center authScrollbar ">
      <Toaster position="bottom-center" />

      <div className="md:w-[50%] w-full  min-h-screen py-[30px]  sm:px-[10px] px-[5px]">
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
              Welcome back! Please enter your details
            </p>

            <InputText
              form={form}
              label={"Email"}
              placeholder={"Enter Your Email"}
              value={"email"}
            />

            <InputPassword form={form} />

            <div className="flex justify-between items-center w-full my-[20px]">
              <Checkbox
                required
                label="Agree the policy"
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
                Forgot password?
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
              Don't have an account? &nbsp;
              <Anchor
                href={paths.Register}
                size="sm"
                className="text-[#0946E2]"
                underline={false}
              >
                Sign Up
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

export default Login;

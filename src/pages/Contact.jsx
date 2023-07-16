import React from "react";
import Layout from "../Layout";
import { MdPhoneInTalk } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";
import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
  matches,
} from "@mantine/form";
import {
  Button,
  Group,
  TextInput,
  NumberInput,
  Box,
  Textarea,
} from "@mantine/core";
import AnimationLayout from "../AnimationLayout.jsx";
const Contact = () => {
  const form = useForm({
    initialValues: {
      name: "",
      job: "",
      email: "",
      favoriteColor: "",
      age: 18,
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }),
      job: isNotEmpty(),
      email: isEmail(),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/),
      age: isInRange({ min: 18, max: 99 }),
    },
  });
  return (
    <Layout>
      <div className=" bg-white/90  min-h-screen flex flex-wrap">
        <div className="mx-auto  flex flex-col items-center  md:px-6 px-2 w-10/12 md:w-6/12">
          <AnimationLayout>
            <div className=" ">
              <h2 className=" text-[30px] px-10 md:px-5  md:text-[40px] font-semibold">
                Get in <span className="  text-brand"> touch</span>
              </h2>
              <h2 className="px-10 md:px-5 text-[14px]   text-normal font-medium">
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit .
              </h2>
            </div>

            <div className=" px-10 py-5">
              <Box
                component="form"
                maw={400}
                onSubmit={form.onSubmit(() => {})}
              >
                <TextInput
                  placeholder="Name"
                  withAsterisk
                  {...form.getInputProps("name")}
                />
                <TextInput
                  placeholder="City"
                  withAsterisk
                  mt="lg"
                  {...form.getInputProps("job")}
                />
                <TextInput
                  placeholder="Contact Phone"
                  withAsterisk
                  mt="lg"
                  {...form.getInputProps("email")}
                />
                <TextInput
                  placeholder="Email"
                  withAsterisk
                  mt="lg"
                  {...form.getInputProps("favoriteColor")}
                />
                <Textarea
                  placeholder="Let's talk about your idea"
                  withAsterisk
                  mt="lg"
                  {...form.getInputProps("favoriteColor")}
                />

                <Group position="right" mt="lg">
                  <button
                    className="w-full py-2 rounded font-bold bg-brand  text-white font-serif"
                    type="submit"
                  >
                    Submit
                  </button>
                </Group>
              </Box>
              <div className=" py-3  gap-x-10 flex items-center">
                <div className=" flex items-center gap-x-2">
                  <MdPhoneInTalk className=" text-header text-2xl" />
                  <div className="">
                    <h2 className=" text-header text-[14px] font-semibold">
                      Phone
                    </h2>
                    <p className=" text-brand text-[14px]">09-950477322</p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2">
                  <BiMailSend className=" text-header text-2xl" />
                  <div className="">
                    <h2 className=" text-header text-[14px] font-semibold">
                      Email
                    </h2>
                    <p className=" text-brand text-[14px]">novax@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimationLayout>
        </div>
        <div className=" w-12/12 mx-auto md:w-6/12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.1304384433706!2d96.1293156742235!3d16.819883933973728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb4aabd3fc11%3A0x415652183cd73011!2sNovotel%20Yangon%20Max%20Hotel!5e0!3m2!1sen!2ssg!4v1689340537230!5m2!1sen!2ssg"
            className=" w-[370px] md:w-full h-screen"
            allowfullscreen=" true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

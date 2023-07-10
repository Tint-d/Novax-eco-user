import { TextInput } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";
import React from "react";

const InputText = ({ form, label, placeholder, value }) => {
  return (
    <>
      <TextInput
        label={label}
        placeholder={placeholder}
        required
        withAsterisk={false}
        sx={{
          ["& .mantine-TextInput-input::placeholder"]: {
            color: "dimmed",
            fontSize: "14px",
            fontWeight: 400,
          },
        }}
        classNames={{
          label: "text-[#2E2A2A] px-5 text-base mb-[10px]",
          input:
            "text-[#2E2A2A] px-5 h-[50px] rounded-full bg-[#F1F1F1] border border-[#EEE7E7]",
        }}
        className="w-full"
        {...form.getInputProps(value)}
        error={false}
      />
      <div className="w-full -mt-1">
        {form.errors.email && (
          <p className="text-red-600 text-xs mt-1 px-5 text-start">
            {form.errors.email}
          </p>
        )}
      </div>
    </>
  );
};

export default InputText;

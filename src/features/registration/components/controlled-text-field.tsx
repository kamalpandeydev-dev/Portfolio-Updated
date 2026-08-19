"use client";

import InputAdornment from "@mui/material/InputAdornment";
import TextField, { type TextFieldProps } from "@mui/material/TextField";
import {
  Controller,
  type Control,
  type FieldPathByValue
} from "react-hook-form";
import type { RegistrationFormValues } from "../types/registration.types";

type RegistrationTextFieldName = FieldPathByValue<RegistrationFormValues, string>;

interface ControlledTextFieldProps
  extends Omit<
    TextFieldProps,
    "name" | "value" | "onChange" | "error" | "slotProps"
  > {
  name: RegistrationTextFieldName;
  control: Control<RegistrationFormValues>;
  icon?: React.ReactNode;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}

export function ControlledTextField({
  name,
  control,
  icon,
  inputMode,
  helperText,
  ...textFieldProps
}: ControlledTextFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...textFieldProps}
          fullWidth
          error={Boolean(fieldState.error)}
          helperText={fieldState.error?.message ?? helperText}
          slotProps={{
            input: icon
              ? {
                  startAdornment: (
                    <InputAdornment position="start">{icon}</InputAdornment>
                  )
                }
              : undefined,
            htmlInput: inputMode ? { inputMode } : undefined
          }}
        />
      )}
    />
  );
}

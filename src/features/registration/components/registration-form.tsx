"use client";

import AccountCircleRounded from "@mui/icons-material/AccountCircleRounded";
import AttachMoneyRounded from "@mui/icons-material/AttachMoneyRounded";
import BusinessRounded from "@mui/icons-material/BusinessRounded";
import CategoryRounded from "@mui/icons-material/CategoryRounded";
import ChatRounded from "@mui/icons-material/ChatRounded";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import EmailRounded from "@mui/icons-material/EmailRounded";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import LanguageRounded from "@mui/icons-material/LanguageRounded";
import LinkedIn from "@mui/icons-material/LinkedIn";
import PaymentsRounded from "@mui/icons-material/PaymentsRounded";
import PhoneIphoneRounded from "@mui/icons-material/PhoneIphoneRounded";
import SendRounded from "@mui/icons-material/SendRounded";
import Twitter from "@mui/icons-material/Twitter";
import VerifiedUserRounded from "@mui/icons-material/VerifiedUserRounded";
import WhatsApp from "@mui/icons-material/WhatsApp";
import YouTube from "@mui/icons-material/YouTube";
import { zodResolver } from "@hookform/resolvers/zod";
import Alert, { type AlertColor } from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { registrationSchema } from "../schemas/registration.schema";
import { getApiErrorMessage, registrationApi } from "../services/registration-api";
import type {
  CategoryDto,
  RegistrationFormValues
} from "../types/registration.types";
import { ControlledTextField } from "./controlled-text-field";
import { SectionBlock } from "./section-block";

const defaultValues: RegistrationFormValues = {
  full_name: "",
  business_name: "",
  email: "",
  mobile: "",
  whatsapp: "",
  website: "",
  instagram: "",
  youtube: "",
  facebook: "",
  linkedin: "",
  twitter: "",
  category: "",
  story_price: "",
  post_price: "",
  reel_price: "",
  short_price: "",
  youtube_price: "",
  other_price: "",
  business_description: "",
  comments: "",
  declaration: false
};

const fieldGridSx = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
  gap: 2
} as const;

interface SnackbarState {
  open: boolean;
  message: string;
  severity: AlertColor;
}

export function RegistrationForm() {
  const [categories, setCategories] = useState<CategoryDto[]>([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState(true);
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "success"
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues,
    mode: "onBlur"
  });

  useEffect(() => {
    let isMounted = true;

    const loadCategories = async (): Promise<void> => {
      try {
        const data = await registrationApi.getCategories();

        if (isMounted) {
          setCategories(data);
        }
      } catch (error) {
        if (isMounted) {
          setSnackbar({
            open: true,
            message: getApiErrorMessage(error),
            severity: "error"
          });
        }
      } finally {
        if (isMounted) {
          setIsCategoryLoading(false);
        }
      }
    };

    void loadCategories();

    return () => {
      isMounted = false;
    };
  }, []);

  const onSubmit = async (values: RegistrationFormValues): Promise<void> => {
    try {
      await registrationApi.submitRegistration(values);
      reset(defaultValues);
      setSnackbar({
        open: true,
        message: "Registration submitted successfully.",
        severity: "success"
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: getApiErrorMessage(error),
        severity: "error"
      });
    }
  };

  return (
    <>
      <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <SectionBlock
          title="Personal Information"
          icon={<AccountCircleRounded fontSize="small" />}
        >
          <Box sx={fieldGridSx}>
            <ControlledTextField
              name="full_name"
              control={control}
              label="Full Name"
              autoComplete="name"
              icon={<AccountCircleRounded color="primary" fontSize="small" />}
            />
            <ControlledTextField
              name="email"
              control={control}
              label="Email"
              type="email"
              autoComplete="email"
              icon={<EmailRounded color="primary" fontSize="small" />}
            />
            <ControlledTextField
              name="mobile"
              control={control}
              label="Mobile"
              autoComplete="tel"
              icon={<PhoneIphoneRounded color="primary" fontSize="small" />}
            />
            <ControlledTextField
              name="whatsapp"
              control={control}
              label="WhatsApp"
              autoComplete="tel"
              icon={<WhatsApp color="primary" fontSize="small" />}
            />
          </Box>
        </SectionBlock>

        <SectionBlock
          title="Business Information"
          icon={<BusinessRounded fontSize="small" />}
        >
          <Box sx={fieldGridSx}>
            <ControlledTextField
              name="business_name"
              control={control}
              label="Business Name"
              autoComplete="organization"
              icon={<BusinessRounded color="primary" fontSize="small" />}
            />
            <ControlledTextField
              name="website"
              control={control}
              label="Website"
              type="url"
              icon={<LanguageRounded color="primary" fontSize="small" />}
            />
            <ControlledTextField
              name="instagram"
              control={control}
              label="Instagram"
              type="url"
              icon={<Instagram color="primary" fontSize="small" />}
            />
            <ControlledTextField
              name="youtube"
              control={control}
              label="YouTube"
              type="url"
              icon={<YouTube color="primary" fontSize="small" />}
            />
            <ControlledTextField
              name="facebook"
              control={control}
              label="Facebook"
              type="url"
              icon={<Facebook color="primary" fontSize="small" />}
            />
            <ControlledTextField
              name="linkedin"
              control={control}
              label="LinkedIn"
              type="url"
              icon={<LinkedIn color="primary" fontSize="small" />}
            />
            <ControlledTextField
              name="twitter"
              control={control}
              label="Twitter"
              type="url"
              icon={<Twitter color="primary" fontSize="small" />}
            />
          </Box>
        </SectionBlock>

        <SectionBlock title="Category" icon={<CategoryRounded fontSize="small" />}>
          <Controller
            name="category"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                select
                fullWidth
                label="Category Dropdown"
                disabled={isCategoryLoading || categories.length === 0}
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <CategoryRounded color="primary" fontSize="small" />
                      </InputAdornment>
                    )
                  }
                }}
              >
                <MenuItem value="" disabled>
                  {isCategoryLoading ? "Loading categories" : "Select category"}
                </MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </SectionBlock>

        <SectionBlock
          title="Promotion Charges"
          icon={<PaymentsRounded fontSize="small" />}
        >
          <Box sx={fieldGridSx}>
            <ControlledTextField
              name="story_price"
              control={control}
              label="Story Price"
              inputMode="decimal"
              icon={<AttachMoneyRounded color="primary" fontSize="small" />}
            />
            <ControlledTextField
              name="post_price"
              control={control}
              label="Post Price"
              inputMode="decimal"
              icon={<AttachMoneyRounded color="primary" fontSize="small" />}
            />
            <ControlledTextField
              name="reel_price"
              control={control}
              label="Reel Price"
              inputMode="decimal"
              icon={<AttachMoneyRounded color="primary" fontSize="small" />}
            />
            <ControlledTextField
              name="short_price"
              control={control}
              label="Short Price"
              inputMode="decimal"
              icon={<AttachMoneyRounded color="primary" fontSize="small" />}
            />
            <ControlledTextField
              name="youtube_price"
              control={control}
              label="Video Price"
              inputMode="decimal"
              icon={<AttachMoneyRounded color="primary" fontSize="small" />}
            />
            <ControlledTextField
              name="other_price"
              control={control}
              label="Other Promotion"
              inputMode="decimal"
              icon={<AttachMoneyRounded color="primary" fontSize="small" />}
            />
          </Box>
        </SectionBlock>

        <SectionBlock
          title="Business Description"
          icon={<DescriptionRounded fontSize="small" />}
        >
          <ControlledTextField
            name="business_description"
            control={control}
            label="Business Description"
            multiline
            minRows={5}
            icon={<DescriptionRounded color="primary" fontSize="small" />}
          />
        </SectionBlock>

        <SectionBlock title="Comments" icon={<ChatRounded fontSize="small" />}>
          <ControlledTextField
            name="comments"
            control={control}
            label="Comments"
            multiline
            minRows={4}
            icon={<ChatRounded color="primary" fontSize="small" />}
          />
        </SectionBlock>

        <Box sx={{ pt: { xs: 3, md: 4 } }}>
          <Stack spacing={2.5}>
            <SectionBlock
              title="Declaration"
              icon={<VerifiedUserRounded fontSize="small" />}
            >
              <Controller
                name="declaration"
                control={control}
                render={({ field, fieldState }) => (
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={field.value}
                          onChange={(event) => field.onChange(event.target.checked)}
                          color="primary"
                        />
                      }
                      label={
                        <Typography variant="body2" color="text.secondary">
                          I confirm that the submitted information is accurate and
                          that Star Sponsor may contact me about sponsorship and
                          collaboration opportunities.
                        </Typography>
                      }
                      sx={{
                        alignItems: "flex-start",
                        m: 0,
                        ".MuiFormControlLabel-label": {
                          pt: 0.9
                        }
                      }}
                    />
                    {fieldState.error ? (
                      <FormHelperText error sx={{ ml: 5.25 }}>
                        {fieldState.error.message}
                      </FormHelperText>
                    ) : null}
                  </Box>
                )}
              />
            </SectionBlock>

            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={isSubmitting}
              startIcon={
                isSubmitting ? (
                  <CircularProgress size={18} color="inherit" />
                ) : (
                  <SendRounded />
                )
              }
              sx={{
                alignSelf: { xs: "stretch", sm: "flex-end" },
                px: 4,
                minWidth: { sm: 220 }
              }}
            >
              {isSubmitting ? "Submitting" : "Submit Registration"}
            </Button>
          </Stack>
        </Box>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar((current) => ({ ...current, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={snackbar.severity}
          variant="filled"
          onClose={() => setSnackbar((current) => ({ ...current, open: false }))}
          sx={{ width: "100%", borderRadius: 3 }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

import { z } from "zod";

const phonePattern = /^\+?[0-9\s().-]{7,30}$/;
const amountPattern = /^\d+(\.\d{1,2})?$/;

const trimString = (value: unknown): unknown =>
  typeof value === "string" ? value.trim() : value;

const requiredText = (label: string, min: number, max: number) =>
  z.preprocess(
    trimString,
    z
      .string()
      .min(min, `${label} must be at least ${min} characters.`)
      .max(max, `${label} must be at most ${max} characters.`)
  );

const optionalUrl = (label: string) =>
  z.preprocess(
    trimString,
    z
      .string()
      .max(255, `${label} must be at most 255 characters.`)
      .refine(
        (value) => {
          if (!value) {
            return true;
          }

          try {
            const url = new URL(value);
            return url.protocol === "http:" || url.protocol === "https:";
          } catch {
            return false;
          }
        },
        `${label} must be a valid URL starting with http:// or https://.`
      )
  );

const optionalAmount = (label: string) =>
  z.preprocess(
    trimString,
    z
      .string()
      .max(12, `${label} must be at most 12 characters.`)
      .refine((value) => !value || amountPattern.test(value), {
        message: `${label} must be a valid amount with up to two decimals.`
      })
      .refine((value) => !value || Number(value) <= 99999999.99, {
        message: `${label} must be less than or equal to 99999999.99.`
      })
  );

export const registrationSchema = z.object({
  full_name: requiredText("Full name", 2, 120),
  business_name: requiredText("Business name", 2, 150),
  email: z.preprocess(
    trimString,
    z
      .string()
      .min(1, "Email is required.")
      .email("Email must be valid.")
      .max(150, "Email must be at most 150 characters.")
  ),
  mobile: z.preprocess(
    trimString,
    z
      .string()
      .min(1, "Mobile is required.")
      .regex(phonePattern, "Mobile must be a valid phone number.")
  ),
  whatsapp: z.preprocess(
    trimString,
    z
      .string()
      .regex(phonePattern, "WhatsApp must be a valid phone number.")
      .or(z.literal(""))
  ),
  website: optionalUrl("Website"),
  instagram: optionalUrl("Instagram"),
  youtube: optionalUrl("YouTube"),
  facebook: optionalUrl("Facebook"),
  linkedin: optionalUrl("LinkedIn"),
  twitter: optionalUrl("Twitter"),
  category: z.preprocess(
    trimString,
    z.string().min(1, "Category is required.")
  ),
  story_price: optionalAmount("Story price"),
  post_price: optionalAmount("Post price"),
  reel_price: optionalAmount("Reel price"),
  short_price: optionalAmount("Short price"),
  youtube_price: optionalAmount("Video price"),
  other_price: optionalAmount("Other promotion"),
  business_description: z.preprocess(
    trimString,
    z
      .string()
      .min(20, "Business description must be at least 20 characters.")
      .max(5000, "Business description must be at most 5000 characters.")
  ),
  comments: z.preprocess(
    trimString,
    z.string().max(2000, "Comments must be at most 2000 characters.")
  ),
  declaration: z.boolean().refine((value) => value, {
    message: "Declaration must be accepted."
  })
});

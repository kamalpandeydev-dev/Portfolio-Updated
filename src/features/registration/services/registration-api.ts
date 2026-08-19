import axios from "axios";
import { apiClient } from "@/lib/axios/api-client";
import type { ApiErrorResponse, ApiSuccessResponse } from "../types/api.types";
import type {
  CategoryDto,
  CreateRegistrationRequest,
  CreateRegistrationResponse,
  RegistrationFormValues
} from "../types/registration.types";

const toNullableString = (value: string): string | null => {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
};

const toCreateRegistrationRequest = (
  values: RegistrationFormValues
): CreateRegistrationRequest => ({
  full_name: values.full_name.trim(),
  business_name: values.business_name.trim(),
  email: values.email.trim(),
  mobile: values.mobile.trim(),
  whatsapp: toNullableString(values.whatsapp),
  website: toNullableString(values.website),
  instagram: toNullableString(values.instagram),
  youtube: toNullableString(values.youtube),
  facebook: toNullableString(values.facebook),
  linkedin: toNullableString(values.linkedin),
  twitter: toNullableString(values.twitter),
  category: values.category.trim(),
  story_price: toNullableString(values.story_price),
  post_price: toNullableString(values.post_price),
  reel_price: toNullableString(values.reel_price),
  short_price: toNullableString(values.short_price),
  youtube_price: toNullableString(values.youtube_price),
  other_price: toNullableString(values.other_price),
  business_description: values.business_description.trim(),
  comments: toNullableString(values.comments)
});

export const getApiErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const responseError = error.response?.data?.error;

    if (responseError?.details?.length) {
      return responseError.details[0]?.message ?? responseError.message;
    }

    if (responseError?.message) {
      return responseError.message;
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong. Please try again.";
};

export const registrationApi = {
  getCategories: async (): Promise<CategoryDto[]> => {
    const response =
      await apiClient.get<ApiSuccessResponse<CategoryDto[]>>("/api/categories");

    return response.data.data;
  },

  submitRegistration: async (
    values: RegistrationFormValues
  ): Promise<CreateRegistrationResponse> => {
    const response = await apiClient.post<
      ApiSuccessResponse<CreateRegistrationResponse>
    >("/api/register", toCreateRegistrationRequest(values));

    return response.data.data;
  }
};

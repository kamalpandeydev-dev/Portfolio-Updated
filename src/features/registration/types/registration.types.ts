export interface CategoryDto {
  id: string;
  name: string;
}

export interface RegistrationFormValues {
  full_name: string;
  business_name: string;
  email: string;
  mobile: string;
  whatsapp: string;
  website: string;
  instagram: string;
  youtube: string;
  facebook: string;
  linkedin: string;
  twitter: string;
  category: string;
  story_price: string;
  post_price: string;
  reel_price: string;
  short_price: string;
  youtube_price: string;
  other_price: string;
  business_description: string;
  comments: string;
  declaration: boolean;
}

export interface CreateRegistrationRequest {
  full_name: string;
  business_name: string;
  email: string;
  mobile: string;
  whatsapp: string | null;
  website: string | null;
  instagram: string | null;
  youtube: string | null;
  facebook: string | null;
  linkedin: string | null;
  twitter: string | null;
  category: string;
  story_price: string | null;
  post_price: string | null;
  reel_price: string | null;
  short_price: string | null;
  youtube_price: string | null;
  other_price: string | null;
  business_description: string;
  comments: string | null;
}

export interface CreateRegistrationResponse {
  registration_id: string;
  status: string;
  submitted_at: string;
}

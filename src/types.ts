type ProviderDbOnly = {
  date_created: number;
  needs_review: boolean;
  edit_hash: string;
};

export interface OrganizationFoundation extends ProviderDbOnly {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  zip: number;
  overview: string;
  year_established: string;
  logo: string;
}

export interface IndividualProviderFoundation extends OrganizationFoundation {
  business_name: string;
  role: string;
  bio: string;
  pronouns: string;
  languages_spoken: string;
  profile_photo: string;
}

export type DemographicOptionTypes = 'gender' | 'ethnicity';
export type ProviderType = 'individual' | 'organization';
export type ProviderOptionTypes =
  | 'payment'
  | 'service'
  | 'certification'
  | 'appointment_type';

export type BridgeTable =
  | `${ProviderType}_${ProviderOptionTypes}`
  | `demographic_${DemographicOptionTypes}`
  | 'organization_individual';

export type Endpoint =
  | DemographicOptionTypes
  | ProviderOptionTypes
  | ProviderType
  | BridgeTable
  | 'demographic';

export type Option = {
  id: number;
  name: string;
};

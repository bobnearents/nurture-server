type ProviderDbOnly = {
  date_created: number;
  needs_review: boolean;
  edit_hash?: string;
};

export interface OrganizationObject extends ProviderDbOnly {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  website?: string;
  address_1?: string;
  address_2?: string;
  city?: string;
  state?: string;
  zip?: number;
  overview?: string;
  year_established?: string;
  logo?: string;
}

export interface IndividualProviderObject extends OrganizationObject {
  business_name: string;
  role?: string;
  bio?: string;
  pronouns?: string;
  languages_spoken?: string;
  profile_photo?: string;
}

export interface DemographicObject {
  id: number;
  provider_id: number;
  age: number;
}

export interface OptionObject {
  id: number;
  name: string;
  full_name?: string;
  at_risk?: boolean;
}

type ExtractTableAndOption<T extends string> =
  T extends `${infer Table}_${infer Option}` ? [Table, Option] : never;

export type BridgeTableObject<T extends string> = {
  id: string; // Assuming id is present in all bridge tables
} & {
  [K in
    | `${ExtractTableAndOption<T>[0]}_id`
    | `${ExtractTableAndOption<T>[1]}_id`]: number;
} & {
  [L in `${ExtractTableAndOption<T>[0]}_description`]: string;
};

export type ProviderTypes = 'individual' | 'organization';
export type DemographicOptionNames = 'gender' | 'ethnicity';
export type OrganizationOptionNames = 'payment' | 'appointment_type';

export type ProviderOptionNames =
  | OrganizationOptionNames
  | 'service'
  | 'certification';

export type OptionTableNames = DemographicOptionNames | ProviderOptionNames;
export type BridgeTableNames =
  | `${ProviderTypes}_${ProviderOptionNames}`
  | `demographic_${DemographicOptionNames}`
  | 'organization_individual';

export type TableNames =
  | ProviderTypes
  | OptionTableNames
  | BridgeTableNames
  | 'demographic';

export type Option = {
  id: number;
  name: string;
};

type JoinedProviderObject<T extends string, U> = {
  [Name in T as `${Name}_id`]: number;
} & {
  [Name in T as `${Name}`]: string;
} & U;

export type JoinedIndividualProviderObject = JoinedProviderObject<
  ProviderOptionNames,
  IndividualProviderObject
>;
export type JoinedOrganizationObject = JoinedProviderObject<
  OrganizationOptionNames,
  OrganizationObject
>;
export type JoinedObject =
  | JoinedIndividualProviderObject
  | JoinedOrganizationObject;

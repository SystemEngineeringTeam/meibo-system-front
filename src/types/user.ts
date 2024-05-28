// 現役部員
export interface ActiveUserProps {
  type: 'active';
  studentNumber: string;
  position: string;
  grade: string;
}

// OB・OG
export interface OBOGMemberProps {
  type: 'obog';
  oldPosition: string;
  oldStudentNumber: string;
  employment: string;
}

// 外部
export interface ExternalMember {
  type: 'external';
  school: string;
  organization: string;
}

// 住所
export interface Address {
  postalCode: string;
  address: string;
}

// 非公開情報
export interface PrivateProps {
  birthdate: string;
  gender: string;
  phoneNumber: string;
  email: string;
  currentAddress: Address;
  homeAddress: Address;
}

// ユーザー
export interface UserBase {
  id: string;
  firstName: string;
  lastName: string;
  firstNameKana: string;
  lastNameKana: string;
  skills: string[];
  graduationYear: number;
  slackName: string;
  iconUrl: string;
}

export type User<WithPrivate extends boolean> = UserBase &
  (ActiveUserProps | OBOGMemberProps | ExternalMember) &
  (WithPrivate extends true ? PrivateProps : Record<never, never>);

export type CurrentUser = User<true> | null;

export enum Status {
  Inactive = 'Inactive',
  Active = 'Active',
}

export interface CreateNewUser {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export interface UpdateUser {
  title: string;
  firstName: string;
  lastName: string;
  institution: string;
  department: string;
  phoneNumber: string;
  alternativePhoneNumber: string;
  gender: string;
}

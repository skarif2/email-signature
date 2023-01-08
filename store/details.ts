import { StateCreator } from 'zustand';

export interface IDetails {
  firstName: string;
  lastName: string;
  jobTitle: string;
  department: string;
  company: string;
  officeNumber: string;
  mobileNumber: string;
  website: string;
  email: string;
  address: string;
  updateFirstName: (firstName: string) => void;
  updateLaseName: (lastName: string) => void;
  updateJobTitle: (jobTitle: string) => void;
  updateDepartment: (department: string) => void;
  updateCompany: (company: string) => void;
  updateOfficeNumber: (officeNumber: string) => void;
  updateMobileNumber: (mobileNumber: string) => void;
  updateWebsite: (website: string) => void;
  updateEmail: (email: string) => void;
  updateAddress: (address: string) => void;
}

export const createDetailsSlice: StateCreator<IDetails> = (set) => ({
  firstName: '',
  lastName: '',
  jobTitle: '',
  department: '',
  company: '',
  officeNumber: '',
  mobileNumber: '',
  website: '',
  email: '',
  address: '',
  updateFirstName: (firstName) => set((state) => ({ ...state, firstName })),
  updateLaseName: (lastName) => set((state) => ({ ...state, lastName })),
  updateJobTitle: (jobTitle) => set((state) => ({ ...state, jobTitle })),
  updateDepartment: (department) => set((state) => ({ ...state, department })),
  updateCompany: (company) => set((state) => ({ ...state, company })),
  updateOfficeNumber: (officeNumber) =>
    set((state) => ({ ...state, officeNumber })),
  updateMobileNumber: (mobileNumber) =>
    set((state) => ({ ...state, mobileNumber })),
  updateWebsite: (website) => set((state) => ({ ...state, website })),
  updateEmail: (email) => set((state) => ({ ...state, email })),
  updateAddress: (address) => set((state) => ({ ...state, address })),
});

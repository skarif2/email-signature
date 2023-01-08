import { StateCreator } from 'zustand';

export interface IDetails {
  name: string;
  jobTitle: string;
  department: string;
  company: string;
  officeNumber: string;
  mobileNumber: string;
  website: string;
  email: string;
  address: string;
  updateName: (firstName: string) => void;
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
  name: '',
  jobTitle: '',
  department: '',
  company: '',
  officeNumber: '',
  mobileNumber: '',
  website: '',
  email: '',
  address: '',
  updateName: (name) => set((state) => ({ ...state, name })),
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

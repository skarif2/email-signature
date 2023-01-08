import { StateCreator } from 'zustand';

export interface IImages {
  profilePicture: string;
  companyLogo: string;
  CTACopy: string;
  CTAUrl: string;
  CTAColor: string;
  CTATextColor: string;
  CTAImage: string;
  updateProfilePicture: (profilePicture: string) => void;
  updateConmpanyLogo: (companyLogo: string) => void;
  updateCTACopy: (CTACopy: string) => void;
  updateCTAUrl: (CTAUrl: string) => void;
  updateCTAColor: (CTAColor: string) => void;
  updateCTATextColor: (CTATextColor: string) => void;
  updateCTAImage: (CTAImage: string) => void;
}

export const createImagesSlice: StateCreator<IImages> = (set) => ({
  profilePicture: '',
  companyLogo: '',
  CTACopy: '',
  CTAUrl: '',
  CTAColor: '7075DB',
  CTATextColor: 'FFFFFF',
  CTAImage: '',
  updateProfilePicture: (profilePicture) =>
    set((state) => ({ ...state, profilePicture })),
  updateConmpanyLogo: (companyLogo) =>
    set((state) => ({ ...state, companyLogo })),
  updateCTACopy: (CTACopy) => set((state) => ({ ...state, CTACopy })),
  updateCTAUrl: (CTAUrl) => set((state) => ({ ...state, CTAUrl })),
  updateCTAColor: (CTAColor) => set((state) => ({ ...state, CTAColor })),
  updateCTATextColor: (CTATextColor) =>
    set((state) => ({ ...state, CTATextColor })),
  updateCTAImage: (CTAImage) => set((state) => ({ ...state, CTAImage })),
});

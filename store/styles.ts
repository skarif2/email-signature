import { StateCreator } from 'zustand';

export interface IStyles {
  themeColor: string;
  textColor: string;
  linkColor: string;
  font: string;
  fontSize: string;
  updateThemeColor: (themeColor: string) => void;
  updateTextColor: (textColor: string) => void;
  updateLinkColor: (linkColor: string) => void;
  updateFont: (font: string) => void;
  updateFontSize: (fontSize: string) => void;
}

export const createStylesSlice: StateCreator<IStyles> = (set) => ({
  themeColor: 'F83368',
  textColor: '000000',
  linkColor: '6A78D1',
  font: 'Arial',
  fontSize: 'Normal',
  updateThemeColor: (themeColor) => set((state) => ({ ...state, themeColor })),
  updateTextColor: (textColor) => set((state) => ({ ...state, textColor })),
  updateLinkColor: (linkColor) => set((state) => ({ ...state, linkColor })),
  updateFont: (font) => set((state) => ({ ...state, font })),
  updateFontSize: (fontSize) => set((state) => ({ ...state, fontSize })),
});

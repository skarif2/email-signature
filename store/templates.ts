import { StateCreator } from 'zustand';

export interface ITemplate {
  template: number;
  updateTemplate: (newTemplate: number) => void;
}

export const createTemplatesSlice: StateCreator<ITemplate> = (set) => ({
  template: 0,
  updateTemplate: (newTemplate) =>
    set((state) => ({ ...state, template: newTemplate })),
});

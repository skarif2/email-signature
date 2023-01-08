import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { createTemplatesSlice, ITemplate } from './templates';
import { createDetailsSlice, IDetails } from './details';
import { createStylesSlice, IStyles } from './styles';
import { createImagesSlice, IImages } from './images';

const useStore = create<ITemplate & IDetails & IStyles & IImages>()(
  devtools(
    persist(
      (...a) => ({
        ...createTemplatesSlice(...a),
        ...createDetailsSlice(...a),
        ...createStylesSlice(...a),
        ...createImagesSlice(...a),
      }),
      {
        name: 'signature-storage',
      }
    )
  )
);

export default useStore;

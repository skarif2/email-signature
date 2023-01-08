import useStore from 'store';
import ColorPicker from 'components/ColorPicker';
import Dropdown from 'components/Dropdown';
import { fontSizes, fontFamilies } from 'store/constants/fonts';

export default function Styles() {
  const themeColor = useStore((state) => state.themeColor);
  const updateThemeColor = useStore((state) => state.updateThemeColor);
  const textColor = useStore((state) => state.textColor);
  const updateTextColor = useStore((state) => state.updateTextColor);
  const linkColor = useStore((state) => state.linkColor);
  const updateLinkColor = useStore((state) => state.updateLinkColor);
  const font = useStore((state) => state.font);
  const updateFont = useStore((state) => state.updateFont);
  const fontSize = useStore((state) => state.fontSize);
  const updateFontSize = useStore((state) => state.updateFontSize);

  return (
    <div className="flex h-full flex-1 flex-col gap-8 overflow-y-auto px-12 py-8">
      <h3 className="text-xl font-medium text-gray-100">
        Style Your Signature
      </h3>
      <ColorPicker
        label="Theme Color"
        placeholder="Theme Color"
        value={themeColor}
        update={updateThemeColor}
      />
      <ColorPicker
        label="Text Color"
        placeholder="Text Color"
        value={textColor}
        update={updateTextColor}
      />
      <ColorPicker
        label="Link Color"
        placeholder="Link Color"
        value={linkColor}
        update={updateLinkColor}
      />
      <Dropdown
        label="Font Family"
        list={fontFamilies}
        selected={font}
        update={updateFont}
      />
      <Dropdown
        label="Font Size"
        list={fontSizes}
        selected={fontSize}
        update={updateFontSize}
      />
    </div>
  );
}

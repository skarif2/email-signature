/* eslint-disable @next/next/no-img-element */
type TTextProps = {
  as?: 'tr' | 'td';
  src: string;
  alt: string;
  text: string[];
  color?: string;
  imageColor?: string;
  textStyle?: Record<string, string>;
  imageStyle?: Record<string, string>;
};

function Txt({
  src,
  alt,
  text,
  color,
  imageColor,
  textStyle,
  imageStyle,
}: TTextProps) {
  return (
    <td
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: `#${color}`,
        ...textStyle,
      }}
    >
      <img
        src={src || '/placeholder-profile.webp'}
        alt={alt || 'Image'}
        style={{ backgroundColor: `#${imageColor}`, ...imageStyle }}
      />
      {text.map((txt, idx) => (idx === 0 ? txt : ` · ${txt}`))}
    </td>
  );
}

export default function Text({ as = 'tr', ...rest }: TTextProps) {
  return as === 'tr' ? (
    <tr>
      <Txt {...rest} />
    </tr>
  ) : (
    <Txt {...rest} />
  );
}

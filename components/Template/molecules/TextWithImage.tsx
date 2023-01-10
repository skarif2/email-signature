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
    <td>
      <table>
        <tbody>
          <tr>
            <td>
              <img
                src={src || '/placeholder-profile.webp'}
                alt={alt || 'Image'}
                style={{ backgroundColor: `#${imageColor}`, ...imageStyle }}
              />
            </td>
            <td width={8}></td>
            <td
              style={{
                color: `#${color}`,
                ...textStyle,
              }}
            >
              {text.map((txt, idx) => (idx === 0 ? txt : ` · ${txt}`))}
            </td>
          </tr>
        </tbody>
      </table>
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

type TTextProps = {
  as?: 'tr' | 'td';
  text: string[];
  color?: string;
  style?: Record<string, string>;
};

function Txt({ text, color, style }: TTextProps) {
  return (
    <td style={{ color: `#${color}`, ...style }}>
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

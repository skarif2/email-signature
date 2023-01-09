type TBlankSpace = {
  as?: 'tr' | 'td';
  height?: string | number;
  width?: string | number;
};

export default function BlankSpace({
  as = 'tr',
  height = 0,
  width = 0,
}: TBlankSpace) {
  return as === 'tr' ? (
    <tr>
      <td height={height} width={width}></td>
    </tr>
  ) : (
    <td height={height} width={width}></td>
  );
}

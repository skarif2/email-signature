/* eslint-disable @next/next/no-img-element */
type TProfilePicture = {
  as?: 'tr' | 'td';
  src: string;
  alt: string;
  style?: Record<string, string>;
};

function Img({ src, alt, style = {} }: TProfilePicture) {
  return (
    <img
      src={src || '/placeholder-profile.webp'}
      alt={alt || 'Image'}
      style={style}
    />
  );
}

export default function ProfilePicture({
  as = 'tr',
  ...rest
}: TProfilePicture) {
  return as === 'tr' ? (
    <tr>
      <td>
        <Img {...rest} />
      </td>
    </tr>
  ) : (
    <td>
      <Img {...rest} />
    </td>
  );
}

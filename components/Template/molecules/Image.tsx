/* eslint-disable @next/next/no-img-element */
type TProfilePicture = {
  as?: 'tr' | 'td';
  src: string;
  alt: string;
  style?: Record<string, string>;
};

function Img({ src, alt, style = {} }: TProfilePicture) {
  return (
    <td>
      <img
        src={src || '/placeholder-profile.webp'}
        alt={alt || 'Image'}
        style={style}
      />
    </td>
  );
}

export default function ProfilePicture({
  as = 'tr',
  ...rest
}: TProfilePicture) {
  return as === 'tr' ? (
    <tr>
      <Img {...rest} />
    </tr>
  ) : (
    <Img {...rest} />
  );
}

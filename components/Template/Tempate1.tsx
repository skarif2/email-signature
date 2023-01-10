import useStore from 'store';
import Text from './molecules/Text';
import Image from './molecules/Image';
import BlankSpace from './molecules/BlankSpace';
import TextWithImage from './molecules/TextWithImage';

export default function Tempate1() {
  const store = useStore();

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <table>
              <tbody>
                <Image
                  src={store.profilePicture || '/pldr-profile.webp'}
                  alt="Profile Picture"
                  style={{ width: '128px', borderRadius: '9999px' }}
                />
                <BlankSpace height={30} />
                <Image
                  src={store.companyLogo || '/pldr-logo.webp'}
                  alt="Profile Picture"
                  style={{ width: '128px', borderRadius: '4px' }}
                />
                <BlankSpace height={30} />
              </tbody>
            </table>
          </td>
          <BlankSpace as="td" width={46} />
          <td>
            <table>
              <tbody>
                <Text
                  text={[store.name || 'Jon Doe']}
                  color={store.textColor}
                  style={{
                    fontSize: '24px',
                    fontWeight: '700',
                  }}
                />
                <Text
                  text={[store.jobTitle || 'Marketing Executive']}
                  color={store.textColor}
                  style={{ fontSize: '14px' }}
                />
                <Text
                  text={[
                    store.department || 'Marketing',
                    store.company || ' Awesome Corp.',
                  ]}
                  color={store.textColor}
                  style={{ fontSize: '14px' }}
                />
                <Text
                  text={[store.pronouns || 'He / Him']}
                  color={store.textColor}
                  style={{ fontSize: '14px' }}
                />
                <BlankSpace height={20} />
                <tr>
                  <td>
                    <hr />
                  </td>
                </tr>
                <BlankSpace height={20} />
                <TextWithImage
                  text={[
                    store.officeNumber || '111 222 3333',
                    store.mobileNumber || '111 222 3333',
                  ]}
                  src={'https://i.ibb.co/vB2s2Pt/phone-icon-2x.webp'}
                  alt="p"
                  color={store.textColor}
                  imageColor={store.themeColor}
                  textStyle={{ fontSize: '14px' }}
                  imageStyle={{ width: '12px', height: '12px' }}
                />
                <TextWithImage
                  text={[store.email || 'jon@awesome.com']}
                  src={'https://i.ibb.co/3yttJ5t/email-icon-2x-1.webp'}
                  alt="e"
                  color={store.textColor}
                  imageColor={store.themeColor}
                  textStyle={{ fontSize: '14px' }}
                  imageStyle={{ width: '12px', height: '12px' }}
                />
                <TextWithImage
                  text={[store.website || 'https://awesome.com']}
                  src={'https://i.ibb.co/Qvrg22s/link-icon-2x.webp'}
                  alt="w"
                  color={store.textColor}
                  imageColor={store.themeColor}
                  textStyle={{ fontSize: '14px' }}
                  imageStyle={{ width: '12px', height: '12px' }}
                />
                <TextWithImage
                  text={[store.address || '212 Anderson St. Hamburg, NY 14075']}
                  src={'https://i.ibb.co/0QDc1M2/address-icon-2x.webp'}
                  alt="a"
                  color={store.textColor}
                  imageColor={store.themeColor}
                  textStyle={{ fontSize: '14px' }}
                  imageStyle={{ width: '12px', height: '12px' }}
                />
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

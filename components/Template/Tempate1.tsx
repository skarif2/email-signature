import useStore from 'store';
import Text from './molecules/Text';
import Image from './molecules/Image';
import BlankSpace from './molecules/BlankSpace';

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
                  text={[store.jobTitle || 'Marketer']}
                  color={store.textColor}
                  style={{ fontSize: '14px' }}
                />
                <Text
                  text={[
                    store.department || 'Marketing',
                    store.company || ' Awesome Ltd.',
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
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

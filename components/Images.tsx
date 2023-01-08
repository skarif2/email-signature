import useStore from 'store';
import Input from 'components/Input';
import ColorPicker from 'components/ColorPicker';

export default function Images() {
  const profilePicture = useStore((state) => state.profilePicture);
  const updateProfilePicture = useStore((state) => state.updateProfilePicture);
  const companyLogo = useStore((state) => state.companyLogo);
  const updateConmpanyLogo = useStore((state) => state.updateConmpanyLogo);
  const CTACopy = useStore((state) => state.CTACopy);
  const updateCTACopy = useStore((state) => state.updateCTACopy);
  const CTAUrl = useStore((state) => state.CTAUrl);
  const updateCTAUrl = useStore((state) => state.updateCTAUrl);
  const CTAColor = useStore((state) => state.CTAColor);
  const updateCTAColor = useStore((state) => state.updateCTAColor);
  const CTATextColor = useStore((state) => state.CTATextColor);
  const updateCTATextColor = useStore((state) => state.updateCTATextColor);
  const CTAImage = useStore((state) => state.CTAImage);
  const updateCTAImage = useStore((state) => state.updateCTAImage);
  return (
    <div className="flex h-full flex-1 flex-col gap-8 overflow-y-auto px-12 py-8">
      <h3 className="text-xl font-medium text-gray-100">
        Add Signature Images
      </h3>
      <Input
        label="Profile Picture URL"
        placeholder="https://awesome.com/img/profile.jpg"
        value={profilePicture}
        update={updateProfilePicture}
      />
      <Input
        label="Company Logo URL"
        placeholder="https://awesome.com/img/logo.jpg"
        value={companyLogo}
        update={updateConmpanyLogo}
      />
      <h3 className="mt-4 text-xl font-medium text-gray-100">Custom CTA</h3>
      <Input
        label="Custom CTA Link"
        placeholder="https://awesome.com/details"
        value={CTAUrl}
        update={updateCTAUrl}
      />
      <h4 className="mt-2 text-base font-medium text-gray-100">CTA Details</h4>
      <Input
        label="Custom CTA Copy"
        placeholder="https://awesome.com/img/myimage.jpg"
        value={CTACopy}
        update={updateCTACopy}
      />
      <ColorPicker
        label="CTA Background Color"
        placeholder="CTA Background Color"
        value={CTAColor}
        update={updateCTAColor}
      />
      <ColorPicker
        label="CTA Text Color"
        placeholder="CTA Text Color"
        value={CTATextColor}
        update={updateCTATextColor}
      />
      <h3 className="mt-2 text-center text-base font-medium text-gray-100">
        or
      </h3>
      <Input
        label="Custom CTA Image"
        placeholder="https://awesome.com/img/cta_image.jpg"
        value={CTAImage}
        update={updateCTAImage}
      />
    </div>
  );
}

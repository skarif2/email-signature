import Input from 'components/Input';
import useStore from 'store';

export default function Details() {
  const name = useStore((state) => state.name);
  const updateName = useStore((state) => state.updateName);
  const jobTitle = useStore((state) => state.jobTitle);
  const updateJobTitle = useStore((state) => state.updateJobTitle);
  const department = useStore((state) => state.department);
  const updateDepartment = useStore((state) => state.updateDepartment);
  const company = useStore((state) => state.company);
  const updateCompany = useStore((state) => state.updateCompany);
  const pronouns = useStore((state) => state.pronouns);
  const updatePronouns = useStore((state) => state.updatePronouns);
  const officeNumber = useStore((state) => state.officeNumber);
  const updateOfficeNumber = useStore((state) => state.updateOfficeNumber);
  const mobileNumber = useStore((state) => state.mobileNumber);
  const updateMobileNumber = useStore((state) => state.updateMobileNumber);
  const website = useStore((state) => state.website);
  const updateWebsite = useStore((state) => state.updateWebsite);
  const email = useStore((state) => state.email);
  const updateEmail = useStore((state) => state.updateEmail);
  const address = useStore((state) => state.address);
  const updateAddress = useStore((state) => state.updateAddress);

  return (
    <div className="flex h-full flex-1 flex-col gap-8 overflow-y-auto px-12 py-8">
      <h3 className="text-xl font-medium text-gray-100">
        Add Signature Details
      </h3>
      <Input
        label="Full Name"
        placeholder="Jon Doe"
        value={name}
        update={updateName}
      />
      <Input
        label="Job Title"
        placeholder="Marketer"
        value={jobTitle}
        update={updateJobTitle}
      />
      <Input
        label="Department"
        placeholder="Marketing"
        value={department}
        update={updateDepartment}
      />
      <Input
        label="Company Name"
        placeholder="Awesome Corp."
        value={company}
        update={updateCompany}
      />
      <Input
        label="Pronouns"
        placeholder="He / Him"
        value={pronouns}
        update={updatePronouns}
      />
      <Input
        label="Office Number"
        placeholder="111 222 333"
        value={officeNumber}
        update={updateOfficeNumber}
      />
      <Input
        label="Mobile Number"
        placeholder="111 222 333"
        value={mobileNumber}
        update={updateMobileNumber}
      />
      <Input
        label="Website"
        placeholder="www.awesome.com"
        value={website}
        update={updateWebsite}
      />
      <Input
        label="Email"
        placeholder="jon@awesome.com"
        value={email}
        update={updateEmail}
      />
      <Input
        label="Address"
        placeholder="Your address"
        value={address}
        update={updateAddress}
      />
    </div>
  );
}

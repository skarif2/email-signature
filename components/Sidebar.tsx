import { useState } from 'react';
import Tabs from 'components/Tabs';
import Templates from 'components/Templates';
import Details from 'components/Details';
import Styles from 'components/Styles';
import Images from 'components/Images';

const tabData = [
  {
    label: 'Templates',
    icon: '/template.svg',
    component: <Templates />,
  },
  {
    label: 'Details',
    icon: '/text.svg',
    component: <Details />,
  },
  {
    label: 'Styles',
    icon: '/styles.svg',
    component: <Styles />,
  },
  {
    label: 'Images',
    icon: '/photo.svg',
    component: <Images />,
  },
];

export default function Sidebar() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="flex h-full w-full flex-col bg-teal-900">
      <Tabs tabs={tabData} selected={currentTab} update={setCurrentTab} />
      {tabData[currentTab].component}
    </div>
  );
}

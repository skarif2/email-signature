import { useState } from 'react';
import {
  Bars3BottomLeftIcon,
  PhotoIcon,
  IdentificationIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import Tabs from 'components/Tabs';
import Templates from 'components/Templates';
import Details from 'components/Details';
import Styles from 'components/Styles';
import Images from 'components/Images';

const tabData = [
  {
    label: 'Templates',
    icon: <IdentificationIcon className="h-7 w-7 text-teal-50" />,
    component: <Templates />,
  },
  {
    label: 'Details',
    icon: <Bars3BottomLeftIcon className="h-7 w-7 text-teal-50" />,
    component: <Details />,
  },
  {
    label: 'Styles',
    icon: <SparklesIcon className="h-7 w-7 text-teal-50" />,
    component: <Styles />,
  },
  {
    label: 'Images',
    icon: <PhotoIcon className="h-7 w-7 text-teal-50" />,
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

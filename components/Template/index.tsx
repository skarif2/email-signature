import useStore from 'store';
import Tempate1 from './Tempate1';
import Tempate2 from './Tempate2';
import Tempate3 from './Tempate3';
import Tempate4 from './Tempate4';
import Tempate5 from './Tempate5';
import Tempate6 from './Tempate6';

const templates = [
  <Tempate1 key="template1" />,
  <Tempate2 key="template2" />,
  <Tempate3 key="template3" />,
  <Tempate4 key="template4" />,
  <Tempate5 key="template5" />,
  <Tempate6 key="template6" />,
];

export default function Temaplte() {
  const template = useStore((state) => state.template);
  return templates[template];
}

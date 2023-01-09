import useStore from 'store';
import Skeleton from 'components/Skeleton';

export default function Templates() {
  const template = useStore((state) => state.template);
  const updateTemplate = useStore((state) => state.updateTemplate);
  return (
    <div className="flex h-full flex-1 flex-col gap-8 overflow-y-auto px-12 py-8">
      <h3 className="text-xl font-medium text-gray-100">
        Select Your Template
      </h3>
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <Skeleton
            key={index}
            label={`Template ${index + 1}`}
            src={`/template-${index + 1}.svg`}
            selected={template === index}
            onClick={() => updateTemplate(index)}
          />
        ))}
    </div>
  );
}

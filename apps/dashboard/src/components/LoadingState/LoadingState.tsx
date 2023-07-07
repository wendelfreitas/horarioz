import { Loading } from '@horarioz/ui';
import { useTranslation } from 'react-i18next';

export type LoadingStateProps = {
  title: string;
  description: string;
};

export const LoadingState = ({ title, description }: LoadingStateProps) => {
  const { t } = useTranslation();

  const getCuriosity = () => {
    const MIN = 0;
    const MAX = 4;
    const curiosities = [
      t('@LoadingState.curiosities.0'),
      t('@LoadingState.curiosities.1'),
      t('@LoadingState.curiosities.2'),
      t('@LoadingState.curiosities.3'),
      t('@LoadingState.curiosities.4'),
    ];

    const random = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

    return curiosities[random];
  };

  return (
    <div>
      <Loading />
      <h3 className="mt-2 text-md font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-md text-gray-500">{description}</p>
      <div className="mt-6 flex items-center justify-center">
        <p className="text-primary-700 text-xs italic">{getCuriosity()}</p>
      </div>
    </div>
  );
};

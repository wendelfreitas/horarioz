import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/20/solid';

export type AlertProps = {
  /**
   * The bold title of the Alert.
   */
  title: string;
  /**
   * The content of component, can be 'string' or 'React.ReactNode'
   */
  content?: string | React.ReactNode;
  /**
   * Type's styles of Alert
   */
  type: 'success' | 'warning' | 'danger';
  /**
   * Apply border styles according to the type chosen
   */
  border?: boolean;
};

export const Alert = ({ title, content, type, border }: AlertProps) => {
  const getBackgroundColor = () => {
    const colors = {
      success: 'bg-green-100',
      warning: 'bg-yellow-100',
      danger: 'bg-red-100',
    };

    return colors[type];
  };

  const getTitleColor = () => {
    const colors = {
      success: 'text-green-800',
      warning: 'text-yellow-800',
      danger: 'text-red-800',
    };

    return colors[type];
  };

  const getBorderColor = () => {
    const colors = {
      success: 'border-green-300',
      warning: 'border-yellow-300',
      danger: 'border-red-300',
    };

    return colors[type];
  };

  const getIcon = () => {
    const icon = {
      success: (
        <CheckCircleIcon
          className="h-6 w-6 text-green-500"
          aria-hidden="true"
        />
      ),
      warning: (
        <ExclamationTriangleIcon
          className="h-6 w-6 text-yellow-400"
          aria-hidden="true"
        />
      ),
      danger: (
        <XCircleIcon className="h-6 w-6 text-red-400" aria-hidden="true" />
      ),
    };

    return icon[type];
  };

  const getContent = () => {
    if (!content) return;

    const colors = {
      success: 'text-green-700',
      warning: 'text-yellow-700',
      danger: 'text-red-700',
    };

    if (typeof content === 'string') {
      return <p className={`mt-1 text-sm ${colors[type]}`}>{content}</p>;
    }
    return <div className={`${colors[type]}`}>{content}</div>;
  };

  return (
    <div
      className={`rounded-md ${
        content ? 'p-5' : 'p-3'
      } ${getBackgroundColor()} ${border && `border-2 ${getBorderColor()}`}`}
    >
      <div
        className={`flex align-middle ${
          content ? 'items-start' : 'items-center'
        }`}
      >
        {getIcon()}
        <div className="ml-3">
          <h3
            className={`text-sm ${
              content && 'font-medium'
            } ${getTitleColor()} `}
          >
            {title}
          </h3>
          {getContent()}
        </div>
      </div>
    </div>
  );
};

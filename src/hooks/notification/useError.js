import config from '@config/notification';
import { notification } from 'antd';

const useError = ({ message = '', description = '' }) => {
  const error = () => {
    notification.error({
      key: `error-${Date.now()}`,
      message,
      description,
      className: 'error-notification',
      ...config,
    });
  };

  return [error];
};

export default useError;

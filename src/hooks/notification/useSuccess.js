import config from '@config/notification';
import { notification } from 'antd';

const useSuccess = ({ message = '', description = '' }) => {
  const success = () => {
    notification.success({
      key: `success-${Date.now()}`,
      message,
      description,
      className: 'success-notification',
      ...config,
    });
  };

  return [success];
};

export default useSuccess;

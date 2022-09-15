import { notification } from 'antd';

const globalConfig = {
  placement: 'bottomRight',
  bottom: 70 /* barplayer height + 8px */,
  duration: 3 /* seconds */,
  closeIcon: <div></div> /* empty */,
};

export function success(config) {
  return notification.success({
    ...globalConfig,
    ...config,
  });
}

export function error(config) {
  return notification.error({
    ...globalConfig,
    ...config,
  });
}

export function warn(config) {
  return notification.warn({
    ...globalConfig,
    ...config,
  });
}

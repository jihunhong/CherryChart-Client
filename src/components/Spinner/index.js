import { Spin } from 'antd';
import { SpinnerWrapper } from './style.js';

const Spinner = () => {
  return (
    <>
      <SpinnerWrapper>
        <Spin size="large" tip="Loading..." />
      </SpinnerWrapper>
    </>
  );
};

export default Spinner;

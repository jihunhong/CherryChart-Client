import { SpinnerWrapper } from './style.js';
import { Spin } from 'antd';

const Spinner = () => {
    return (
        <>
            <SpinnerWrapper>
                <Spin size={'large'} tip="Loading..." />
            </SpinnerWrapper>
        </>
    )
}

export default Spinner;
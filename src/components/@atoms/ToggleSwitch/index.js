import { SwitchLabel } from './style';

const ToggleSwitch = ({ onChange }) => {
  return (
    <SwitchLabel>
      <input type="checkbox" onChange={onChange} />
      <span className="slider" />
    </SwitchLabel>
  );
};

export default ToggleSwitch;

import styled from 'styled-components';

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    border-radius: 34px;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    :before {
      // circle in switch
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      border-radius: 50%;
      left: 4px;
      bottom: 4px;
      background-color: #fff;
      transition: 0.4s;
    }
  }

  input:checked + .slider {
    background-color: var(--primary-color);
  }
  input:checked + .slider:before {
    transform: translateX(26px);
  }
  input:focus + .slider {
    box-shadow: 0 0 1px var(--primary-color);
  }
`;

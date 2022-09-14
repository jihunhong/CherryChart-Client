import validate, { validator } from '@lib/validate';
import { useState } from 'react';

const useValidation = () => {
  const [form, setForm] = useState(null);
  const onChange = e => {
    const { name } = e.target;
    const result = validator(e, form);
    setForm({
      ...form,
      [name]: {
        value: e.target.value,
        valid: result,
      },
    });
  };

  return { form, onChange };
};

export default useValidation;

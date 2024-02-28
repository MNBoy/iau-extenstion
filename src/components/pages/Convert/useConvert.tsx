import { useState } from 'react';
import { Tools } from 'utils';

const useConvert = () => {
  const [value, setValue] = useState('');

  const onValueChangeHandler = (userValue: string) => {
    setValue(Tools.convertToPattern(userValue));
  };

  const copyHandler = () => {
    Tools.copyToClipboard(value);
  };

  return { onValueChangeHandler, copyHandler, value };
};

export default useConvert;

import { InputProps, Input as NxUiInput } from '@nextui-org/react';
import {
  addCommas,
  numberToWords,
  removeCommas,
} from '@persian-tools/persian-tools';
import { FC, useEffect, useState } from 'react';

interface I_Props extends InputProps {
  valueNumber?: number;
  unit?: string;
}

const InputNumber: FC<I_Props> = ({ valueNumber, unit, ...rest }) => {
  const [number, setNumber] = useState<string>(`${rest.defaultValue || 0}`);

  const showDescription = () => {
    if (rest.description) {
      return rest.description;
    }
    return number !== '0'
      ? `${numberToWords(removeCommas(number)) || ''} ${unit}`
      : '';
  };

  const onChangeHandler = (val: any) => {
    try {
      let originalValue = removeCommas(val);
      const formattedNumber = addCommas(originalValue);

      // Doesn't allow to enter words
      if (formattedNumber === 'NaN') {
        return;
      }

      // Check if we have maximum limitation
      if (rest.max && +rest.max < +originalValue) {
        setNumber(addCommas(rest.max));
        originalValue = +rest.max;
      } else {
        setNumber(formattedNumber);
      }

      // Call custom onValueChange from parent
      if (rest.onValueChange) {
        rest.onValueChange(`${originalValue}`);
      }
    } catch (error) {}
  };

  // Set the valueNumber if pass it
  useEffect(() => {
    if (valueNumber !== undefined) {
      onChangeHandler(`${valueNumber}`);
    }
  }, [valueNumber]);

  return (
    <NxUiInput
      inputMode='numeric'
      value={number}
      {...rest}
      classNames={{
        label: 'rtl:right-0',
        ...rest.classNames,
      }}
      description={showDescription()}
      onValueChange={onChangeHandler}
    />
  );
};

export { InputNumber };

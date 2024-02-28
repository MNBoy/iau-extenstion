import { InputProps, Input as NxUiInput } from '@nextui-org/react';
import clsx from 'clsx';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

interface IProps extends InputProps {
  errors?: any;
  control?: Control<any>;
}

export const Input: FC<IProps> = ({ control, errors, ...rest }) => {
  if (control && rest.name) {
    return (
      <Controller
        name={rest.name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <NxUiInput
            {...rest}
            size='sm'
            onChange={onChange}
            classNames={{
              inputWrapper: 'focus-within:outline-primary',
              label: 'rtl:right-2',
              ...rest.classNames,
            }}
            value={value}
            className={clsx('scale-90', rest.className)}
            isInvalid={!!errors[`${rest.name}`]?.message}
            errorMessage={errors[`${rest.name}`]?.message}
          />
        )}
      />
    );
  }

  return (
    <NxUiInput
      {...rest}
      size='sm'
      classNames={{
        inputWrapper: 'focus-within:outline-primary',
        label: 'rtl:right-2',
        ...rest.classNames,
      }}
      className={clsx('scale-90', rest.className)}
    />
  );
};

import { Select as NxUiSelect, SelectProps } from '@nextui-org/react';
import clsx from 'clsx';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

interface IProps extends SelectProps {
  errors?: any;
  control?: Control<any>;
}

export const Select: FC<IProps> = ({ control, errors, ...rest }) => {
  if (control && rest.name) {
    return (
      <Controller
        name={rest.name}
        control={control}
        render={({ field: { onChange } }) => (
          <NxUiSelect
            {...rest}
            classNames={{
              selectorIcon: 'rtl:right-[90%]',
              value: 'rtl:text-start pt-2',
              spinner: 'rtl:right-[90%]',
              ...rest.classNames,
            }}
            onChange={onChange}
            size='sm'
            className={clsx(rest.className)}
            isInvalid={!!errors[`${rest.name}`]?.message}
            errorMessage={errors[`${rest.name}`]?.message}
          >
            {rest.children}
          </NxUiSelect>
        )}
      />
    );
  }

  return (
    <NxUiSelect
      {...rest}
      classNames={{
        selectorIcon: 'rtl:right-[90%]',
        value: 'rtl:text-start',
        spinner: 'rtl:right-[90%]',
        ...rest.classNames,
      }}
      size='sm'
      className={clsx(rest.className)}
    >
      {rest.children}
    </NxUiSelect>
  );
};

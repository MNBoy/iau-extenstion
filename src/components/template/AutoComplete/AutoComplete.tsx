import {
  AutocompleteProps,
  Autocomplete as NxUiAutoComplete,
} from '@nextui-org/react';
import clsx from 'clsx';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

interface IProps extends AutocompleteProps {
  errors?: any;
  control?: Control<any>;
}

export const AutoComplete: FC<IProps> = ({ control, errors, ...rest }) => {
  if (control && rest.name) {
    return (
      <Controller
        name={rest.name}
        control={control}
        render={({ field: { onChange } }) => (
          <NxUiAutoComplete
            {...rest}
            onChange={onChange}
            size='sm'
            className={clsx(rest.className)}
            classNames={{
              ...rest.classNames,
            }}
            isInvalid={!!errors[`${rest.name}`]?.message}
            errorMessage={errors[`${rest.name}`]?.message}
          >
            {rest.children}
          </NxUiAutoComplete>
        )}
      />
    );
  }

  return (
    <NxUiAutoComplete {...rest} size='sm' className={clsx(rest.className)}>
      {rest.children}
    </NxUiAutoComplete>
  );
};

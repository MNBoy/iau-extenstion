import { ListboxProps, Listbox as NxUiListbox } from '@nextui-org/react';
import clsx from 'clsx';
import { FC } from 'react';

interface IProps extends ListboxProps {}

export const Listbox: FC<IProps> = ({ children, ...rest }) => {
  return (
    <NxUiListbox className={clsx(rest.className)} {...rest}>
      {children}
    </NxUiListbox>
  );
};

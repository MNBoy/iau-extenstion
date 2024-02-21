import { User as NxUiUser, UserProps } from '@nextui-org/react';
import clsx from 'clsx';
import { FC } from 'react';

interface IProps extends UserProps {}

export const User: FC<IProps> = ({ ...rest }) => {
  return (
    <NxUiUser
      classNames={{
        description: 'pt-1',
      }}
      className={clsx('scale-90', rest.className)}
      {...rest}
    />
  );
};

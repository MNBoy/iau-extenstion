import { DividerProps, Divider as NxUiDivider } from '@nextui-org/react';
import clsx from 'clsx';
import { FC } from 'react';

interface IProps extends DividerProps {}

export const Divider: FC<IProps> = ({ ...rest }) => {
  return (
    <div className='h-4 flex items-center'>
      <NxUiDivider className={clsx(rest.className)} {...rest} />
    </div>
  );
};

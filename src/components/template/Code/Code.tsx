import { CodeProps, Code as NxUiCode } from '@nextui-org/react';
import clsx from 'clsx';
import { FC } from 'react';

interface IProps extends CodeProps {
  children: React.ReactNode;
}

export const Code: FC<IProps> = ({ children, ...rest }) => {
  return (
    <NxUiCode size='sm' className={clsx('scale-90', rest.className)} {...rest}>
      {children}
    </NxUiCode>
  );
};

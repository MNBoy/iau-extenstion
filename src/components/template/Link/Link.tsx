import { LinkProps, Link as NxUiLink } from '@nextui-org/react';
import clsx from 'clsx';
import { FC } from 'react';

interface IProps extends LinkProps {
  children: React.ReactNode;
}

export const Link: FC<IProps> = ({ children, ...rest }) => {
  return (
    <NxUiLink className={clsx(rest.className)} {...rest}>
      {children}
    </NxUiLink>
  );
};

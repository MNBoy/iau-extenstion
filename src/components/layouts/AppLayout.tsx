import { NextUIProvider } from '@nextui-org/react';
import { FC } from 'react';

interface IProps {
  children: React.ReactNode;
}

export const AppLayout: FC<IProps> = ({ children }) => {
  return (
    <NextUIProvider>
      <main
        dir='rtl'
        className='min-w-80 min-h-screen bg-slate-950 p-4 flex justify-center dark'
      >
        {children}
      </main>
    </NextUIProvider>
  );
};

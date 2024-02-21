import { Template } from '@components/template';
import { useAppStore } from '@lib/store';
import { NextUIProvider } from '@nextui-org/react';
import { FC } from 'react';

interface IProps {
  children: React.ReactNode;
}

export const AppLayout: FC<IProps> = ({ children }) => {
  const { profile, page, setPage } = useAppStore();

  return (
    <NextUIProvider>
      <main
        dir='rtl'
        className='min-w-80 min-h-screen bg-slate-950 p-4 flex justify-center dark relative pb-4'
      >
        <section className='flex flex-col gap-4 items-start w-full'>
          <Template.User
            name={profile?.name}
            description={`شماره دانشجویی: ${profile?.studentId}`}
          />
          {children}

          {page !== 'home' && (
            <div className='w-full flex justify-center items-center absolute bottom-1 right-0'>
              <Template.Link
                isBlock
                color='foreground'
                size='sm'
                className='cursor-pointer font-light'
                onClick={() => setPage('home')}
              >
                بازگشت
              </Template.Link>
            </div>
          )}
        </section>
      </main>
    </NextUIProvider>
  );
};

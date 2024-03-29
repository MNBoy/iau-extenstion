import { Template } from '@components/template';
import { NextUIProvider } from '@nextui-org/react';
import { FC } from 'react';
import { useAppStore } from 'store/store';

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
          {profile?.studentId && (
            <Template.User
              name={profile?.name}
              description={`شماره دانشجویی: ${profile?.studentId}`}
            />
          )}
          {children}

          {page !== 'home' && (
            <div className='w-full flex justify-center items-center absolute bottom-2 right-0'>
              <Template.Link
                isBlock
                color='foreground'
                size='sm'
                className='cursor-pointer font-light text-xs'
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

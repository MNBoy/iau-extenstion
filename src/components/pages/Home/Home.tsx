import { Template } from '@components/template';
import { ListboxItem } from '@nextui-org/react';
import useHome from './useHome';

export const Home = () => {
  const { profile, listItems } = useHome();

  if (!profile?.studentId) {
    return <h1>لطفا وارد پنل خود شوید</h1>;
  }

  return (
    <section className='flex flex-col gap-4 items-start w-full'>
      <Template.User
        name={profile?.name}
        description={`شماره دانشجویی: ${profile?.studentId}`}
      />
      <Template.Listbox variant='faded' aria-label='Listbox menu'>
        {listItems.map((item) => (
          <ListboxItem
            key={item.key}
            description={item.description}
            startContent={item.icon}
            classNames={{
              description: 'text-[10px]',
            }}
          >
            {item.label}
          </ListboxItem>
        ))}
      </Template.Listbox>
    </section>
  );
};

import { Template } from '@components/template';
import { Copy } from 'iconsax-react';
import useConvert from './useConvert';

export const Convert = () => {
  const { onValueChangeHandler, copyHandler, value } = useConvert();

  return (
    <section className='w-full mb-8 flex flex-col gap-y-4 items-center'>
      <Template.Input
        onValueChange={onValueChangeHandler}
        label='نام درس'
        className='w-full'
      />
      {value && (
        <Template.Input
          value={value}
          readOnly
          className='scale-75'
          variant='underlined'
          endContent={<Copy className='cursor-pointer' onClick={copyHandler} />}
        />
      )}
    </section>
  );
};

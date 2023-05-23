import { StoryFn, Meta } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { DrawerProps, Drawer } from './Drawer';
import { Input } from '../Input/Input';
import IMask from 'imask';

export default {
  title: 'Drawer',
  component: Drawer,
} as Meta;

export const WithFooter: StoryFn<DrawerProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <Drawer
        title="Create Service"
        description="Create a service so that the user can select it at the time of scheduling"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        footer={
          <div className="flex flex-shrink-0 justify-end px-4 py-4 space-x-3">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button>Create Service</Button>
          </div>
        }
      >
        <div>
          <Input label="Service Name" placeholder="Service Name" />

          <Input
            label="Service Price"
            placeholder="$ 10.00"
            mask="$ price"
            blocks={{
              price: {
                mask: Number,
                padFractionalZeros: true,
                thousandsSeparator: ',',
                radix: '.',
                mapToRadix: [','],
              },
            }}
          />

          <Input
            inputMode="numeric"
            className="border-0 ring-0 text-4xl font-bold"
            placeholder="01:30"
            mask="H:MM"
            blocks={{
              H: {
                mask: IMask.MaskedRange,
                placeholderChar: 'H',
                from: 0,
                to: 23,
                maxLength: 1,
              },
              MM: {
                mask: IMask.MaskedRange,
                placeholderChar: 'MM',
                from: 0,
                to: 59,
                maxLength: 2,
              },
            }}
          />

          <Input
            type="textarea"
            label="Description"
            placeholder="Description"
          />
        </div>
      </Drawer>
    </div>
  );
};

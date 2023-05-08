import { StoryFn, Meta } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../Button/Button';

import { ModalProps, Modal } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

export const Default: StoryFn<ModalProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        title="Do you like the following pokemon team?"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        footer={
          <div className="flex gap-5">
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Nope
            </Button>
            <Button>Hell Yeah!</Button>
          </div>
        }
      >
        <p className="text-sm text-gray-400">
          My awesome pokemon team: Blaziken, Salamance, Tyranitar, Chansey,
          Lucario and Raichu.
        </p>
      </Modal>
    </div>
  );
};

export const WithTypeError: StoryFn<ModalProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        type="error"
        title="Delete your pokemon team?"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        footer={
          <div className="flex gap-5">
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button danger>Confirm Deletion</Button>
          </div>
        }
      >
        <p className="text-sm text-gray-400">
          Are you sure you want to detele your pokemon team? All of your
          pokemons will be sad and released to the world. This action cannot be
          undone.
        </p>
      </Modal>
    </div>
  );
};

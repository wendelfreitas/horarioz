import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

/**
 * Props for the Drawer component.
 */
export type DrawerProps = {
  /**
   * The title of the Drawer. Shown on the top of the Drawer.
   */
  title: string;

  /**
   * The description of the Drawer. Shown below the title.
   * @optional
   */
  description?: string;

  /**
   * The footer of the Drawer. Can contain any ReactNode, such as buttons or links.
   * @optional
   */
  footer?: React.ReactNode;

  /**
   * The children of the Drawer. Can contain any ReactNode, such as text, images, or other components.
   */
  children: React.ReactNode;

  /**
   * Determines whether the Drawer is open or not.
   */
  isOpen: boolean;

  /**
   * A callback function that is triggered when the Drawer is requested to close.
   * Typically used to update the parent state that controls the Drawer visibility.
   */
  onClose: () => void;
};

/**
 * The Drawer component is a modern and customizable sliding drawer.
 *
 * It accepts a title, optional description, and children contents.
 * The Drawer is controlled by an external isOpen state, and uses the onClose function
 * to close the drawer when the close button is clicked.
 */
export const Drawer = ({
  title,
  description,
  children,
  footer,
  isOpen,
  onClose,
}: DrawerProps) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                    <div className="h-0 flex-1 overflow-y-auto">
                      <div className="bg-primary-500 px-4 py-6 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-base font-medium leading-6 text-white">
                            {title}
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-primary-500 text-white focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={onClose}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        {description && (
                          <div className="mt-1">
                            <p className="text-sm text-white">{description}</p>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="divide-y divide-gray-200 px-4 sm:px-6">
                          <div className="pb-5 pt-6">{children}</div>
                        </div>
                      </div>
                    </div>
                    {footer}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

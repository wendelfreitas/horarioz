import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  ExclamationTriangleIcon,
  CheckIcon,
  InformationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

export type ModalProps = {
  /**
   * The title of the modal.
   */
  title?: string;
  /**
   * The type of the modal.
   * Can be one of 'information', 'warning', or 'error'.
   */
  type?: 'information' | 'warning' | 'error';
  /**
   * The footer content of the modal.
   */
  footer?: React.ReactNode;
  /**
   * The children content of the modal.
   */
  children: React.ReactNode;
  /**
   * Determines whether the modal is open or closed.
   */
  isOpen: boolean;
  /**
   * The aria-label for the close button of the modal.
   */
  ariaCloseLabel?: string;
  /**
   * Callback function to be called when the modal is closed.
   */
  onClose: () => void;
};

export const Modal = ({
  title,
  footer,
  isOpen,
  onClose,
  children,
  type,
  ariaCloseLabel = 'Close',
}: ModalProps) => {
  const buttonRef = useRef(null);

  const icons = {
    information: (
      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
        <InformationCircleIcon
          className="h-6 w-6 text-blue-600"
          aria-hidden="true"
          data-testid="information-icon"
        />
      </div>
    ),
    success: (
      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
        <CheckIcon
          className="h-5 w-5 text-green-600"
          aria-hidden="true"
          data-testid="success-icon"
        />
      </div>
    ),
    warning: (
      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
        <ExclamationTriangleIcon
          className="h-6 w-6 text-yellow-600"
          aria-hidden="true"
          data-testid="warning-icon"
        />
      </div>
    ),
    error: (
      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
        <ExclamationTriangleIcon
          className="h-6 w-6 text-red-600"
          aria-hidden="true"
          data-testid="error-icon"
        />
      </div>
    ),
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={buttonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 "
                    onClick={onClose}
                  >
                    <span className="sr-only">{ariaCloseLabel}</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                <div className="bg-white px-4 pb-5 pt-5 sm:py-6 sm:pb-5">
                  <div className="sm:flex sm:items-start">
                    {type && icons[type]}
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {title}
                      </Dialog.Title>
                      <div className="mt-2">{children}</div>
                    </div>
                  </div>
                </div>
                {footer && (
                  <div className="bg-gray-50/60 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    {footer}
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

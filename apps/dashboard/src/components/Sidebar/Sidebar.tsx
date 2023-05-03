import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { HomeIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Avatar } from '@horarioz/ui';

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png"
                      alt="Slack"
                    />
                  </div>
                  <nav aria-label="Sidebar" className="mt-5">
                    <div className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? 'text-gray-500'
                                : 'text-gray-400 group-hover:text-gray-500',
                              'mr-4 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
                <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                  <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                    + Invite new member
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex w-64 flex-col">
          <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200">
            <div className="flex flex-1 flex-col overflow-y-auto pt-8 pb-4">
              <div className="flex flex-shrink-0 items-center px-6">
                <a href="#" className="group block w-full flex-shrink-0">
                  <div className="flex items-center">
                    {/* {user?.displayName && user.photoURL && (
                      <Avatar name={user?.displayName} src={user?.photoURL} />
                    )} */}
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                        Wendel Freitas
                      </p>
                      <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                        Software Engineer
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <nav className="mt-10 flex-1" aria-label="Sidebar">
                <div className="space-y-3 px-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? ' text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-2 py-2 text-sm rounded-md'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? 'text-gray-900'
                            : 'text-gray-400 group-hover:text-gray-500',
                          'mr-3 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
            <div className="flex flex-shrink-0 border-t border-gray-200 p-5">
              <div className="group block w-full flex-shrink-0 hover:cursor-pointer">
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 ">Logout</p>
                    <p className="text-xs font-medium text-gray-500 ">
                      See you soon!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

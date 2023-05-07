// import { Fragment } from 'react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
// import { Menu, Transition } from '@headlessui/react';
// import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
// import { Avatar } from '@horarioz/ui';
// import { SlideOver } from '../SlideOver/SlideOver';

// const days = [
//   { date: '2021-12-27' },
//   { date: '2021-12-28' },
//   { date: '2021-12-29' },
//   { date: '2021-12-30' },
//   { date: '2021-12-31' },
//   { date: '2022-01-01', isCurrentMonth: true },
//   { date: '2022-01-02', isCurrentMonth: true },
//   { date: '2022-01-03', isCurrentMonth: true },
//   { date: '2022-01-04', isCurrentMonth: true },
//   { date: '2022-01-05', isCurrentMonth: true },
//   { date: '2022-01-06', isCurrentMonth: true },
//   { date: '2022-01-07', isCurrentMonth: true },
//   { date: '2022-01-08', isCurrentMonth: true },
//   { date: '2022-01-09', isCurrentMonth: true },
//   { date: '2022-01-10', isCurrentMonth: true },
//   { date: '2022-01-11', isCurrentMonth: true },
//   { date: '2022-01-12', isCurrentMonth: true, isToday: true },
//   { date: '2022-01-13', isCurrentMonth: true },
//   { date: '2022-01-14', isCurrentMonth: true },
//   { date: '2022-01-15', isCurrentMonth: true },
//   { date: '2022-01-16', isCurrentMonth: true },
//   { date: '2022-01-17', isCurrentMonth: true },
//   { date: '2022-01-18', isCurrentMonth: true },
//   { date: '2022-01-19', isCurrentMonth: true },
//   { date: '2022-01-20', isCurrentMonth: true },
//   { date: '2022-01-21', isCurrentMonth: true, isSelected: true },
//   { date: '2022-01-22', isCurrentMonth: true },
//   { date: '2022-01-23', isCurrentMonth: true },
//   { date: '2022-01-24', isCurrentMonth: true },
//   { date: '2022-01-25', isCurrentMonth: true },
//   { date: '2022-01-26', isCurrentMonth: true },
//   { date: '2022-01-27', isCurrentMonth: true },
//   { date: '2022-01-28', isCurrentMonth: true },
//   { date: '2022-01-29', isCurrentMonth: true },
//   { date: '2022-01-30', isCurrentMonth: true },
//   { date: '2022-01-31', isCurrentMonth: true },
//   { date: '2022-02-01' },
//   { date: '2022-02-02' },
//   { date: '2022-02-03' },
//   { date: '2022-02-04' },
//   { date: '2022-02-05' },
//   { date: '2022-02-06' },
// ];
// const meetings = [
//   {
//     id: 1,
//     name: 'Beatriz Helena',
//     imageUrl:
//       'https://scontent.fbau4-1.fna.fbcdn.net/v/t1.6435-9/203630582_4028290143892162_187692476608781405_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_xUQsaOC3BQAX_GXi8y&_nc_ht=scontent.fbau4-1.fna&oh=00_AfBHrQ0u4rn0KNUdWJXSt2PHeUTVM-47ChiP7EZCBWyIfg&oe=647CE852',
//     start: '1:00 PM',
//     startDatetime: '2022-01-21T13:00',
//     end: '2:30 PM',
//     endDatetime: '2022-01-21T14:30',
//   },
//   // More meetings...
// ];

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ');
// }

export const MyAgenda = () => {
  return <p></p>;
  // return (
  //   <SlideOver>
  //     <div>
  //       <div className="flex items-center">
  //         <h2 className="flex-auto text-sm font-semibold text-gray-900">
  //           Maio 2023
  //         </h2>
  //         <button
  //           type="button"
  //           className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
  //         >
  //           <span className="sr-only">Previous month</span>
  //           <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
  //         </button>
  //         <button
  //           type="button"
  //           className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
  //         >
  //           <span className="sr-only">Next month</span>
  //           <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
  //         </button>
  //       </div>
  //       <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
  //         <div>M</div>
  //         <div>T</div>
  //         <div>W</div>
  //         <div>T</div>
  //         <div>F</div>
  //         <div>S</div>
  //         <div>S</div>
  //       </div>
  //       <div className="mt-2 grid grid-cols-7 text-sm">
  //         {days.map((day, dayIdx) => (
  //           <div
  //             key={day.date}
  //             className={classNames(
  //               dayIdx > 6 && 'border-t border-gray-200',
  //               'py-2'
  //             )}
  //           >
  //             <button
  //               type="button"
  //               className={classNames(
  //                 day.isSelected && 'text-white',
  //                 !day.isSelected && day.isToday && 'text-indigo-600',
  //                 !day.isSelected &&
  //                   !day.isToday &&
  //                   day.isCurrentMonth &&
  //                   'text-gray-900',
  //                 !day.isSelected &&
  //                   !day.isToday &&
  //                   !day.isCurrentMonth &&
  //                   'text-gray-400',
  //                 day.isSelected && day.isToday && 'bg-indigo-600',
  //                 day.isSelected && !day.isToday && 'bg-gray-900',
  //                 !day.isSelected && 'hover:bg-gray-200',
  //                 (day.isSelected || day.isToday) && 'font-semibold',
  //                 'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
  //               )}
  //             >
  //               <time dateTime={day.date}>
  //                 {day.date.split('-').pop()?.replace(/^0/, '')}
  //               </time>
  //             </button>
  //           </div>
  //         ))}
  //       </div>
  //       <section className="mt-12">
  //         <h2 className="text-base font-semibold leading-6 text-gray-900">
  //           Agenda para <time dateTime="2022-01-21">21 de Maio de 2023</time>
  //         </h2>
  //         <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
  //           {meetings.map((meeting) => (
  //             <li
  //               key={meeting.id}
  //               className="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100"
  //             >
  //               <Avatar name={meeting.name} />
  //               <div className="flex-auto">
  //                 <p className="text-gray-900 font-medium">{meeting.name}</p>
  //                 <p className="mt-0.5">(14) 99876-8016</p>
  //                 <p className="mt-0.5">
  //                   <time dateTime={meeting.startDatetime}>
  //                     {meeting.start}
  //                   </time>{' '}
  //                   - <time dateTime={meeting.endDatetime}>{meeting.end}</time>
  //                 </p>
  //               </div>
  //               <Menu
  //                 as="div"
  //                 className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
  //               >
  //                 <div>
  //                   <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
  //                     <span className="sr-only">Open options</span>
  //                     <EllipsisVerticalIcon
  //                       className="h-6 w-6"
  //                       aria-hidden="true"
  //                     />
  //                   </Menu.Button>
  //                 </div>

  //                 <Transition
  //                   as={Fragment}
  //                   enter="transition ease-out duration-100"
  //                   enterFrom="transform opacity-0 scale-95"
  //                   enterTo="transform opacity-100 scale-100"
  //                   leave="transition ease-in duration-75"
  //                   leaveFrom="transform opacity-100 scale-100"
  //                   leaveTo="transform opacity-0 scale-95"
  //                 >
  //                   <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
  //                     <div className="py-1">
  //                       <Menu.Item>
  //                         {({ active }) => (
  //                           <a
  //                             href="#"
  //                             className={classNames(
  //                               active
  //                                 ? 'bg-gray-100 text-gray-900'
  //                                 : 'text-gray-700',
  //                               'block px-4 py-2 text-sm'
  //                             )}
  //                           >
  //                             Edit
  //                           </a>
  //                         )}
  //                       </Menu.Item>
  //                       <Menu.Item>
  //                         {({ active }) => (
  //                           <a
  //                             href="#"
  //                             className={classNames(
  //                               active
  //                                 ? 'bg-gray-100 text-gray-900'
  //                                 : 'text-gray-700',
  //                               'block px-4 py-2 text-sm'
  //                             )}
  //                           >
  //                             Cancel
  //                           </a>
  //                         )}
  //                       </Menu.Item>
  //                     </div>
  //                   </Menu.Items>
  //                 </Transition>
  //               </Menu>
  //             </li>
  //           ))}
  //         </ol>
  //       </section>
  //     </div>
  //   </SlideOver>
  // );
};

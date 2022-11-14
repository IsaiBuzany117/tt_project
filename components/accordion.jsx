import { Disclosure } from "@headlessui/react";
import { HiChevronUp } from "react-icons/hi";

const Accordion = ({ label, children }) => {
  return (
    <>
      <Disclosure as='div' className='my-2'>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full pl-8 pr-4 py-4 font-bold text-indigo-900 bg-indigo-100 rounded-full transition-colors hover:bg-indigo-300 hover:text-slate-50">
              {label}
              <HiChevronUp
                className={`${
                  open ? "transform rotate-180" : ""
                } w-6 h-6 text-blue-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='py-2.5'>{children}</Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Accordion;

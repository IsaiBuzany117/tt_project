import { Disclosure } from "@headlessui/react";
import { HiChevronUp } from "react-icons/hi";
import ExpedienteMFForm from "./ExpedienteMFForm";
import ExpedienteMPForm from "./ExpedienteMPForm";
import ExpedienteMNPForm from "./ExpedienteMNPForm";
import ExpedienteMPAForm from "./ExpedienteMPAForm";
import ExpedienteMIPAYSForm from "./ExpedienteMIPAYSForm";

const ExpedienteMenu1 = () => {
  return (
    <div className="px-4 my-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-base font-bold text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
              <span>Ficha de identificación</span>
              <HiChevronUp
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-blue-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className=" m-2 p-4 text-sm ">
              <div className="flex flex-col w-full ">
                <ExpedienteMFForm />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-3">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-base font-bold text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
              <span>Antecedentes heredo-familiares</span>
              <HiChevronUp
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-blue-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className=" m-2 p-4 text-sm ">
              <p className="my-2">
                Escriba a continuación las enfermedades heredo-familiares
              </p>
              <div className="flex flex-col w-full ">
                <textarea className="h-52 ring-1 border rounded shadow focus:outline-none focus:ring-blue-600"></textarea>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-3">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-base font-bold text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
              <span>Antecedentes personales patológicos</span>
              <HiChevronUp
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-blue-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className=" m-2 p-4 text-sm ">
              <div className="flex flex-col w-full ">
                <ExpedienteMPForm />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-3">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-base font-bold text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
              <span>Antecedentes personales no patológicos</span>
              <HiChevronUp
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-blue-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className=" m-2 p-4 text-sm ">
              <div className="flex flex-col w-full ">
                <ExpedienteMNPForm />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-3">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-base font-bold text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
              <span>Padecimiento actual</span>
              <HiChevronUp
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-blue-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className=" m-2 p-4 text-sm ">
              <div className="flex flex-col w-full ">
                <ExpedienteMPAForm />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-3">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-base font-bold text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
              <span>Interrogatorio por aparatos y sistemas</span>
              <HiChevronUp
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-blue-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className=" m-2 p-4 text-sm ">
              <div className="flex flex-col w-full ">
                <ExpedienteMIPAYSForm />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default ExpedienteMenu1;

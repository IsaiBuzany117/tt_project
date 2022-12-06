import {
  useState,
  useContext,
  createContext,
  forwardRef,
  Fragment,
} from "react";
import { Formik, Form } from "formik";
import { Tab, Disclosure, Menu, Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import Signuplayout from "components/layouts/signuplayout";
import Menudropdown from "components/menu";
import Modal from "components/modal";
import Tabbar from "components/tabbar";
import Accordion from "components/accordion";
import Textfield from "components/inputs/textfield";
import Checkbox from 'components/inputs/checkbox'
import { send } from "utils/stream";

const Provider = createContext();

const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});
MyLink.displayName = "Mylink";

const Dropdown = () => {
  return (
    <div className="fixed top-16 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/80">
          open
        </Menu.Button>
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg">
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <MyLink
                  href="/"
                  className="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                >
                  inicio
                </MyLink>
              )}
            </Menu.Item>
            <Menu.Item disabled>
              {({ active }) => (
                <p
                  className={`${
                    active ? "bg-blue-500 text-white" : "bg-white text-black"
                  }`}
                >
                  2
                </p>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

const Panel = () => {
  const [value2, setValue2] = useState("");
  const { value, setValue } = useContext(Provider);
  return (
    <>
      <Disclosure>
        <Disclosure.Button className="w-full rounded bg-indigo-300 px-2 py-1">
          open
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 py-2">
          {/* {
            context.value
          } */}
          <input
            type="text"
            value={value}
            onChange={({ target }) => setValue(target.value)}
            placeholder="type here"
          />
          <button onClick={() => alert(value)}>send</button>
        </Disclosure.Panel>
      </Disclosure>
    </>
  );
};
const Tabs = () => {
  return (
    <>
      <Tab.Group as="div" className="w-full max-w-lg mx-auto">
        <Tab.List className="flex justify-center space-x-1 p-2 rounded-full ring">
          <Tab className="w-full px-2 py-1 rounded-2xl bg-indigo-700 text-white hover:bg-indigo-600">
            1
          </Tab>
          <Tab className="w-full px-2 py-1 rounded-2xl bg-indigo-700 text-white hover:bg-indigo-600">
            2
          </Tab>
          <Tab className="w-full px-2 py-1 rounded-2xl bg-indigo-700 text-white hover:bg-indigo-600">
            3
          </Tab>
        </Tab.List>
        <Tab.Panels as="div" className="flex justify-center p-4">
          <Tab.Panel className="w-full bg-slate-300 rounded-md p-4">
            {/* <Panel /> */}
            <Accordion label="Ficha de identificaicon">
              <Textfield name="a" label="A" placeholder="type something" />
              <Textfield name="b" label="B" placeholder="type something" />
            </Accordion>
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

const Modal1 = () => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Recuper
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const server = async() => {
    // console.log("first")
    await fetch('http://localhost:4000/')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => console.log(e))
  }

const Test = () => {
  // const value = "hello"
  const [value, setValue] = useState("second");
  let v = { a: "", b: "" };

  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <Signuplayout title="Paciente">
        <Provider.Provider value={{ value, setValue }}>
          {/* <Tabs></Tabs> */}
        </Provider.Provider>
        <button onClick={server}>Click!!!!!</button>
        <Formik
          initialValues={{ check: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({}) => (
            <Form>
              {/* <Tabs></Tabs> */}
              <Checkbox label="check" name="check" value="1"/>
              <Checkbox label="check2" name="check" value="2" />
              <button>click</button>
            </Form>
          )}
        </Formik>
      </Signuplayout>
      {/* <Tabbar /> */}
      {/* <Dropdown></Dropdown> */}
      {/* <Menudropdown info={{id: 1,user:"paciente"}}></Menudropdown> */}

      {/* <button onClick={async () => {
        await fetch('/api/mail').then(res => res.json()).then(data => console.log(data))
      }}>Click</button> */}
      {/* <button onClick={open}>Click</button>
      <Modal isOpen={isOpen} close={close} title="titulo">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quas quos quidem aperiam nisi illo dolorum dignissimos? Repudiandae fugit illo, quos dolorum culpa nostrum fugiat! Alias id doloremque dicta magni.</p>
        <button onClick={close}>cerrar</button>
      </Modal> */}
    </>
  );
};

export default Test;

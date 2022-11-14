import { useRouter } from "next/router";
import { forwardRef, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import { GoGear } from "react-icons/go";
import { HiLogout } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const Menulink = forwardRef((props, ref) => {
  let { href, children, active, ...rest } = props;
  return (
    <Link href={href} passHref>
      <a ref={ref}>
        <button
          ref={ref}
          className={`${
            active ? "text-indigo-800 underline" : "text-gray-900"
          } group flex rounded-md items-center w-full p-2 text-sm`}
          {...rest}
        >
          {children}
        </button>
      </a>
    </Link>
  );
});
Menulink.displayName = "Menulink";

const MenuDropdown = ({ type }) => {
  const router = useRouter();
  const logout = async () => {
    await fetch("http://localhost:3000/api/auth/logout")
      .then((res) => res.json())
      .then((data) => {
        if (data.msg) console.log(data.msg);
        if (data.error) console.log(data.error);
        router.push("/");
      });
  };

  return (
    <div className="mr-4 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 font-semibold transition duration-150 ease-in-out hover:scale-105  hover:text-indigo-800">
          <p className="px-1">Cuenta</p>
          <HiChevronDown className="h-5 w-5" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-indigo-100 rounded-md shadow-lg shadow-indigo-200 ring-1 ring-black ring-opacity-5">
            <div className="px-2 py-1">
              <Menu.Item as="div">
                {({ active }) => (
                  <Menulink href={`/${type}`} active={active}>
                    <CgProfile className="h-4 w-4 mr-2" />
                    Mi perfil
                  </Menulink>
                )}
              </Menu.Item>
            </div>
            <div className="px-2 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Menulink href={`/${type}/configuracion`} active={active}>
                    <GoGear className="h-4 w-4 mr-2" />
                    Configuracion
                  </Menulink>
                )}
              </Menu.Item>
            </div>
            <div className="px-2 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    className={`${
                      active ? "text-indigo-800 underline" : "text-gray-900"
                    } group flex rounded-md items-center w-full p-2 text-sm`}
                    onClick={logout}
                  >
                    <HiLogout className="h-4 w-4 mr-2" />
                    Cerrar sesion
                  </button>
                  // <Menulink href={`/`} active={active}>
                  //   <HiLogout className="h-4 w-4 mr-2" />
                  //   Cerrar sesion
                  // </Menulink>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default MenuDropdown;

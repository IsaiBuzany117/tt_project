import { useState } from "react";
import Modal from "./modal";
import Resetpassword from "./forms/resetpassword";

const ChangePassword = ({ id }) => {
  const [isPassReset, setIsPassReset] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="text-indigo-500 text-lg py-2 hover:text-indigo-400 hover:underline"
      >
        Cambiar contraseña
      </button>

      <Modal isOpen={isOpen} close={close} title="Cambio de contraseña">
        {isPassReset ? (
          <>
            <p className="mx-auto py-2 px-1 font-thin text-lime-500 text-center text-xl">
              Tu contraseña ha sido cambiada.
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                className="my-2 py-1 px-2 shadow-md bg-indigo-600 text-slate-100 border rounded-md hover:bg-indigo-800"
                onClick={() => {
                  close();
                  setIsPassReset(false);
                }}
              >
                Aceptar
              </button>
            </div>
          </>
        ) : (
          <>
            <Resetpassword id={id} resetfunction={setIsPassReset} />
            <div className="flex justify-center">
              <button
                type="button"
                className="w-4/5 my-2 py-1 px-2 shadow-md bg-indigo-600 text-slate-100 border rounded-md hover:bg-indigo-800"
                onClick={close}
              >
                Cerrar
              </button>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default ChangePassword;

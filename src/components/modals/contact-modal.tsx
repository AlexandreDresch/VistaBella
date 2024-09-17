import { useState } from "react";
import ContactForm from "../forms/contact-form";

export default function ContactModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="rounded-md bg-primary px-2 font-bold text-white transition-opacity hover:bg-primary/95 sm:px-4"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Tenho interesse
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                <div className="relative flex-auto p-6">
                  <ContactForm />
                </div>

                <div className="flex items-center justify-end rounded-b border-t border-solid border-gray-200 p-3">
                  <button
                    className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-25"
          ></div>
        </>
      ) : null}
    </>
  );
}

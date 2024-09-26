import { useState, useEffect } from "react";
import ContactForm from "../forms/contact-form";
import Button from "../button";

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="absolute right-6 top-6 z-50 font-opensans text-base font-bold text-red-500 transition-all duration-150 ease-linear focus:outline-none"
      type="button"
      onClick={onClick}
      aria-label="Close modal"
    >
      X
    </button>
  );
}

export default function ContactModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";

      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setShowModal(false);
        }
      };

      document.addEventListener("keydown", handleEsc);

      return () => {
        document.body.style.overflow = "auto";
        document.removeEventListener("keydown", handleEsc);
      };
    }
  }, [showModal]);

  return (
    <>
      <Button
        type="button"
        variant="primary"
        onClick={() => setShowModal(true)}
      >
        Tenho interesse
      </Button>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-white/80 outline-none focus:outline-none"
          aria-modal="true"
          role="dialog"
          aria-hidden={!showModal}
        >
          <div className="relative mx-auto my-6 w-auto max-w-3xl">
            <div className="rounded-primary relative flex w-full flex-col border-0 bg-white shadow-lg outline-none focus:outline-none">
              <CloseButton onClick={() => setShowModal(false)} />

              <div className="relative flex-auto p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

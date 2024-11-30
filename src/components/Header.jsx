import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import Button from "./Button/Button";

const Header = () => {
  const [open, setOpen] = useState(false);
  const disclosureRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        disclosureRef.current &&
        !disclosureRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav ref={disclosureRef} className="bg-white shadow">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="relative flex h-16 md:h-20 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="group relative inline-flex items-center justify-center rounded-md p-2 bg-[#23A8B1] text-white"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon aria-hidden="true" className="block w-5 h-5" />
              ) : (
                <Bars3Icon aria-hidden="true" className="block w-5 h-5" />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-between md:items-stretch">
            <Logo />
            <NavLinks handleLinkClick={handleLinkClick} />
            <div className="hidden absolute inset-y-0 right-0 md:flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
              <Button />
            </div>
          </div>
        </div>
      </div>

      {open && <MobileMenu handleLinkClick={handleLinkClick} />}
    </nav>
  );
};

export default Header;

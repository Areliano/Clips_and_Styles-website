import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navigation-wrapper w-[100%]  sticky top-0 z-10 backdrop-blur-lg bg-white border-b border-neutral-200">
      <div className="p-4 h-[60px] flex items-center justify-between w-full container mx-auto">
        <div className="logo">
          <NavLink to="/home" className="text-lg tracking-wider">
            Clips & Styles
          </NavLink>
        </div>

        <div className="right-nav flex items-center justify-between gap-4">
          {!isOpen ? (
            <button
              type="button"
              className="menubar flex flex-col items-end gap-1 px-2 rounded-md active:translate-y-[2px]"
              onClick={toggleMenu}
            >
              <div className="line bg-black rounded-lg h-[2px] w-[21px]"></div>
              <div className="line bg-black rounded-lg h-[2px] w-[21px]"></div>
              <div className="line bg-black rounded-lg h-[2px] w-[21px]"></div>
            </button>
          ) : (
            <button
              type="button"
              className="menubar px-2 rounded-md text-5xl font-light hover:bg-[whitesmoke] active:translate-y-[2px]"
              onClick={toggleMenu}
            >
              &times;
            </button>
          )}

          {/* mobile-menu content */}
          {isOpen ? (
            <section
              id="menu-content"
              className="w-full absolute top-[3.75rem] left-0 z-10 bg-white"
              onClick={toggleMenu}
              style={{height:'calc(100dvh - 3.75rem)'}}
            >
              <div className="content divide-y p-2 divide-neutral-300 text-black flex flex-col container mx-auto bg-white rounded-md border border-neutral-100 font-medium">
                <NavLink
                  to="/home"
                  onClick={toggleMenu}
                  className="content-items"
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={toggleMenu}
                  className="content-items"
                >
                  About Clips & Styles
                </NavLink>

                <NavLink
                  to="/our-story"
                  onClick={toggleMenu}
                  className="content-items"
                >
                  Our Story
                </NavLink>

                <NavLink
                  to="/our-manifesto"
                  onClick={toggleMenu}
                  className="content-items"
                >
                  Our Manifesto
                </NavLink>

                <NavLink
                  to="/our-team"
                  onClick={toggleMenu}
                  className="content-items"
                >
                  Our Team
                </NavLink>

                <NavLink
                  to="/for-customers"
                  onClick={toggleMenu}
                  className="content-items"
                >
                  Clips & Styles for customers
                </NavLink>

                <NavLink
                  to="/for-shop-owners"
                  onClick={toggleMenu}
                  className="content-items"
                >
                  Clips & Styles for beauty Shop owners
                </NavLink>
              </div>
            </section>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}

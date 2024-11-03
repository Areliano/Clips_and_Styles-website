import { NavLink } from "react-router-dom";

export default function Navbar(){
    return (
      <nav className="navigation-wrapper w-[100%]  text-white sticky top-0 z-10 backdrop-blur-lg bg-[#1D0301]/50">
        <div className="p-3 h-[70px] flex items-center justify-between w-full container mx-auto">
          <div className="logo">
            <NavLink to="/" className="text-lg tracking-wider">
              Clips & Styles
            </NavLink>
          </div>

          <div className="hidden lg:flex items-center nav-links relative">
            <ul className="flex gap-4 items-center text-sm tracking-wide">
              <li>
                <NavLink to="/" className="list-item1">
                  Home
                </NavLink>
              </li>
              <li className="categories">
                <NavLink>Categories</NavLink>
                <div className="sub-menu hidden absolute top-[100%] left-[-180px] border border-slate-100/20 w-[550px] h-52 backdrop-blur-md shadow-md rounded-[16px] bg-[black] grid-cols-4 p-4 gap-4 animate__animated animate__fadeIn text-sm">
                  <NavLink to="/" className="sub-item">
                    Barbershop
                  </NavLink>
                  <NavLink to="/" className="sub-item">
                    Hair Salon
                  </NavLink>
                  <NavLink to="/" className="sub-item">
                    Spa
                  </NavLink>
                  <NavLink to="/" className="sub-item">
                    Nail Tech
                  </NavLink>
                  <NavLink to="/" className="sub-item">
                    Make up
                  </NavLink>
                  <NavLink to="/" className="sub-item">
                    Skincare
                  </NavLink>
                  <NavLink to="/" className="sub-item">
                    Piercing
                  </NavLink>
                  <NavLink to="/" className="sub-item">
                    Tattoo
                  </NavLink>
                </div>
              </li>
              <li>
                <NavLink to="/about" className="list-item3">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="list-item4">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="right-nav flex items-center justify-between gap-4">
            <span>{/* light and dark mode toggle */}</span>

            <NavLink
              to="/Login"
              type="button"
              className="hidden border-2 border-[#23461A] py-1.5 md:inline-flex md:py-2 px-3 md:px-6 rounded-md active:translate-y-[2px] tracking-wide text-sm"
            >
              Log in
            </NavLink>
            <NavLink
              to="/Signup"
              type="button"
              className="hidden border border-transparent py-2 px-6 rounded-md bg-[#23461A] hover:bg-[#23461A]/80 active:translate-y-[2px] lg:inline-flex text-sm"
            >
              Sign Up
            </NavLink>

            <button
              type="button"
              className="menubar flex flex-col gap-1 border border-slate-100/40 p-2 rounded-md lg:hidden"
              popovertarget="menu-content"
            >
              <div className="line bg-neutral-100 rounded-lg h-[2px] w-[21px]"></div>
              <div className="line bg-neutral-100 rounded-lg h-[2px] w-[21px]"></div>
              <div className="line bg-neutral-100 rounded-lg h-[2px] w-[21px]"></div>
            </button>

            {/* mobile-menu content */}
            <dialog
              popover="auto"
              id="menu-content"
              className="w-full h-[100dvh] border p-2 animate__animated animate__slideInLeft bg-[#0f172a] backdrop-blur-lg text-[white] border-slate-50/20 lg:hidden"
            >
              <section className="mb-4 flex items-center justify-between border border-slate-100/10 bg-[#1e293b]/80 rounded-md p-1 pl-2 ">
                <NavLink
                  to="/"
                  className="text-lg text-white tracking-wide logo"
                >
                  Clips & Styles
                </NavLink>

                <button
                  className="float-right text-3xl border border-slate-100/10 bg-[#0f172a] text-white rounded-md  size-8 flex items-center justify-center"
                  popovertarget="menu-content"
                  popovertargetaction="hide"
                >
                  &times;
                </button>
              </section>

              <ul className="content backdrop-[10.5px]">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="categories-drop border border-slate-100/30">
                  <details>
                    <summary className="categories-summary list-none  after:content-['\2192'] after:font-black after:text-xl after:m-0 flex items-center justify-between after:animate-pulse">
                      Categories
                      {/* icon */}
                      {/* <i className="fab fa-chevron right"></i> */}
                    </summary>

                    <div className="flex flex-col mt-2 border bg-[#0f172a]/80 border-slate-100/10 rounded-md text-sm divide-y divide-slate-50/5">
                      <NavLink to="/" className="mobile-dropdown">
                        Barbershop
                      </NavLink>
                      <NavLink to="/" className="mobile-dropdown">
                        Hair Salon
                      </NavLink>
                      <NavLink to="/" className="mobile-dropdown">
                        Spa
                      </NavLink>
                      <NavLink to="/" className="mobile-dropdown">
                        Nail Tech
                      </NavLink>
                      <NavLink to="/" className="mobile-dropdown">
                        Make up
                      </NavLink>
                      <NavLink to="/" className="mobile-dropdown">
                        Skincare
                      </NavLink>
                      <NavLink to="/" className="mobile-dropdown">
                        Piercing
                      </NavLink>
                      <NavLink to="/" className="mobile-dropdown">
                        Tattoo
                      </NavLink>
                    </div>
                  </details>
                </li>
                <li>
                  <NavLink to="">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="">Blog</NavLink>
                </li>
              </ul>

              <div className="cta flex flex-col space-y-2 mt-16">
                <NavLink
                  to="/Login"
                  className="border-2 border-[#23461A] py-2 md:py-2 px-3 md:px-6 rounded-md active:translate-y-[2px] tracking-wide text-sm text-center"
                >
                  Log in
                </NavLink>
                <NavLink
                  to="/Signup"
                  className="border border-transparent py-2 px-6 rounded-md bg-[#23461A] hover:bg-[#23461A]/80 active:translate-y-[2px] lg:inline-flex text-sm text-center"
                >
                  Sign Up
                </NavLink>
              </div>
            </dialog>
          </div>
        </div>
      </nav>
    );
}
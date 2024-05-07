import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="sm:flex w-full max-w-[1600px] mx-auto justify-between font-extrabold items-center p-12 hidden">
        <div>
          <Link to="/" className="text-lg aicat">AICAT</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
           <Link to="/About">ABOUT</Link>
          </li>
          <li>
           <Link to="/Shop">SHOP</Link>
          </li>
          <li>
            <Link to="/Reviews">REVIEWS</Link>
          </li>
          <li>
            <Link to="/Social">SOCIAL</Link>
          </li>
        </ul>
      </nav>

      <nav className="flex justify-between w-full font-extrabold items-center p-8 sm:hidden">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-violet-600 rounded-box w-52"
          >
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">SHOP</a>
            </li>
            <li>
              <a href="">REVIEWS</a>
            </li>
            <li>
              <a href="">SOCIAL</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg">AICAT</p>
        </div>
      </nav>
    </>
  );
}

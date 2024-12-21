import { useState, useRef } from "react";
import { Link, NavLink } from "react-router";
import useSuggestions from "../utils/useSuggestions";

const Nav = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const sug = useSuggestions(input);
  const [suggestions, setSuggestions] = useState<{id: number; title: string; imageType: string}[] | null>(null);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
    if (e.target.value.length > 2) setSuggestions(sug.data);
    else setSuggestions(null);
  };
  const focusInput = () => {
    inputRef.current?.focus();
  };
  const blurInput = () => {
    if (inputRef.current?.value.length === 0) {
      inputRef.current?.blur();
    }
  };
  return (
    <>
      <ul className="flex items-center justify-between w-full h-24 px-6 py-2">
        <div
          onClick={() => setOpen(!open)}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="relative group"
        >
          <li className="p-1 bg-white rounded-full shadow-lg cursor-pointer hover:shadow-xl md:hover:shadow-lg transition-shadow duration-300 md:cursor-auto">
            <img
              src="https://picsum.photos/200.webp"
              alt="avatar"
              className="w-16 h-16 rounded-full"
            />
          </li>
          {open && (
            <div className="absolute left-0 py-2 md:hidden top-18 transition-opacity duration-300">
              <ul className="px-2 text-center bg-white rounded-lg shadow-lg divide-y divide-primary">
                <li className="p-4">
                  <NavLink to="/profile">Profile</NavLink>
                </li>
                <li className="p-4">
                  <NavLink to="/favorites">Favorites</NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="hidden w-1/4 md:flex justify-evenly">
          <li className="p-4">
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className="p-4">
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </div>
        <div className="relative group">
          <div className="flex px-4 py-2 rounded-full shadow-lg w-fit bg-white/75 hover:bg-white focus-within:bg-white hover:shadow-xl focus:outline-none transition-all duration-300">
            <form className="flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => handleInputChange(e)}
                onMouseEnter={focusInput}
                onMouseLeave={blurInput}
                placeholder="Search..."
                className="outline-0"
              />
              <button type="submit" className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-gray-600 hover:text-gray-800"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
              </button>
            </form>
          </div>
          {suggestions && (
            <div className="container absolute hidden w-full py-2 top-10 group-hover:block group-focus-within:block">
              <ul className="px-2 bg-white rounded-lg shadow-lg divide-y divide-primary">
                {suggestions.map((suggestion) => (
                  <li key={suggestion.id} className="py-4">
                    <Link to={`/recipes/${suggestion.id}`}>{suggestion.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <NavLink to="/notifications">
          <li className="relative p-4 bg-white rounded-full shadow-lg hover:shadow-xl md:hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-bell"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            </svg>
          </li>
        </NavLink>
      </ul>
    </>
  );
};

export default Nav;

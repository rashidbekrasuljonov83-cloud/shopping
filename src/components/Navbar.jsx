import React from "react";

function Navbar({ totalItems, onCartClick }) {
  return (
    <div className="navbar bg-base-100 shadow-sm px-6">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Shopping</a>
      </div>
      <div className="flex-none gap-2">
        <div
          role="button"
          onClick={onCartClick}
          className="btn btn-ghost btn-circle mr-2"
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z"
              />
            </svg>
            {totalItems > 0 && (
              <span className="badge badge-sm badge-primary indicator-item">
                {totalItems}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

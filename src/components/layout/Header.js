import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
export const Header = () => {
  return (
    <header data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="todo-logo" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

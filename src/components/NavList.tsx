import React from "react";
import { Link } from "react-router-dom";

interface NavListProps {
  name: string;
  path: string;
}

function NavList({ name, path }: NavListProps) {
  return (
    <li className="p-3 mx-2 cursor-pointer ">
      <Link to={path} className="text-lg hover:text-primary transition-colors">
        {name}
      </Link>
    </li>
  );
}

export default NavList;

import React from "react";
import { Link } from "react-router-dom";

function CardItem() {
  return (
    // card
    <Link to="/notes" className="inline-block">
      <div className="bg-card w-80 min-h-[16rem] rounded-xl shadow-lg shadow-neutral-400">
        <h2>Notes</h2>
        <span>간단히 메모를 시작하세요!</span>
        <p>
          <Link to="/notes/gide">Guide</Link>
        </p>
      </div>
    </Link>
  );
}

export default CardItem;

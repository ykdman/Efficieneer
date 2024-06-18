import { Link } from "react-router-dom";

type CardItemType = {
  path: string;
  title: string;
  description: string;
};

function CardItem({ path, title, description }: CardItemType) {
  return (
    // card
    <section id="card" className="m-4">
      <div className="bg-card w-80 min-h-[16rem] rounded-xl shadow-lg shadow-neutral-400 flex flex-col items-start justify-around px-6">
        <h2 className="text-2xl block font-bold">{title}</h2>
        {/* 이미지 넣는 부분 */}
        <span className="block font-medium">{description}</span>
        <div
          id="card-nav-links"
          className="flex justify-between items-center w-full"
        >
          <Link
            className="text-cyan-700 hover:text-cyan-400"
            to={`${path}/guide`}
          >
            Guide
          </Link>

          <Link
            to={path}
            className=" font-semibold text-cyan-600 hover:text-cyan-400"
          >
            시작하기➡️
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CardItem;

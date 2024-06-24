import React from "react";
import CardItem from "../components/CardItem";

type CardDataType = {
  title: string;
  path: string;
  description: string;
}[];

const cardDatas: CardDataType = [
  { title: "Notes", path: "/notes", description: "간단히 메모를 시작하세요!" },
  {
    title: "Todos",
    path: "/todos",
    description: "할 일을 기록하고 완수하세요!",
  },
  { title: "Calender", path: "/calender", description: "스케쥴을 확인하세요!" },
];

function Home() {
  return (
    <>
      <section
        id="card-nav"
        className="w-9/12 flex flex-col flex-wrap justify-center items-center min-h-full my-5 md:flex-row h-full"
      >
        {cardDatas.map((cardData) => (
          <CardItem
            key={cardData.title + cardData.path}
            title={cardData.title}
            path={cardData.path}
            description={cardData.description}
          />
        ))}
      </section>
    </>
  );
}

export default Home;

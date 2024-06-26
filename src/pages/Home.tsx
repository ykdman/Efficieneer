import React from "react";
import CardItem from "../components/CardItem";
import { servieInfo } from "../utils/serviceInfo";

function Home() {
  return (
    <>
      <section id="card-nav" className="w-full h-full ">
        <div className="flex justify-center items-center w-full h-max mt-3 ">
          {servieInfo.map((service) => (
            <CardItem
              key={service.title + service.path}
              title={service.title}
              path={service.path}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;

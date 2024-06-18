import { log } from "console";
import React from "react";

const page = ({ params }) => {
  console.log(params);
  return (
    <div>
      <main>
        <h1>Project {params.name.toUpperCase()}</h1>
      </main>
    </div>
  );
};

export default page;

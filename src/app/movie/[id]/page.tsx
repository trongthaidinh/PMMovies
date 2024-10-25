"use client";

import { useParams } from "next/navigation";
import ReactPlayer from "react-player";

const MovieDetail = () => {
  const { id } = useParams();

  console.log("id ", id);

  return (
    <div className="container py-16">
      <h1 className="text-[40px]">I Dream in Another Language</h1>
      <div className="mt-6 grid grid-cols-[1fr_650px] gap-6">
        <div></div>
        <div>
          <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

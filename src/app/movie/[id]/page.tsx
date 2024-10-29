"use client";

import Image from "@/components/Image";
import Link from "next/link";
import { useParams } from "next/navigation";

const MovieDetail = () => {
  const { id } = useParams();

  console.log("id ", id);

  return (
    <div className="container py-16">
      <div>
        <h1 className="text-[40px]">I Dream in Another Language</h1>
        <div className="mt-6 grid grid-cols-[1fr_650px] gap-6">
          <div className="grid h-[380px] grid-cols-[240px_1fr] gap-5">
            <Image className="size-full" src="/images/sample/mv.jpg" />
            <div className="flex h-full flex-col justify-between gap-2">
              <div className="flex flex-1 flex-col gap-0.5">
                <div>
                  <span>Director: </span>
                  <div className="inline-block text-primary">
                    <Link target="_blank" href="#" className="">
                      Vince Gilligan
                    </Link>
                  </div>
                </div>
                <div>
                  <span>Cast: </span>
                  <div className="inline-block text-primary">
                    <Link target="_blank" href="#" className="">
                      Brian Cranston
                    </Link>
                    ,{" "}
                    <Link target="_blank" href="#" className="">
                      Jesse Plemons
                    </Link>
                    ,
                    <Link target="_blank" href="#" className="">
                      Matt Jones
                    </Link>
                  </div>
                </div>
                <div>
                  <span>Genre: </span>
                  <div className="inline-block text-primary">
                    <Link target="_blank" href="#" className="">
                      Action
                    </Link>
                    ,{" "}
                    <Link target="_blank" href="#" className="">
                      Triler
                    </Link>
                  </div>
                </div>
                <div>
                  <span>Premiere: </span>
                  <span>2019</span>
                </div>
                <div>
                  <span>Running time: </span>
                  <span>128 min</span>
                </div>
                <div>
                  <span>Country: </span>
                  <div className="inline-block text-primary">
                    <Link target="_blank" href="#" className="">
                      USA
                    </Link>
                  </div>
                </div>
              </div>
              <div className="scrollbar-custom max-h-[180px] overflow-y-auto rounded-md bg-dark-1">
                <p className="px-3 py-2">
                  When a renowned archaeologist goes missing, his daughter sets
                  out on a perilous journey to the heart of the Amazon
                  rainforest to find him. Along the way, she discovers a hidden
                  city and a dangerous conspiracy that threatens the very
                  balance of power in the world. With the help of a charming
                  rogue, she must navigate treacherous terrain and outwit
                  powerful enemies to save her father and uncover the secrets of
                  the lost city. A down-on-his-luck boxer struggles to make ends
                  meet while raising his young son. When an old friend offers
                  him a chance to make some quick cash by fighting in an illegal
                  underground boxing tournament, he sees it as his last shot at
                  redemption. But as the stakes get higher and the fights get
                  more brutal, he must confront his own demons and find the
                  strength to win not just for himself, but for his son.
                </p>
              </div>
            </div>
          </div>
          <div>
            {/* <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" /> */}
          </div>
        </div>
      </div>
      <div>
        <div className="mt-7 grid grid-cols-7 gap-6"></div>
      </div>
    </div>
  );
};

export default MovieDetail;

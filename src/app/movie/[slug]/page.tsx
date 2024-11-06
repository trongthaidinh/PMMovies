"use client";

import useGetMovieDetail from "@/hooks/api/useGetMovieDetail";
import Loader from "@/components/Loader";
// import { IMAGE_URL } from "@/constants/base";
import Link from "next/link";
// import Image from "@/components/Image";
import { use } from "react";
import { useState } from "react";
import CommentForm from "@/components/comments/CommentForm";
import CommentList from "@/components/comments/CommentList";
import { useComments } from "@/hooks/api/useComments";
import MovieImage from "@/components/MovieImage";

interface PageParams {
  slug: string;
}

interface Props {
  params: Promise<PageParams>;
}

const MovieDetailPage = ({ params }: Props) => {
  const unwrappedParams = use(params);
  const { data: res, isLoading } = useGetMovieDetail(unwrappedParams.slug);
  const movie = res?.data?.item;

  const [currentServer, setCurrentServer] = useState(0);
  const [currentEpisode, setCurrentEpisode] = useState(0);

  const {
    comments,
    isLoading: commentsLoading,
    addComment,
  } = useComments(movie?.slug || "");

  if (isLoading) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!movie) return null;

  return (
    <div className="container py-8">
      <div className="mb-6 flex flex-wrap items-center gap-2 text-sm">
        <Link href="/" className="hover:text-primary">
          Trang chủ
        </Link>
        {res?.data?.breadCrumb.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span>/</span>
            {item.isCurrent ? (
              <span className="text-primary">{item.name}</span>
            ) : (
              <Link href={item.slug} className="hover:text-primary">
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[300px_1fr]">
        <div className="space-y-4">
          <div className="aspect-[2/3] overflow-hidden rounded-lg">
            <MovieImage
              src={movie.thumb_url}
              alt={movie.name}
              className="h-full w-full object-cover object-center"
              priority
              fill
            />
          </div>

          <div className="space-y-2 rounded-lg bg-dark-1 p-4">
            <div className="flex items-center justify-between">
              <span>TMDB Rating:</span>
              <span className="text-primary">
                {movie.tmdb.vote_average}/10 ({movie.tmdb.vote_count} votes)
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Lượt xem:</span>
              <span className="text-primary">{movie.view}</span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{movie.name}</h1>
          <h2 className="text-xl text-gray-400">{movie.origin_name}</h2>

          <div className="space-y-2">
            <div>
              <span className="font-semibold">Trạng thái: </span>
              <span className="text-primary">
                {movie.episode_current}/{movie.episode_total} - {movie.status}
              </span>
            </div>

            <div>
              <span className="font-semibold">Thời lượng: </span>
              <span>{movie.time}</span>
            </div>

            <div>
              <span className="font-semibold">Chất lượng: </span>
              <span>{movie.quality}</span>
            </div>

            <div>
              <span className="font-semibold">Ngôn ngữ: </span>
              <span>{movie.lang}</span>
            </div>

            <div>
              <span className="font-semibold">Năm: </span>
              <span>{movie.year}</span>
            </div>

            <div>
              <span className="font-semibold">Diễn viên: </span>
              <span>{movie.actor.join(", ") || "Đang cập nhật"}</span>
            </div>

            <div>
              <span className="font-semibold">Đạo diễn: </span>
              <span>{movie.director.join(", ") || "Đang cập nhật"}</span>
            </div>

            <div>
              <span className="font-semibold">Thể loại: </span>
              <div className="inline-flex flex-wrap gap-2">
                {movie.category.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/categories/${cat.slug}`}
                    className="text-primary hover:underline"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <span className="font-semibold">Quốc gia: </span>
              <div className="inline-flex flex-wrap gap-2">
                {movie.country.map((country) => (
                  <Link
                    key={country.id}
                    href={`/country/${country.slug}`}
                    className="text-primary hover:underline"
                  >
                    {country.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <span className="font-semibold">Thời gian cập nhật: </span>
              <span>{new Date(movie.modified.time).toLocaleDateString()}</span>
            </div>

            {/* {movie.imdb.id && (
              <div>
                <span className="font-semibold">IMDB ID: </span>
                <a
                  href={`https://www.imdb.com/title/${movie.imdb.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {movie.imdb.id}
                </a>
              </div>
            )} */}
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">Nội dung phim</h3>
            <div
              className="scrollbar-custom max-h-[180px] overflow-y-auto rounded-md bg-dark-1 p-4"
              dangerouslySetInnerHTML={{ __html: movie.content }}
            />
          </div>
        </div>
      </div>

      {movie.episodes.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold">Xem phim</h3>
          <div className="space-y-4">
            {movie.episodes.map((server, serverIdx) => (
              <div key={serverIdx}>
                <h4 className="mb-2 font-medium">{server.server_name}</h4>
                <div className="flex flex-wrap gap-2">
                  {server.server_data.map((episode, episodeIdx) => (
                    <button
                      key={episodeIdx}
                      className={`rounded px-4 py-2 ${
                        currentServer === serverIdx &&
                        currentEpisode === episodeIdx
                          ? "bg-primary"
                          : "bg-dark-1 hover:bg-primary"
                      }`}
                      onClick={() => {
                        setCurrentServer(serverIdx);
                        setCurrentEpisode(episodeIdx);
                      }}
                    >
                      {episode.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {movie.episodes[currentServer]?.server_data[currentEpisode]
        ?.link_embed && (
        <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-lg">
          <iframe
            src={
              movie.episodes[currentServer].server_data[currentEpisode]
                .link_embed
            }
            className="absolute left-0 top-0 h-full w-full"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
          />
        </div>
      )}
      <div className="mt-8">
        <h3 className="mb-4 text-xl font-semibold">Bình luận</h3>
        <div className="space-y-6">
          <CommentForm
            onSubmit={async (content) => {
              await addComment(content);
            }}
          />
          <CommentList comments={comments} isLoading={commentsLoading} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;

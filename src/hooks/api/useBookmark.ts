import { useEffect, useState } from "react";

export const useBookmark = () => {
  const [bookmarks, setBookmarks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const savedBookmarks = localStorage.getItem("bookmarks");
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
    setIsLoading(false);
  }, []);

  const addBookmark = (movie: any) => {
    const newBookmarks = [...bookmarks, movie];
    setBookmarks(newBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  };

  const removeBookmark = (movieSlug: string) => {
    const newBookmarks = bookmarks.filter((item) => item.slug !== movieSlug);
    setBookmarks(newBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  };

  const isBookmarked = (movieSlug: string) => {
    return bookmarks.some((item) => item.slug === movieSlug);
  };

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked,
    isLoading,
  };
};

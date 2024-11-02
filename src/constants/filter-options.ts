export const sortOptions = [
  { value: "latest", label: "Mới nhất" },
  { value: "oldest", label: "Cũ nhất" },
];

export const typeOptions = [
  { value: "series", label: "Phim bộ" },
  { value: "single", label: "Phim lẻ" },
  { value: "hoathinh", label: "Hoạt hình" },
  { value: "tvshows", label: "TV Shows" },
];

export const yearOptions = Array.from({ length: 24 }, (_, i) => {
  const year = 2024 - i;
  return { value: year.toString(), label: year.toString() };
});

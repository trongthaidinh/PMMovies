interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const renderPageNumbers = () => {
    const items = [];
    const maxVisiblePages = 5;
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(currentPage - halfVisible, 1);
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage === totalPages) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    if (startPage > 1) {
      items.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className="rounded-lg border border-dark-1 px-4 py-2 transition-colors hover:bg-dark-1"
        >
          1
        </button>,
      );
      if (startPage > 2) {
        items.push(
          <span key="dots-1" className="px-2">
            ...
          </span>,
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`rounded-lg px-4 py-2 transition-colors ${
            currentPage === i
              ? "bg-primary text-white"
              : "border border-dark-1 hover:bg-dark-1"
          }`}
        >
          {i}
        </button>,
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(
          <span key="dots-2" className="px-2">
            ...
          </span>,
        );
      }
      items.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className="rounded-lg border border-dark-1 px-4 py-2 transition-colors hover:bg-dark-1"
        >
          {totalPages}
        </button>,
      );
    }

    return items;
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border border-dark-1 px-4 py-2 transition-colors hover:bg-dark-1 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span className="hidden sm:inline">Trang trước</span>
        <span className="sm:hidden">←</span>
      </button>

      <div className="flex flex-wrap items-center gap-2">
        {renderPageNumbers()}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border border-dark-1 px-4 py-2 transition-colors hover:bg-dark-1 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span className="hidden sm:inline">Trang sau</span>
        <span className="sm:hidden">→</span>
      </button>

      <span className="ml-2 text-sm text-gray-400">
        Trang {currentPage} / {totalPages}
      </span>
    </div>
  );
};

export default Pagination;

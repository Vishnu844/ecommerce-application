function Pagination({ total, page, setPage }) {
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= parseInt(total / 10) + 1 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };
  return (
    <div>
      {total > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination__disable"}
          >
            ◀
          </span>

          {[...Array(parseInt(total / 10) + 1)].map((_, i) => {
            return (
              <span
                key={i}
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            onClick={() => selectPageHandler(page + 1)}
            className={
              page < parseInt(total / 10) + 1 ? "" : "pagination__disable"
            }
          >
            ▶
          </span>
        </div>
      )}
    </div>
  );
}

export default Pagination;

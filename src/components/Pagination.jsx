import React from "react";

function Pagination({ cntPage, setPage, pageNumber }) {
  if (cntPage === 0) return null;

  return (
    <div className="flex gap-2 justify-center mt-6">
      {Array.from({ length: cntPage }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`px-3 py-1 rounded 
            ${
              pageNumber === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }
          `}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;

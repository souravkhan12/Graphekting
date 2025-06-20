import { useState, useMemo } from "react";

function useSearch(data, keys = []) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [roles, setRoles] = useState([]);
  const [departments, setDepartments] = useState([]);

  const { filteredData, totalPages } = useMemo(() => {
    let result = data;

    if (query) {
      result = data.filter((item) =>
        keys.some((key) =>
          item[key].toLowerCase().includes(query.toLowerCase())
        )
      );
    }

    if (roles.length > 0) {
      const q = JSON.stringify(roles);
      result = result.filter((item) => q.includes(item.status));
    }
    if (departments.length > 0) {
      const q = JSON.stringify(departments);
      result = result.filter((item) => q.includes(item.department));
    }

    const totalPages = Math.ceil(result.length / 5);
    const paginatedData = result.slice((page - 1) * 5, page * 5);

    return { filteredData: paginatedData, totalPages };
  }, [data, query, keys, page, roles]);

  return {
    query,
    setQuery,
    filteredData,
    page,
    setPage,
    totalPages,
    roles,
    setRoles,
    departments,
    setDepartments,
  };
}

export default useSearch;

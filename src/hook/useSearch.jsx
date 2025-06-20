import { useState, useMemo, useEffect } from "react";

function useSearch(data, keys = []) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [page, setPage] = useState(1);
  const [roles, setRoles] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
      setPage(1);
    }, 300);

    return () => clearTimeout(handler);
  }, [query]);

  const { filteredData, totalPages } = useMemo(() => {
    let result = data;

    if (debouncedQuery) {
      result = data.filter((item) =>
        keys.some((key) =>
          item[key].toLowerCase().includes(debouncedQuery.toLowerCase())
        )
      );
    }

    // filter by status
    if (roles.length > 0) {
      const q = JSON.stringify(roles);
      result = result.filter((item) => q.includes(item.status));
    }

    // filter by department
    if (departments.length > 0) {
      const q = JSON.stringify(departments);
      result = result.filter((item) => q.includes(item.department));
    }

    const totalPages = Math.ceil(result.length / 5);
    const paginatedData = result.slice((page - 1) * 5, page * 5);

    return { filteredData: paginatedData, totalPages };
  }, [data, debouncedQuery, keys, page, roles, departments]);

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

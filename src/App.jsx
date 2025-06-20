import NavBar from "./components/NavBar";
import UserList from "./components/UserList";
import { data as userData } from "./data";
import useSearch from "./hook/useSearch";
import Pagination from "./components/Pagination";

function App() {
  const {
    query,
    setQuery,
    filteredData,
    totalPages,
    setPage,
    page,
    roles,
    setRoles,
    departments,
    setDepartments,
  } = useSearch(userData, ["name", "department", "status"]);

  return (
    <div>
      <NavBar
        query={query}
        setQuery={setQuery}
        roles={roles}
        setRoles={setRoles}
        departments={departments}
        setDepartments={setDepartments}
      />
      <div className="flex justify-center flex-col items-center">
        <UserList filteredData={filteredData} />
        <Pagination cntPage={totalPages} setPage={setPage} pageNumber={page} />
      </div>
    </div>
  );
}

export default App;

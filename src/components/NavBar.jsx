import Dropdown from "./Dropdown";
import { useState } from "react";
import { FiFilter } from "react-icons/fi";

function NavBar({
  query,
  setQuery,
  roles,
  setRoles,
  departments,
  setDepartments,
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex items-center justify-around bg-gray-800 text-white p-4 shadow-lg relative">
      <h1 className="text-xl font-bold">User Dashboard</h1>

      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search users..."
          className="p-2 border-white border rounded-xl bg-gray-900 placeholder-gray-400 text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
          >
            <FiFilter size={18} />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 z-50">
              <Dropdown
                roles={roles}
                setRoles={setRoles}
                departments={departments}
                setDepartments={setDepartments}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;

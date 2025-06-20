import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function Dropdown({ roles, setRoles, departments, setDepartments }) {
  const [st, setSt] = useState(false);
  const [dep, setDep] = useState(false);

  const handleChangeStatus = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setRoles((role) => [...role, value]);
    } else {
      setRoles((role) => role.filter((val) => val !== value));
    }
  };

  const handleChangeDepartment = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setDepartments((prev) => [...prev, value]);
    } else {
      setDepartments((prev) => prev.filter((val) => val !== value));
    }
  };

  console.log(departments);

  return (
    <div className="text-sm bg-white w-44 rounded-2xl p-4 shadow-xl space-y-4">
      <h2 className="font-semibold text-gray-700">Data Filters</h2>

      {/* Status Section */}
      <div className="border-t pt-2 space-y-2">
        <div
          className="flex items-center justify-between cursor-pointer select-none"
          onClick={() => setSt(!st)}
        >
          <span className="text-gray-600 font-medium">Status</span>
          <motion.span
            animate={{ rotate: st ? 90 : 270 }}
            transition={{ duration: 0.2 }}
            className="text-gray-500"
          >
            &larr;
          </motion.span>
        </div>

        <AnimatePresence>
          {st && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-2"
            >
              {["Active", "Inactive"].map((status) => (
                <div className="flex items-center gap-2" key={status}>
                  <input
                    type="checkbox"
                    value={status}
                    className="accent-blue-500"
                    onChange={handleChangeStatus}
                  />
                  <label className="text-gray-600">{status}</label>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="border-t pt-2 space-y-2">
        <div
          className="flex items-center justify-between cursor-pointer select-none"
          onClick={() => setDep(!dep)}
        >
          <span className="text-gray-600 font-medium">Department</span>
          <motion.span
            animate={{ rotate: dep ? 90 : 270 }}
            transition={{ duration: 0.2 }}
            className="text-gray-500"
          >
            &larr;
          </motion.span>
        </div>

        <AnimatePresence>
          {dep && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-2"
            >
              {["Finance", "Arts", "Engineer"].map((dept) => (
                <div className="flex items-center gap-2" key={dept}>
                  <input
                    type="checkbox"
                    value={dept}
                    className="accent-blue-500"
                    onChange={handleChangeDepartment}
                  />
                  <label className="text-gray-600">{dept}</label>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Dropdown;

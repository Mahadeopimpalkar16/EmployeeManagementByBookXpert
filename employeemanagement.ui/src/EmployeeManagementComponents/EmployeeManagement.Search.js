
function EmployeeSearch({ value, onChange }) {
  return (
    <input
      className="form-control mt-2 mb-2"
      placeholder="Search by name"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ maxWidth: 300 }}
    />
  );
}

export default EmployeeSearch;

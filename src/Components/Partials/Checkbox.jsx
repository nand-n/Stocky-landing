/* eslint-disable react/prop-types */
export const Checkbox = ({ label, name, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 text-indigo-600"
      />
      <span>{label}</span>
    </label>
  );
};

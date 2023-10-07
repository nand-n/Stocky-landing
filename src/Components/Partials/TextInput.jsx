/* eslint-disable react/prop-types */
import React from "react";

function TextInput({
  formik,
  name,
  type,
  className,
  errorClassName,
  errorDisplayClassName,
  isMulti,
}) {
  console.log(formik.values);
  return (
    <>
      {isMulti ? (
        <textarea
          // className={formik.errors.causedBy ? errorClassName : className}
          className="border focus:outline-none px-4 text-xs text-black rounded-md border-[#D1D1D1]"
          name={name}
          rows={5}
          cols={35}
          onChange={formik.handleChange}
          value={formik.values[name]}
          placeholder={"Add your feedback"}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          onChange={formik.handleChange}
          value={formik.values[name]}
          className={formik.errors.causedBy ? errorClassName : className}
        />
      )}
      <p className={errorDisplayClassName}>{formik.errors[name]}</p>
    </>
  );
}

export default TextInput;

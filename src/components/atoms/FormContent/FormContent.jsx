/** @format */

import PropType from "prop-types";

const FormContent = ({ onInput }) => {
  return (
    <div
      type="text"
      className="border rounded-md h-24 overflow-y-auto mb-4"
      contentEditable
      role="textbox" // Explicitly set the role
      onInput={onInput}
    ></div>
  );
};

FormContent.propTypes = {
  onInput: PropType.func,
};

export default FormContent;

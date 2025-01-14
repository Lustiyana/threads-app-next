import PropType from 'prop-types'

const FormContent = ({onInput}) => {
  return (
    <div
      type="text"
      className="border rounded-md h-24 overflow-y-auto mb-4"
      contentEditable
      onInput={onInput}
    ></div>
  );
};

export default FormContent;

FormContent.propTypes={
  onInput: PropType.func
}
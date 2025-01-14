import PropType from 'prop-types'

const Toast = ({error, message}) => {
  return (
    <div className="toast toast-end">
      <div className={`alert ${error?'alert-error':'alert-success'}`}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;

Toast.propTypes = {
  error: PropType.bool,
  message: PropType.string
}
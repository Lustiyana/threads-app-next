import PropType from 'prop-types'

const Button = ({children, onClick, outline, type, full}) => {
  return (
    <button onClick={onClick} className={`btn btn-primary ${outline?'btn-outline':''} ${full?'w-full':''}`} type={type}>{children}</button>
  )
}

export default Button

Button.propTypes = {
  name: PropType.string,
  onClick: PropType.func,
  outline: PropType.bool,
  children: PropType.any,
  type: PropType.string,
  full: PropType.bool
}
import PropType from 'prop-types'

const AuthLayout = ({title, children}) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="p-8 shadow-xl rounded-md">
        <h1 className="text-center text-xl font-bold">{title}</h1>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout

AuthLayout.propTypes = {
  title: PropType.string,
  children: PropType.any
}
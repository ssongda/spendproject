import './index.css'

export const CustomButton = ({ children, ...rest }) =>
    <button className="moveButton" {...rest}>
        {children}
    </button>
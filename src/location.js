import { useLocation } from "react-router-dom";

const location = WrappedComponent => props => {
    const data = useLocation();


return (
    <WrappedComponent
    {...props}
    {...{data}}
    />
);
};

export default location
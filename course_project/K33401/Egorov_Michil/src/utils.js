import { useLocation, useNavigate } from "react-router";


export function withRouter( Child ) {
    return ( props ) => {
        const location = useLocation();
        const navigate = useNavigate();
        return <Child { ...props } navigate={ navigate } location={ location } />;
    }
}
  
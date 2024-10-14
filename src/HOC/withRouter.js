import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const withRouter = (WrappedComponent) => {
    return (props) => {
        const navigate = useNavigate();
        const location = useLocation();
        const params = useParams();
        return (
            
                <WrappedComponent
                    navigate={navigate}
                    location={location}
                    params={params}
                    {...props}
                />
            
        );
    };
};

export default withRouter;

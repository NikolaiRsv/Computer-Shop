import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/authContext.js'; 

import { useComputerContext } from '../../contexts/ComputerContext.js'; 

export const AdOwner = ({
    children,
}) => {
    const { computerId } = useParams();
    const { getComputer } = useComputerContext();
    const { userId } = useAuthContext();

    const currentComputer = getComputer(computerId);

    if (currentComputer && currentComputer._ownerId !== userId) {
        return <Navigate to={`/catalog/${computerId}`} replace />
    }

    return children ? children : <Outlet />
};
import useAuth from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
export default ({ children }) => {
    const history = useHistory();
    const { user } = useAuth();
    if (!user) {
        history.push('/login')
        return
    }
    return children
}
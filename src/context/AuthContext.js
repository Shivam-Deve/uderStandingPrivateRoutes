import { createContext, useContext, useEffect, useReducer } from 'react'
import AuthReducer from './AuthReducer';
import { Login, Logout } from './AuthAction';
import { useHistory } from 'react-router-dom'

const INITIAL_STATE = {  // intitial state of who is logged in is fetched from local storage if exist
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
};

const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const history = useHistory();
    console.log(history)
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    const login = (user) => {
        dispatch(Login(user))
        history.push('/');
    }
    const logout = () => {
        dispatch(Logout())
        history.push('/login')
    }
    return (
        <AuthContext.Provider
            value={{
                ...state,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default () => useContext(AuthContext);
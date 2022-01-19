import {createContext, useState, useEffect} from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {Route, useNavigate} from "react-router";


const AuthContext = createContext(null)

export default AuthContext

export const AuthProvider = ({children}) => {

    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const navigateHome = () => {
        navigate('/')
    }

    const registerUser = async (e) => {

        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/register/',
            headers: {},
            data: {
                phone_number: e.phone_number_register.replace(/ /g, ''),
                first_name: e.first_name,
                email: e.email,
                password: e.password,
                is_active: true,

            }
        })
            .then((res) => {
                console.log(res.data)
                navigateHome()
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    }

    const loginUser = async (e) => {
        e.preventDefault()
        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/token/',
            headers: {},
            data: {
                phone_number: e.target.phone_number_login.value.replace(/ /g, ''),
                password: e.target.password.value
            }

        })
            .then((res) => {
                const data = res.data
                console.log(data)
                setAuthTokens(data)
                setUser(jwtDecode(data.access))
                localStorage.setItem('authTokens', JSON.stringify(data))
                navigateHome()
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });


    }
    const logoutUser = async () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigateHome()
    }

    let contextData = {
        authTokens: authTokens,
        setAuthTokens: setAuthTokens,
        user: user,
        setUser: setUser,
        loginUser: loginUser,
        registerUser: registerUser,
        logoutUser: logoutUser,
        loading: loading,
    }


    useEffect(() => {
        if (authTokens) {
            setUser(jwtDecode(authTokens.access))
        }
        setLoading(false)


    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
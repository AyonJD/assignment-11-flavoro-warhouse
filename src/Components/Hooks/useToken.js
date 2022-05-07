import axios from "axios";
import { useEffect, useState } from "react";

const useToken = user => {
    console.log(user, '555');
    const [token, setToken] = useState('')
    useEffect(() => {

        const getToken = async () => {

            const email = user?.email
            console.log({ email });
            if (email) {
                const { data } = await axios.post('http://localhost:5000/signin', { email })
                // const { data } = await axios.post('http://localhost:4000/signin', { email })
                console.log(data.getToken);
                setToken(data.getToken);
                localStorage.setItem('token', data.getToken);

            }

        }
        getToken()
    }, [user])
    return [token]
};

export default useToken;
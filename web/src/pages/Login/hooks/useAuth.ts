import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";

interface UserData {
    email: string;
    password: string;
}

const useAuthentication = () => {
    const auth = getAuth();
    const [data, setData] = useState<UserData>({ email: '', password: '' });
    const navigate = useNavigate();

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const handleEmailSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response: UserCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
            console.log(response);

            if (response.user.refreshToken) {
                localStorage.setItem('refreshToken', response.user.refreshToken);
                navigate('/tasks');
            }
        } catch (error: any) {
            alert(error.message);
        }
    };

    return {
        data,
        handleInput,
        handleEmailSignIn,
    };
};

export default useAuthentication;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

interface UserData {
    email: string;
    password: string;
}

const useRegistration = () => {
    const auth = getAuth();
    const [data, setData] = useState<UserData>({ email: '', password: '' });
    const navigate = useNavigate(); 

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const handleRegistration = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await createUserWithEmailAndPassword(auth, data.email, data.password);
            console.log(response);

            navigate('/login');
        } catch (error: any) {
            alert(error.message);
        }
    };

    return {
        data,
        handleInput,
        handleRegistration,
    };
};

export default useRegistration;

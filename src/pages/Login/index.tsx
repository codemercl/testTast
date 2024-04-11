import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Form, Layout, Sign } from '../../components';
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import useAuthentication from './hooks/useAuth';


export const Login: FC = () => {
    const { data, handleInput, handleEmailSignIn } = useAuthentication();

    return (
        <Layout>
            <Sign.Wrapper>

                <Sign.Group>
                    <Sign.Header>Log in to your account</Sign.Header>
                    <Sign.Text>
                        Don't have an account? <Link to="/sign-up">Sign up</Link>
                    </Sign.Text>
                </Sign.Group>

                <Form.Group onSubmit={handleEmailSignIn}>
                    <Form.Field icon={<MdOutlineMailOutline />} name="email" type="email" placeholder="Email" value={data.email} onChange={handleInput} />
                    <Form.Field icon={<RiLockPasswordLine />} name="password" type="password" placeholder="Password" value={data.password} onChange={handleInput} />
                    <Form.Button type="submit">Sign in</Form.Button>
                </Form.Group>

            </Sign.Wrapper>
        </Layout>
    );
};
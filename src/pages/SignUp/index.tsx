import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Form, Layout, Sign } from '../../components'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import useRegistration from './hooks/useRegistration';

export const SignUp: FC = () => {
    const { data, handleInput, handleRegistration } = useRegistration();

    return (
        <Layout>
            <Sign.Wrapper>
                <Sign.Group >
                    <Sign.Header>Create your account</Sign.Header>
                    <Sign.Text>
                        Do you have an account? <Link to="/login">Sign in</Link>
                    </Sign.Text>
                </Sign.Group>

                <Form.Group onSubmit={handleRegistration}>
                    <Form.Field icon={<MdOutlineMailOutline />} name="email" type="email" placeholder="Email" value={data.email} onChange={handleInput} />
                    <Form.Field icon={<RiLockPasswordLine />} name="password" type="password" placeholder="Password" value={data.password} onChange={handleInput} />
                    <Form.Button type="submit">Sign up</Form.Button>
                </Form.Group>

            </Sign.Wrapper>
        </Layout>
    )
}
import { Fragment } from 'react';

import { LoginForm } from 'features/LoginForm';

import {
    Title,
    Subtitle,
} from './styled';




export const Login: React.FC = () => {
    return (
        <Fragment>
            <Title>OCW™</Title>
            <Subtitle>Авторизация</Subtitle>
            <LoginForm />
        </Fragment>
    )
}

import {
    Form,
    Input,
    Button
} from './styled'


export const LoginForm: React.FC = () => {
    return (
        <Form>
            <Input placeholder='Логин' />
            <Input placeholder='Пароль' type='password'/>
            <Button>Войти</Button>
         </Form>
    )
}


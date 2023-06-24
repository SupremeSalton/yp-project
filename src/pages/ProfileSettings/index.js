import Handlebars from 'handlebars';

import { template } from './profile.tmpl';
import { Input } from '../../components/Input';
import { ButtonLogin } from '../../components/ButtonLogin';


export const ProfileSettings = () => Handlebars.compile(template)({
    email: Input('Your email', 'Email', 'email'),
    login: Input('Your login', 'Login', 'login'),
    name: Input('Your name', 'Name', 'first_name'),
    lastname: Input('Your lastname', 'Lastname', 'second_name'),
    displayname: Input('Your display name', 'Name in chat', 'display_name'),
    phone: Input('Your phone', 'Phone', 'phone'),
    singup: ButtonLogin('login__form','Accept', 'form__button-singin', 'accept'),                                           
    cancel: ButtonLogin(undefined, 'Cancel', 'form__singup-cancel', 'cancel'),
    change_pass: ButtonLogin(undefined, 'Change Password', 'form__button-singup', 'change_password')
})


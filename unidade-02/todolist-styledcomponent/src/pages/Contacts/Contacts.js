import React, { useState } from 'react';
import { Button } from '../../common/Button';
import { Input } from '../../common/Input';
import { InputContactsWrapper, InputContactList } from './styles/Contacts.style';

const Contacts = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [contactList, setContactList] = useState([]);

    const onChangeName = event => {
        setName(event.target.value);
    }

    const onChangePhone = event => {
        setPhone(event.target.value);
    }

    const onChangeEmail = event => {
        setEmail(event.target.value);
    }

    const onSaveContact = () => {
        let newContactList = [...contactList]
        newContactList.push({ name, phone, email });
        setContactList(newContactList);
        setName('');
        setPhone('');
        setEmail('');
    }

    return (
        <>
            <InputContactsWrapper>
                <Input
                    ariaLabel="Nome"
                    id="nome"
                    name="nome"
                    onChange={onChangeName}
                    type="text"
                    value={name}
                    hasEnter={false}
                    label="Nome"
                />
                <Input
                    ariaLabel="Phone"
                    id="phone"
                    name="phone"
                    onChange={onChangePhone}
                    type="text"
                    value={phone}
                    hasEnter={false}
                    label="Fone"
                />
                <Input
                    ariaLabel="Email"
                    id="email"
                    name="email"
                    onChange={onChangeEmail}
                    type="text"
                    value={email}
                    hasEnter={false}
                    label="Email"
                />
                <Button
                    onClick={onSaveContact}
                    text="Salvar"
                    disabled={!Boolean(name) && !Boolean(phone) && !Boolean(email)}
                />
            </InputContactsWrapper>
            <InputContactList>
                {contactList.map(contact => {
                    return (
                        <li>
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                            <p>{contact.phone}</p>
                        </li>
                    )
                })}
            </InputContactList>
        </>
    );
}

export default Contacts;
import React, { useState } from 'react';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';

const Contacts = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [contactList, setContactList] = useState([]);

    const onChangeName = (event) => {
        setName(event.target.value);
    }

    const onChangePhone = (event) => {
        setPhone(event.target.value);
    }

    const onChangeEmail = (event) => {
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
            <section>
                <Input
                    ariaLabel="Nome"
                    id="nome"
                    name="nome"
                    onChange={onChangeName}
                    type="text"
                    value={name}
                    hasEnter={false}
                />
                <Input
                    ariaLabel="Phone"
                    id="phone"
                    name="phone"
                    onChange={onChangePhone}
                    type="text"
                    value={phone}
                    hasEnter={false}
                />
                <Input
                    ariaLabel="Email"
                    id="email"
                    name="email"
                    onChange={onChangeEmail}
                    type="text"
                    value={email}
                    hasEnter={false}
                />
                <Button
                    onClick={onSaveContact}
                    text="Salvar"
                    disabled={!Boolean(name) && !Boolean(phone) && !Boolean(email)}
                />
            </section>
            <ul>
                {contactList.map(contact => {
                    return (
                        <li>
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                            <p>{contact.phone}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default Contacts;
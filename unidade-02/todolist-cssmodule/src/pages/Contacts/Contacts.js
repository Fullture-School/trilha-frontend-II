import React, { Component } from 'react';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';
import styles from './styles/Contacts.module.css';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            contactList: [],
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSaveContact = this.onSaveContact.bind(this);
    }

    onChangeName(event) {
        this.setState({ name: event.target.value });
    }

    onChangePhone(event){
        this.setState({ phone: event.target.value });
    }

    onChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    onSaveContact() {
        const { name, phone, email, contactList } = this.state;
        let newContactList = [...contactList]
        newContactList.push({ name, phone, email });
        this.setState({ contactList: newContactList });
        this.setState({ name: '' });
        this.setState({ phone: '' });
        this.setState({ email: '' });
    }

    render() {
        const { name, phone, email, contactList } = this.state;
        return (
            <>
                <section className={styles.inputContactsWrapper}>
                    <Input
                        ariaLabel="Nome"
                        id="nome"
                        name="nome"
                        onChange={this.onChangeName}
                        type="text"
                        value={name}
                        hasEnter={false}
                        label="Nome"
                    />
                    <Input
                        ariaLabel="Phone"
                        id="phone"
                        name="phone"
                        onChange={this.onChangePhone}
                        type="text"
                        value={phone}
                        hasEnter={false}
                        label="Fone"
                    />
                    <Input
                        ariaLabel="Email"
                        id="email"
                        name="email"
                        onChange={this.onChangeEmail}
                        type="text"
                        value={email}
                        hasEnter={false}
                        label="Email"
                    />
                    <Button
                        onClick={this.onSaveContact}
                        text="Salvar"
                        disabled={!Boolean(name) && !Boolean(phone) && !Boolean(email)}
                        className={styles.btnSave}
                    />
                </section>
                <ul className={styles.inputContactList}>
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
        )
    }

}

export default Contacts;
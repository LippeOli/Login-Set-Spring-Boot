import React, { useState } from 'react';
import './styles.css';

export function Login(){
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const userData = {
            name: name,
            email: email,
            password: password,
            phone: phone
        };
        const jsonData = JSON.stringify(userData);

        fetch('http://testes.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })

        //Verificar se fez o Submit
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Phone:', phone);
    };
    
    return(
        <div>
            <h1 className='title'>Set Login</h1>

            <form className='box' onSubmit={handleSubmit}>
                <input type='text' className="name" name='Name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='text' className="email" name='Email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type='password' className="password" name='Password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type='text' className="phone" name='Phone' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <button>Sing Up </button>
                </form>
        </div>
    )

}

export default Login;
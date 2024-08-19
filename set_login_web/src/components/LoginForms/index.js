import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'

const LoginForms = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = {
        email: email,
        senha: senha,
        telefone: telefone,
        nome: nome
      };

      const response = await axios.post('http://localhost:8080/usuarios', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Usuário cadastrado:', response.data);
      
      // Limpar campos do formulário após o envio bem-sucedido
      setNome('');
      setEmail('');
      setSenha('');
      setTelefone('');

    } catch (error) {
      if (error.response) {
        // O servidor respondeu com um status diferente de 2xx
        console.error('Erro ao cadastrar usuário:', error.response.data);
      } else if (error.request) {
        // A requisição foi feita, mas nenhuma resposta foi recebida
        console.error('Nenhuma resposta recebida:', error.request);
      } else {
        // Algo deu errado ao configurar a requisição
        console.error('Erro ao configurar a requisição:', error.message);
      }
    }
  };

  return (
    <div className='container'>
      <h1 className='title'>Cadastro de Usuário</h1>
      <form className='box' onSubmit={handleSubmit}>
      <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default LoginForms;

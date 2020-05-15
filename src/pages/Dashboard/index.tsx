import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/github-logo.svg';
import { Title, Form, Repositories } from './styles';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  const [repostories, setRepositories] = useState([]);
  const [newRepo, setNewRepo] = useState('');

  function handleAddRepository() {
    console.log(newRepo);
    api.get('');
  }

  return (
    <>
      <img src={logo} alt="GitHub explorer" />
      <Title>Explorando repositórios no GitHub</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/51834699?s=460&u=ae32ae15f06eaaf021cf278c4f1e9f0d629e1abd&v=4"
            alt=""
          />
          <div>
            <strong>Raphael M Carreiro</strong>
            <p>Description</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

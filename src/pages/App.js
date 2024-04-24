import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);
        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
        } else {
          console.log('Repositório já adicionado');
        }
      }
    } catch (error) {
      if (error.response) {
        console.error("Erro ao buscar o repositório: ", error.response.status);
        // Tratamento específico para 404
        if (error.response.status === 404) {
          console.log('Repositório não encontrado');
        } else {
          console.log('Erro ao buscar o repositório');
        }
      } else {
        console.log('Erro na conexão com o servidor');
      }
    }
  }

  const handleRemoveRepo = id => {
    setRepos(repos => repos.filter(repo => repo.id !== id));
    console.log('Removendo registro', id);
  }


  return (
    <Container className="fadeIn">
      <img  src={gitLogo} width={72} height={72} alt="github logo"/>
      <Input className="fadeIn" value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button className="fadeIn" onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo className="fadeIn" handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
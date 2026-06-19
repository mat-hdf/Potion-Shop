import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiStandingPotion } from 'react-icons/gi';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Historico from './historico'
import Admin from './admin'

function App() {

  const [currentScreen, setCurrentScreen] = useState('inicio')

  function render()
  {
    if (currentScreen === 'inicio') {
      return (
          <Container className='text'>
            <h1>Bem-vindo à Poções e Soluções</h1>
            <p>Desde 1867, iluminando as sombras do Beco da Última Saída com alquimia de excelência. Sob a cuidadosa curadoria de Annabelle Merigold, nossa loja oferece as mais finas preparações para as necessidades mais peculiares. Seja para restaurar suas energias ou encontrar o foco perfeito, a magia que você já conhece agora está a um clique de distância. Explore nosso catálogo e encontre a solução ideal, engarrafada especialmente para você.</p>
          </Container>
      )
    }

    if (currentScreen === 'historico') {
      return (
        <Historico />
      )
    }

    if (currentScreen === 'admin') {
      return (
        <Admin />
      )
    }
  }

  return (
    <>
      <Navbar expand="lg" id='header' className="w-100">
        <Container>
          <GiStandingPotion className='h1 icon' onClick={() => setCurrentScreen('inicio')} style={{ cursor: 'pointer' }}/>
          <Navbar.Brand className='fs-2 highlight' onClick={() => setCurrentScreen('inicio')} style={{ cursor: 'pointer' }}>Poções e Soluções</Navbar.Brand>
          <Nav.Link className='highlight' onClick={()=> setCurrentScreen('historico')} style={{ cursor: 'pointer' }}>Histórico</Nav.Link>
          <Nav.Link className='highlight' onClick={()=> setCurrentScreen('produtos')} style={{ cursor: 'pointer' }}>Produtos</Nav.Link>
          <Nav.Link className='highlight' onClick={()=> setCurrentScreen('admin')} style={{ cursor: 'pointer' }}>Admin</Nav.Link>
        </Container>
      </Navbar>

      <main className='content flex-grow-1 d-flex align-items-center justify-content-center'>
        <div className=''>
          { render() }
        </div>
      </main>

      <footer className='footer py-3 w-100 text-center'>
        <Container>
          <p className='mb-1 fs-6 highlight'>Beco da Última Saída, nº 9¾ — Alquimia de Excelência</p>
          <p className='small mb-0'>Contato: contato@pocoesesolucoes.com | Grimório de Suporte: +55 (11) 9999-8888</p>
        </Container>
      </footer>

    </>
  )
}


export default App

import './App.css'
import store from './assets/store.png'
import art from './assets/potion.png'
import { Container, Row, Col } from 'react-bootstrap'

function Historico()
{
    return (
        <Container className='text my-4'>
            <h1 className="mb-4">Nossa História</h1>
            <p className="mb-3">A Poções e Soluções surgiu em 1867, quando sua criadora, Annabelle Merigold, que até hoje cuida da loja, ficou fascinada pela busca e combinação de ingredientes raros e místicos, após passar um ano de sua vida se aventurando com sua prima, Triss Merigold.</p>
            <p className="mb-3">Ao longo dos anos, a loja que começou como um pequeno espaço repleto de frascos e rótulos se tornou referência no mundo de poções mágicas. Annabelle acreditava que cada cliente tinha um desafio único, e que toda dificuldade podia ser enfrentada com a combinação certa de ingredientes, conhecimento e atenção aos detalhes.</p>
            <p className="mb-4">Até hoje, a loja se mantém atrelada às suas raízes, e valoriza, acima de tudo, o conhecimento ancestral e a tradição na criação de poções, a mesma que vem conquistando tantos clientes ao longo de tantos anos.</p>

            <Row className="g-4 mt-2 justify-content-center">
                <Col md={6} className="d-flex justify-content-center">
                    <img src={store} alt="Fachada da loja" className="history-img img-fluid" />
                </Col>
                <Col md={6} className="d-flex justify-content-center">
                    <img src={art} alt="Arte das poções da loja" className="history-img img-fluid" />
                </Col>
            </Row>
        </Container>
    )
}

export default Historico;
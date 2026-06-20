import { Container } from 'react-bootstrap';
import './App.css'
import { useState, useEffect } from 'react'


function Products()
{

    const [products, setProducts] = useState([])

    useEffect(()=> {

        async function getInventory()
        {
            try {
                const response = await fetch('http://localhost:3000/potions', {
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json' 
                    },
                })
                const inventory = await response.json()

                setProducts(inventory)
            } catch (error) {
                console.log(error)
            }
        }
        getInventory()
    }, [])

    return(

        <Container>
            <h1 className='highlight mt-5 mb-5'>Nossas Poções</h1>

            {products.map(function (product) {
                return (
                        <Container className='text mb-4' key={product.id}>
                            <h2>{product.name}</h2>
                            
                            <div className='d-flex gap-4'>
                                <div className='flex-shrink-0'>
                                <img 
                                    src={product.img} 
                                    alt="Imagem da poção" 
                                    style={{ width: '120px', height: 'auto', objectFit: 'contain' }} 
                                />
                                </div>

                                <div className='d-flex flex-column justify-content-center'>
                                    <p>{product.description}</p>
                                    <div className='d-flex align-items-center gap-4 mt-2'>
                                        <span style={{ fontSize: '1.2rem', whiteSpace: 'nowrap' }}>
                                            Preço:{' '}
                                            <span style={{ color: '#FFD700', fontWeight: 'bold', textShadow: '1px 1px 2px #000' }}>
                                            {product.price} 🪙
                                            </span>
                                        </span>
                                
                                        <button className='buy-btn w-auto m-0'>
                                        Comprar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Container>
                )
            })}
        </Container>
    )
}

export default Products;
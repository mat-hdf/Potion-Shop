import { Container } from 'react-bootstrap'
import './App.css'
import { useState, useEffect } from 'react'

function Admin()
{
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')
    const [price, setPrice] = useState('')
    const [created, wasCreated] = useState('')
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
        },[created])

    async function handleSubmit(e)
    {
        e.preventDefault()

        const newPotion = {
            name,
            description,
            img,
            price
        }

        try {
            
            const response = await fetch('http://localhost:3000/potions',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Avisa o backend que estamos enviando JSON
                },
                body: JSON.stringify(newPotion)
            })

            if (response.ok)
            {
                const data = await response.json()
                console.log('Poção criada')
                wasCreated('Poção criada com sucesso!')
                setName('')
                setDescription('')
                setImg('')
                setPrice('')

                setTimeout(() => {
                    wasCreated('')
                }, 3000);
            }
            else
            {
                console.log("Erro ao criar a poção")
            }

        } catch (error) {
            console.log(error)
        }

    }


    async function deletar(id)
    {
        try {
            const res = await fetch(`http://localhost:3000/potions/${id}`, {
                method: 'DELETE'
            })

            if(res.status === 200 || res.ok)
                setProducts(produtosAtuais => produtosAtuais.filter(pocao => pocao.id !== id));
        } catch (error) {
            console.log(error)
        }    
    }


    return (
        <Container>
            <Container className="text my-4">
                <h1>Adicionar Nova Poção</h1>
                <form onSubmit={handleSubmit} className="admin-form mx-auto" style={{ maxWidth: '500px' }}>
                    <div className="mb-3 text-start">
                        <label htmlFor="name" className="form-label">Nome da nova poção:</label>
                        <input 
                            id="name" 
                            type="text" 
                            className="form-control admin-input"
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Ex: Elixir da Vitalidade"
                            required
                        />
                    </div>
                    
                    <div className="mb-3 text-start">
                        <label htmlFor="description" className="form-label">Descrição da nova poção:</label>
                        <textarea 
                            id="description" 
                            className="form-control admin-input"
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            placeholder="Descreva os efeitos da poção..."
                            rows="3"
                            required
                        />
                    </div>
                    
                    <div className="mb-3 text-start">
                        <label htmlFor="img" className="form-label">Imagem da nova poção (URL):</label>
                        <input 
                            id="img" 
                            type="text" 
                            className="form-control admin-input"
                            value={img} 
                            onChange={(e) => setImg(e.target.value)} 
                            placeholder="https://exemplo.com/imagem.png"
                            required
                        />
                    </div>
                    
                    <div className="mb-4 text-start">
                        <label htmlFor="price" className="form-label">Preço da nova poção:</label>
                        <input 
                            id="price" 
                            type="number" 
                            className="form-control admin-input"
                            value={price} 
                            onChange={(e) => setPrice(e.target.value)} 
                            placeholder="Ex: 50"
                            min="0"
                            step="0.01"
                            required
                        />
                    </div>
                    
                    <button type="submit" className="admin-btn">
                        Adicionar Poção
                    </button>
                    <p className='d-flex justify-content-center text-align-center mt-4' style={{ color: '#03E36F' }} >{created}</p>
                </form>
            </Container>

            <Container className='text'>
                <h1 className='highlight'>Inventário</h1>
                {products.map(function (product) {
                    return (
                        <Container className='inventory_card d-flex justify-content-between mb-4 gap-5 align-items-center'>
                            <h3 className='m-0'>{product.name}</h3>
                            <button className='delete-btn' onClick={() => deletar(product.id)}>Deletar</button>
                        </Container>
                    )
                })}
            </Container>
        </Container>
    )
}

export default Admin
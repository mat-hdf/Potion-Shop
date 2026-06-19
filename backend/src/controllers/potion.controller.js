import model from '../models/potion.model.js'

function serverError(e, response) {
    console.error('Erro no servidor:', e);
    return response.status(500).json({
        error: 'Erro interno do servidor',
        message: 'Ocorreu um problema.',
        erro: e.message
    });
}

async function findAll(request, response)
{
    try {
        const res = await model.findAll()

        if (res.length <= 0)
        {
            return response.status(404).send()
        }
        return response.status(200).json(res)

    } catch (e) {
        return serverError(e, response)
    }
}

async function findByPk (request, response)
{
    try {
        const res = await model.findByPk(request.params.id)

        if (res == null)
        {
            return response.status(404).send()
        }
        return response.status(200).json(res)

    } catch (e) {
        return serverError(e, response)
    }
}

async function deleteByPk(request, response)
{
        try {
        const res = await model.findByPk(request.params.id)

        if (res == null)
        {
            return response.status(404).send()
        }
        await res.destroy()
        return response.status(200).send()

    } catch (e) {
        return serverError(e, response)
    }
}

async function create(request, response)
{
    try {
        const res = await model.create({name: request.body.name, description: request.body.description, img: request.body.img, price: request.body.price})
        
        return response.status(201).json(res)

    } catch (e) {
        return serverError(e, response)   
    }
}

export default {findAll, findByPk, deleteByPk, create};
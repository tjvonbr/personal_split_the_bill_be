const router = require('express').Router()

const mealsDb = require('./mealsModel')

router.get('/', (req, res) => {
    mealsDb.get()
        .then( meals => {
            res.status(200).json(meals)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'oops server needs maintenance, contact @Trever or @Ryan' })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    if(!id) {
        res.status(400).json({ message: 'Invalid Id or Id required'})
    } else {
    mealsDb.getById(id)
        .then( meals => {
            res.status(200).json(meals)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'oops something happened' })
        })
    }
})

router.post('/', (req, res) => {
    const { restaurant, meal, total, comments } = req.body
    const post = req.body
    if( !restaurant || !meal || !total ) {
        res.status(400).json({ message: 'Must contain: restaurant, meal, total'})
    } else {
        mealsDb.insert(post, 'id')
        .then( meals => {
            res.status(200).json(meals)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'oops something happened' })
        })
    }
    
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { restaurant, meal, total, comments } = req.body
    const post = req.body
    if( !restaurant || !meal || !total || !comments ) {
        res.status(400).json({ message: 'Must contain: restaurant, meal, total'})
    } else {
        mealsDb.update(id, post)
            .then( meals => {
                res.status(201).json(meals)
            })
    }        
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    mealsDb.remove(id)
        .then(res => {res.status(204).json(user)})
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'oops something happened' })
        })
})

module.exports = router
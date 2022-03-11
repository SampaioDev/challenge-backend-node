import express from 'express'
import { getMovieByTitle, getMoviesByTitle, getMovieByID, get } from '../controllers/omdbController.js'

const router = express.Router()
router.get('/', get)
router.get('/movie/title/:title', getMovieByTitle)
router.get('/movies/title/:title', getMoviesByTitle)
router.get('/movie/id/:id', getMovieByID)

export default router
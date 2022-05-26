import express from 'express'
import thumbs from '../../middlewares/thumbs'
import clearThumbs from '../../middlewares/clearThumbs'
import clearThumbsResult from '../../middlewares/clearThumbsResult'

const thumbsRouter = express.Router()

thumbsRouter.get('/', thumbs, clearThumbs, clearThumbsResult)

export default thumbsRouter

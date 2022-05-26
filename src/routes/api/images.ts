import express from 'express'
import emptyQuery from '../../middlewares/emptyQuery'
import validateQuery from '../../middlewares/validateQuery'
import assureThumb from '../../middlewares/assureThumb'
import getThumb from '../../middlewares/getThumb'

const imagesRouter = express.Router()

imagesRouter.get('/', emptyQuery, validateQuery, assureThumb, getThumb)

export default imagesRouter

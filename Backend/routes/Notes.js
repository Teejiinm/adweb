import express from 'express'
import { CreateNotes, Delete, GetNotes, UpdateNotes } from '../controllers/Notes.js'
import { TokenVerfication } from '../middlewares/TokenVerfication.js'

const NotesRoutes=express.Router()

NotesRoutes.post('/createNotes',TokenVerfication,CreateNotes)
NotesRoutes.put('/updateNotes/:id',TokenVerfication,UpdateNotes)
NotesRoutes.delete('/deleteNotes/:id',TokenVerfication,Delete)
NotesRoutes.get('/getNotes',TokenVerfication,GetNotes)



export default NotesRoutes
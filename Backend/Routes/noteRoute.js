const router = require("express").Router();
let Note = require("../Models/user_note")

router.route('/').get((req,res)=>{
    Note.find()
       .then(notes => res.json(notes))
       .catch(err => res.status(400).json("Error: "+err));
})

router.route('/add').post((req,res)=>{
    const title = req.body.title;
    const content = req.body.content;
    const newNote = new Note({
        title,
        content
    })
    newNote.save()
        .then(()=>res.json("Note added"))
        .catch(err => res.status(400).json("Error: "+err));
})

router.route('/:id').delete((req,res)=>{
    Note.findByIdAndDelete(req.params.id)
        .then(()=>res.json("item deleted"))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;
const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

const { isAuthenticated } = require('../helpers/auth');

router.get('/notes/add', isAuthenticated, (req,res)=>{
	res.render('notes/new-note');
});

router.post('/notes/new-note', isAuthenticated, async (req, res) =>{
	const {title, description} = req.body;
	const errors = [];
	if(!title){
		errors.push({text:'Please write a TITLE'});
	}
	if(!description){
		errors.push({text:'Please write a DESCRIPTION'});
	}

	if(errors.length > 0){
		res.render('notes/new-note', {
			errors,
			title,
			description
		});
	}else{
		const newNote = new Note({title, description});
		newNote.user = req.user.id;
		await newNote.save(); //await sirve para que sea un proceso asincrono
		req.flash('success_msg', 'Note added successfully');
		res.redirect('/notes');
	}	
});

router.get('/notes/edit/:id', isAuthenticated, async (req,res)=>{
	const note = await Note.findById(req.params.id).lean();
		res.render('notes/edit-note', {note});
});

router.put('/notes/edit-note/:id', isAuthenticated, async (req, res) => {
	const {title, description} =  req.body;
	await Note.findByIdAndUpdate(req.params.id, {title, description}).lean();
	req.flash('success_msg', 'Note updated successfully');
	res.redirect('/notes');
});


router.get('/notes', isAuthenticated, async (req, res) => {
	const list_notes = await Note.find({user: req.user.id}).lean().sort({date: 'desc'}); // Lean para que permita acceder a los datos
	res.render('notes/all-notes', {list_notes});
});


router.delete('/notes/delete/:id', isAuthenticated, async (req, res) =>{
	await Note.findByIdAndDelete(req.params.id);
	req.flash('success_msg', 'Note delete successfully');
	res.redirect('/notes');
});

module.exports = router;
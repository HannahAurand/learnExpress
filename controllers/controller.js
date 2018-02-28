
const express = require('express')
const router = express.Router()

const RepoLink = require('../models/Model')

router.get('/', (req, res) => {  //be sure to call in the collection Controller
  Controller.find({}).then(controllers => {  //change controllers to whatever you pass as the reference parameter 
      res.render('views/index', {controllers})  //always pass in controllers in brackets for this one
    })
})
// when clicked to create something new, taked you to page to add new data
router.get("/new", (req, res) => {
    res.render("subDocuments/new")  //subDocuments should be renamed as an actual directory name relevant to info put in
})
//When data is input and submitted, creates the data in the database until the data is scrubbed
router.post("/", (req, res) => {
    if (req.body.title) {
    Controller.create({
        //takes the information from the specified tag and assigns it to the data object
        title: req.body.title,
        url: req.body.url,
        description: req.body.description,
        date: req.body.date
    }).then(controller => {
        res.redirect("/controllers") //controllers can be changed to whatever you pass as the parameter before {controllers}
    })
} else {
    //if incorrect, takes the user to the error page
    res.render('subDocuments/error')
}
})
// takes the user to the edit page
router.get('/edit/:id', (req, res) =>{
    Controller.findOne({ _id: req.params.id }).then(controller => {
        res.render('subDocuments/edit', controller) //
    })
})
//Shows all of the information for a specific datafile
router.get('/:id', (req, res) => {
    Controller.findOne({ _id: req.params.id }).then(controller => {
      res.render('subDocuments/show', controller)
    })
  })
//updates the specific information on the specified datafile
router.put('/:id', (req, res) => {
    RepoLink.findOneAndUpdate({ _id: req.params.id }, req.body).then(repolink => {
        res.redirect('/controllers')
    })
})
//deletes specific datafile
router.delete('/:id', (req, res) => {
        RepoLink.findOneAndRemove({_id: req.params.id}).then(repolink => {
            res.redirect("/controllers");
    })
})

module.exports = router

const express = require('express')
const router = express.Router()

const axios = require('axios');

// July 2023 - Upload additional evidence
// ----------------------------


//Single (as is)
// ----------------------------

//Do you want to upload more evidence?
router.post('/asis-upload', function(req,res){
    var attachment = req.session.data['attachment']
    if (attachment == "yes"){
        res.redirect('additional-evidence/single/upload-2')
    }
    else if (attachment == "no"){
        res.redirect('additional-evidence/single/subscription')
    }
    else {
        res.redirect('additional-evidence/single/upload-confirm-1')
    }

})

//single signpost
// ----------------------------
//Would you like to upload additional evidence or add extra information about gaps in the applicant's employment or working arrangements?
router.post('/single-signpost', function(req,res){
    var signpost = req.session.data['signpost']
    if (signpost == "yes"){
        res.redirect('additional-evidence/single-signpost/upload')
    }
    else if (signpost == "no"){
        res.redirect('additional-evidence/single-signpost/subscription')
    }
    else {
        res.redirect('additional-evidence/single-signpost/signpost')
    }

})

//Do you want to upload more evidence?
router.post('/single-upload', function(req,res){
    var attachment = req.session.data['attachment']
    if (attachment == "yes"){
        res.redirect('additional-evidence/single-signpost/upload-2')
    }
    else if (attachment == "no"){
        res.redirect('additional-evidence/single-signpost/subscription')
    }
    else {
        res.redirect('additional-evidence/single-signpost/upload-confirm-1')
    }

})

//Multi signpost
// ----------------------------
//Would you like to upload additional evidence or add extra information about gaps in the applicant's employment or working arrangements?
router.post('/multi-signpost', function(req,res){
    var signpost = req.session.data['signpost']
    if (signpost == "yes"){
        res.redirect('additional-evidence/multi-signpost/upload')
    }
    else if (signpost == "no"){
        res.redirect('additional-evidence/multi-signpost/subscription')
    }
    else {
        res.redirect('additional-evidence/multi-signpost/signpost')
    }

})

//Do you want to upload more evidence?
router.post('/multi-upload', function(req,res){
    var attachment = req.session.data['attachment']
    if (attachment == "yes"){
        res.redirect('additional-evidence/multi-signpost/upload-2')
    }
    else if (attachment == "no"){
        res.redirect('additional-evidence/multi-signpost/comments')
    }
    else {
        res.redirect('additional-evidence/multi-signpost/upload-confirm-1')
    }

})




module.exports = router
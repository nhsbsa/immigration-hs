const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Branching

// V1 ////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/ihs-question', function(req,res){
    var contacted = req.session.data['ihs-question']
    if (contacted == "yes"){
        res.redirect('/v1/ihs-payment-date')
    }
    else {
        res.redirect('/v1/not-entitled')
    }

})



router.post(/test/, function(req,res){
    var contacted = req.session.data['radio-button-route']
    if (contacted == "yes"){
        res.redirect('employment-details')
    }
    else {
        res.redirect('update-personal-details')
    }
})
//check for the employment details page
router.post(/employment-check/, function(req,res){
    var contacted = req.session.data['radio-button-route']
    if (contacted == "yes"){
        res.redirect('ihs-number')
    }
    else {
        res.redirect('update-employment-details')
    }
})

router.post(/eligibility/, function(req,res){
    var contacted = req.session.data['radio-button-route']
    if (contacted == "yes"){
        res.redirect('personal-details')
    }
    else {
        res.redirect('eligibility-kickout')
    }
})

router.post(/dependant-question/, function(req,res){
    var contacted = req.session.data['dependant-question']
    if (contacted == "yes"){
        res.redirect('dependant-details')
    }
    else {
        res.redirect('start-date')
    }
})

router.post(/checklist-evidence/, function(req,res){
    var contacted = req.session.data['average-time-v20']
    if (contacted == "yes"){
        res.redirect('dependant-question')
    }
    else {
        res.redirect('checklist-warning')
    }

})

router.post(/checkbox/, function(request, response) {

    var checked = request.session.data['waste']
    if (checked =="checked"){
        response.redirect("extra-information")
    } else {
        response.redirect("payslip-confirmation")
    }
})



module.exports = router;

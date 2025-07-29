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

router.post(/eligibility-check/, function(req,res){
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
        res.redirect('/v20/ideation/contract-upload-task')
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

router.post(/your-claim-period/, function(req,res){
    var contacted = req.session.data['evidence-check']
    if (contacted == "yes"){
        res.redirect('/portal/v1/dependant-question')
    }
    else {
        res.redirect('/portal/v1/checklist-warning')
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

router.post(/paid-ihs/, function(req,res){
    var contacted = req.session.data['ihs-paid']
    if (contacted == "yes"){
        res.redirect('applicant-visa-type')
    }
    else {
        res.redirect('not-entitled-rr')
    }
})

router.post(/visa-type/, function(req,res){
    var contacted = req.session.data['visa']
    if (contacted == "tier2"){
       res.redirect('ihs-tier2-healthcare')
    }
    else
        if (contacted == "tier5"){
            res.redirect('tier5-ko')
        }
        else
        {
            res.redirect('work-question')
        }
})

router.post(/health-professional/, function(req,res){
    var contacted = req.session.data['ihs-tier2-hc-v20']
    if (contacted == "yes"){
        res.redirect('ihs-tier2-ukvi')
    }
    else {
        res.redirect('work-question')
    }
})

router.post(/work-question/, function(req,res){
    var contacted = req.session.data['work-question-v20']
    if (contacted == "yes"){
        res.redirect('6-months')
    }
    else {
        res.redirect('not-entitled')
    }
})

router.post(/6-months/, function(req,res){
    var contacted = req.session.data['6-months-v20']
    if (contacted == "yes"){
        res.redirect('average-time')
    }
    else {
        res.redirect('not-entitled')
    }

})



router.post(/average-time/, function(req,res){
    var contacted = req.session.data['average-time-v20']
    if (contacted == "yes"){
        res.redirect('tier2-declaration')
    }
    else {
        res.redirect('not-entitled-rr')
    }

})

router.post(/bank-details-check/, function(req,res){
    var contacted = req.session.data['radio-button-route']
    if (contacted == "yes"){
        res.redirect('bank-details-2fa')
    }
    else {
        res.redirect('change-bank-details')
    }
})


router.post(/add-dependants/, function(req,res){
    var contacted = req.session.data['dependant-question']
    if (contacted == "yes"){
        res.redirect('dependant-details')
    }
    else {
        res.redirect('email-subscription')
    }

})


router.post(/dependant-details-portal/, function(req,res){
    var contacted = req.session.data['dependant-details-v20']
    if (contacted == "yes"){
        res.redirect('dependant-details-2')
    }
    else {
        res.redirect('dependant-added')
    }

})
module.exports = router;

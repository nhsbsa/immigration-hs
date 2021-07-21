const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Branching

// V11 ////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/doug-ihs-question-v11', function(req,res){
    var contacted = req.session.data['doug-ihs-question-v11']
    if (contacted == "yes"){
        res.redirect('/v11/applicant-visa-type')
    }
    else {
        res.redirect('/v11/not-entitled-rr')
    }
})

router.post('/ihs-tier2-hc-v11', function(req,res){
    var contacted = req.session.data['ihs-tier2-hc-v11']
    if (contacted == "yes"){
        res.redirect('/v11/ihs-tier2-ukvi')
    }
    else {
        res.redirect('/v11/work-question')
    }
})

router.post('/work-question-v11', function(req,res){
    var contacted = req.session.data['work-question-v11']
    if (contacted == "yes"){
        res.redirect('/v11/6-months')
    }
    else {
        res.redirect('/v11/not-entitled')
    }
})

router.post('/6-months-v11', function(req,res){
    var contacted = req.session.data['6-months-v11']
    if (contacted == "yes"){
        res.redirect('/v11/average-time')
    }
    else {
        res.redirect('/v11/not-entitled')
    }

})

router.post('/average-time-v11', function(req,res){
    var contacted = req.session.data['average-time-v11']
    if (contacted == "yes"){
        res.redirect('/v11/tier2-declaration')
    }
    else {
        res.redirect('/v11/not-entitled-rr')
    }

})

router.post('/dependant-question-v11', function(req,res){
    var contacted = req.session.data['dependant-question-v11']
    if (contacted == "yes"){
        res.redirect('/v11/dependant-details')
    }
    else {
        res.redirect('/v11/claim-dates-new')
    }

})

router.post('/dependant-details-v11', function(req,res){
    var contacted = req.session.data['dependant-details-v11']
    if (contacted == "yes"){
        res.redirect('/v11/dependant-details2')
    }
    else {
        res.redirect('/v11/claim-dates-new')
    }

})

router.post('/dependant-details-v11', function(req,res){
    var contacted = req.session.data['dependant-details-v11']
    if (contacted == "yes"){
        res.redirect('/v11/dependant-details2')
    }
    else {
        res.redirect('/v11/claim-dates-new')
    }

})

router.post('/subscription-question-v11', function(req,res){
    var contacted = req.session.data['subscription-question-v11']
    if (contacted == "yes"){
        res.redirect('/v11/non-nhs-path')
    }
    else {
        res.redirect('/v11/non-nhs-path')
    }

})

router.post('/non-nhs-path-another-job2-v11', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job2-v11']
    if (contacted == "yes"){
        res.redirect('/v11/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v11/attachments')
    }

})

router.post('/attachments-add-v11', function(req,res){
    var contacted = req.session.data['attachments-add-v11']
    if (contacted == "yes"){
        res.redirect('/v11/attachments2')
    }
    else {
        res.redirect('/v11/comments')
    }

})

router.post('/attachments-add2-v11', function(req,res){
    var contacted = req.session.data['attachments-add2-v11']
    if (contacted == "yes"){
        res.redirect('/v11/comments')
    }
    else {
        res.redirect('/v11/comments')
    }

})

router.post('/payslips-or-contract', function(req,res){
    var contacted = req.session.data['payslips-or-contract']
    if (contacted == "payslips"){
        res.redirect('/v11/upload-of-payslips')
    }
    else {
        res.redirect('/v11/upload-of-contract')
    }

})

router.post('/non-nhs-path-another-job-v11', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job-v11']
    if (contacted == "yes"){
        res.redirect('/v11/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v11/upload-of-evidence')
    }

})

router.post('/upload-of-evidence-add2-v11', function(req,res){
    var contacted = req.session.data['upload-of-evidence-add2-v11']
    if (contacted == "yes"){
        res.redirect('/v11/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v11/upload-of-evidence')
    }

})

 router.post('/doug-ihs-tier2-question-v11', function(req,res){
    var contacted = req.session.data['doug-ihs-tier2-question-v11']
    if (contacted == "tier2"){
       res.redirect('/v11/ihs-tier2-healthcare')
    }
    else
        if (contacted == "tier5"){
            res.redirect('/v11/tier5-ko')
        }
        else
        {
            res.redirect('/v11/work-question')
        }
})

router.post('/contracts-add-v11', function(req,res){
    var contacted = req.session.data['contracts-add-v11']
    if (contacted == "yes"){
        res.redirect('/v11/upload-of-contract2')
    }
    else {
        res.redirect('/v11/comments')
    }

})

router.post('/contracts-add2-v11', function(req,res){
    var contacted = req.session.data['contracts-add2-v11']
    if (contacted == "yes"){
        res.redirect('/v11/comments')
    }
    else {
        res.redirect('/v11/comments')
    }

})

// V12 ////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/doug-ihs-question-v12', function(req,res){
    var contacted = req.session.data['doug-ihs-question-v12']
    if (contacted == "yes"){
        res.redirect('/v12/applicant-visa-type')
    }
    else {
        res.redirect('/v12/not-entitled-rr')
    }
})

router.post('/ihs-tier2-hc-v12', function(req,res){
    var contacted = req.session.data['ihs-tier2-hc-v12']
    if (contacted == "yes"){
        res.redirect('/v12/ihs-tier2-ukvi')
    }
    else {
        res.redirect('/v12/work-question')
    }
})

router.post('/work-question-v12', function(req,res){
    var contacted = req.session.data['work-question-v12']
    if (contacted == "yes"){
        res.redirect('/v12/6-months')
    }
    else {
        res.redirect('/v12/not-entitled')
    }
})

router.post('/6-months-v12', function(req,res){
    var contacted = req.session.data['6-months-v12']
    if (contacted == "yes"){
        res.redirect('/v12/average-time')
    }
    else {
        res.redirect('/v12/not-entitled')
    }

})

router.post('/average-time-v12', function(req,res){
    var contacted = req.session.data['average-time-v12']
    if (contacted == "yes"){
        res.redirect('/v12/tier2-declaration')
    }
    else {
        res.redirect('/v12/not-entitled-rr')
    }

})

router.post('/dependant-question-v12', function(req,res){
    var contacted = req.session.data['dependant-question-v12']
    if (contacted == "yes"){
        res.redirect('/v12/dependant-details')
    }
    else {
        res.redirect('/v12/claim-dates-new')
    }

})

router.post('/dependant-details-v12', function(req,res){
    var contacted = req.session.data['dependant-details-v12']
    if (contacted == "yes"){
        res.redirect('/v12/dependant-details2')
    }
    else {
        res.redirect('/v12/claim-dates-new')
    }

})

router.post('/dependant-details-v12', function(req,res){
    var contacted = req.session.data['dependant-details-v11']
    if (contacted == "yes"){
        res.redirect('/v12/dependant-details2')
    }
    else {
        res.redirect('/v12/claim-dates-new')
    }

})

router.post('/subscription-question-v12', function(req,res){
    var contacted = req.session.data['subscription-question-v12']
    if (contacted == "yes"){
        res.redirect('/v12/non-nhs-path')
    }
    else {
        res.redirect('/v12/non-nhs-path')
    }

})

router.post('/non-nhs-path-another-job2-v12', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job2-v12']
    if (contacted == "yes"){
        res.redirect('/v12/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v12/attachments')
    }

})

router.post('/attachments-add-v12', function(req,res){
    var contacted = req.session.data['attachments-add-v12']
    if (contacted == "yes"){
        res.redirect('/v12/attachments2')
    }
    else {
        res.redirect('/v12/comments')
    }

})

router.post('/attachments-add2-v12', function(req,res){
    var contacted = req.session.data['attachments-add2-v12']
    if (contacted == "yes"){
        res.redirect('/v12/comments')
    }
    else {
        res.redirect('/v12/comments')
    }

})

router.post('/payslips-or-contract', function(req,res){
    var contacted = req.session.data['payslips-or-contract']
    if (contacted == "payslips"){
        res.redirect('/v12/upload-of-payslips')
    }
    else {
        res.redirect('/v12/upload-of-contract')
    }

})

router.post('/non-nhs-path-another-job-v12', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job-v12']
    if (contacted == "yes"){
        res.redirect('/v12/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v12/upload-of-evidence')
    }

})

router.post('/upload-of-evidence-add2-v12', function(req,res){
    var contacted = req.session.data['upload-of-evidence-add2-v12']
    if (contacted == "yes"){
        res.redirect('/v12/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v12/upload-of-evidence')
    }

})

 router.post('/doug-ihs-tier2-question-v12', function(req,res){
    var contacted = req.session.data['doug-ihs-tier2-question-v12']
    if (contacted == "tier2"){
       res.redirect('/v12/ihs-tier2-healthcare')
    }
    else
        if (contacted == "tier5"){
            res.redirect('/v12/tier5-ko')
        }
        else
        {
            res.redirect('/v12/work-question')
        }
})

router.post('/contracts-add-v12', function(req,res){
    var contacted = req.session.data['contracts-add-v12']
    if (contacted == "yes"){
        res.redirect('/v12/upload-of-contract2')
    }
    else {
        res.redirect('/v12/comments')
    }

})

router.post('/contracts-add2-v12', function(req,res){
    var contacted = req.session.data['contracts-add2-v11']
    if (contacted == "yes"){
        res.redirect('/v12/comments')
    }
    else {
        res.redirect('/v12/comments')
    }

})

module.exports = router;

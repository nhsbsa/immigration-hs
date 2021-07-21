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

router.post('/work-question', function(req,res){
    var contacted = req.session.data['work-question']
    if (contacted == "yes"){
        res.redirect('/v1/6-months')
    }
    else {
        res.redirect('/v1/not-entitled')
    }

})

router.post('/6-months', function(req,res){
    var contacted = req.session.data['6-months']
    if (contacted == "yes"){
        res.redirect('/v1/average-time')
    }
    else {
        res.redirect('/v1/not-entitled')
    }

})

router.post('/average-time', function(req,res){
    var contacted = req.session.data['average-time']
    if (contacted == "yes"){
        res.redirect('/v1/name')
    }
    else {
        res.redirect('/v1/not-entitled')
    }

})

router.post('/nhs-question', function(req,res){
    var contacted = req.session.data['nhs-question']
    if (contacted == "yes"){
        res.redirect('/v1/nhs-path')
    }
    else {
        res.redirect('/v1/non-nhs-path')
    }

})

router.post('/another-job', function(req,res){
    var contacted = req.session.data['another-job']
    if (contacted == "yes"){
        res.redirect('/v1/another-job')
    }
    else {
        res.redirect('/v1/telephone-number')
    }

})

router.post('/non-nhs-path-another-job', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job']
    if (contacted == "yes"){
        res.redirect('/v1/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v1/attachments')
    }

})

router.post('/attachment-decision', function(req,res){
    var contacted = req.session.data['attachment-decision']
    if (contacted == "yes"){
        res.redirect('/v1/attachments-add')
    }
    else {
        res.redirect('/v1/attachments')
    }

})

router.post('/attachments-add', function(req,res){
    var contacted = req.session.data['attachments-add']
    if (contacted == "yes"){
        res.redirect('/v1/attachments')
    }
    else {
        res.redirect('/v1/telephone-number')
    }

})

router.post('/dependant-question', function(req,res){
    var contacted = req.session.data['dependant-question']
    if (contacted == "yes"){
        res.redirect('/v1/dependant-details')
    }
    else {
        res.redirect('/v1/nhs-question')
    }

})

router.post('/dependant-details', function(req,res){
    var contacted = req.session.data['dependant-details']
    if (contacted == "yes"){
        res.redirect('/v1/dependant-details2')
    }
    else {
        res.redirect('/v1/nhs-question')
    }

})

router.post('/dependant-details2', function(req,res){
    var contacted = req.session.data['dependant-details2']
    if (contacted == "yes"){
        res.redirect('/v1/dependant-details2')
    }
    else {
        res.redirect('/v1/nhs-question')
    }

})

router.post('/main-or-dependant', function(req,res){
    var contacted = req.session.data['main-or-dependant']
    if (contacted == "yes"){
        res.redirect('/v1/dependant-details2')
    }
    else {
        res.redirect('/v1/nhs-question')
    }

})

//v2 ////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/ihs-question-v2', function(req,res){
    var contacted = req.session.data['ihs-question-v2']
    if (contacted == "yes"){
        res.redirect('/v2/work-question')
    }
    else {
        res.redirect('/v2/not-entitled')
    }

})

router.post('/work-question-v2', function(req,res){
    var contacted = req.session.data['work-question-v2']
    if (contacted == "yes"){
        res.redirect('/v2/6-months')
    }
    else {
        res.redirect('/v2/not-entitled')
    }

})

router.post('/6-months-v2', function(req,res){
    var contacted = req.session.data['6-months-v2']
    if (contacted == "yes"){
        res.redirect('/v2/average-time')
    }
    else {
        res.redirect('/v2/not-entitled')
    }

})

router.post('/average-time-v2', function(req,res){
    var contacted = req.session.data['average-time-v2']
    if (contacted == "yes"){
        res.redirect('/v2/name')
    }
    else {
        res.redirect('/v2/not-entitled')
    }

})

router.post('/nhs-question-v2', function(req,res){
    var contacted = req.session.data['nhs-question-v2']
    if (contacted == "yes"){
        res.redirect('/v2/nhs-path')
    }
    else {
        res.redirect('/v2/non-nhs-path')
    }

})

router.post('/another-job-v2', function(req,res){
    var contacted = req.session.data['another-job-v2']
    if (contacted == "yes"){
        res.redirect('/v2/another-job')
    }
    else {
        res.redirect('/v2/telephone-number')
    }

})

router.post('/non-nhs-path-another-job-v2', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job-v2']
    if (contacted == "yes"){
        res.redirect('/v2/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v2/attachments')
    }

})

router.post('/attachment-decision-v2', function(req,res){
    var contacted = req.session.data['attachment-decision-v2']
    if (contacted == "yes"){
        res.redirect('/v2/attachments-add')
    }
    else {
        res.redirect('/v2/attachments')
    }

})

router.post('/attachments-add-v2', function(req,res){
    var contacted = req.session.data['attachments-add-v2']
    if (contacted == "yes"){
        res.redirect('/v2/attachments2')
    }
    else {
        res.redirect('/v2/check-your-answers-nhs-path')
    }

})

router.post('/dependant-question-v2', function(req,res){
    var contacted = req.session.data['dependant-question-v2']
    if (contacted == "yes"){
        res.redirect('/v2/dependant-details')
    }
    else {
        res.redirect('/v2/non-nhs-path')
    }

})

router.post('/dependant-details-v2', function(req,res){
    var contacted = req.session.data['dependant-details-v2']
    if (contacted == "yes"){
        res.redirect('/v2/dependant-details2')
    }
    else {
        res.redirect('/v2/non-nhs-path')
    }

})

router.post('/dependant-details2-v2', function(req,res){
    var contacted = req.session.data['dependant-details2-v2']
    if (contacted == "yes"){
        res.redirect('/v2/dependant-details2')
    }
    else {
        res.redirect('/v2/non-nhs-path')
    }

})

router.post('/main-or-dependant-v2', function(req,res){
    var contacted = req.session.data['main-or-dependant-v2']
    if (contacted == "yes"){
        res.redirect('/v2/dependant-details2')
    }
    else {
        res.redirect('/v2/nhs-question')
    }

})

//v3 ////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/ihs-question-v3', function(req,res){
    var contacted = req.session.data['ihs-question-v3']
    if (contacted == "yes"){
        res.redirect('/v3/work-question')
    }
    else {
        res.redirect('/v3/not-entitled')
    }

})

router.post('/work-question-v3', function(req,res){
    var contacted = req.session.data['work-question-v3']
    if (contacted == "yes"){
        res.redirect('/v3/non-nhs-path')
    }
    else {
        res.redirect('/v3/not-entitled')
    }

})

router.post('/6-months-v3', function(req,res){
    var contacted = req.session.data['6-months-v3']
    if (contacted == "yes"){
        res.redirect('/v3/average-time')
    }
    else {
        res.redirect('/v3/not-entitled')
    }

})

router.post('/average-time-v3', function(req,res){
    var contacted = req.session.data['average-time-v3']
    if (contacted == "yes"){
        res.redirect('/v3/declaration')
    }
    else {
        res.redirect('/v3/not-entitled')
    }

})

router.post('/nhs-question-v3', function(req,res){
    var contacted = req.session.data['nhs-question-v3']
    if (contacted == "yes"){
        res.redirect('/v3/nhs-path')
    }
    else {
        res.redirect('/v3/non-nhs-path')
    }

})

router.post('/another-job-v3', function(req,res){
    var contacted = req.session.data['another-job-v3']
    if (contacted == "yes"){
        res.redirect('/v3/another-job')
    }
    else {
        res.redirect('/v3/check-your-answers-nhs-path')
    }

})

router.post('/non-nhs-path-another-job-v3', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job-v3']
    if (contacted == "yes"){
        res.redirect('/v3/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v3/check-your-answers-nhs-path')
    }

})

router.post('/attachment-decision-v3', function(req,res){
    var contacted = req.session.data['attachment-decision-v3']
    if (contacted == "yes"){
        res.redirect('/v3/attachments-add')
    }
    else {
        res.redirect('/v3/attachments')
    }

})

router.post('/attachments-add-v3', function(req,res){
    var contacted = req.session.data['attachments-add-v3']
    if (contacted == "yes"){
        res.redirect('/v3/attachments2')
    }
    else {
        res.redirect('/v3/check-your-answers-nhs-path')
    }

})

router.post('/dependant-question-v3', function(req,res){
    var contacted = req.session.data['dependant-question-v3']
    if (contacted == "yes"){
        res.redirect('/v3/dependant-details')
    }
    else {
        res.redirect('/v3/non-nhs-path')
    }

})

router.post('/dependant-details-v3', function(req,res){
    var contacted = req.session.data['dependant-details-v3']
    if (contacted == "yes"){
        res.redirect('/v3/dependant-details2')
    }
    else {
        res.redirect('/v3/non-nhs-path')
    }

})

router.post('/dependant-details2-v3', function(req,res){
    var contacted = req.session.data['dependant-details2-v3']
    if (contacted == "yes"){
        res.redirect('/v3/dependant-details2')
    }
    else {
        res.redirect('/v3/non-nhs-path')
    }

})

router.post('/main-or-dependant-v3', function(req,res){
    var contacted = req.session.data['main-or-dependant-v3']
    if (contacted == "yes"){
        res.redirect('/v3/dependant-details2')
    }
    else {
        res.redirect('/v3/nhs-question')
    }

})

//v4 ////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/ihs-question-v4', function(req,res){
    var contacted = req.session.data['ihs-question-v4']
    if (contacted == "yes"){
        res.redirect('/v4/work-question')
    }
    else {
        res.redirect('/v4/not-entitled')
    }

})

router.post('/work-question-v4', function(req,res){
    var contacted = req.session.data['work-question-v4']
    if (contacted == "yes"){
        res.redirect('/v4/6-months')
    }
    else {
        res.redirect('/v4/not-entitled')
    }

})

router.post('/6-months-v4', function(req,res){
    var contacted = req.session.data['6-months-v4']
    if (contacted == "yes"){
        res.redirect('/v4/average-time')
    }
    else {
        res.redirect('/v4/not-entitled')
    }

})

router.post('/average-time-v4', function(req,res){
    var contacted = req.session.data['average-time-v4']
    if (contacted == "yes"){
        res.redirect('/v4/declaration')
    }
    else {
        res.redirect('/v4/not-entitled')
    }

})

router.post('/another-job-v4', function(req,res){
    var contacted = req.session.data['another-job-v4']
    if (contacted == "yes"){
        res.redirect('/v4/another-job')
    }
    else {
        res.redirect('/v4/telephone-number')
    }

})

router.post('/non-nhs-path-another-job-v4', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job-v4']
    if (contacted == "yes"){
        res.redirect('/v4/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v4/attachments')
    }

})

router.post('/add-employer-v4', function(req,res){
    var contacted = req.session.data['add-employer-v4']
    if (contacted == "yes"){
        res.redirect('/v4/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v4/attachments')
    }

})

router.post('/non-nhs-path-another-job2-v4', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job2-v4']
    if (contacted == "yes"){
        res.redirect('/v4/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v4/attachments')
    }

})

router.post('/attachment-decision-v4', function(req,res){
    var contacted = req.session.data['attachment-decision-v4']
    if (contacted == "yes"){
        res.redirect('/v4/attachments-add')
    }
    else {
        res.redirect('/v4/attachments')
    }

})

router.post('/attachments-add-v4', function(req,res){
    var contacted = req.session.data['attachments-add-v4']
    if (contacted == "yes"){
        res.redirect('/v4/attachments2')
    }
    else {
        res.redirect('/v4/check-your-answers-nhs-path')
    }

})

router.post('/dependant-question-v4', function(req,res){
    var contacted = req.session.data['dependant-question-v4']
    if (contacted == "yes"){
        res.redirect('/v4/dependant-details')
    }
    else {
        res.redirect('/v4/claim-dates')
    }

})

router.post('/dependant-details-v4', function(req,res){
    var contacted = req.session.data['dependant-details-v4']
    if (contacted == "yes"){
        res.redirect('/v4/dependant-details2')
    }
    else {
        res.redirect('/v4/claim-dates')
    }

})

router.post('/dependant-details2-v4', function(req,res){
    var contacted = req.session.data['dependant-details2-v4']
    if (contacted == "yes"){
        res.redirect('/v4/dependant-details2')
    }
    else {
        res.redirect('/v4/claim-dates')
    }

})

router.post('/attachments-add-reapply', function(req,res){
    var contacted = req.session.data['attachments-add-reapply']
    if (contacted == "yes"){
        res.redirect('/reapply/attachments2-130')
    }
    else {
        res.redirect('/reapply/check-your-answers-130')
    }
})

//v5 ////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/ihs-question-v5', function(req,res){
    var contacted = req.session.data['ihs-question-v5']
    if (contacted == "yes"){
        res.redirect('/v5/work-question')
    }
    else {
        res.redirect('/v5/not-entitled')
    }

})

router.post('/work-question-v5', function(req,res){
    var contacted = req.session.data['work-question-v5']
    if (contacted == "yes"){
        res.redirect('/v5/6-months')
    }
    else {
        res.redirect('/v5/not-entitled')
    }

})

router.post('/6-months-v5', function(req,res){
    var contacted = req.session.data['6-months-v5']
    if (contacted == "yes"){
        res.redirect('/v5/average-time')
    }
    else {
        res.redirect('/v5/not-entitled')
    }

})

router.post('/average-time-v5', function(req,res){
    var contacted = req.session.data['average-time-v5']
    if (contacted == "yes"){
        res.redirect('/v5/name')
    }
    else {
        res.redirect('/v5/not-entitled')
    }

})

router.post('/another-job-v5', function(req,res){
    var contacted = req.session.data['another-job-v5']
    if (contacted == "yes"){
        res.redirect('/v5/another-job')
    }
    else {
        res.redirect('/v5/telephone-number')
    }

})

router.post('/non-nhs-path-another-job-v5', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job-v5']
    if (contacted == "yes"){
        res.redirect('/v5/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v5/attachments')
    }

})

router.post('/add-employer-v5', function(req,res){
    var contacted = req.session.data['add-employer-v5']
    if (contacted == "yes"){
        res.redirect('/v5/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v5/attachments')
    }

})

router.post('/non-nhs-path-another-job2-v5', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job2-v5']
    if (contacted == "yes"){
        res.redirect('/v5/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v5/attachments')
    }

})

router.post('/attachment-decision-v5', function(req,res){
    var contacted = req.session.data['attachment-decision-v5']
    if (contacted == "yes"){
        res.redirect('/v5/attachments-add')
    }
    else {
        res.redirect('/v5/attachments')
    }

})

router.post('/attachments-add-v5', function(req,res){
    var contacted = req.session.data['attachments-add-v5']
    if (contacted == "yes"){
        res.redirect('/v5/attachments2')
    }
    else {
        res.redirect('/v5/comments')
    }

})

router.post('/attachments-add-delete-v5', function(req,res){
    var contacted = req.session.data['attachments-add-delete-v5']
    if (contacted == "yes"){
        res.redirect('/v5/attachments2')
    }
    else {
        res.redirect('/v5/comments')
    }

})

router.post('/dependant-question-v5', function(req,res){
    var contacted = req.session.data['dependant-question-v5']
    if (contacted == "yes"){
        res.redirect('/v5/dependant-details')
    }
    else {
        res.redirect('/v5/claim-dates')
    }

})

router.post('/dependant-details-v5', function(req,res){
    var contacted = req.session.data['dependant-details-v5']
    if (contacted == "yes"){
        res.redirect('/v5/dependant-details2')
    }
    else {
        res.redirect('/v5/claim-dates')
    }

})

router.post('/dependant-details2-v5', function(req,res){
    var contacted = req.session.data['dependant-details2-v5']
    if (contacted == "yes"){
        res.redirect('/v5/dependant-details2')
    }
    else {
        res.redirect('/v5/claim-dates')
    }

})

//v6 ////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/ihs-question-v6', function(req,res){
    var contacted = req.session.data['ihs-question-v6']
    if (contacted == "yes"){
        res.redirect('/v6/work-question')
    }
    else {
        res.redirect('/v6/not-entitled')
    }

})

router.post('/work-question-v6', function(req,res){
    var contacted = req.session.data['work-question-v6']
    if (contacted == "yes"){
        res.redirect('/v6/6-months')
    }
    else {
        res.redirect('/v6/not-entitled')
    }

})

router.post('/6-months-v6', function(req,res){
    var contacted = req.session.data['6-months-v6']
    if (contacted == "yes"){
        res.redirect('/v6/average-time')
    }
    else {
        res.redirect('/v6/not-entitled')
    }

})

router.post('/average-time-v6', function(req,res){
    var contacted = req.session.data['average-time-v6']
    if (contacted == "yes"){
        res.redirect('/v6/name')
    }
    else {
        res.redirect('/v6/not-entitled')
    }

})

router.post('/another-job-v6', function(req,res){
    var contacted = req.session.data['another-job-v6']
    if (contacted == "yes"){
        res.redirect('/v6/another-job')
    }
    else {
        res.redirect('/v6/telephone-number')
    }

})

router.post('/non-nhs-path-another-job-v6', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job-v6']
    if (contacted == "yes"){
        res.redirect('/v6/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v6/attachments')
    }

})

router.post('/add-employer-v6', function(req,res){
    var contacted = req.session.data['add-employer-v6']
    if (contacted == "yes"){
        res.redirect('/v6/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v6/attachments')
    }

})

router.post('/non-nhs-path-another-job2-v6', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job2-v6']
    if (contacted == "yes"){
        res.redirect('/v6/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v6/attachments')
    }

})

router.post('/attachment-decision-v6', function(req,res){
    var contacted = req.session.data['attachment-decision-v6']
    if (contacted == "yes"){
        res.redirect('/v6/attachments-add')
    }
    else {
        res.redirect('/v6/attachments')
    }

})

router.post('/attachments-add-v6', function(req,res){
    var contacted = req.session.data['attachments-add-v6']
    if (contacted == "yes"){
        res.redirect('/v6/attachments2')
    }
    else {
        res.redirect('/v6/comments')
    }

})

router.post('/attachments-add-delete-v6', function(req,res){
    var contacted = req.session.data['attachments-add-delete-v6']
    if (contacted == "yes"){
        res.redirect('/v6/attachments2')
    }
    else {
        res.redirect('/v6/comments')
    }

})

router.post('/dependant-question-v6', function(req,res){
    var contacted = req.session.data['dependant-question-v6']
    if (contacted == "yes"){
        res.redirect('/v6/dependant-details')
    }
    else {
        res.redirect('/v6/claim-dates')
    }

})

router.post('/dependant-details-v6', function(req,res){
    var contacted = req.session.data['dependant-details-v6']
    if (contacted == "yes"){
        res.redirect('/v6/dependant-details2')
    }
    else {
        res.redirect('/v6/claim-dates')
    }

})

router.post('/dependant-details2-v6', function(req,res){
    var contacted = req.session.data['dependant-details2-v6']
    if (contacted == "yes"){
        res.redirect('/v6/dependant-details2')
    }
    else {
        res.redirect('/v6/claim-dates')
    }

})

//mvp

router.post('/ihs-question-mvp', function(req,res){
    var contacted = req.session.data['ihs-question-mvp']
    if (contacted == "yes"){
        res.redirect('/mvp/work-question')
    }
    else {
        res.redirect('/mvp/not-entitled')
    }

})

router.post('/work-question-mvp', function(req,res){
    var contacted = req.session.data['work-question-mvp']
    if (contacted == "yes"){
        res.redirect('/mvp/6-months')
    }
    else {
        res.redirect('/mvp/not-entitled')
    }

})

router.post('/6-months-mvp', function(req,res){
    var contacted = req.session.data['6-months-mvp']
    if (contacted == "yes"){
        res.redirect('/mvp/average-time')
    }
    else {
        res.redirect('/mvp/not-entitled')
    }

})

router.post('/average-time-mvp', function(req,res){
    var contacted = req.session.data['average-time-mvp']
    if (contacted == "yes"){
        res.redirect('/mvp/name')
    }
    else {
        res.redirect('/mvp/not-entitled')
    }

})

router.post('/another-job-mvp', function(req,res){
    var contacted = req.session.data['another-job-mvp']
    if (contacted == "yes"){
        res.redirect('/mvp/another-job')
    }
    else {
        res.redirect('/mvp/telephone-number')
    }

})

router.post('/non-nhs-path-another-job-mvp', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job-mvp']
    if (contacted == "yes"){
        res.redirect('/mvp/non-nhs-path-another-job')
    }
    else {
        res.redirect('/mvp/attachments')
    }

})

router.post('/add-employer-mvp', function(req,res){
    var contacted = req.session.data['add-employer-mvp']
    if (contacted == "yes"){
        res.redirect('/mvp/non-nhs-path-another-job')
    }
    else {
        res.redirect('/mvp/attachments')
    }

})

router.post('/non-nhs-path-another-job2-mvp', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job2-mvp']
    if (contacted == "yes"){
        res.redirect('/mvp/non-nhs-path-another-job')
    }
    else {
        res.redirect('/mvp/attachments')
    }

})

router.post('/attachment-decision-mvp', function(req,res){
    var contacted = req.session.data['attachment-decision-mvp']
    if (contacted == "yes"){
        res.redirect('/mvp/attachments-add')
    }
    else {
        res.redirect('/mvp/attachments')
    }

})

router.post('/attachments-add-mvp', function(req,res){
    var contacted = req.session.data['attachments-add-mvp']
    if (contacted == "yes"){
        res.redirect('/mvp/attachments2')
    }
    else {
        res.redirect('/mvp/comments')
    }

})

router.post('/attachments-add-delete-mvp', function(req,res){
    var contacted = req.session.data['attachments-add-delete-mvp']
    if (contacted == "yes"){
        res.redirect('/mvp/attachments2')
    }
    else {
        res.redirect('/mvp/comments')
    }

})

router.post('/dependant-question-mvp', function(req,res){
    var contacted = req.session.data['dependant-question-mvp']
    if (contacted == "yes"){
        res.redirect('/mvp/dependant-details')
    }
    else {
        res.redirect('/mvp/claim-dates')
    }

})

router.post('/dependant-details-mvp', function(req,res){
    var contacted = req.session.data['dependant-details-mvp']
    if (contacted == "yes"){
        res.redirect('/mvp/dependant-details2')
    }
    else {
        res.redirect('/mvp/claim-dates')
    }

})

router.post('/dependant-details2-mvp', function(req,res){
    var contacted = req.session.data['dependant-details2-mvp']
    if (contacted == "yes"){
        res.redirect('/mvp/dependant-details2')
    }
    else {
        res.redirect('/mvp/claim-dates')
    }

})

router.post('/subscription-question-mvp', function(req,res){
    var contacted = req.session.data['subscription-question-mvp']
    if (contacted == "yes"){
        res.redirect('/mvp/dependant-question')
    }
    else {
        res.redirect('/mvp/dependant-question')
    }

})

//v7 ////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/ihs-question-v7', function(req,res){
    var contacted = req.session.data['ihs-question-v7']
    if (contacted == "yes"){
        res.redirect('/v7/ihs-tier2-question')
    }
    else {
        res.redirect('/v7/not-entitled-rr')
    }

})

router.post('/work-question-v7', function(req,res){
    var contacted = req.session.data['work-question-v7']
    if (contacted == "yes"){
        res.redirect('/v7/6-months')
    }
    else {
        res.redirect('/v7/not-entitled')
    }

})

router.post('/6-months-v7', function(req,res){
    var contacted = req.session.data['6-months-v7']
    if (contacted == "yes"){
        res.redirect('/v7/average-time')
    }
    else {
        res.redirect('/v7/not-entitled')
    }

})

router.post('/average-time-v7', function(req,res){
    var contacted = req.session.data['average-time-v7']
    if (contacted == "yes"){
        res.redirect('/v7/tier2-declaration')
    }
    else {
        res.redirect('/v7/not-entitled-rr')
    }

})

router.post('/another-job-v7', function(req,res){
    var contacted = req.session.data['another-job-v7']
    if (contacted == "yes"){
        res.redirect('/v7/another-job')
    }
    else {
        res.redirect('/v7/telephone-number')
    }

})

router.post('/non-nhs-path-another-job-v7', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job-v7']
    if (contacted == "yes"){
        res.redirect('/v7/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v7/attachments')
    }

})

router.post('/add-employer-v7', function(req,res){
    var contacted = req.session.data['add-employer-v7']
    if (contacted == "yes"){
        res.redirect('/v7/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v7/attachments')
    }

})

router.post('/non-nhs-path-another-job2-v7', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job2-v7']
    if (contacted == "yes"){
        res.redirect('/v7/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v7/attachments')
    }

})

router.post('/attachment-decision-v7', function(req,res){
    var contacted = req.session.data['attachment-decision-v7']
    if (contacted == "yes"){
        res.redirect('/v7/attachments-add')
    }
    else {
        res.redirect('/v7/attachments')
    }

})

router.post('/attachments-add-v7', function(req,res){
    var contacted = req.session.data['attachments-add-v7']
    if (contacted == "yes"){
        res.redirect('/v7/attachments2')
    }
    else {
        res.redirect('/v7/comments')
    }

})

router.post('/attachments-add-delete-v7', function(req,res){
    var contacted = req.session.data['attachments-add-delete-v7']
    if (contacted == "yes"){
        res.redirect('/v7/attachments2')
    }
    else {
        res.redirect('/v7/comments')
    }

})

router.post('/dependant-question-v7', function(req,res){
    var contacted = req.session.data['dependant-question-v7']
    if (contacted == "yes"){
        res.redirect('/v7/dependant-details')
    }
    else {
        res.redirect('/v7/claim-dates')
    }

})

router.post('/dependant-details-v7', function(req,res){
    var contacted = req.session.data['dependant-details-v7']
    if (contacted == "yes"){
        res.redirect('/v7/dependant-details2')
    }
    else {
        res.redirect('/v7/claim-dates')
    }

})
//reapply

router.post('/ihs-tier2-question-reapply', function(req,res){
    var contacted = req.session.data['ihs-tier2-question-reapply']
    if (contacted == "yes"){
        res.redirect('/reapply/ihs-tier2-healthcare')
    }
    else {
        res.redirect('/reapply/ihs-number-130')
    }
})

router.post('/ihs-tier2-question-v7', function(req,res){
    var contacted = req.session.data['ihs-tier2-question-v7']
    if (contacted == "yes"){
        res.redirect('/v7/ihs-tier2-healthcare')
    }
    else {
        res.redirect('/v7/work-question')
    }
})

//ko
router.post('/ihs-tier2-hc-v7', function(req,res){
    var contacted = req.session.data['ihs-tier2-hc-v7']
    if (contacted == "yes"){
        res.redirect('/v7/ihs-tier2-ukvi')
    }
    else {
        res.redirect('/v7/work-question')
    }
})

//ko

router.post('/dependant-details2-v7', function(req,res){
    var contacted = req.session.data['dependant-details2-v7']
    if (contacted == "yes"){
        res.redirect('/v7/dependant-details2')
    }
    else {
        res.redirect('/v7/claim-dates')
    }
})

// Upload Missing Evidence - V7

router.post('/ihs-tier2-question-V7', function(req,res){
    var contacted = req.session.data['ihs-tier2-question-V7']
    if (contacted == "yes"){
        res.redirect('/v7/ihs-tier2-healthcare')
    }
    else {
        res.redirect('/v7/ihs-number-130')
    }
})

router.post('/doug', function(req,res){
    var contacted = req.session.data['doug']
    if (contacted == "yes"){
        res.redirect('/v7/attachments2-130')
    }
    else {
        res.redirect('/v7/check-your-answers-130')
    }
})

// V8 ////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/doug-ihs-question-v8', function(req,res){
    var contacted = req.session.data['doug-ihs-question-v8']
    if (contacted == "yes"){
        res.redirect('/v8/ihs-tier2-question')
    }
    else {
        res.redirect('/v8/not-entitled-rr')
    }
})

router.post('/doug-ihs-tier2-question-v8', function(req,res){
    var contacted = req.session.data['doug-ihs-tier2-question-v8']
    if (contacted == "yes"){
        res.redirect('/v8/ihs-tier2-healthcare')
    }
    else {
        res.redirect('/v8/work-question')
    }
})

router.post('/ihs-tier2-hc-v8', function(req,res){
    var contacted = req.session.data['ihs-tier2-hc-v8']
    if (contacted == "yes"){
        res.redirect('/v8/ihs-tier2-ukvi')
    }
    else {
        res.redirect('/v8/work-question')
    }
})

router.post('/work-question-v8', function(req,res){
    var contacted = req.session.data['work-question-v8']
    if (contacted == "yes"){
        res.redirect('/v8/6-months')
    }
    else {
        res.redirect('/v8/not-entitled')
    }
})

router.post('/6-months-v8', function(req,res){
    var contacted = req.session.data['6-months-v8']
    if (contacted == "yes"){
        res.redirect('/v8/average-time')
    }
    else {
        res.redirect('/v8/not-entitled')
    }

})

router.post('/average-time-v8', function(req,res){
    var contacted = req.session.data['average-time-v8']
    if (contacted == "yes"){
        res.redirect('/v8/tier2-declaration')
    }
    else {
        res.redirect('/v8/not-entitled-rr')
    }

})

router.post('/subscription-question-v8', function(req,res){
    var contacted = req.session.data['subscription-question-v8']
    if (contacted == "yes"){
        res.redirect('/v8/non-nhs-path')
    }
    else {
        res.redirect('/v8/non-nhs-path')
    }

})

router.post('/non-nhs-path-another-job-v8', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job-v8']
    if (contacted == "yes"){
        res.redirect('/v8/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v8/attachments')
    }

})

    router.post('/non-nhs-path-another-job2-v8', function(req,res){
        var contacted = req.session.data['non-nhs-path-another-job2-v8']
        if (contacted == "yes"){
            res.redirect('/v8/non-nhs-path-another-job')
        }
        else {
            res.redirect('/v8/attachments')
        }

})

router.post('/attachments-add-v8', function(req,res){
    var contacted = req.session.data['attachments-add-v8']
    if (contacted == "yes"){
        res.redirect('/v8/attachments2')
    }
    else {
        res.redirect('/v8/comments')
    }

})

router.post('/attachments-add2-v8', function(req,res){
    var contacted = req.session.data['attachments-add2-v8']
    if (contacted == "yes"){
        res.redirect('/v8/attachments3')
    }
    else {
        res.redirect('/v8/comments')
    }

})

router.post('/attachments-add3-v8', function(req,res){
    var contacted = req.session.data['attachments-add3-v8']
    if (contacted == "yes"){
        res.redirect('/v8/attachments4')
    }
    else {
        res.redirect('/v8/comments')
    }

})

router.post('/attachments-add4-v8', function(req,res){
    var contacted = req.session.data['attachments-add4-v8']
    if (contacted == "yes"){
        res.redirect('/v8/attachments5')
    }
    else {
        res.redirect('/v8/comments')
    }

})

router.post('/attachments-add5-v8', function(req,res){
    var contacted = req.session.data['attachments-add5-v8']
    if (contacted == "yes"){
        res.redirect('/v8/attachments6')
    }
    else {
        res.redirect('/v8/comments')
    }

})

router.post('/attachments-add6-v8', function(req,res){
    var contacted = req.session.data['attachments-add6-v8']
    if (contacted == "yes"){
        res.redirect('/v8/comments')
    }
    else {
        res.redirect('/v8/comments')
    }

})

router.post('/attachments-add-delete-v8', function(req,res){
    var contacted = req.session.data['attachments-add-delete-v8']
    if (contacted == "yes"){
        res.redirect('/v8/attachments2')
    }
    else {
        res.redirect('/v8/comments')
    }

})

router.post('/dependant-question-v8', function(req,res){
    var contacted = req.session.data['dependant-question-v8']
    if (contacted == "yes"){
        res.redirect('/v8/dependant-details')
    }
    else {
        res.redirect('/v8/claim-dates-new')
    }

})
router.post('/dependant-details-v8', function(req,res){
    var contacted = req.session.data['dependant-details-v8']
    if (contacted == "yes"){
        res.redirect('/v8/dependant-details2')
    }
    else {
        res.redirect('/v8/subscription-question')
    }

})

// V9 ////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/doug-ihs-question-v9', function(req,res){
    var contacted = req.session.data['doug-ihs-question-v9']
    if (contacted == "yes"){
        res.redirect('/v9/ihs-tier2-question')
    }
    else {
        res.redirect('/v9/not-entitled-rr')
    }
})

router.post('/doug-ihs-tier2-question-v9', function(req,res){
    var contacted = req.session.data['doug-ihs-tier2-question-v9']
    if (contacted == "yes"){
        res.redirect('/v9/ihs-tier2-healthcare')
    }
    else {
        res.redirect('/v9/work-question')
    }
})

router.post('/ihs-tier2-hc-v9', function(req,res){
    var contacted = req.session.data['ihs-tier2-hc-v9']
    if (contacted == "yes"){
        res.redirect('/v9/ihs-tier2-ukvi')
    }
    else {
        res.redirect('/v9/work-question')
    }
})

router.post('/work-question-v9', function(req,res){
    var contacted = req.session.data['work-question-v9']
    if (contacted == "yes"){
        res.redirect('/v9/6-months')
    }
    else {
        res.redirect('/v9/not-entitled')
    }
})

router.post('/6-months-v9', function(req,res){
    var contacted = req.session.data['6-months-v9']
    if (contacted == "yes"){
        res.redirect('/v9/average-time')
    }
    else {
        res.redirect('/v9/not-entitled')
    }

})

router.post('/average-time-v9', function(req,res){
    var contacted = req.session.data['average-time-v9']
    if (contacted == "yes"){
        res.redirect('/v9/tier2-declaration')
    }
    else {
        res.redirect('/v9/not-entitled-rr')
    }

})

router.post('/dependant-question-v9', function(req,res){
    var contacted = req.session.data['dependant-question-v9']
    if (contacted == "yes"){
        res.redirect('/v9/dependant-details')
    }
    else {
        res.redirect('/v9/claim-dates-new')
    }

})

router.post('/dependant-details-v9', function(req,res){
    var contacted = req.session.data['dependant-details-v9']
    if (contacted == "yes"){
        res.redirect('/v9/dependant-details2')
    }
    else {
        res.redirect('/v9/claim-dates-new')
    }

})

router.post('/subscription-question-v9', function(req,res){
    var contacted = req.session.data['subscription-question-v9']
    if (contacted == "yes"){
        res.redirect('/v9/non-nhs-path')
    }
    else {
        res.redirect('/v9/non-nhs-path')
    }

})

router.post('/non-nhs-path-another-job-v9', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job-v9']
    if (contacted == "yes"){
        res.redirect('/v9/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v9/attachments')
    }

})

router.post('/non-nhs-path-another-job2-v9', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job2-v9']
    if (contacted == "yes"){
        res.redirect('/v9/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v9/attachments')
    }

})

router.post('/non-nhs-path-another-job2-v9', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job2-v9']
    if (contacted == "yes"){
        res.redirect('/v9/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v9/attachments')
    }

})

router.post('/non-nhs-path-another-job-v9', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job-v9']
    if (contacted == "yes"){
        res.redirect('/v9/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v9/attachments')
    }

})

router.post('/attachments-add-v9', function(req,res){
    var contacted = req.session.data['attachments-add-v9']
    if (contacted == "yes"){
        res.redirect('/v9/attachments2')
    }
    else {
        res.redirect('/v9/comments')
    }

})

router.post('/attachments-add2-v9', function(req,res){
    var contacted = req.session.data['attachments-add2-v9']
    if (contacted == "yes"){
        res.redirect('/v9/comments')
    }
    else {
        res.redirect('/v9/comments')
    }

})

// V10 ////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/doug-ihs-question-v10', function(req,res){
    var contacted = req.session.data['doug-ihs-question-v10']
    if (contacted == "yes"){
        res.redirect('/v10/ihs-tier2-question')
    }
    else {
        res.redirect('/v10/not-entitled-rr')
    }
})

router.post('/doug-ihs-tier2-question-v10', function(req,res){
    var contacted = req.session.data['doug-ihs-tier2-question-v10']
    if (contacted == "yes"){
        res.redirect('/v10/ihs-tier2-healthcare')
    }
    else {
        res.redirect('/v10/work-question')
    }
})

router.post('/ihs-tier2-hc-v10', function(req,res){
    var contacted = req.session.data['ihs-tier2-hc-v10']
    if (contacted == "yes"){
        res.redirect('/v10/ihs-tier2-ukvi')
    }
    else {
        res.redirect('/v10/work-question')
    }
})

router.post('/work-question-v10', function(req,res){
    var contacted = req.session.data['work-question-v10']
    if (contacted == "yes"){
        res.redirect('/v10/6-months')
    }
    else {
        res.redirect('/v10/not-entitled')
    }
})

router.post('/6-months-v10', function(req,res){
    var contacted = req.session.data['6-months-v10']
    if (contacted == "yes"){
        res.redirect('/v10/average-time')
    }
    else {
        res.redirect('/v10/not-entitled')
    }

})

router.post('/average-time-v10', function(req,res){
    var contacted = req.session.data['average-time-v10']
    if (contacted == "yes"){
        res.redirect('/v10/tier2-declaration')
    }
    else {
        res.redirect('/v10/not-entitled-rr')
    }

})

router.post('/dependant-question-v10', function(req,res){
    var contacted = req.session.data['dependant-question-v10']
    if (contacted == "yes"){
        res.redirect('/v10/dependant-details')
    }
    else {
        res.redirect('/v10/claim-dates-new')
    }

})

router.post('/dependant-details-v10', function(req,res){
    var contacted = req.session.data['dependant-details-v10']
    if (contacted == "yes"){
        res.redirect('/v10/dependant-details2')
    }
    else {
        res.redirect('/v10/claim-dates-new')
    }

})

router.post('/subscription-question-v10', function(req,res){
    var contacted = req.session.data['subscription-question-v10']
    if (contacted == "yes"){
        res.redirect('/v10/non-nhs-path')
    }
    else {
        res.redirect('/v10/non-nhs-path')
    }

})

router.post('/non-nhs-path-another-job-v10', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job-v10']
    if (contacted == "yes"){
        res.redirect('/v10/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v10/attachments')
    }

})

router.post('/non-nhs-path-another-job2-v10', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job2-v10']
    if (contacted == "yes"){
        res.redirect('/v10/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v10/attachments')
    }

})

router.post('/attachments-add-v10', function(req,res){
    var contacted = req.session.data['attachments-add-v10']
    if (contacted == "yes"){
        res.redirect('/v10/attachments2')
    }
    else {
        res.redirect('/v10/comments')
    }

})

router.post('/attachments-add2-v10', function(req,res){
    var contacted = req.session.data['attachments-add2-v10']
    if (contacted == "yes"){
        res.redirect('/v10/comments')
    }
    else {
        res.redirect('/v10/comments')
    }

})

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
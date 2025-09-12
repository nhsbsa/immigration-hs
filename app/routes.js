const express = require('express')
const router = express.Router()

//VERSIONED ROUTES
router.use('/portal/v1', require('./views/portal/v1/_routes'));

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

router.post('/version-18-dependant-question', function(req,res){
    var contacted = req.session.data['dependant-question-v18']
    if (contacted == "yes"){
        res.redirect('/v18/dependant-details')
    }
    else {
        res.redirect('/v18/claim-dates-new')
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

// V11 - H&SC ////////////////////////////////////////////////////////////////////////////////////////////////

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
router.post('/v12/visa-date', function (req, res) {
    var visaDate = req.session.data['visa-date'];
    switch (visaDate) {
        case undefined:
            res.redirect('/v12/ehic-card');
            break;
            case "yes":
            res.redirect('/v12/ehic-card');
            break;
            case "no":
            res.redirect('/v12/kick-out-student');
            break;
    };
});

router.post('/v12/ehic-card', function (req, res) {
    var ehic = req.session.data['ehic'];
    switch (ehic) {
        case undefined:
            res.redirect('/v12/full-time-education');
            break;
            case "yes":
            res.redirect('/v12/full-time-education');
            break;
            case "no":
            res.redirect('/v12/kick-out-student');
            break;
    };
});

router.post('/v12/full-time-education', function (req, res) {
    var student = req.session.data['student'];
    switch (student) {
        case undefined:
            res.redirect('/v12/work-question');
            break;
            case "yes":
            res.redirect('/v12/work-question');
            break;
            case "no":
            res.redirect('/v12/kick-out-student');
            break;
    };
});

router.post('/v12/work-question', function (req, res) {
    var work = req.session.data['work'];
    switch (work) {
        case undefined:
            res.redirect('/v12/residency');
            break;
            case "yes":
            res.redirect('/v12/kick-out-student');
            break;
            case "no":
            res.redirect('/v12/residency');
            break;
    };
});

router.post('/v12/dependant/work-question-dependant', function (req, res) {
    var work = req.session.data['work-dependant'];
    switch (work) {
        case undefined:
            res.redirect('/v12/dependant/residency-dependant');
            break;
            case "yes":
            res.redirect('/v12/kick-out-dependant');
            break;
            case "no":
            res.redirect('/v12/dependant/residency-dependant');
            break;
    };
});

router.post('/v12/dependant/residency-dependant', function (req, res) {
    var work = req.session.data['residency-dependant'];
    switch (work) {
        case undefined:
            res.redirect('/v12/dependant/name');
            break;
            case "yes":
            res.redirect('/v12/dependant/name');
            break;
            case "no":
            res.redirect('/v12/kick-out-dependant');
            break;
    };
});

router.post('/v12/dependant/same-address', function (req, res) {
    var work = req.session.data['same-address'];
    switch (work) {
        case undefined:
            res.redirect('/v12/dependant/postcode');
            break;
            case "yes":
            res.redirect('/v12/dependant/upload-of-ehic');
            break;
            case "no":
            res.redirect('/v12/dependant/postcode');
            break;
    };
});

router.post('/v12/residency', function (req, res) {
    var residency = req.session.data['residency'];
    switch (residency) {
        case undefined:
            res.redirect('/v12/check-eligibility-details');
            break;
            case "no":
            res.redirect('/v12/kick-out-student');
            break;
            case "yes":
            res.redirect('/v12/check-eligibility-details');
            break;
    };
});

router.post('/v12/swiss-national', function (req, res) {
    var swiss = req.session.data['swiss'];
    switch (swiss) {
        case undefined:
            res.redirect('/v12/check-eligibility-details');
            break;
            case "yes":
            res.redirect('/v12/swiss-path');
            break;
            case "no":
            res.redirect('/v12/check-eligibility-details');
            break;
    };
});

router.post('/v12/dependant-question', function (req, res) {
    var addDependant = req.session.data['add-dependant'];
    switch (addDependant) {
        case undefined:
            res.redirect('/v12/dependant/work-question-dependant');
            break;
            case "yes":
            res.redirect('/v12/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v12/check-details');
            break;
    };
});

router.post('/v12/dependant/dependant-question', function (req, res) {
    var addDependant = req.session.data['add-dependant'];
    switch (addDependant) {
        case undefined:
            res.redirect('/v12/dependant/work-question-dependant');
            break;
            case "yes":
            res.redirect('/v12/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v12/check-details');
            break;
    };
});

router.post('/v12/dependant-add', function (req, res) {
    var addSecondDependant = req.session.data['add-second-dependant'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/v12/dependant-add');
            break;
            case "yes":
            res.redirect('/v12/dependant-details2');
            break;
            case "no":
            res.redirect('/v12/upload-of-ehic');
            break;
    };
});

router.post('/v12/dependant-add2', function (req, res) {
    var addSecondDependant = req.session.data['add-second-dependant'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/v12/dependant-add');
            break;
            case "yes":
            res.redirect('/v12/dependant-details2');
            break;
            case "no":
            res.redirect('/v12/upload-of-ehic');
            break;
    };
});

router.post('/v12/ehic-evidence-upload', function(req,res){
    var upload = req.session.data['upload']
    if (upload == "ehic"){
        res.redirect('/v12/upload-of-ehic')
    }
    else {
        res.redirect('/v12/upload-of-course-letter')
    }

})

router.post('/v12/attachments-add', function(req,res){
    var contacted = req.session.data['attachments-add-v12']
    if (contacted == "yes"){
        res.redirect('/v12/attachments2')
    }
    else {
        res.redirect('/v12/check-details')
    }

})

router.post('/v12/attachments-add-v12', function(req,res){
    var contacted = req.session.data['attachments-add-v12']
    if (contacted == "yes"){
        res.redirect('/v12/attachments-add2')
    }
    else {
        res.redirect('/v12/check-details')
    }

})

router.post('/attachments-add2-v12', function(req,res){
    var contacted = req.session.data['attachments-add2-v12']
    if (contacted == "yes"){
        res.redirect('/v12/check-details')
    }
    else {
        res.redirect('/v12/check-details')
    }

})


router.post('/v12/ihs-paid', function (req, res) {
    var addSecondDependant = req.session.data['ihs-paid'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/v12/visa-date');
            break;
            case "yes":
            res.redirect('/v12/visa-date');
            break;
            case "no":
            res.redirect('/v12/kick-out-student');
            break;
    };
});

router.post('/v12/kick-out-dependant', function(req,res){
    var upload = req.session.data['kick-out-dependant']
    if (upload == "ehic"){
        res.redirect('/v12/dependant-question')
    }
    else {
        res.redirect('/v12/dependant-question')
    }

})

// V13 - Students ////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/v13/visa-date', function (req, res) {
    var visaDate = req.session.data['visa-date'];
    switch (visaDate) {
        case undefined:
            res.redirect('/v13/ehic-card');
            break;
            case "yes":
            res.redirect('/v13/ehic-card');
            break;
            case "no":
            res.redirect('/v13/kick-out-student');
            break;
    };
});

router.post('/v13/ehic-card', function (req, res) {
    var ehic = req.session.data['ehic'];
    switch (ehic) {
        case undefined:
            res.redirect('/v13/full-time-education');
            break;
            case "yes":
            res.redirect('/v13/full-time-education');
            break;
            case "no":
            res.redirect('/v13/kick-out-student');
            break;
    };
});

router.post('/v13/full-time-education', function (req, res) {
    var student = req.session.data['student'];
    switch (student) {
        case undefined:
            res.redirect('/v13/work-question');
            break;
            case "yes":
            res.redirect('/v13/work-question');
            break;
            case "no":
            res.redirect('/v13/kick-out-student');
            break;
    };
});

router.post('/v13/work-question', function (req, res) {
    var work = req.session.data['work'];
    switch (work) {
        case undefined:
            res.redirect('/v13/residency');
            break;
            case "yes":
            res.redirect('/v13/kick-out-student');
            break;
            case "no":
            res.redirect('/v13/residency');
            break;
    };
});

router.post('/v13/dependant/work-question-dependant', function (req, res) {
    var work = req.session.data['work-dependant'];
    switch (work) {
        case undefined:
            res.redirect('/v13/dependant/residency-dependant');
            break;
            case "yes":
            res.redirect('/v13/kick-out-dependant');
            break;
            case "no":
            res.redirect('/v13/dependant/residency-dependant');
            break;
    };
});

router.post('/v13/dependant/residency-dependant', function (req, res) {
    var work = req.session.data['residency-dependant'];
    switch (work) {
        case undefined:
            res.redirect('/v13/dependant/name');
            break;
            case "yes":
            res.redirect('/v13/dependant/name');
            break;
            case "no":
            res.redirect('/v13/kick-out-dependant');
            break;
    };
});

router.post('/v13/dependant/same-address', function (req, res) {
    var work = req.session.data['same-address'];
    switch (work) {
        case undefined:
            res.redirect('/v13/dependant/manual-address');
            break;
            case "yes":
            res.redirect('/v13/dependant/upload-of-ehic');
            break;
            case "no":
            res.redirect('/v13/dependant/manual-address');
            break;
    };
});

router.post('/v13/residency', function (req, res) {
    var residency = req.session.data['residency'];
    switch (residency) {
        case undefined:
            res.redirect('/v13/check-eligibility-details');
            break;
            case "no":
            res.redirect('/v13/kick-out-student');
            break;
            case "yes":
            res.redirect('/v13/check-eligibility-details');
            break;
    };
});

router.post('/v13/swiss-national', function (req, res) {
    var swiss = req.session.data['swiss'];
    switch (swiss) {
        case undefined:
            res.redirect('/v13/check-eligibility-details');
            break;
            case "yes":
            res.redirect('/v13/swiss-path');
            break;
            case "no":
            res.redirect('/v13/check-eligibility-details');
            break;
    };
});

router.post('/v13/dependant-question', function (req, res) {
    var addDependant = req.session.data['add-dependant'];
    switch (addDependant) {
        case undefined:
            res.redirect('/v13/check-details');
            break;
            case "yes":
            res.redirect('/v13/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v13/check-details');
            break;
    };
});

router.post('/v13/dependant/dependant-question', function (req, res) {
    var addDependant = req.session.data['add-dependant'];
    switch (addDependant) {
        case undefined:
            res.redirect('/v13/dependant/work-question-dependant');
            break;
            case "yes":
            res.redirect('/v13/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v13/check-details');
            break;
    };
});

router.post('/v13/dependant-add', function (req, res) {
    var addSecondDependant = req.session.data['add-second-dependant'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/v13/check-detail');
            break;
            case "yes":
            res.redirect('/v13/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v13/check-details');
            break;
    };
});

router.post('/v13/dependant-add2', function (req, res) {
    var addSecondDependant = req.session.data['add-second-dependant'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/v13/dependant-add');
            break;
            case "yes":
            res.redirect('/v13/dependant-details2');
            break;
            case "no":
            res.redirect('/v13/upload-of-ehic');
            break;
    };
});

router.post('/v13/ehic-evidence-upload', function(req,res){
    var upload = req.session.data['upload']
    if (upload == "ehic"){
        res.redirect('/v13/upload-of-ehic')
    }
    else {
        res.redirect('/v13/upload-of-course-letter')
    }

})

router.post('/v13/attachments-add', function(req,res){
    var contacted = req.session.data['attachments-add-v12']
    if (contacted == "yes"){
        res.redirect('/v13/attachments2')
    }
    else {
        res.redirect('/v13/check-details')
    }

})

router.post('/v13/attachments-add-v12', function(req,res){
    var contacted = req.session.data['attachments-add-v12']
    if (contacted == "yes"){
        res.redirect('/v13/attachments-add2')
    }
    else {
        res.redirect('/v13/check-details')
    }

})

router.post('/attachments-add2-v12', function(req,res){
    var contacted = req.session.data['attachments-add2-v12']
    if (contacted == "yes"){
        res.redirect('/v13/check-details')
    }
    else {
        res.redirect('/v13/check-details')
    }

})


router.post('/v13/ihs-paid', function (req, res) {
    var addSecondDependant = req.session.data['ihs-paid'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/v13/visa-date');
            break;
            case "yes":
            res.redirect('/v13/visa-date');
            break;
            case "no":
            res.redirect('/v13/kick-out-student');
            break;
    };
});

router.post('/v13/kick-out-dependant', function(req,res){
    var upload = req.session.data['kick-out-dependant']
    if (upload == "ehic"){
        res.redirect('/v13/dependant-question')
    }
    else {
        res.redirect('/v13/dependant-question')
    }

})

router.post('/ehic-add-v13', function(req,res){
    var contacted = req.session.data['ehic-add-v13']
    if (contacted == "yes"){
        res.redirect('/v13/upload-of-ehic')
    }
    else {
        res.redirect('/v13/attachments-letter')
    }

})

router.post('/letter-add-v13', function(req,res){
    var contacted = req.session.data['letter-add-v13']
    if (contacted == "yes"){
        res.redirect('/v13/attachments-letter')
    }
    else {
        res.redirect('/v13/dependant-question')
    }

})

router.post('/dependant-ehic-add-v13', function(req,res){
    var contacted = req.session.data['dependant-ehic-add-v13']
    if (contacted == "yes"){
        res.redirect('/v13/dependant/upload-of-ehic')
    }
    else {
        res.redirect('/v13/dependant-add')
    }

})

router.post('/v13/dependant-details-delete', function (req, res) {
    var addSecondDependant = req.session.data['dependant-details-delete'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/v13/dependant/work-question-dependant');
            break;
            case "yes":
            res.redirect('/v13/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v13/check-details');
            break;
    };
});

// v14 - H&SC////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/doug-ihs-question-v14', function(req,res){
    var contacted = req.session.data['doug-ihs-question-v14']
    if (contacted == "yes"){
        res.redirect('/v14/applicant-visa-type')
    }
    else {
        res.redirect('/v14/not-entitled-rr')
    }
})

router.post('/ihs-tier2-hc-v14', function(req,res){
    var contacted = req.session.data['ihs-tier2-hc-v14']
    if (contacted == "yes"){
        res.redirect('/v14/ihs-tier2-ukvi')
    }
    else {
        res.redirect('/v14/work-question')
    }
})

router.post('/work-question-v14', function(req,res){
    var contacted = req.session.data['work-question-v14']
    if (contacted == "yes"){
        res.redirect('/v14/6-months')
    }
    else {
        res.redirect('/v14/not-entitled')
    }
})

router.post('/6-months-v14', function(req,res){
    var contacted = req.session.data['6-months-v14']
    if (contacted == "yes"){
        res.redirect('/v14/average-time')
    }
    else {
        res.redirect('/v14/not-entitled')
    }

})

router.post('/average-time-v14', function(req,res){
    var contacted = req.session.data['average-time-v14']
    if (contacted == "yes"){
        res.redirect('/v14/tier2-declaration')
    }
    else {
        res.redirect('/v14/not-entitled-rr')
    }

})

router.post('/dependant-question-v14', function(req,res){
    var contacted = req.session.data['dependant-question-v14']
    if (contacted == "yes"){
        res.redirect('/v14/dependant-details')
    }
    else {
        res.redirect('/v14/claim-dates-new')
    }

})

router.post('/dependant-details-v14', function(req,res){
    var contacted = req.session.data['dependant-details-v14']
    if (contacted == "yes"){
        res.redirect('/v14/dependant-details2')
    }
    else {
        res.redirect('/v14/claim-dates-new')
    }

})

router.post('/dependant-details-v14', function(req,res){
    var contacted = req.session.data['dependant-details-v14']
    if (contacted == "yes"){
        res.redirect('/v14/dependant-details2')
    }
    else {
        res.redirect('/v14/claim-dates-new')
    }

})

router.post('/subscription-question-v14', function(req,res){
    var contacted = req.session.data['subscription-question-v14']
    if (contacted == "yes"){
        res.redirect('/v14/non-nhs-path')
    }
    else {
        res.redirect('/v14/non-nhs-path')
    }

})

router.post('/non-nhs-path-another-job2-v14', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job2-v14']
    if (contacted == "yes"){
        res.redirect('/v14/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v14/attachments')
    }

})

router.post('/attachments-add-v14', function(req,res){
    var contacted = req.session.data['attachments-add-v14']
    if (contacted == "yes"){
        res.redirect('/v14/upload-of-payslips')
    }
    else {
        res.redirect('/v14/comments')
    }

})

router.post('/attachments-add2-v14', function(req,res){
    var contacted = req.session.data['attachments-add2-v14']
    if (contacted == "yes"){
        res.redirect('/v14/comments')
    }
    else {
        res.redirect('/v14/comments')
    }

})

router.post('/v14/payslips-or-contract', function(req,res){
    var contacted = req.session.data['payslips-or-contract']
    if (contacted == "payslips"){
        res.redirect('/v14/upload-of-payslips')
    }
    else {
        res.redirect('/v14/upload-of-contract')
    }

})

router.post('/non-nhs-path-another-job-v14', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job-v14']
    if (contacted == "yes"){
        res.redirect('/v14/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v14/upload-of-payslips')
    }

})

router.post('/upload-of-evidence-add2-v14', function(req,res){
    var contacted = req.session.data['upload-of-evidence-add2-v14']
    if (contacted == "yes"){
        res.redirect('/v14/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v14/upload-of-contract')
    }

})

 router.post('/doug-ihs-tier2-question-v14', function(req,res){
    var contacted = req.session.data['doug-ihs-tier2-question-v14']
    if (contacted == "tier2"){
       res.redirect('/v14/ihs-tier2-healthcare')
    }
    else
        if (contacted == "tier5"){
            res.redirect('/v14/tier5-ko')
        }
        else
        {
            res.redirect('/v14/work-question')
        }
})

router.post('/contracts-add-v14', function(req,res){
    var contacted = req.session.data['contracts-add-v14']
    if (contacted == "yes"){
        res.redirect('/v14/upload-of-evidence')
    }
    else {
        res.redirect('/v14/comments')
    }

})

router.post('/contracts-add2-v14', function(req,res){
    var contacted = req.session.data['contracts-add2-v14']
    if (contacted == "yes"){
        res.redirect('/v14/comments')
    }
    else {
        res.redirect('/v14/comments')
    }

})

// V15 - Students ////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/v15/visa-date', function (req, res) {
    var visaDate = req.session.data['visa-date'];
    switch (visaDate) {
        case undefined:
            res.redirect('/v15/ehic-card');
            break;
            case "yes":
            res.redirect('/v15/ehic-card');
            break;
            case "no":
            res.redirect('/v15/kick-out-student');
            break;
    };
});

router.post('/v15/ehic-card', function (req, res) {
    var ehic = req.session.data['ehic'];
    switch (ehic) {
        case undefined:
            res.redirect('/v15/full-time-education');
            break;
            case "yes":
            res.redirect('/v15/full-time-education');
            break;
            case "no":
            res.redirect('/v15/kick-out-student');
            break;
    };
});

router.post('/v15/full-time-education', function (req, res) {
    var student = req.session.data['student'];
    switch (student) {
        case undefined:
            res.redirect('/v15/work-question');
            break;
            case "yes":
            res.redirect('/v15/work-question');
            break;
            case "no":
            res.redirect('/v15/kick-out-student');
            break;
    };
});

router.post('/v15/work-question', function (req, res) {
    var work = req.session.data['work'];
    switch (work) {
        case undefined:
            res.redirect('/v15/residency');
            break;
            case "yes":
            res.redirect('/v15/kick-out-student');
            break;
            case "no":
            res.redirect('/v15/residency');
            break;
    };
});

router.post('/v15/dependant/work-question-dependant', function (req, res) {
    var work = req.session.data['work-dependant'];
    switch (work) {
        case undefined:
            res.redirect('/v15/dependant/residency-dependant');
            break;
            case "yes":
            res.redirect('/v15/kick-out-dependant');
            break;
            case "no":
            res.redirect('/v15/dependant/residency-dependant');
            break;
    };
});

router.post('/v15/dependant/residency-dependant', function (req, res) {
    var work = req.session.data['residency-dependant'];
    switch (work) {
        case undefined:
            res.redirect('/v15/dependant/name');
            break;
            case "yes":
            res.redirect('/v15/dependant/name');
            break;
            case "no":
            res.redirect('/v15/kick-out-dependant');
            break;
    };
});

router.post('/v15/dependant/same-address', function (req, res) {
    var work = req.session.data['same-address'];
    switch (work) {
        case undefined:
            res.redirect('/v15/dependant/postcode');
            break;
            case "yes":
            res.redirect('/v15/dependant/upload-of-ehic');
            break;
            case "no":
            res.redirect('/v15/dependant/postcode');
            break;
    };
});

router.post('/v15/residency', function (req, res) {
    var residency = req.session.data['residency'];
    switch (residency) {
        case undefined:
            res.redirect('/v15/check-eligibility-details');
            break;
            case "no":
            res.redirect('/v15/kick-out-student');
            break;
            case "yes":
            res.redirect('/v15/check-eligibility-details');
            break;
    };
});

router.post('/v15/swiss-national', function (req, res) {
    var swiss = req.session.data['swiss'];
    switch (swiss) {
        case undefined:
            res.redirect('/v15/check-eligibility-details');
            break;
            case "yes":
            res.redirect('/v15/swiss-path');
            break;
            case "no":
            res.redirect('/v15/check-eligibility-details');
            break;
    };
});

router.post('/v15/dependant-question', function (req, res) {
    var addDependant = req.session.data['add-dependant'];
    switch (addDependant) {
        case undefined:
            res.redirect('/v15/check-details');
            break;
            case "yes":
            res.redirect('/v15/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v15/check-details');
            break;
    };
});

router.post('/v15/dependant/dependant-question', function (req, res) {
    var addDependant = req.session.data['add-dependant'];
    switch (addDependant) {
        case undefined:
            res.redirect('/v15/dependant/work-question-dependant');
            break;
            case "yes":
            res.redirect('/v15/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v15/check-details');
            break;
    };
});

router.post('/v15/dependant-add', function (req, res) {
    var addSecondDependant = req.session.data['add-second-dependant'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/v15/check-details');
            break;
            case "yes":
            res.redirect('/v15/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v15/check-details');
            break;
    };
});

router.post('/v15/dependant-add2', function (req, res) {
    var addSecondDependant = req.session.data['add-second-dependant'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/v15/check-details');
            break;
            case "yes":
            res.redirect('/v15/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v15/check-details');
            break;
    };
});

router.post('/v15/ehic-evidence-upload', function(req,res){
    var upload = req.session.data['upload']
    if (upload == "ehic"){
        res.redirect('/v15/upload-of-ehic')
    }
    else {
        res.redirect('/v15/upload-of-course-letter')
    }

})

router.post('/v15/attachments-add', function(req,res){
    var contacted = req.session.data['attachments-add-v12']
    if (contacted == "yes"){
        res.redirect('/v15/attachments2')
    }
    else {
        res.redirect('/v15/check-details')
    }

})

router.post('/v15/attachments-add-v12', function(req,res){
    var contacted = req.session.data['attachments-add-v12']
    if (contacted == "yes"){
        res.redirect('/v15/attachments-add2')
    }
    else {
        res.redirect('/v15/check-details')
    }

})

router.post('/attachments-add2-v12', function(req,res){
    var contacted = req.session.data['attachments-add2-v12']
    if (contacted == "yes"){
        res.redirect('/v15/check-details')
    }
    else {
        res.redirect('/v15/check-details')
    }

})


router.post('/v15/ihs-paid', function (req, res) {
    var addSecondDependant = req.session.data['ihs-paid'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/v15/visa-date');
            break;
            case "yes":
            res.redirect('/v15/visa-date');
            break;
            case "no":
            res.redirect('/v15/kick-out-student');
            break;
    };
});

router.post('/v15/kick-out-dependant', function(req,res){
    var upload = req.session.data['kick-out-dependant']
    if (upload == "ehic"){
        res.redirect('/v15/dependant-question')
    }
    else {
        res.redirect('/v15/dependant-question')
    }

})

router.post('/ehic-add-v15', function(req,res){
    var contacted = req.session.data['ehic-add-v15']
    if (contacted == "yes"){
        res.redirect('/v15/upload-of-ehic')
    }
    else {
        res.redirect('/v15/attachments-letter')
    }

})

router.post('/letter-add-v15', function(req,res){
    var contacted = req.session.data['letter-add-v15']
    if (contacted == "yes"){
        res.redirect('/v15/attachments-letter')
    }
    else {
        res.redirect('/v15/dependant-question')
    }

})

router.post('/dependant-ehic-add-v15', function(req,res){
    var contacted = req.session.data['dependant-ehic-add-v15']
    if (contacted == "yes"){
        res.redirect('/v15/dependant/upload-of-ehic')
    }
    else {
        res.redirect('/v15/dependant-add')
    }

})

router.post('/v15/dependant-details-delete', function (req, res) {
    var addSecondDependant = req.session.data['dependant-details-delete'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/v15/dependant/work-question-dependant');
            break;
            case "yes":
            res.redirect('/v15/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v15/check-details');
            break;
    };
});

// v16 - H&SC////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/doug-ihs-question-v16', function(req,res){
    var contacted = req.session.data['doug-ihs-question-v16']
    if (contacted == "yes"){
        res.redirect('/v16/applicant-visa-type')
    }
    else {
        res.redirect('/v16/not-entitled-rr')
    }
})

router.post('/ihs-tier2-hc-v16', function(req,res){
    var contacted = req.session.data['ihs-tier2-hc-v16']
    if (contacted == "yes"){
        res.redirect('/v16/ihs-tier2-ukvi')
    }
    else {
        res.redirect('/v16/work-question')
    }
})

router.post('/work-question-v16', function(req,res){
    var contacted = req.session.data['work-question-v16']
    if (contacted == "yes"){
        res.redirect('/v16/6-months')
    }
    else {
        res.redirect('/v16/not-entitled')
    }
})

router.post('/6-months-v16', function(req,res){
    var contacted = req.session.data['6-months-v16']
    if (contacted == "yes"){
        res.redirect('/v16/average-time')
    }
    else {
        res.redirect('/v16/not-entitled')
    }

})

router.post('/average-time-v16', function(req,res){
    var contacted = req.session.data['average-time-v16']
    if (contacted == "yes"){
        res.redirect('/v16/tier2-declaration')
    }
    else {
        res.redirect('/v16/not-entitled-rr')
    }

})

router.post('/dependant-question-v16', function(req,res){
    var contacted = req.session.data['dependant-question-v16']
    if (contacted == "yes"){
        res.redirect('/v16/dependant-details')
    }
    else {
        res.redirect('/v16/claim-dates-new')
    }

})

router.post('/dependant-details-v16', function(req,res){
    var contacted = req.session.data['dependant-details-v16']
    if (contacted == "yes"){
        res.redirect('/v16/dependant-details2')
    }
    else {
        res.redirect('/v16/claim-dates-new')
    }

})

router.post('/dependant-details-v16', function(req,res){
    var contacted = req.session.data['dependant-details-v16']
    if (contacted == "yes"){
        res.redirect('/v16/dependant-details2')
    }
    else {
        res.redirect('/v16/claim-dates-new')
    }

})

router.post('/subscription-question-v16', function(req,res){
    var contacted = req.session.data['subscription-question-v16']
    if (contacted == "yes"){
        res.redirect('/v16/non-nhs-path')
    }
    else {
        res.redirect('/v16/non-nhs-path')
    }

})

router.post('/non-nhs-path-another-job2-v16', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job2-v16']
    if (contacted == "yes"){
        res.redirect('/v16/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v16/attachments')
    }

})

router.post('/attachments-add-v16', function(req,res){
    var contacted = req.session.data['attachments-add-v16']
    if (contacted == "yes"){
        res.redirect('/v16/upload-of-payslips')
    }
    else {
        res.redirect('/v16/comments')
    }

})

router.post('/attachments-add2-v16', function(req,res){
    var contacted = req.session.data['attachments-add2-v16']
    if (contacted == "yes"){
        res.redirect('/v16/comments')
    }
    else {
        res.redirect('/v16/comments')
    }

})

router.post('/v16/payslips-or-contract', function(req,res){
    var contacted = req.session.data['payslips-or-contract']
    if (contacted == "payslips"){
        res.redirect('/v16/upload-of-payslips')
    }
    else {
        res.redirect('/v16/upload-of-contract')
    }

})

router.post('/non-nhs-path-another-job-v16', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job-v16']
    if (contacted == "yes"){
        res.redirect('/v16/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v16/upload-of-contract')
    }

})

router.post('/upload-of-evidence-add2-v16', function(req,res){
    var contacted = req.session.data['upload-of-evidence-add2-v16']
    if (contacted == "yes"){
        res.redirect('/v16/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v16/upload-of-contract')
    }

})

 router.post('/doug-ihs-tier2-question-v16', function(req,res){
    var contacted = req.session.data['doug-ihs-tier2-question-v16']
    if (contacted == "tier2"){
       res.redirect('/v16/ihs-tier2-healthcare')
    }
    else
        if (contacted == "tier5"){
            res.redirect('/v16/tier5-ko')
        }
        else
        {
            res.redirect('/v16/work-question')
        }
})

router.post('/contracts-add-v16', function(req,res){
    var contacted = req.session.data['contracts-add-v16']
    if (contacted == "yes"){
        res.redirect('/v16/upload-of-evidence')
    }
    else {
        res.redirect('/v16/comments')
    }

})

router.post('/contracts-add2-v16', function(req,res){
    var contacted = req.session.data['contracts-add2-v16']
    if (contacted == "yes"){
        res.redirect('/v16/comments')
    }
    else {
        res.redirect('/v16/comments')
    }

})

router.post('/contracts-add-3-v16', function(req,res){
    var contacted = req.session.data['contracts-add-3-v16']
    if (contacted == "yes"){
        res.redirect('/v16/comments')
    }
    else {
        res.redirect('/v16/check-your-answers-nhs-path')
    }

})

// v17 - Students ////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/v17/visa-date', function (req, res) {
    var visaDate = req.session.data['visa-date'];
    switch (visaDate) {
        case undefined:
            res.redirect('/v17/ehic-card');
            break;
            case "yes":
            res.redirect('/v17/ehic-card');
            break;
            case "no":
            res.redirect('/v17/kick-out-student');
            break;
    };
});

router.post('/v17/ehic-card', function (req, res) {
    var ehic = req.session.data['ehic'];
    switch (ehic) {
        case undefined:
            res.redirect('/v17/full-time-education');
            break;
            case "yes":
            res.redirect('/v17/full-time-education');
            break;
            case "no":
            res.redirect('/v17/kick-out-student');
            break;
    };
});

router.post('/v17/full-time-education', function (req, res) {
    var student = req.session.data['student'];
    switch (student) {
        case undefined:
            res.redirect('/v17/work-question');
            break;
            case "yes":
            res.redirect('/v17/work-question');
            break;
            case "no":
            res.redirect('/v17/kick-out-student');
            break;
    };
});

router.post('/v17/work-question', function (req, res) {
    var work = req.session.data['work'];
    switch (work) {
        case undefined:
            res.redirect('/v17/residency');
            break;
            case "yes":
            res.redirect('/v17/kick-out-student');
            break;
            case "no":
            res.redirect('/v17/residency');
            break;
    };
});

router.post('/v17/dependant/work-question-dependant', function (req, res) {
    var work = req.session.data['work-dependant'];
    switch (work) {
        case undefined:
            res.redirect('/v17/dependant/residency-dependant');
            break;
            case "yes":
            res.redirect('/v17/kick-out-dependant');
            break;
            case "no":
            res.redirect('/v17/dependant/residency-dependant');
            break;
    };
});

router.post('/v17/dependant/residency-dependant', function (req, res) {
    var work = req.session.data['residency-dependant'];
    switch (work) {
        case undefined:
            res.redirect('/v17/dependant/name');
            break;
            case "yes":
            res.redirect('/v17/dependant/name');
            break;
            case "no":
            res.redirect('/v17/kick-out-dependant');
            break;
    };
});

router.post('/v17/dependant/same-address', function (req, res) {
    var work = req.session.data['same-address'];
    switch (work) {
        case undefined:
            res.redirect('/v17/dependant/postcode');
            break;
            case "yes":
            res.redirect('/v17/dependant/upload-of-ehic');
            break;
            case "no":
            res.redirect('/v17/dependant/postcode');
            break;
    };
});

router.post('/v17/residency', function (req, res) {
    var residency = req.session.data['residency'];
    switch (residency) {
        case undefined:
            res.redirect('/v17/check-eligibility-details');
            break;
            case "no":
            res.redirect('/v17/kick-out-student');
            break;
            case "yes":
            res.redirect('/v17/check-eligibility-details');
            break;
    };
});

router.post('/v17/swiss-national', function (req, res) {
    var swiss = req.session.data['swiss'];
    switch (swiss) {
        case undefined:
            res.redirect('/v17/check-eligibility-details');
            break;
            case "yes":
            res.redirect('/v17/swiss-path');
            break;
            case "no":
            res.redirect('/v17/check-eligibility-details');
            break;
    };
});

router.post('/v17/dependant-question', function (req, res) {
    var addDependant = req.session.data['add-dependant'];
    switch (addDependant) {
        case undefined:
            res.redirect('/v17/check-details');
            break;
            case "yes":
            res.redirect('/v17/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v17/check-details');
            break;
    };
});

router.post('/v17/dependant/dependant-question', function (req, res) {
    var addDependant = req.session.data['add-dependant'];
    switch (addDependant) {
        case undefined:
            res.redirect('/v17/dependant/work-question-dependant');
            break;
            case "yes":
            res.redirect('/v17/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v17/check-details');
            break;
    };
});

router.post('/v17/dependant-add', function (req, res) {
    var addSecondDependant = req.session.data['add-second-dependant'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/v17/check-details');
            break;
            case "yes":
            res.redirect('/v17/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v17/check-details');
            break;
    };
});

router.post('/v17/dependant-add2', function (req, res) {
    var addSecondDependant = req.session.data['add-second-dependant'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/v17/check-details');
            break;
            case "yes":
            res.redirect('/v17/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v17/check-details');
            break;
    };
});

router.post('/v17/ehic-evidence-upload', function(req,res){
    var upload = req.session.data['upload']
    if (upload == "ehic"){
        res.redirect('/v17/upload-of-ehic')
    }
    else {
        res.redirect('/v17/upload-of-course-letter')
    }

})

router.post('/v17/attachments-add', function(req,res){
    var contacted = req.session.data['attachments-add-v12']
    if (contacted == "yes"){
        res.redirect('/v17/attachments2')
    }
    else {
        res.redirect('/v17/check-details')
    }

})

router.post('/v17/attachments-add-v12', function(req,res){
    var contacted = req.session.data['attachments-add-v12']
    if (contacted == "yes"){
        res.redirect('/v17/attachments-add2')
    }
    else {
        res.redirect('/v17/check-details')
    }

})

router.post('/attachments-add2-v12', function(req,res){
    var contacted = req.session.data['attachments-add2-v12']
    if (contacted == "yes"){
        res.redirect('/v17/check-details')
    }
    else {
        res.redirect('/v17/check-details')
    }

})


router.post('/v17/ihs-paid', function (req, res) {
    var addSecondDependant = req.session.data['ihs-paid'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/v17/visa-date');
            break;
            case "yes":
            res.redirect('/v17/visa-date');
            break;
            case "no":
            res.redirect('/v17/kick-out-student');
            break;
    };
});

router.post('/v17/kick-out-dependant', function(req,res){
    var upload = req.session.data['kick-out-dependant']
    if (upload == "ehic"){
        res.redirect('/v17/dependant-question')
    }
    else {
        res.redirect('/v17/dependant-question')
    }

})

router.post('/ehic-add-v17', function(req,res){
    var contacted = req.session.data['ehic-add-v17']
    if (contacted == "yes"){
        res.redirect('/v17/upload-of-ehic')
    }
    else {
        res.redirect('/v17/attachments-letter')
    }

})

router.post('/letter-add-v17', function(req,res){
    var contacted = req.session.data['letter-add-v17']
    if (contacted == "yes"){
        res.redirect('/v17/attachments-letter')
    }
    else {
        res.redirect('/v17/dependant-question')
    }

})

router.post('/dependant-ehic-add-v17', function(req,res){
    var contacted = req.session.data['dependant-ehic-add-v17']
    if (contacted == "yes"){
        res.redirect('/v17/dependant/upload-of-ehic')
    }
    else {
        res.redirect('/v17/dependant-add')
    }

})

router.post('/v17/dependant-details-delete', function (req, res) {
    var addSecondDependant = req.session.data['dependant-details-delete'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/v17/dependant/work-question-dependant');
            break;
            case "yes":
            res.redirect('/v17/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v17/check-details');
            break;
    };
});

// v18 - H&SC////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/doug-ihs-question-v18', function(req,res){
    var contacted = req.session.data['doug-ihs-question-v18']
    if (contacted == "yes"){
        res.redirect('/v18/applicant-visa-type')
    }
    else {
        res.redirect('/v18/not-entitled-rr')
    }
})

router.post('/ihs-tier2-hc-v18', function(req,res){
    var contacted = req.session.data['ihs-tier2-hc-v18']
    if (contacted == "yes"){
        res.redirect('/v18/ihs-tier2-ukvi')
    }
    else {
        res.redirect('/v18/work-question')
    }
})

router.post('/work-question-v18', function(req,res){
    var contacted = req.session.data['work-question-v18']
    if (contacted == "yes"){
        res.redirect('/v18/6-months')
    }
    else {
        res.redirect('/v18/not-entitled')
    }
})

router.post('/6-months-v18', function(req,res){
    var contacted = req.session.data['6-months-v18']
    if (contacted == "yes"){
        res.redirect('/v18/average-time')
    }
    else {
        res.redirect('/v18/not-entitled')
    }

})

router.post('/average-time-v18', function(req,res){
    var contacted = req.session.data['average-time-v18']
    if (contacted == "yes"){
        res.redirect('/v18/tier2-declaration')
    }
    else {
        res.redirect('/v18/not-entitled-rr')
    }

})

router.post('/dependant-question-v18', function(req,res){
    var contacted = req.session.data['dependant-question-v18']
    if (contacted == "yes"){
        res.redirect('/v18/dependant-details')
    }
    else {
        res.redirect('/v18/non-nhs-path')
    }

})

router.post('/dependant-details-v18', function(req,res){
    var contacted = req.session.data['dependant-details-v18']
    if (contacted == "yes"){
        res.redirect('/v18/dependant-details2')
    }
    else {
        res.redirect('/v18/claim-dates-new')
    }

})

router.post('/subscription-question-v18', function(req,res){
    var contacted = req.session.data['subscription-question-v18']
    if (contacted == "yes"){
        res.redirect('/v18/non-nhs-path')
    }
    else {
        res.redirect('/v18/non-nhs-path')
    }

})

router.post('/non-nhs-path-another-job2-v18', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job2-v18']
    if (contacted == "yes"){
        res.redirect('/v18/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v18/attachments')
    }

})

router.post('/attachments-add-v18', function(req,res){
    var contacted = req.session.data['attachments-add-v18']
    if (contacted == "yes"){
        res.redirect('/v18/upload-of-payslips')
    }
    else {
        res.redirect('/v18/extra-information')
    }

})

router.post('/attachments-add2-v18', function(req,res){
    var contacted = req.session.data['attachments-add2-v18']
    if (contacted == "yes"){
        res.redirect('/v18/extra-information')
    }
    else {
        res.redirect('/v18/extra-information')
    }

})

router.post('/v18/payslips-or-contract', function(req,res){
    var contacted = req.session.data['payslips-or-contract']
    if (contacted == "payslips"){
        res.redirect('/v18/upload-of-payslips')
    }
    else {
        res.redirect('/v18/upload-of-contract')
    }

})

router.post('/non-nhs-path-another-job-v18', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job-v18']
    if (contacted == "yes"){
        res.redirect('/v18/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v18/upload-of-contract')
    }

})

router.post('/upload-of-evidence-add2-v18', function(req,res){
    var contacted = req.session.data['upload-of-evidence-add2-v18']
    if (contacted == "yes"){
        res.redirect('/v18/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v18/upload-of-contract')
    }

})

 router.post('/doug-ihs-tier2-question-v18', function(req,res){
    var contacted = req.session.data['doug-ihs-tier2-question-v18']
    if (contacted == "tier2"){
       res.redirect('/v18/ihs-tier2-healthcare')
    }
    else
        if (contacted == "tier5"){
            res.redirect('/v18/tier5-ko')
        }
        else
        {
            res.redirect('/v18/work-question')
        }
})

router.post('/contracts-add-v18', function(req,res){
    var contacted = req.session.data['contracts-add-v18']
    if (contacted == "yes"){
        res.redirect('/v18/upload-of-evidence')
    }
    else {
        res.redirect('/v18/extra-information')
    }

})

router.post('/contracts-add2-v18', function(req,res){
    var contacted = req.session.data['contracts-add2-v18']
    if (contacted == "yes"){
        res.redirect('/v18/extra-information')
    }
    else {
        res.redirect('/v18/extra-information')
    }

})

router.post('/contracts-add-3-v18', function(req,res){
    var contacted = req.session.data['contracts-add-3-v18']
    if (contacted == "yes"){
        res.redirect('/v18/extra-information')
    }
    else {
        res.redirect('/v18/check-your-answers-nhs-path')
    }

})

// v19 - Students ////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/v19/visa-date', function (req, res) {
    var visaDate = req.session.data['visa-date'];
    switch (visaDate) {
        case undefined:
            res.redirect('/v19/ehic-card');
            break;
            case "yes":
            res.redirect('/v19/ehic-card');
            break;
            case "no":
            res.redirect('/v19/kick-out-student');
            break;
    };
});

router.post('/v19/ehic-card', function (req, res) {
    var ehic = req.session.data['ehic'];
    switch (ehic) {
        case undefined:
            res.redirect('/v19/full-time-education');
            break;
            case "yes":
            res.redirect('/v19/full-time-education');
            break;
            case "no":
            res.redirect('/v19/kick-out-student');
            break;
    };
});

router.post('/v19/full-time-education', function (req, res) {
    var student = req.session.data['student'];
    switch (student) {
        case undefined:
            res.redirect('/v19/work-question');
            break;
            case "yes":
            res.redirect('/v19/work-question');
            break;
            case "no":
            res.redirect('/v19/kick-out-student');
            break;
    };
});

router.post('/v19/work-question', function (req, res) {
    var work = req.session.data['work'];
    switch (work) {
        case undefined:
            res.redirect('/v19/residency');
            break;
            case "yes":
            res.redirect('/v19/kick-out-student');
            break;
            case "no":
            res.redirect('/v19/residency');
            break;
    };
});

router.post('/v19/dependant/work-question-dependant', function (req, res) {
    var work = req.session.data['work-dependant'];
    switch (work) {
        case undefined:
            res.redirect('/v19/dependant/residency-dependant');
            break;
            case "yes":
            res.redirect('/v19/kick-out-dependant');
            break;
            case "no":
            res.redirect('/v19/dependant/residency-dependant');
            break;
    };
});

router.post('/v19/dependant/residency-dependant', function (req, res) {
    var work = req.session.data['residency-dependant'];
    switch (work) {
        case undefined:
            res.redirect('/v19/dependant/name');
            break;
            case "yes":
            res.redirect('/v19/dependant/name');
            break;
            case "no":
            res.redirect('/v19/kick-out-dependant');
            break;
    };
});

router.post('/live-student/dependant/residency-dependant', function (req, res) {
    var work = req.session.data['residency-dependant'];
    switch (work) {
        case undefined:
            res.redirect('/live-student/dependant/name');
            break;
            case "yes":
            res.redirect('/live-student/dependant/name');
            break;
            case "no":
            res.redirect('/live-student/kick-out-dependant');
            break;
    };
});

router.post('/v19/dependant/same-address', function (req, res) {
    var work = req.session.data['same-address'];
    switch (work) {
        case undefined:
            res.redirect('/v19/dependant/postcode');
            break;
            case "yes":
            res.redirect('/v19/dependant/upload-of-ehic');
            break;
            case "no":
            res.redirect('/v19/dependant/postcode');
            break;
    };
});



router.post('/v19/residency', function (req, res) {
    var residency = req.session.data['residency'];
    switch (residency) {
        case undefined:
            res.redirect('/v19/check-eligibility-details');
            break;
            case "no":
            res.redirect('/v19/kick-out-student');
            break;
            case "yes":
            res.redirect('/v19/check-eligibility-details');
            break;
    };
});

router.post('/v19/swiss-national', function (req, res) {
    var swiss = req.session.data['swiss'];
    switch (swiss) {
        case undefined:
            res.redirect('/v19/check-eligibility-details');
            break;
            case "yes":
            res.redirect('/v19/swiss-path');
            break;
            case "no":
            res.redirect('/v19/check-eligibility-details');
            break;
    };
});

router.post('/v19/dependant-question', function (req, res) {
    var addDependant = req.session.data['add-dependant'];
    switch (addDependant) {
        case undefined:
            res.redirect('/v19/check-details');
            break;
            case "yes":
            res.redirect('/v19/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v19/check-details');
            break;
    };
});

router.post('/v19/dependant/dependant-question', function (req, res) {
    var addDependant = req.session.data['add-dependant'];
    switch (addDependant) {
        case undefined:
            res.redirect('/v19/dependant/work-question-dependant');
            break;
            case "yes":
            res.redirect('/v19/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v19/check-details');
            break;
    };
});

router.post('/v19/dependant-add', function (req, res) {
    var addSecondDependant = req.session.data['add-second-dependant'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/v19/check-details');
            break;
            case "yes":
            res.redirect('/v19/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v19/check-details');
            break;
    };
});

router.post('/v19/dependant-add2', function (req, res) {
    var addSecondDependant = req.session.data['add-second-dependant'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/v19/check-details');
            break;
            case "yes":
            res.redirect('/v19/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v19/check-details');
            break;
    };
});

router.post('/v19/ehic-evidence-upload', function(req,res){
    var upload = req.session.data['upload']
    if (upload == "ehic"){
        res.redirect('/v19/upload-of-ehic')
    }
    else {
        res.redirect('/v19/upload-of-course-letter')
    }

})

router.post('/v19/attachments-add', function(req,res){
    var contacted = req.session.data['attachments-add-v12']
    if (contacted == "yes"){
        res.redirect('/v19/attachments2')
    }
    else {
        res.redirect('/v19/check-details')
    }

})

router.post('/v19/attachments-add-v12', function(req,res){
    var contacted = req.session.data['attachments-add-v12']
    if (contacted == "yes"){
        res.redirect('/v19/attachments-add2')
    }
    else {
        res.redirect('/v19/check-details')
    }

})

router.post('/attachments-add2-v12', function(req,res){
    var contacted = req.session.data['attachments-add2-v12']
    if (contacted == "yes"){
        res.redirect('/v19/check-details')
    }
    else {
        res.redirect('/v19/check-details')
    }

})


router.post('/v19/ihs-paid', function (req, res) {
    var addSecondDependant = req.session.data['ihs-paid'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/v19/visa-date');
            break;
            case "yes":
            res.redirect('/v19/visa-date');
            break;
            case "no":
            res.redirect('/v19/kick-out-student');
            break;
    };
});

router.post('/v19/kick-out-dependant', function(req,res){
    var upload = req.session.data['kick-out-dependant']
    if (upload == "ehic"){
        res.redirect('/v19/dependant-question')
    }
    else {
        res.redirect('/v19/dependant-question')
    }

})

router.post('/ehic-add-v19', function(req,res){
    var contacted = req.session.data['ehic-add-v19']
    if (contacted == "yes"){
        res.redirect('/v19/upload-of-ehic')
    }
    else {
        res.redirect('/v19/attachments-letter')
    }

})

router.post('/letter-add-v19', function(req,res){
    var contacted = req.session.data['letter-add-v19']
    if (contacted == "yes"){
        res.redirect('/v19/attachments-letter')
    }
    else {
        res.redirect('/v19/dependant-question')
    }

})

router.post('/dependant-ehic-add-v19', function(req,res){
    var contacted = req.session.data['dependant-ehic-add-v19']
    if (contacted == "yes"){
        res.redirect('/v19/dependant/upload-of-ehic')
    }
    else {
        res.redirect('/v19/dependant-add')
    }

})

router.post('/v19/dependant-details-delete', function (req, res) {
    var addSecondDependant = req.session.data['dependant-details-delete'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/v19/dependant/work-question-dependant');
            break;
            case "yes":
            res.redirect('/v19/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/v19/check-details');
            break;
    };
})
;



//Single signpost
// ----------------------------
//Would you like to upload additional evidence or add extra information about gaps in the applicant's employment or working arrangements?
router.post('/v18-signpost', function(req,res){
    var signpost = req.session.data['signpost']
    if (signpost == "yes"){
        res.redirect('/v18/signpost/extra-information')
    }
    else if (signpost == "no"){
        res.redirect('/v18/subscription-question')
    }
    else {
        res.redirect('/v20/signpost')
    }

})

//Single signpost
// ----------------------------
//Would you like to upload additional evidence or add extra information about gaps in the applicant's employment or working arrangements?
router.post('/single-signpost', function(req,res){
    var signpost = req.session.data['signpost']
    if (signpost == "yes"){
        res.redirect('/v18/extra-information')
    }
    else if (signpost == "no"){
        res.redirect('/v18/subscription-question')
    }
    else {
        res.redirect('/v18/signpost')
    }

})


// Start user research icludes
// ----------------------------

// Health and social care



// v20 - H&SC////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/doug-ihs-question-v20', function(req,res){
    var contacted = req.session.data['doug-ihs-question-v20']
    if (contacted == "yes"){
        res.redirect('/v20/applicant-visa-type')
    }
    else {
        res.redirect('/v20/not-entitled-rr')
    }
})

router.post('/ihs-tier2-hc-v20', function(req,res){
    var contacted = req.session.data['ihs-tier2-hc-v20']
    if (contacted == "yes"){
        res.redirect('/v20/ihs-tier2-ukvi')
    }
    else {
        res.redirect('/v20/work-question')
    }
})

router.post('/ihs-tier2-hc-v20-mvp', function(req,res){
    var contacted = req.session.data['ihs-tier2-hc-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp/ihs-tier2-ukvi')
    }
    else {
        res.redirect('/v20-mvp/work-question')
    }
})

router.post('/work-question-v20', function(req,res){
    var contacted = req.session.data['work-question-v20']
    if (contacted == "yes"){
        res.redirect('/v20/6-months')
    }
    else {
        res.redirect('/v20/not-entitled')
    }
})

router.post('/work-question-v20-mvp', function(req,res){
    var contacted = req.session.data['work-question-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp/6-months')
    }
    else {
        res.redirect('/v20-mvp/not-entitled')
    }
})

router.post('/6-months-v20', function(req,res){
    var contacted = req.session.data['6-months-v20']
    if (contacted == "yes"){
        res.redirect('/v20/average-time')
    }
    else {
        res.redirect('/v20/not-entitled')
    }

})

router.post('/6-months-v20-mvp', function(req,res){
    var contacted = req.session.data['6-months-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp/average-time')
    }
    else {
        res.redirect('/v20-mvp/not-entitled')
    }

})

router.post('/average-time-v20', function(req,res){
    var contacted = req.session.data['average-time-v20']
    if (contacted == "yes"){
        res.redirect('/v20/tier2-declaration')
    }
    else {
        res.redirect('/v20/not-entitled-rr')
    }

})

router.post('/average-time-v20-mvp', function(req,res){
    var contacted = req.session.data['average-time-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp/tier2-declaration')
    }
    else {
        res.redirect('/v20-mvp/not-entitled-rr')
    }

})

router.post('/dependant-question-v20', function(req,res){
    var contacted = req.session.data['dependant-question-v20']
    if (contacted == "yes"){
        res.redirect('/v20/dependant-details')
    }
    else {
        res.redirect('/v20/non-nhs-path')
    }

})

router.post('/dependant-question-v20-mvp', function(req,res){
    var contacted = req.session.data['dependant-question-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp/dependant-details')
    }
    else {
        res.redirect('/v20-mvp/non-nhs-path')
    }

})

router.post('/dependant-details-v20', function(req,res){
    var contacted = req.session.data['dependant-details-v20']
    if (contacted == "yes"){
        res.redirect('/v20/dependant-details2')
    }
    else {
        res.redirect('/v20/start-date-claim-dates')
    }
})

router.post('/dependant-details-v20-mvp', function(req,res){
    var contacted = req.session.data['dependant-details-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp/dependant-details2')
    }
    else {
        res.redirect('/v20-mvp/non-nhs-path')
    }

})

router.post('/subscription-question-v20', function(req,res){
    var contacted = req.session.data['subscription-question-v20']
    if (contacted == "yes"){
        res.redirect('/v20/non-nhs-path')
    }
    else {
        res.redirect('/v20/non-nhs-path')
    }

})

router.post('/subscription-question-v20-mvp', function(req,res){
    var contacted = req.session.data['subscription-question-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp/non-nhs-path')
    }
    else {
        res.redirect('/v20-mvp/non-nhs-path')
    }

})
router.post('/non-nhs-path-another-job2-v20', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job2-v20']
    if (contacted == "yes"){
        res.redirect('/v20/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v20/attachments')
    }

})

router.post('/non-nhs-path-another-job2-v20-mvp', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job2-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v20-mvp/attachments')
    }

})

router.post('/attachments-add-v20', function(req,res){
    var contacted = req.session.data['attachments-add-v20']
    if (contacted == "yes"){
        res.redirect('/v20/upload-of-payslips')
    }
    else {
        res.redirect('/v20/extra-information')
    }

})

router.post('/attachments-add2-v20', function(req,res){
    var contacted = req.session.data['attachments-add2-v20']
    if (contacted == "yes"){
        res.redirect('/v20/extra-information')
    }
    else {
        res.redirect('/v20/extra-information')
    }

})

router.post('/v20/payslips-or-contract', function(req,res){
    var contacted = req.session.data['payslips-or-contract']
    if (contacted == "payslips"){
        res.redirect('/v20/upload-of-payslips')
    }
    else {
        res.redirect('/v20/upload-of-contract')
    }

})

router.post('/non-nhs-path-another-job-v20', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job-v20']
    if (contacted == "yes"){
        res.redirect('/v20/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v20/ideation/task-list')
    }

})

router.post('/non-nhs-path-another-job-v20-mvp', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v20-mvp/ideation/contract-upload-task')
    }

})



router.post('/upload-of-evidence-add2-v20', function(req,res){
    var contacted = req.session.data['upload-of-evidence-add2-v20']
    if (contacted == "yes"){
        res.redirect('/v20/non-nhs-path-another-job')
    }
    else {
        res.redirect('/v20/claim-dates-new')
    }

})

 router.post('/doug-ihs-tier2-question-v20', function(req,res){
    var contacted = req.session.data['doug-ihs-tier2-question-v20']
    if (contacted == "tier2"){
       res.redirect('/v20/ihs-tier2-healthcare')
    }
    else
        if (contacted == "tier5"){
            res.redirect('/v20/tier5-ko')
        }
        else
        {
            res.redirect('/v20/work-question')
        }
})

router.post('/doug-ihs-tier2-question-v20-mvp', function(req,res){
    var contacted = req.session.data['doug-ihs-tier2-question-v20']
    if (contacted == "tier2"){
       res.redirect('/v20-mvp/ihs-tier2-healthcare')
    }
    else
        if (contacted == "tier5"){
            res.redirect('/v20-mvp/tier5-ko')
        }
        else
        {
            res.redirect('/v20-mvp/work-question')
        }
})

router.post('/contracts-add-v20', function(req,res){
    var contacted = req.session.data['contracts-add-v20']
    if (contacted == "yes"){
        res.redirect('/v20/upload-of-evidence')
    }
    else {
        res.redirect('/v20/extra-information')
    }

})

router.post('/contracts-add2-v20', function(req,res){
    var contacted = req.session.data['contracts-add2-v20']
    if (contacted == "yes"){
        res.redirect('/v20/extra-information')
    }
    else {
        res.redirect('/v20/extra-information')
    }

})

router.post('/contracts-add-3-v20', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/extra-information')
    }
    else {
        res.redirect('/v20/subscription-question')
    }

})
router.post('/version-20-dependant-question', function(req,res){
    var contacted = req.session.data['dependant-question-v20']
    if (contacted == "yes"){
        res.redirect('/v20/dependant-details')
    }
    else {
        res.redirect('/v20/start-date-claim-dates')
    }

})

router.post('/version-20-dependant-question-mvp', function(req,res){
    var contacted = req.session.data['dependant-question-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp/dependant-details')
    }
    else {
        res.redirect('/v20-mvp/claim-dates-new')
    }

})

//VISA CHANGES ROUTES

// router.get(/country-question/, function (req, res) {
//     if (req.query.location === "england")  {
//      res.redirect('dob');
//    } else {
//      res.redirect('do-you-want-to-continue');
//   }
//   });

  router.post('/country-question-v20', function(req,res){
    var country = req.session.data['whereDoYouLive']
    if (country == "england"){
        res.redirect('/v20-visa-changes/england/applicant-visa-type')
    }
    else {
        res.redirect('/v18/applicant-visa-type')
    }
})

router.post('/pay-v20', function(req,res){
    var pay = req.session.data['whereDoYouLive']
    if (pay == "monthly"){
        res.redirect('/v20/ideation/first-month')
    }
    else if (pay == "weekly"){
        res.redirect('/v20/ideation/first-month-weekly')
    }
   
    else if (pay == "other"){
        res.redirect('/v20/ideation/check-payslip-dates-end')
    }
})


// router.post('/pay-checkbox', function(req, res) {
//     var noPayslip = req.body['waste'];

//     if (noPayslip === 'on') { // Checkbox is checked
//         res.redirect('/v20/no-payslip');
//     } else { // Checkbox is unchecked
//         res.redirect('/v20/has-payslip');
//     }
// });

router.post('/pay-checkbox', function(request, response) {

    var checked = request.session.data['waste']
    if (checked =="checked"){
        response.redirect("/v20/ideation/no-payslip")
    } else {
        response.redirect("/v20/ideation/task-list-2")
    }
})

router.post('/pay-checkbox-october', function(request, response) {

    var checked = request.session.data['waste']
    if (checked =="checked"){
        response.redirect("/v20/ideation/no-payslip-october")
    } else {
        response.redirect("/v20/ideation/task-list-3")
    }
})


router.post('/pay-checkbox-october-no-start', function(request, response) {

    var checked = request.session.data['waste']
    if (checked =="checked"){
        response.redirect("/v20/ideation/no-payslip-october-no-april")
    } else {
        response.redirect("/v20/ideation/pay-frequency-task-end-no-start")
    }
})

router.post('/pay-checkbox-october-no-start-2', function(request, response) {

    var checked = request.session.data['waste']
    if (checked =="checked"){
        response.redirect("/v20/ideation/no-payslip-october-no-april")
    } else {
        response.redirect("/v20/ideation/pay-frequency-ur")
    }
})

router.post('/v20-pay', function(req,res){
    var pay = req.session.data['pay-frequency']
    if (pay == "monthly"){
        res.redirect('/v20/monthly')
    }
    else if (pay == "weekly"){
        res.redirect('/v20/weekly')
    }
    else if (pay == "daily"){
        res.redirect('/v20/daily')
    }
    else if (pay == "both"){
        res.redirect('/v20/both')
    }
})

router.post('/yes-payslip-add', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/ideation/april-add')
    }
    else {
        res.redirect('/v20/ideation/pay-frequency-task')
    }

})

router.post('/yes-payslip-add-cya', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/ideation/april-add-cya')
    }
    else {
        res.redirect('/v20/check-your-answers-nhs-path')
    }

})

router.post('/yes-contract-add', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/ideation/contract-upload-task')
    }
    else {
        res.redirect('/v20/ideation/task-list')
    }

})

router.post('/yes-payslip-add-2', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/ideation/april-add')
    }
    else {
        res.redirect('/v20/ideation/pay-frequency-task')
    }

})

router.post('/yes-payslip-check', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/ideation/april-add')
    }
    else {
        res.redirect('/v20/check-your-answers-nhs-path')
    }

})

router.post('/yes-payslip-add-october', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/ideation/october-add')
    }
    else {
        res.redirect('/v20/ideation/pay-frequency-task-end')
    }

})

router.post('/yes-payslip-add-october-2', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/ideation/october-add')
    }
    else {
        res.redirect('/v20/ideation/pay-frequency-task-end')
    }

})

router.post('/yes-payslip-add-october-no-april', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/ideation/october-add-cya-ur')
    }
    else {
        res.redirect('/v20/ideation/pay-frequency-ur')
    }

})

router.post('/yes-payslip-add-october-no-april-ur', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/ideation/october-add-cya-ur-2')
    }
    else {
        res.redirect('/v20/ideation/task-list-3-no-april')
    }

})



router.post('/contracts-add-3-v20-ideation', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/ideation/extra-information')
    }
    else {
        res.redirect('/v20/check-your-answers-nhs-path')
    }

})
router.post('/contracts-add-3-v20-ideation-gaps', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/ideation/extra-information-gaps')
    }
    else {
        res.redirect('/v20/check-your-answers-gaps')
    }

})

router.post('/contracts-add-3-v20-warning', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/ideation/extra-information-gaps')
    }
    else {
        res.redirect('/v20/check-payslip-warning')
    }

})

router.post('/contracts-add-3-v20-dates', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/ideation/payslip-upload-start-2')
    }
    else {
        res.redirect('/v20/ideation/check-payslip-dates')
    }

})

router.post('/contracts-add-3-v20-dates-2', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/ideation/payslip-upload-start-3')
    }
    else {
        res.redirect('/v20/ideation/check-payslip-dates-end')
    }

})

router.post('/month-check', function(req,res){
    var month = req.session.data['passport-issued-month']
    if (month > 4){
        res.redirect('/v20/ideation/payslip-not-covered')
    }
    else {
        res.redirect('/v20/ideation/check-payslip-dates-end')
    }

})

router.post('/week-check', function(req,res){
    var day = req.session.data['passport-issued-day']
    if (day > 27){
        res.redirect('/v20/ideation/payslip-not-covered-weekly')
    }
    else if (day == 0){
        res.redirect('/v20/ideation/task-list-2')
    }
    else {
        res.redirect('/v20/ideation/check-payslip-dates-end')
    }

})

router.post('/last-month-check', function(req,res){
    var month = req.session.data['passport-issued-month']
    if (month < 10){
        res.redirect('/v20/ideation/last-payslip-not-covered')
    }
    else {
        res.redirect('/v20/ideation/check-dates')
    }

})

router.post('/last-week-check', function(req,res){
    var day = req.session.data['passport-issued-day']
    if (day < 19 ){
        res.redirect('/v20/ideation/last-payslip-not-covered-weekly')
    }
    else {
        res.redirect('/v20/ideation/check-dates')
    }

})

router.post('/pay-v20-end', function(req,res){
    var pay = req.session.data['whereDoYouLive']
    if (pay == "monthly"){
        res.redirect('/v20/ideation/last-month')
    }
    else if (pay == "weekly"){
        res.redirect('/v20/ideation/last-month-weekly')
    }
   
    else if (pay == "other"){
        res.redirect('/v20/extra-information')
    }
})


router.post('/pay-v20-task', function(req,res){
    var pay = req.session.data['whereDoYouLive']
    if (pay == "monthly"){
        res.redirect('/v20/ideation/yes-payslip')
    }
    else if (pay == "weekly"){
        res.redirect('/v20/ideation/yes-payslip-weekly')
    }
   
    else if (pay == "other"){
        res.redirect('/v20/ideation/task-list-2')
    }
})

router.post('/period-end-date', function(req,res){
    var pay = req.session.data['changedName']
    if (pay == "yes"){
        res.redirect('/v20/ideation/pay-frequency-task')
    }
    else if (pay == "no"){
        res.redirect('/v20/ideation/task-list-2')
    }
   
   
})
router.post('/period-end-date-october', function(req,res){
    var pay = req.session.data['changedName']
    if (pay == "yes"){
        res.redirect('/v20/ideation/pay-frequency-task-end')
    }
    else if (pay == "no"){
        res.redirect('/v20/ideation/task-list-3')
    }
   
   
})

router.post('/pay-v20-task-end', function(req,res){
    var pay = req.session.data['whereDoYouLive']
    if (pay == "monthly"){
        res.redirect('/v20/ideation/yes-payslip-october')
    }
    else if (pay == "weekly"){
        res.redirect('/v20/ideation/yes-payslip-weekly-october')
    }
   
    else if (pay == "other"){
        res.redirect('/v20/ideation/task-list-3')
    }
})

router.post('/pay-v20-task-end-no-start', function(req,res){
    var pay = req.session.data['whereDoYouLive']
    if (pay == "monthly"){
        res.redirect('/v20/ideation/yes-payslip-october-no-april')
    }
    else if (pay == "weekly"){
        res.redirect('/v20/ideation/yes-payslip-weekly-october')
    }
   
    else if (pay == "other"){
        res.redirect('/v20/ideation/task-list-3-no-april')
    }
})


router.post('/pay-v20-task-end-no-start-2', function(req,res){
    var pay = req.session.data['whereDoYouLive']
    if (pay == "monthly"){
        res.redirect('/v20/ideation/monthly-payslip-ur')
    }
    else if (pay == "weekly"){
        res.redirect('/v20/ideation/weekly-payslip-ur')
    }
   
    else if (pay == "other"){
        res.redirect('/v20/ideation/task-list-3-no-april')
    }
})
router.post('/month-check-task', function(req,res){
    var month = req.session.data['passport-issued-month']
    if (month > 4){
        res.redirect('/v20/ideation/payslip-not-covered-task')
    }
    else if (month == 0){
        res.redirect('/v20/ideation/task-list-2')
    }
    else {
        res.redirect('/v20/ideation/task-list-2')
    }

})

router.post('/weekly-check-task', function(req,res){
    var day = req.session.data['passport-issued-day']
    if (day > 27){
        res.redirect('/v20/ideation/weekly-payslip-not-covered-task')
    }
    else if (day == 0){
        res.redirect('/v20/ideation/task-list-2')
    }
    else {
        res.redirect('/v20/ideation/task-list-2')
    }

})

router.post('/last-month-check-task', function(req,res){
    


    const day = req.session.data['passport-issued-day'];
    const month = req.session.data['passport-issued-month'];
    const year = req.session.data['passport-issued-year'];

    // Reference date: 19 October 2020
    const referenceDate = new Date(2020, 9, 19); // Month is zero-based (October is 9)

    // Check if all fields are blank
    if (!day && !month && !year) {
        return res.redirect('/v20/ideation/task-list-3');
    }

    // Parse user input into a date
    const userDate = new Date(year, month - 1, day);

    // Validate and compare dates
    if (isNaN(userDate.getTime()) || userDate < referenceDate) {
        // Redirect to warning page if date is invalid or before 19 October 2020
        return res.redirect('/v20/ideation/last-payslip-not-covered-task');
    } else {
        // Redirect to task list page if date is on or after 19 October 2020
        return res.redirect('/v20/ideation/task-list-3');
    }

})

router.post('/last-week-check-task', function(req,res){
    var day = req.session.data['passport-issued-day']
    var month = req.session.data['passport-issued-month']

    var year = req.session.data['passport-issued-year']
    
    if (day == "" ){
        res.redirect('/v20/ideation/task-list-3')
    }
    else if (day > 0 && day < 19 || month < 10){
        res.redirect('/v20/ideation/last-payslip-not-covered-task')
    }
    
    else {
        res.redirect('/v20/ideation/task-list-3')
    }

})


router.post('/last-week-check-task-ur', function(req,res){
    var day = req.session.data['passport-issued-day']
    var month = req.session.data['passport-issued-month']

    if (day == "" ){
        res.redirect('/v20/ideation/task-list-3-no-april')
    }
    else if (day > 0 && day < 19 || month < 10){
        res.redirect('/v20/ideation/weekly-warning-ur')
    }
    
    else {
        res.redirect('/v20/ideation/task-list-3-no-april')
    }
    

    

})

router.post('/yes-payslip-october-no-april', function(req,res){
    var month = req.session.data['passport-issued-month']
    if (month < 10){
        res.redirect('/v20/ideation/last-payslip-not-covered-task-no-april')
    }
    else {
        res.redirect('/v20/ideation/october-cya-no-april')
    }

})

router.post('/last-payslip-ur', function(req, res) {
    const day = req.session.data['passport-issued-day'];
    const month = req.session.data['passport-issued-month'];
    const year = req.session.data['passport-issued-year'];

    // Reference date: 19 October 2020
    const referenceDate = new Date(2020, 9, 19); // Month is zero-based (October is 9)

    // Check if all fields are blank
    if (!day && !month && !year) {
        return res.redirect('/v20/ideation/task-list-3-no-april');
    }

    // Parse user input into a date
    const userDate = new Date(year, month - 1, day);

    // Validate and compare dates
    if (isNaN(userDate.getTime()) || userDate < referenceDate) {
        // Redirect to warning page if date is invalid or before 19 October 2020
        return res.redirect('/v20/ideation/warning-no-april');
    } else {
        // Redirect to task list page if date is on or after 19 October 2020
        return res.redirect('/v20/ideation/task-list-3-no-april');
    }
});



//V20 MVP NEW ROUTES

//ROUTE TO SKIP VALIDATION

router.post('/pay-checkbox-mvp', function(request, response) {

    var checked = request.session.data['waste']
    if (checked =="checked"){
        response.redirect("/v20-mvp/ideation/no-payslip")
    } else {
        response.redirect("/v20-mvp/ideation/task-list-2")
    }
})

router.post('/pay-checkbox-october-mvp', function(request, response) {

    var checked = request.session.data['waste']
    if (checked =="checked"){
        response.redirect("/v20-mvp/ideation/no-payslip-october")
    } else {
        response.redirect("/v20-mvp/ideation/task-list-3")
    }
})


router.post('/contracts-add-mvp', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp/ideation/extra-information')
    }
    else {
        res.redirect('/v20-mvp/check-your-answers-nhs-path')
    }

})
router.post('/contracts-add-gaps-mvp', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp/ideation/extra-information-gaps')
    }
    else {
        res.redirect('/v20-mvp/check-your-answers-gaps')
    }

})

router.post('/yes-contract-add-mvp', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp/ideation/contract-upload-task')
    }
    else {
        res.redirect('/v20-mvp/ideation/task-list')
    }

})

router.post('/yes-contract-add-mvp-no-js', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp-no-js/ideation/contract-upload-task')
    }
    else {
        res.redirect('/v20-mvp-no-js/ideation/task-list')
    }

})

router.post('/pay-checkbox-october-no-start-mvp', function(request, response) {

    var checked = request.session.data['waste']
    if (checked =="checked"){
        response.redirect("/v20-mvp/ideation/no-payslip-october-no-april")
    } else {
        response.redirect("/v20-mvp/ideation/task-list-3-no-april")
    }
})

router.post('/pay-checkbox-mvp-no-js', function(request, response) {

    var checked = request.session.data['waste']
    if (checked =="checked"){
        response.redirect("/v20-mvp-no-js/ideation/no-payslip")
    } else {
        response.redirect("/v20-mvp-no-js/ideation/april-cya")
    }
})

router.post('/v20-mvp-ihs', function(req,res){
    var contacted = req.session.data['doug-ihs-question-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp/applicant-visa-type')
    }
    else {
        res.redirect('/v20-mvp/not-entitled-rr')
    }
})



router.post('/yes-payslip-add-mvp-no-js', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp-no-js/ideation/april-add')
    }
    else {
        res.redirect('/v20-mvp-no-js/ideation/task-list-2')
    }

})


router.post('/pay-checkbox-october-mvp-no-js', function(request, response) {

    var checked = request.session.data['waste']
    if (checked =="checked"){
        response.redirect("/v20-mvp-no-js/ideation/no-payslip-october")
    } else {
        response.redirect("/v20-mvp-no-js/ideation/october-cya")
    }
})



router.post('/yes-payslip-add-october-mvp-no-js', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp-no-js/ideation/october-add')
    }
    else {
        res.redirect('/v20-mvp-no-js/ideation/task-list-3')
    }

})


router.post('/yes-payslip-add-october-2', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp-no-js/ideation/october-add')
    }
    else {
        res.redirect('/v20-mvp-no-js/ideation/task-list-3')
    }

})


router.post('/yes-payslip-add-october-2-no-js', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp-no-js/ideation/october-add')
    }
    else {
        res.redirect('/v20-mvp-no-js/ideation/task-list-3')
    }

})



router.post('/contracts-add-mvp-no-js', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp-no-js/ideation/extra-information')
    }
    else {
        res.redirect('/v20-mvp-no-js/check-your-answers-nhs-path')
    }

})


router.post('/contracts-add-gaps-mvp-no-js', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp-no-js/ideation/extra-information-gaps')
    }
    else {
        res.redirect('/v20-mvp-no-js/check-your-answers-gaps')
    }

})

router.post('/pay-checkbox-october-no-start-mvp-no-js', function(request, response) {

    var checked = request.session.data['waste']
    if (checked =="checked"){
        response.redirect("/v20-mvp-no-js/ideation/no-payslip-october-no-april")
    } else {
        response.redirect("/v20-mvp-no-js/ideation/october-cya-no-april")
    }
})

router.post('/yes-payslip-add-october-no-april-no-js', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp-no-js/ideation/october-add-cya-ur')
    }
    else {
        res.redirect('/v20-mvp-no-js/ideation/task-list-3-no-april')
    }

})

// LIVE PROTOTYPE

// v18 - H&SC////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/doug-ihs-question-live', function(req,res){
    var contacted = req.session.data['doug-ihs-question-live']
    if (contacted == "yes"){
        res.redirect('/live/applicant-visa-type')
    }
    else {
        res.redirect('/live/not-entitled-rr')
    }
})

router.post('/ihs-tier2-hc-live', function(req,res){
    var contacted = req.session.data['ihs-tier2-hc-live']
    if (contacted == "yes"){
        res.redirect('/live/ihs-tier2-ukvi')
    }
    else {
        res.redirect('/live/work-question')
    }
})

router.post('/work-question-live', function(req,res){
    var contacted = req.session.data['work-question-live']
    if (contacted == "yes"){
        res.redirect('/live/6-months')
    }
    else {
        res.redirect('/live/not-entitled')
    }
})

router.post('/6-months-live', function(req,res){
    var contacted = req.session.data['6-months-live']
    if (contacted == "yes"){
        res.redirect('/live/average-time')
    }
    else {
        res.redirect('/live/not-entitled')
    }

})

router.post('/average-time-live', function(req,res){
    var contacted = req.session.data['average-time-live']
    if (contacted == "yes"){
        res.redirect('/live/tier2-declaration')
    }
    else {
        res.redirect('/live/not-entitled-rr')
    }

})

router.post('/dependant-question-live', function(req,res){
    var contacted = req.session.data['dependant-question-live']
    if (contacted == "yes"){
        res.redirect('/live/dependant-details')
    }
    else {
        res.redirect('/live/non-nhs-path')
    }

})

router.post('/dependant-details-live', function(req,res){
    var contacted = req.session.data['dependant-details-live']
    if (contacted == "yes"){
        res.redirect('/live/dependant-details2')
    }
    else {
        res.redirect('/live/claim-dates-new')
    }

})

router.post('/subscription-question-live', function(req,res){
    var contacted = req.session.data['subscription-question-live']
    if (contacted == "yes"){
        res.redirect('/live/non-nhs-path')
    }
    else {
        res.redirect('/live/non-nhs-path')
    }

})

router.post('/non-nhs-path-another-job2-live', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job2-live']
    if (contacted == "yes"){
        res.redirect('/live/non-nhs-path-another-job')
    }
    else {
        res.redirect('/live/attachments')
    }

})

router.post('/attachments-add-live', function(req,res){
    var contacted = req.session.data['attachments-add-live']
    if (contacted == "yes"){
        res.redirect('/live/upload-of-payslips')
    }
    else {
        res.redirect('/live/extra-information')
    }

})

router.post('/attachments-add2-live', function(req,res){
    var contacted = req.session.data['attachments-add2-live']
    if (contacted == "yes"){
        res.redirect('/live/extra-information')
    }
    else {
        res.redirect('/live/extra-information')
    }

})

router.post('/live/payslips-or-contract', function(req,res){
    var contacted = req.session.data['payslips-or-contract']
    if (contacted == "payslips"){
        res.redirect('/live/upload-of-payslips')
    }
    else {
        res.redirect('/live/upload-of-contract')
    }

})

router.post('/non-nhs-path-another-job-live', function(req,res){
    var contacted = req.session.data['non-nhs-path-another-job-live']
    if (contacted == "yes"){
        res.redirect('/live/non-nhs-path-another-job')
    }
    else {
        res.redirect('/live/upload-of-contract')
    }

})

router.post('/upload-of-evidence-add2-live', function(req,res){
    var contacted = req.session.data['upload-of-evidence-add2-live']
    if (contacted == "yes"){
        res.redirect('/live/non-nhs-path-another-job')
    }
    else {
        res.redirect('/live/upload-of-contract')
    }

})

 router.post('/doug-ihs-tier2-question-live', function(req,res){
    var contacted = req.session.data['doug-ihs-tier2-question-live']
    if (contacted == "tier2"){
       res.redirect('/live/ihs-tier2-healthcare')
    }
    else
        if (contacted == "tier5"){
            res.redirect('/live/tier5-ko')
        }
        else
        {
            res.redirect('/live/work-question')
        }
})

router.post('/contracts-add-live', function(req,res){
    var contacted = req.session.data['contracts-add-live']
    if (contacted == "yes"){
        res.redirect('/live/upload-of-evidence')
    }
    else {
        res.redirect('/live/extra-information')
    }

})

router.post('/contracts-add2-live', function(req,res){
    var contacted = req.session.data['contracts-add2-live']
    if (contacted == "yes"){
        res.redirect('/live/extra-information')
    }
    else {
        res.redirect('/live/extra-information')
    }

})

router.post('/contracts-add-3-live', function(req,res){
    var contacted = req.session.data['contracts-add-3-live']
    if (contacted == "yes"){
        res.redirect('/live/extra-information')
    }
    else {
        res.redirect('/live/check-your-answers-nhs-path')
    }

})

router.post('/live-dependant-question', function(req,res){
    var contacted = req.session.data['dependant-question-live']
    if (contacted == "yes"){
        res.redirect('/live/dependant-details')
    }
    else {
        res.redirect('/live/claim-dates-new')
    }


    
})


//payslip checker

router.post('/payslip-checker', function(req,res){
    var pay = req.session.data['whereDoYouLive']
    if (pay == "monthly"){
        res.redirect('/v20/payslip-checker/yes-payslip')
    }
    else if (pay == "weekly"){
        res.redirect('/v20/payslip-checker/yes-payslip-weekly')
    }
   
    else if (pay == "other"){
        res.redirect('/v20/payslip-checker/kickout')
    }
})


router.post('/month-check-checker', function(req,res){
    var month = req.session.data['passport-issued-month']
    if (month > 4){
        res.redirect('/v20/payslip-checker/pay-frequency-task-end-fail')
    }
    else if (month == 0){
        res.redirect('/v20/payslip-checker/pay-frequency-task-end-pass')
    }
    else {
        res.redirect('/v20/payslip-checker/pay-frequency-task-end-pass')
    }

})

router.post('/weekly-check-task', function(req,res){
    var day = req.session.data['passport-issued-day']
    if (day > 27){
        res.redirect('/v20/payslip-checker/weekly-payslip-not-covered-task')
    }
    else if (day == 0){
        res.redirect('/v20/ideation/pay-frequency-task-end')
    }
    else {
        res.redirect('/v20/ideation/pay-frequency-task-end')
    }

})

router.post('/last-month-check-checker', function(req,res){
    


    const day = req.session.data['passport-issued-day'];
    const month = req.session.data['passport-issued-month'];
    const year = req.session.data['passport-issued-year'];

    // Reference date: 19 October 2020
    const referenceDate = new Date(2020, 9, 19); // Month is zero-based (October is 9)

    // Check if all fields are blank
    if (!day && !month && !year) {
        return res.redirect('/v20/payslip-checker/done-pass');
    }

    // Parse user input into a date
    const userDate = new Date(year, month - 1, day);

    // Validate and compare dates
    if (isNaN(userDate.getTime()) || userDate < referenceDate) {
        // Redirect to warning page if date is invalid or before 19 October 2020
        return res.redirect('/v20/payslip-checker/done-last-month-fail');
    } else {
        // Redirect to task list page if date is on or after 19 October 2020
        return res.redirect('/v20/payslip-checker/done-pass');
    }

})

router.post('/last-week-check-checker', function(req,res){
    var day = req.session.data['passport-issued-day']
    var month = req.session.data['passport-issued-month']

    var year = req.session.data['passport-issued-year']
    
    if (day == "" ){
        res.redirect('/v20/ideation/task-list-3')
    }
    else if (day > 0 && day < 19 || month < 10){
        res.redirect('/v20/ideation/last-payslip-not-covered-task')
    }
    
    else {
        res.redirect('/v20/ideation/task-list-3')
    }

})

router.post('/pay-v20-task-end-pass', function(req,res){
    var pay = req.session.data['whereDoYouLive']
    if (pay == "monthly"){
        res.redirect('/v20/payslip-checker/yes-payslip-october-pass')
    }
    else if (pay == "weekly"){
        res.redirect('/v20/payslip-checker/yes-payslip-weekly-october-pass')
    }
   
    else if (pay == "other"){
        res.redirect('/v20/payslip-checker/kickout')
    }
})

router.post('/pay-v20-task-end-fail', function(req,res){
    var pay = req.session.data['whereDoYouLive']
    if (pay == "monthly"){
        res.redirect('/v20/payslip-checker/yes-payslip-october-fail')
    }
    else if (pay == "weekly"){
        res.redirect('/v20/payslip-checker/yes-payslip-weekly-october-fail')
    }
   
    else if (pay == "other"){
        res.redirect('/v20/payslip-checker/kickout')
    }
})


router.post('/last-month-check-fail', function(req,res){
    


    const day = req.session.data['passport-issued-day'];
    const month = req.session.data['passport-issued-month'];
    const year = req.session.data['passport-issued-year'];

    // Reference date: 19 October 2020
    const referenceDate = new Date(2020, 9, 19); // Month is zero-based (October is 9)

    // Check if all fields are blank
    if (!day && !month && !year) {
        return res.redirect('/v20/payslip-checker/done-first-month-fail');
    }

    // Parse user input into a date
    const userDate = new Date(year, month - 1, day);

    // Validate and compare dates
    if (isNaN(userDate.getTime()) || userDate < referenceDate) {
        // Redirect to warning page if date is invalid or before 19 October 2020
        return res.redirect('/v20/payslip-checker/done-both-month-fail');
    } else {
        // Redirect to task list page if date is on or after 19 October 2020
        return res.redirect('/v20/payslip-checker/done-first-month-fail');
    }

})


//V20-UR ROUTES - PPOST MVP FEATURES BUT NO PERIOD END DATE

router.post('/pay-checkbox-ur', function(request, response) {

    var checked = request.session.data['waste']
    if (checked =="checked"){
        response.redirect("/v20-UR/ideation/no-payslip")
    } else {
        response.redirect("/v20-UR/ideation/task-list-2")
    }
})

router.post('/pay-checkbox-october-ur', function(request, response) {

    var checked = request.session.data['waste']
    if (checked =="checked"){
        response.redirect("/v20-UR/ideation/no-payslip-october")
    } else {
        response.redirect("/v20-UR/ideation/task-list-3")
    }
})


// checklist routes

router.post('/checklist-checker', function(req,res){
    var pay = req.session.data['whereDoYouLive']
    if (pay == "monthly"){
        res.redirect('/v20/checklist/monthly')
    }
    else if (pay == "weekly"){
        res.redirect('/v20/checklist/weekly')
    }
   
    else if (pay == "other"){
        res.redirect('/v20/checklist/weekly')
    }
})


//live student 
// live-student - Students ////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/live-student/visa-date', function (req, res) {
    var visaDate = req.session.data['visa-date'];
    switch (visaDate) {
        case undefined:
            res.redirect('/live-student/ehic-card');
            break;
        case "yes":
            res.redirect('/live-student/ehic-card');
            break;
        case "no":
            res.redirect('/live-student/kick-out-student');
            break;
    };
});

router.post('/live-student/ehic-card', function (req, res) {
    var ehic = req.session.data['ehic'];
    switch (ehic) {
        case undefined:
            res.redirect('/live-student/full-time-education');
            break;
        case "yes":
            res.redirect('/live-student/full-time-education');
            break;
        case "no":
            res.redirect('/live-student/kick-out-student');
            break;
    };
});

router.post('/live-student/full-time-education', function (req, res) {
    var student = req.session.data['student'];
    switch (student) {
        case undefined:
            res.redirect('/live-student/work-question');
            break;
        case "yes":
            res.redirect('/live-student/work-question');
            break;
        case "no":
            res.redirect('/live-student/kick-out-student');
            break;
    };
});

router.post('/live-student/work-question', function (req, res) {
    var work = req.session.data['work'];
    switch (work) {
        case undefined:
            res.redirect('/live-student/residency');
            break;
        case "yes":
            res.redirect('/live-student/kick-out-student');
            break;
        case "no":
            res.redirect('/live-student/residency');
            break;
    };
});

router.post('/live-student/dependant/work-question-dependant', function (req, res) {
    var work = req.session.data['work-dependant'];
    switch (work) {
        case undefined:
            res.redirect('/live-student/dependant/residency-dependant');
            break;
        case "yes":
            res.redirect('/live-student/kick-out-dependant');
            break;
        case "no":
            res.redirect('/live-student/dependant/residency-dependant');
            break;
    };
});


router.post('/live-student/ihs-paid', function (req, res) {
    var addSecondDependant = req.session.data['ihs-paid'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/live-student/visa-date');
            break;
            case "yes":
            res.redirect('/live-student/visa-date');
            break;
            case "no":
            res.redirect('/live-student/kick-out-student');
            break;
    };
});

router.post('/live-student/residency', function (req, res) {
    var residency = req.session.data['residency'];
    switch (residency) {
        case undefined:
            res.redirect('/live-student/check-eligibility-details');
            break;
            case "no":
            res.redirect('/live-student/kick-out-student');
            break;
            case "yes":
            res.redirect('/live-student/check-eligibility-details');
            break;
    };
});

router.post('/live-student/swiss-national', function (req, res) {
    var swiss = req.session.data['swiss'];
    switch (swiss) {
        case undefined:
            res.redirect('/live-student/check-eligibility-details');
            break;
            case "yes":
            res.redirect('/live-student/swiss-path');
            break;
            case "no":
            res.redirect('/live-student/check-eligibility-details');
            break;
    };
});



router.post('/ehic-add-live-student', function(req,res){
    var contacted = req.session.data['ehic-add-live-student']
    if (contacted == "yes"){
        res.redirect('/live-student/upload-of-ehic')
    }
    else {
        res.redirect('/live-student/attachments-letter')
    }

})

router.post('/letter-add-live-student', function(req,res){
    var contacted = req.session.data['letter-add-live-student']
    if (contacted == "yes"){
        res.redirect('/live-student/attachments-letter')
    }
    else {
        res.redirect('/live-student/dependant-question')
    }

})

router.post('/dependant-ehic-add-live-student', function(req,res){
    var contacted = req.session.data['dependant-ehic-add-live-student']
    if (contacted == "yes"){
        res.redirect('/live-student/dependant/upload-of-ehic')
    }
    else {
        res.redirect('/live-student/dependant-add')
    }

})

router.post('/live-student/dependant-details-delete', function (req, res) {
    var addSecondDependant = req.session.data['dependant-details-delete'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/live-student/dependant/work-question-dependant');
            break;
            case "yes":
            res.redirect('/live-student/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/live-student/check-details');
            break;
    };
})
;


router.post('/live-student/dependant-question', function (req, res) {
    var addDependant = req.session.data['add-dependant'];
    switch (addDependant) {
        case undefined:
            res.redirect('/live-student/check-details');
            break;
            case "yes":
            res.redirect('/live-student/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/live-student/check-details');
            break;
    };
});

router.post('/live-student/dependant/dependant-question', function (req, res) {
    var addDependant = req.session.data['add-dependant'];
    switch (addDependant) {
        case undefined:
            res.redirect('/live-student/dependant/work-question-dependant');
            break;
            case "yes":
            res.redirect('/live-student/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/live-student/check-details');
            break;
    };
});

router.post('/live-student/dependant-add', function (req, res) {
    var addSecondDependant = req.session.data['add-second-dependant'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/live-student/check-details');
            break;
            case "yes":
            res.redirect('/live-student/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/live-student/check-details');
            break;
    };
});

router.post('/live-student/dependant-add2', function (req, res) {
    var addSecondDependant = req.session.data['add-second-dependant'];
    switch (addSecondDependant) {
        case undefined:
            res.redirect('/live-student/check-details');
            break;
            case "yes":
            res.redirect('/live-student/dependant/work-question-dependant');
            break;
            case "no":
            res.redirect('/live-student/check-details');
            break;
    };
});

router.post('/live-student/dependant/same-address', function (req, res) {
    var work = req.session.data['same-address'];
    switch (work) {
        case undefined:
            res.redirect('/live-student/dependant/postcode');
            break;
            case "yes":
            res.redirect('/live-student/dependant/upload-of-ehic');
            break;
            case "no":
            res.redirect('/live-student/dependant/postcode');
            break;
    };
});


router.post('/checklist-evidence', function(req,res){
    var contacted = req.session.data['average-time-v20']
    if (contacted == "yes"){
        res.redirect('/v20/subscription-question')
    }
    else {
        res.redirect('/v20/checklist-warning')
    }

})


router.post('/change-start-date', function(req,res){
    var contacted = req.session.data['6-months-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp/ideation/check-contract-changed')
    }
    else {
        res.redirect('/v20-mvp/check-your-answers-nhs-path')
    }

})



router.post('/pay-checkbox-cya', function(request, response) {

    var checked = request.session.data['waste']
    if (checked =="checked"){
        response.redirect("/v20-mvp/ideation/extra-information-gaps")
    } else {
        response.redirect("/v20-mvp/check-your-answers-nhs-path")
    }
})

router.post('/pay-checkbox-gaps-fix', function(request, response) {

    var checked = request.session.data['waste']
    if (checked =="checked"){
        response.redirect("/v20-mvp/check-your-answers-gaps")
    } else {
        response.redirect("/v20-mvp/check-your-answers-nhs-path")
    }
})

router.post('/yes-contract-add-changed', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20-mvp/ideation/contract-upload-task-changed')
    }
    else {
        res.redirect('/v20-mvp/ideation/task-list-changed')
    }

})

router.post('/pay-checkbox-mvp-no-js-extra', function(request, response) {

    var checked = request.session.data['waste']
    if (checked =="checked"){
        response.redirect("/v20-mvp-no-js/ideation/extra-information-gaps")
    } else {
        response.redirect("/v20-mvp-no-js/ideation/april-cya-extra")
    }
})

router.post('/pay-checkbox-mvp-no-js-cya', function(request, response) {

    var checked = request.session.data['waste']
    if (checked =="checked"){
        response.redirect("/v20-mvp-no-js/ideation/check-extra-info-gaps")
    } else {
        response.redirect("/v20-mvp-no-js/ideation/april-cya-extra-cya")
    }
})



router.post('/contract-filter', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20-filters/ideation/contract-upload-task')
    }
    else {
        res.redirect('/v20-filters/ideation/extra-info-filter')
    }

})

router.post('/extra-info-filter', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20-filters/ideation/extra-information')
    }
    else {
        res.redirect('/v20-filters/check-your-answers-nhs-path')
    }

})


router.post('/extra-info-evidence-filter', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20-filters/ideation/extra-information-file-split')
    }
    else {
        res.redirect('/v20-filters/check-your-answers-nhs-path')
    }

})

router.post('/pay-checkbox-mega', function(request, response) {

    var checked = request.session.data['waste']
    if (checked =="checked"){
        response.redirect("/v20/mega-task-list/no-payslip")
    } else {
        response.redirect("/v20/mega-task-list/task-list-2")
    }
})

router.post('/contract-filter-mega', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/mega-task-list/mega-contract')
    }
    else {
        res.redirect('/v20/mega-task-list/task-list-9')
    }

})

router.post('/extra-info-filter-mega', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/mega-task-list/mega-extra')
    }
    else {
        res.redirect('/v20/mega-task-list/task-list-10')
    }

})

router.post('/contract-filter-mega-gap', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/mega-task-list/mega-contract-gap')
    }
    else {
        res.redirect('/v20/mega-task-list/task-list-9-gap')
    }

})

router.post('/extra-info-filter-mega-gap', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/mega-task-list/mega-extra-gap')
    }
    else {
        res.redirect('/v20/mega-task-list/task-list-10-gap')
    }

})


router.post('/extra-info-filter-checkbox', function(req,res){
    var contacted = req.session.data['contracts-add-3-v20']
    if (contacted == "yes"){
        res.redirect('/v20/ideation/checkbox-extra-info')
    }
    else {
        res.redirect('/v20/check-your-answers-nhs-path')
    }

})


module.exports = function(router) {

  router.post('/v20/ideation/checkbox-extra-info', function (req, res) {
  let months = req.body.months;

  if (!Array.isArray(months) && months) {
    months = [months];
  }

  req.session.data['months'] = months || [];
  req.session.data['status'] = {}; // reset status
  res.redirect('/v20/ideation/checkbox-task-list');
});


  // Page 2 → GET task list
  router.get('/v20/ideation/checkbox-task-list', function (req, res) {
    if (!req.session.data['months']) req.session.data['months'] = [];
    if (!req.session.data['status']) req.session.data['status'] = {};

    res.render('v20/ideation/checkbox-task-list', {
      data: req.session.data
    });
  });

  // Page 3 → GET month page with dynamic H1
  router.get('/v20/ideation/checkbox-month', function (req, res) {
    const month = req.query.month; // must come from ?month=... in URL
    if (!month) return res.redirect('/v20/ideation/checkbox-task-list');

    res.render('v20/ideation/checkbox-month', {
      month: month,
      data: req.session.data
    });
  });

  // Page 3 → POST → mark month completed and return to task list
  router.post('/v20/ideation/checkbox-month', function (req, res) {
    const month = req.body.month;
    if (!req.session.data['status']) req.session.data['status'] = {};
    req.session.data['status'][month] = 'completed';
    res.redirect('/v20/ideation/checkbox-task-list');
  });

};



router.post('/dependant-details-journey', function(req,res){
    var contacted = req.session.data['dependant-details-v20']
    if (contacted == "yes"){
        res.redirect('/v20/dependant/dependant-details')
    }
    else {
        res.redirect('/v20/dependant/check-your-answers')
    }

})

router.post('/dependant-part', function(req,res){
    var contacted = req.session.data['dependant-details-v20']
    if (contacted == "yes"){
        res.redirect('/v20/dependant/dependant-details')
    }
    else {
        res.redirect('/v20/dependant/kickout')
    }

})



router.use('/user-research/health-social-care/july-2023', require('./views/user-research/health-social-care/july-2023/_routes'));




module.exports = router;

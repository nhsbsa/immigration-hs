const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Branching

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

//v2

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

//v3

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

//v4

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

router.post('/ihs-tier2-question-reapply', function(req,res){
    var contacted = req.session.data['ihs-tier2-question-reapply']
    if (contacted == "yes"){
        res.redirect('/reapply/ihs-tier2-healthcare')
    }
    else {
        res.redirect('/reapply/ihs-number-130')
    }

})

module.exports = router;
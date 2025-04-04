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
    var contacted = req.session.data['doug-ihs-question-v20']
    if (contacted == "yes"){
        res.redirect('yes-answer')
    }
    else {
        res.redirect('/v20/not-entitled-rr')
    }
})



module.exports = router;

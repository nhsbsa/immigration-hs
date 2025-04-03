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

router.post('/personal-details-check', function(req, res) {
    var detailsCorrect = req.body.changedName;  // Using req.body to get form data
    if (detailsCorrect === "yes") {
        res.redirect('/v1/details-correct');
    } else {
        res.redirect('/v1/details-incorrect');
    }
});



module.exports = router;

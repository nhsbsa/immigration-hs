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

// Additional routes would follow the same pattern... replacing "v19" with "live-student"

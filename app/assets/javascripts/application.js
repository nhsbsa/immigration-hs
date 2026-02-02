/* global $ */

//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//


$(document).ready(function () {
})

$(document).ready(function () {
  window.MOJFrontend.initAll()

  if(typeof MOJFrontend.MultiFileUpload !== 'undefined') {
    new MOJFrontend.MultiFileUpload({
      container: $('.moj-multi-file-upload'),
      uploadUrl: '/ajax-upload-url',
      deleteUrl: '/ajax-delete-url'
    });
  }
    });

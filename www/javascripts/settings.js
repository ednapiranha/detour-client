define(['jquery'],
  function ($) {
  'use strict';

  var statusTimer = function (status, callback) {
    setTimeout(function () {
      status.removeClass('on');

      if (callback) {
        self.form
          .addClass('hidden');
        body.removeClass('fixed');
        body.find('.overlay').fadeOut();
      }
    }, 2200); // milliseconds
  };

  return {
    body: $('body'),
    status: $('#status'),
    statusTimer: statusTimer,
    CHAR_MAX: 250,
    CONTACT_KEY: 'detourContacts'
  };
});

define(['jquery', 'message', 'settings', 'local', 'nunjucks', 'templates'],
  function($, Message, settings, local, nunjucks) {
  'use strict';

  var body = $('body');
  var currentUser = localStorage.getItem('personaEmail') || undefined;

  var API_URL = local.api;

  var message = new Message();

  return {
    login: function () {
      navigator.id.get(function (assertion) {
        if (!assertion) {
          return;
        }

        $.ajax({
          url: API_URL + '/authenticate',
          type: 'POST',
          data: { assertion: assertion },
          dataType: 'json',
          cache: false
        }).done(function (data) {
          if (data.status === 'okay') {
            localStorage.setItem('personaEmail', res.email);
            body.find('#inner-wrapper').html(
              nunjucks.env.getTemplate('dashboard.html').render()
            );
            message.getAll(nunjucks);
          } else {
            self.status
            .addClass('error')
              .text('There was an error logging in')
              .addClass('on');

            settings.statusTimer(self.status);
          }
        });
      });
    },
    logout: function () {
      $.ajax({
        url: API_URL + '/logout',
        type: 'POST',
        cache: false,
        success: function (res, status, xhr) {
          localStorage.removeItem('personaEmail');
          body.find('#inner-wrapper').html(
            nunjucks.env.getTemplate('landing.html').render()
          );
        },
        error: function (res, status, xhr) {
          console.log('logout failure ', res);
        }
      });
    }
  }
});

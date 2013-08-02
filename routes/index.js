'use strict';

var gravatar = require('gravatar');

var message = require('../lib/message');
var contact = require('../lib/contact');
var setting = require('../lib/setting');

module.exports = function(app, client, nconf, isLoggedIn) {
  app.get('/', function (req, res) {
    res.render('index', {
      authenticated: !!req.session.email
    });
  });

  app.get('/message/list/:id', isLoggedIn, function (req, res) {
    message.getMessage(req, client, function(err, msg) {
      res.render('_message', {
        layout: false,
        authenticated: true,
        message: msg[0]
      });
    });
  });

  app.get('/landing', function (req, res) {
    if (req.session.email) {

      setting.getEmailNotification(req, client, function (email) {
        if (email) {
          req.session.emailNotification = true;
        } else {
          req.session.emailNotification = false;
        }

        message.getRecent(req, client, function(err, messages) {
          res.render('_dashboard', {
            layout: false,
            authenticated: true,
            messages: messages
          });
        });
      });
    } else {
      res.render('_landing', {
        layout: false,
        authenticated: false
      });
    }
  });

  app.post('/message', isLoggedIn, function (req, res) {
    message.create(req, client, nconf, function (err, id) {
      if (err) {
        res.status(500);
        res.json({ message: 'please choose a contact' });
      } else {
        var isSelf = false;

        if (req.session.email.toLowerCase() === req.body.email.trim().toLowerCase()) {
          isSelf = true;
        }

        res.json({
          message: 'okay',
          isSelf: isSelf,
          id: id
        });
      }
    });
  });

  app.get('/message/:key', isLoggedIn, function (req, res) {
    message.view(req, client, function (err, resp) {
      if (err) {
        res.status(500);
        res.json({ message: 'not authorized' });
      } else {
        res.json({ message: resp });
      }
    });
  });

  app.post('/contact', isLoggedIn, function (req, res) {
    contact.add(req, client, function (err, resp) {
      if (err) {
        res.status(500);
        res.json({ message: 'invalid email' });
      } else {
        res.json({ message: 'okay' });
      }
    });
  });

  app.delete('/contact', isLoggedIn, function (req, res) {
    contact.delete(req, client, function (err, resp) {
      if (err) {
        res.status(500);
        res.json({ message: 'could not delete contact' });
      } else {
        res.json({ message: 'okay' });
      }
    });
  });

  app.post('/emailNotification', isLoggedIn, function (req, res) {
    setting.addEmailNotification(req, client, function (err, resp) {
      if (err) {
        res.status(500);
        res.json({ message: 'could not add email notification' });
      } else {
        req.session.emailNotification = resp;
        res.json({ message: resp });
      }
    });
  });

  app.get('/contacts', isLoggedIn, function (req, res) {
    contact.getAll(req, client, function (err, contacts) {
      if (err) {
        res.status(500);
        res.render('_500', {
          layout: false
        });
      } else {
        var contactsList = [];

        for (var i = 0; i < contacts.length; i ++) {
          contactsList.push({
            avatar: gravatar.url(contacts[i], {}, true),
            email: contacts[i]
          })
        }

        if (contactsList.length > 0) {
          res.render('_contacts', {
            layout: false,
            contacts: contactsList
          });
        } else {
          res.render('_add_contact', {
            layout: false
          });
        }
      }
    });
  });

  app.post('/logout', isLoggedIn, function (req, res) {
    req.session.email = null;
    req.session.apiKey = null;
    res.json({
      message: 'logged out'
    })
  });
};

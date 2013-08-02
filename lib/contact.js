'use strict';

var KEYID = 'detour-message';

exports.add = function (req, client, callback) {
  var email = req.body.email.trim();
  if (email.length < 5) {
    callback(new Error('Invalid email'));
  } else {
    client.sadd(KEYID + ':contacts:' + req.session.email.toLowerCase(), email.toLowerCase(), function (err, resp) {
      if (err) {
        callback(err);
      } else {
        callback(null, resp);
      }
    });
  }
};

exports.delete = function (req, client, callback) {
  client.srem(KEYID + ':contacts:' + req.session.email.toLowerCase(), req.body.email.trim().toLowerCase(), function (err, resp) {
    if (err) {
      callback(err);
    } else {
      callback(null, resp);
    }
  });
};

exports.getAll = function (req, client, callback) {
  client.smembers(KEYID + ':contacts:' + req.session.email.toLowerCase(), function (err, contacts) {
    if (err) {
      callback(err);
    } else {
      callback(null, contacts);
    }
  });
};

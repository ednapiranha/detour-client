(function() {
var templates = {};
templates["contacts.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h1>Choose a contact</h1>\n<h2>or\n  <a href=\"javascript:;\" data-action=\"edit-contacts\">add one</a>\n</h2>\n<ol id=\"contacts\">\n  ";
frame = frame.push();
var t_2 = runtime.contextOrFrameLookup(context, frame, "contacts");
if(t_2 !== undefined) {for(var t_1=0; t_1 < t_2.length; t_1++) {
var t_3 = t_2[t_1];
frame.set("contact", t_3);
output += "\n    <li>\n      <a href=\"javascript:;\" data-action=\"contact-add\" data-email=\"";
output += runtime.suppressValue(runtime.memberLookup((t_3),"email", env.autoesc), env.autoesc);
output += "\"\n        data-avatar=\"";
output += runtime.suppressValue(runtime.memberLookup((t_3),"avatar", env.autoesc), env.autoesc);
output += "\">\n        <img src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_3),"avatar", env.autoesc), env.autoesc);
output += "\" class=\"avatar\" data-action=\"contact-add\">\n        <span data-action=\"contact-add\">";
output += runtime.suppressValue(runtime.memberLookup((t_3),"email", env.autoesc), env.autoesc);
output += "</span>\n      </a>\n    </li>\n  ";
}
}frame = frame.pop();
output += "\n</ol>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
root: root
};

})();
templates["dashboard.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<header>\n  <a href=\"javascript:;\" data-action=\"new-message\" id=\"new-message\">New</a>\n  <a href=\"javascript:;\" data-action=\"messages\" id=\"messages-inbox\">Messages</a>\n  <a href=\"javascript:;\" data-action=\"settings-form\">Settings</a>\n  <a href=\"javascript:;\" data-action=\"logout\">Log out</a>\n</header>\n<img id=\"preview-img\" class=\"hidden\" width=\"320\">\n<div id=\"messages\">\n  <div id=\"message-view\">\n    <ol class=\"messages\"></ol>\n  </div>\n\n  <div id=\"message-detail\" class=\"hidden\"></div>\n\n  <form method=\"post\" id=\"message-form\" enctype=\"multipart/form-data\" class=\"hidden\">\n    <span id=\"current-contact\"></span>\n    <textarea name=\"message\" placeholder=\"write your message (maximum 250 characters)\"></textarea>\n    <input type=\"file\" name=\"photo\" id=\"photo-file\" accept=\"image/*\">\n    <input type=\"hidden\" name=\"email\">\n    <input type=\"hidden\" name=\"ttl\" value=\"10\">\n    <div class=\"button-wrapper\">\n      <span id=\"char-limit\">250</span>\n      <button data-action=\"upload-photo\" type=\"button\">upload</button>\n    </div>\n    <a href=\"javascript:;\" data-action=\"cancel\" class=\"cancel\">Cancel</a>\n    <button type=\"submit\" class=\"right\">Send</button>\n  </form>\n\n  <div id=\"settings\" class=\"hidden\">\n    <ol>\n      <li>\n        <a href=\"javascript:;\" data-action=\"edit-contacts\">Manage Contacts</a>\n      </li>\n      <li>\n        <a href=\"javascript:;\" data-action=\"edit-profile\">Manage Notifications</a>\n      </li>\n    </ol>\n  </div>\n  <div id=\"message-body\"></div>\n  <div id=\"status\" data-action=\"status\"></div>\n</div>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
root: root
};

})();
templates["edit_contacts.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<form method=\"post\" id=\"contacts-form\">\n  <h2>Add a new contact</h2>\n  <input type=\"email\" name=\"email\" placeholder=\"add contact email\">\n  <a href=\"javascript:;\" data-action=\"cancel\" class=\"cancel\">Cancel</a>\n  <button type=\"submit\" class=\"right\">Add</button>\n</form>\n<h1 class=\"contacts-title\">Current contacts</h1>\n<ol id=\"contacts\">\n  ";
frame = frame.push();
var t_2 = runtime.contextOrFrameLookup(context, frame, "contacts");
if(t_2 !== undefined) {for(var t_1=0; t_1 < t_2.length; t_1++) {
var t_3 = t_2[t_1];
frame.set("contact", t_3);
output += "\n    <li>\n      <a href=\"javascript:;\" data-action=\"contact-add\" data-email=\"";
output += runtime.suppressValue(runtime.memberLookup((t_3),"email", env.autoesc), env.autoesc);
output += "\"\n        data-avatar=\"";
output += runtime.suppressValue(runtime.memberLookup((t_3),"avatar", env.autoesc), env.autoesc);
output += "\" data-id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_3),"id", env.autoesc), env.autoesc);
output += "\">\n        <img src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_3),"avatar", env.autoesc), env.autoesc);
output += "\" class=\"avatar\" data-action=\"contact-add\">\n        <span data-action=\"contact-add\">";
output += runtime.suppressValue(runtime.memberLookup((t_3),"email", env.autoesc), env.autoesc);
output += "</span>\n        <span data-action=\"contact-delete\" class=\"delete\">x</span>\n      </a>\n    </li>\n  ";
}
}frame = frame.pop();
output += "\n</ol>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
root: root
};

})();
templates["edit_profile.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<form method=\"post\" id=\"profile-form\">\n  <h2>Email notifications</h2>\n  <p class=\"tip\">\n    <input type=\"checkbox\" name=\"email_notification\"\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"email_notification", env.autoesc)) {
output += "checked=\"checked\"";
}
output += ">\n    when someone sends you a message\n  </p>\n  <a href=\"javascript:;\" data-action=\"cancel\" class=\"cancel\">Close</a>\n  <button type=\"submit\" class=\"right\">Update</button>\n</form>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
root: root
};

})();
templates["landing.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div id=\"header\">\n  <h1>Detour</h1>\n</div>\n\n<a href=\"javascript:;\" data-action=\"login-persona\" class=\"login\" id=\"login-persona\">\n  Sign in with Persona\n</a>\n\n<div id=\"messages\" class=\"landing\">\n  <ol class=\"home\">\n    <li>Ephemeral messaging</li>\n  </ol>\n</div>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
root: root
};

})();
templates["messages.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
frame = frame.push();
var t_2 = runtime.contextOrFrameLookup(context, frame, "messages");
if(t_2 !== undefined) {for(var t_1=0; t_1 < t_2.length; t_1++) {
var t_3 = t_2[t_1];
frame.set("message", t_3);
output += "\n  <li data-id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_3),"id", env.autoesc), env.autoesc);
output += "\" data-email=\"";
output += runtime.suppressValue(runtime.memberLookup((t_3),"email", env.autoesc), env.autoesc);
output += "\"\n      data-avatar=\"";
output += runtime.suppressValue(runtime.memberLookup((t_3),"avatar", env.autoesc), env.autoesc);
output += "\"\n      class=\"message-root";
if(runtime.memberLookup((t_3),"has_media", env.autoesc)) {
output += " has-media";
}
output += "\">\n    <a href=\"javascript:;\" data-action=\"view\">\n      <img src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_3),"avatar", env.autoesc), env.autoesc);
output += "\" class=\"avatar\" data-action=\"view\">\n      <span data-action=\"view\">";
output += runtime.suppressValue(runtime.memberLookup((t_3),"email", env.autoesc), env.autoesc);
output += "</span>\n      <time data-action=\"view\">";
output += runtime.suppressValue(runtime.memberLookup((t_3),"created", env.autoesc), env.autoesc);
output += "</time>\n    </a>\n  </li>\n";
}
}frame = frame.pop();
output += "\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
root: root
};

})();
templates["view.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"action-wrapper\">\n  <div class=\"countdown\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "message")),"ttl", env.autoesc), env.autoesc);
output += "</div>\n  <a href=\"javascript:;\" data-action=\"close\" class=\"actions cancel\">Close</a>\n  <a href=\"javascript:;\" data-action=\"reply\" class=\"actions reply right\">Reply</a>\n</div>\n<p>\n  <span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "message")),"message", env.autoesc), env.autoesc);
output += "</span>\n  <time>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "message")),"created", env.autoesc), env.autoesc);
output += "</time>\n</p>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
root: root
};

})();
if(typeof define === "function" && define.amd) {
    define(["nunjucks"], function(nunjucks) {
        nunjucks.env = new nunjucks.Environment([], null);
        nunjucks.env.registerPrecompiled(templates);
        return nunjucks;
    });
}
else if(typeof nunjucks === "object") {
    nunjucks.env = new nunjucks.Environment([], null);
    nunjucks.env.registerPrecompiled(templates);
}
else {
    console.error("ERROR: You must load nunjucks before the precompiled templates");
}
})();

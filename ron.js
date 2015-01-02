/**
 *
 * ron.js
 *
 * Small Javascript script simplified
 * Version: 1.0.0
 *
 * Find the project on GitHub: 
 * https://github.com/jofpin/ron.js
 *
 * ============================
 * Copyright, 2014 by Jose Pino
 * https://twitter.com/jofpin
 * ============================
 */
var ron = (function(){
  "use strict";

  // global  > You can crank the functions with this instead of (this)!
  window.ron = {};

  // setup all (objs)[]
  var main = {
    valid: true,
    base: [],
    reset: "",
    regex: /\{{|}\}/,
    tagcript: "script",
    core: window,
    docu: document,
    script: window.document.createElement("script")
  }, 
  extend = {
    support: function(guide, source) {
      var prop; // born property
      for (prop in source) {
        if (source[prop] && source[prop].constructor && source[prop].constructor === Object) {
          guide[prop] = guide[prop] || {};
          extend.support(guide[prop], source[pprop]);
        } else {
          guide[prop] = source[prop];
        }
      }
      return guide;
    }
  },
  life = {
    ron: function(extensions) {
      if(main.valid){
        for(var id = 0; id < main.base.length; id++) {
          if(typeof extensions[main.base[id]] !== "undefined") {
            delete extensions[main.base[id]];
          }
        }
        life = extend.support(life, extensions);
      }
    },
    log: function(value) {
      if (main.core.console && main.core.console.log) {
        main.core.console.log(value);
      }
    },
    error: function(value) {
      if (main.core.console && main.core.console.log) {
        main.core.console.error(value);
      }
    },
    html: function(value) {
      main.docu.write(value);
    },
    timer: function(elements) {
      setTimeout(elements);
    },
    gumok: function(body, data) { 
      var unions = body.split(main.regex);
      var count = unions.length;
      for (var id = 1; id < count; id += 2) {
        if (data.hasOwnProperty(unions[id])) {
          unions[id] = data[unions[id]];
          // If you are using Gumok!
          this.log("These using Gumok!"); 
        } else {
          // you include the library, but you don't use it :'( 
          this.error("Error in Template :(");
        }
      }
      // return
      return unions.join(main.reset);
    },
    // The magic starts here...
    template: function(element, args) {
      var query = main.docu.querySelector(element);
      var body = query.innerHTML;
      var running = this.gumok(body ,args);
      query.innerHTML = running; 
    },
    runJS: function(src, train) {
      var ref = main.core.document.getElementsByTagName("script")[0];
      main.script.src = src;
      main.script.async = true;
      ref.parentNode.insertBefore(main.script, ref);
      if (train && typeof(train) === "function") {
        main.script.onload = train;
      }
      
      return main.script;
    }
  };

  // return life {}
  return life;

})(app = this || this);

ron.js
======

Small Javascript script simplified (In construction)


```js
// You start your application with (ron) as well.
 app["nameApp"] = ron; // (NameApp), is the name of my application!

// You can put rum or the name of your application, to perform the functions that are available in (ron)
// preview example: <h1 id="example">{{test}}</h1>
    nameApp.ron({
      demo: function() {
      // template (gumok) in ron.js
           ron.template("#example",{
             test: "<h1>ron.js template</h1>"
           });
           
           // log(), execution of console!
           ron.log("Testing console);
           
           // error(), execution error in console!
           ron.error("Error in console);
        // preview html
        ron.html("<h1>Demo ron.js</h1>");
        // URL or path to a file .css to load! > example: ron.runJS("assets/css/styles.css");
        ron.runJS("url or path");
        
      // ron.timer()  is = to setTimeout()
      },
      // in function (RUN), is the box that you put all the functions!
      run: function() {
        ron.demo(); 
      }
    });
    
    // execute all functions here!
    nameApp.run();
    
```

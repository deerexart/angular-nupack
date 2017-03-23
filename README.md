Installation:

1. Clone project
2. run npm install

Serve:
1. run npm start

Test:
1. run npm test

Runtime Versions:
Node : v4.4.7
Karma : 4.0.3
Jasimine: 4.0.3
AngularJS: 4.0.3

That's it.  package.json has all dependencies needed

About Project

I didn't want to spend a lot of time on project set up, so I used angular seed for that
Had i manually set up, the project structure would be something like

Project Hierarchy
  -app
    --js
      ---controllers
      ---services
      ---directives
    --views
    --tests
    app.js
    index.html
  -node_modules
.gitignore
bower.json
karma.conf.js
package.json

Much cleaner organization.

Where the code lives:
Directory: app/view1

view1.js -> has controller and service used
Normally, I would separate controller/service into their own files
But for simplicity purposes I kept them in one file for this exercise.
I also kept view1 as the name for the same reasons
Normally would have a much more meaningful name, like it's controller (markupCtrl)

view1_test.js -> has all tests written in jasmine (run with Karma)

view1.html -> contains html for view1

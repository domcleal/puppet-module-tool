puppet-module-site changes
==========================

Next
----

* Fixed the new module form, it failed if the user wasn't specified.
* Fixed the show module page, it failed if the feed URL was invalid.

r0.0.2
------

* Fixed the modules model and controllers, these had numerous security vulnerabilities and logic errors. Refactored these and added access controls, error checking and comprehensive specs.
* Fixed styling, the page headerings are now shown and button-like links have spacing between them.
* Added ability to delete modules.
* Added `annotate_models` plugin and annotated the models.
* Added `rdiscount` gem dependency for rendering Markdown.
* Removed gem dependencies `shoulda` and `mocha`.

r0.0.1
------

* Added `README.md` with setup instructions.
* Added `rake setup` task to create required configuration files using sensible defaults.
* Added Rails `preview` environment, just like `production` but using `development` database.
* Fixed email sending configuration, added a valid email address.
* Fixed user's timeline from throwing exceptions by disabling unfinished code.
* Fixed Capistrano multistages, extracted settings into separate files.

r0.0.0
------
* First draft.
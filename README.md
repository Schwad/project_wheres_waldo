project_wheres_waldo
====================

He totally didn't pay his bill.


TODO

Persisting Tags

Set up the Rails models needed to persist a given Tag and to manage the list of available characters.
  - Tag model, x & y coordinates, character
  - Character model, name only
  - Tag create populates with available characters

Make your front-end Tag event send an AJAX request to the back end which persists that event.


Return the proper object or template and update the DOM with the successful Tag only upon successful persisting of the event.
Verify that Tag now persists the data in your Rails app and only updates the DOM on success.
Set up your app to load all Tags on the image when the page refreshes.
Implement a DELETE button or link on each Tag which will remove the persisted Tag and then remove the Tag from the DOM upon success.
  -- Tag#destroy route

WHERE IS...
  Waldo: X: 1600, Y: 625
  Wenda: X: 1100, Y: 600
  Odlaw: X: 1130, Y: 1160
  Wizard: X: 2400, Y: 1500
  Woof:
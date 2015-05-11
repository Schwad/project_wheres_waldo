project_wheres_waldo
====================

He totally didn't pay his bill.


TODO

Photo Tag

When the user clicks on the photo, it should pop up a "Targeting Box" which surrounds the click area.
  - adds div to page to acknowledge the click.
    - $ object with 'top' and 'left' matching click coords, -50% translateThere should be a dropdown menu where the user can select from the available characters to associate with that Tag.
    - Add dropdown to side of selection box. <- Rails form?

When the user selects a character, it should create a Tag associated with that character at that location. Just do this on the front end for now.
  - From submit adds jQuery object to page at the click coordinates (with character name?)

When the user hovers over the photo, all current Tags should be visible. When the mouse leaves the photo, Tags should disappear and the photo should look normal.
  - pic is too big for any room to NOT be hovering.

For now, refreshing the page will reset the photo Tags. That's okay.

WHERE IS...
  Waldo: X: 1600, Y: 625
  Wenda: X: 1100, Y: 600
  Odlaw: X: 1130, Y: 1160
  Wizard: X: 2400, Y: 1500
  Woof:
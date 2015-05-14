project_wheres_waldo
====================

He totally didn't pay his bill.

GAME OBJECT DATA COLUMNS
  - END TIMESTAMP (DATETIME)
  - CORRECT TAGS (INTEGER)
METHODS:
  - TIME ELAPSED
  - SCORE



TODO

GAME MODEL <<<
  -has score attached at end
  -utilize CREATED_AT as game start time
  -display running absolute time OR timescore
  -character's score; when you correctly pick a character it bumps up your score.
  -calculates score when TAGS >= 5; and compares Time.now with created_at & number of 'correct' tags
  -



GAMEPLAY

Finally, gamify this! We'll start by assuming a single player / high score model. You'll need to keep track of Games.

When the page is refreshed, create a new Game and record when it starts.

The game's score should be displayed as an ever-decreasing counter on the screen.

The game finishes when the user creates tags for every character.
When the game finishes, record the time of its completion for scoring purposes.

Prompt the user to input their name if it's a new high score.
Show the highest scores on one side of the screen
(Optional) Write a script which cleans up the database so unfinished games don't clutter it up with every refresh.
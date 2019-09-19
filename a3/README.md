## Booker

Booker is a tool to be used for reserving seats in Fuller Lower. Users can select a time slot and date to book.

I used passport.js with Auth0, as it gives the most options for users to authenticate. This means I can quickly change what accounts are accepted.
For the database, I opted to use SQLite due to it's effeciency and scaleability.

Spectre.css was used due to its quick load times and CDN availability. I added additional styling for alerts on saving.

Middleware used:
 - passport.js: Authenticate user requests.
 - auth0: Authenticate atop of passport with Auth0.
 - body_parser: Parse/form JSON files.
 - cookie_parser: Read client cookies for use in auth.
 - cookie_session: Flash cookies into the clients response message.
 - pug: Render pug files to a HTML document
 - better-sqlite3: Read/write a SQLite .db file.
 - dotenv: Read from a .env file, used for storing credentials without hardcoding.

View in Glitch: http://a3-christopher-mercer.glitch.me

Login credentials (Google account):
 - user: cs4241a19@gmail.com
 - pass: Gompei12X3 (To avoid account scrapers, remove the X when entering the password)

- the goal of the application
- challenges you faced in realizing the application
- what authentication strategy / database you chose to use and why (choosing one because it seemed the easiest to implement is perfectly acceptable)
- what CSS framework you used and why.
  - include any modifications to the CSS framework you made via custom CSS you authored.
- the five Express middleware packages you used and a short (one sentence) summary of what each one does.



## Technical Achievements
- **Collision Detection**: Added checks to make sure duplicate time slots are not created (and alert the user.) Try this by clicking add new twice with the same date/time/seat.
- **OAuth with Auth0**: Used Auth0 to authenticate and control logins instead of local strategy. Required configuration through their panel.
- **PUG Engine**: Used the pug templating engine to provide simple to read, efficient layouts.
- **Directory Structure**: Layed out scripts, routers, and styles cleanly and used inheritance to compartmentalize logic.
- **Secure Submission**: Ensured all data submissions were sent as POST requests so that data is secure in transit.
- **SQLite**: Used SQLite instead of lowDB, and this time made seperate handler scripts for each action.
- **Restful API**: Wrote a stateless API enabling simple page construction and ease of use for other developers.
- **Onchange HTML logic**: Instead of traditional form elements, users update data by clicking on what they'd like to change. Only showing save option when edits have been made. (Form is still used in new entry, however)

### Design/Evaluation Achievements
- **Clean and Simple UI**: Using Spectre.css, followed documentation to keep UI minimal and consistant.
- **Quick Editing**: Instead of a seperate edit field or button, the user simply clicks on a row they'd like to edit, reducing UI clutter.
- **Accessability**: Running Chrome's Lighthouse tool, ensured full score was reached and page was accessable.
- **Quick login**: Since the user has to be logged in, role is checked immedietly to give quick access.

Note that for grading, if all results need to be seen the /dump URL is exposed.

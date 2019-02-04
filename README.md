Thank you for visiting DFS-Charts, a helpful app for visualizing NBA daily fantasy data. It was created by Frank Malafronte in the Winter of 2018-2019.
A friend, an equity trader who plays daily fantasy basketball asked me to create an app where he could get data and charts to help him sharpen his strategies.
As an equity trader, he uses stock charts such as fin-viz.com on a daily basis, and thought seeing NBA game data displayed visually would give him an edge.
The issue was that such a website did not exist. Having recently graduated from Fullstack Academy, I was eager to take on a personal project to hone my skills,
so I decided to give it a shot.

The App would require building a database of NBA player data and displaying it in any form he thought he might be able to use. Displaying data via React and
react-google-charts was a simple task (and will be updated as I update the project), but the challenge would be to create the database from scratch. Such data is not available
via a free api, so I would have to learn how to scrape the data. In order to accomplish that, I would have to learn how to use Pupeteer, and create two functions, one that I could
to scrape all past data and one that could be called each day via a cron job.

As of February 3rd 2019, the app's back end is complete, and I have created a barebone UI for the time being so that the app can be used immediately, since the NBA season is
ongoing. Future updates will be to the front end.

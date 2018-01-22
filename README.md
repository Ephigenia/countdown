Big countdown which is fully customizable via GET parameters written in pure simple vanilla javascript perfect to run in a dashboard display.

# Demo

There’s the latest version of "master" branch automatically deployed to heroku:

http://simple-countdown.herokuapp.com/?to=2018-01-31T20:15:00+01:00&title=Big%20Pary&finishedText=Party!

# Start

    npm install
    npm start

# Configuration

The countdown target date and title as well as the used theme can be changed via GET parameters of the URL used:

Example: http://simple-countdown.herokuapp.com/?to=2018-01-31T20:15:00+01:00&title=Big%20Pary&finishedText=Party!&theme=winter&themeFinished=summer

| GET variable name	| example                   |	description                                                                                                            |
|-------------------|---------------------------|------------------------------------------------------------------------------------------------------------------------|
| to	              | `2018-01-31T20:15:00+01:00` | the target date & time in ISO-8601 format with timezone offset                                                         |
| title             | `Next Show: Amsterdam`      | Optional title which is displayed above the countdown                                                                  |
| theme             | `monokai`                   | One of the following options: `dark`, `winter`, `summer`, `monokai` defining the color-scheme used (default "monokai") |
| finishedText      | `Now Live`                  | The text that should be displayed once the date & time counting to is reached, defaults to `00:00:00`                  |
| finishedTheme     | `summer`                    | Theme that should be used once the countdown date & time is reached (default: `summer`)                                |

# Ideas

- [ ] add `locale` parameter for localized date

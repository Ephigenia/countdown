[![MIT License](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

Big countdown which is fully customizable via GET parameters written in pure simple vanilla javascript perfect to run in a dashboard display.

# Features

![Screenshot of Countdown in Action 2018-01-22](https://raw.githubusercontent.com/Ephigenia/countdown/master/screenshot.png)

- Countdown to a specific date & time including days, hours, minutes, seconds
- Custom title & finished message
- Big Responsive full-width display
- simple web-app-capable for fullscreen on iOS
- Variable Theme
- Dead Simple Code
- locale aware time & date formats using momentjs

# Demo

The latest version of this is running on http://simple-countdown.herokuapp.com/ where you set you’re own configuration via get parameters.

Example showing a countdown to 20:15 in Berlin/Europe Timezone in german language:
http://simple-countdown.herokuapp.com/?to=2020-10-31T19:15:00+01:00&title=Halloween&finishedText=Scary%20Party&locale=de_DE

# Docker

You can run the whole thing as a docker container

    docker build --pull --no-cache -t countdown:latest .

Then run the docker container

    docker run -p 8080:80 --rm -it countdown:latest

This will expose the nginx service on: http://localhost:8080

# Start

    npm install
    npm start

# Configuration

The countdown target date, title and other stuff can be changed with GET parameters:

Example: http://simple-countdown.herokuapp.com/?to=2018-01-31T19:15:00+01:00&title=Big%20Party&finishedText=Dance&theme=winter&themeFinished=summer

| GET variable name	| example                     | description                                                                                                                                                                                   |
|-------------------|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| to	            | `2018-01-31T19:15:00+01:00` | the target date & time in ISO-8601 format with optional timezone offset                                                                                                                       |
| title             | `Next Show: Amsterdam`      | Optional title which is displayed above the countdown                                                                                                                                         |
| theme             | `monokai`                   | name of the theme that should be used when countdown is not reached (default: `monokai`)                                                                                                      |
| locale            | `de_DE`                     | Single locale string for use when formatting full date & time, see [moment locales](https://github.com/moment/moment/tree/develop/locale) for a list of supported locales, (default: `en_US`) |
| finishedText      | `Now Live`                  | The text that should be displayed once the date & time counting to is reached, defaults to `00:00:00`                                                                                         |
| finishedTheme     | `summer`                    | Theme that should be used once the countdown date & time is reached (default: `summer`)                                                                                                       |

# Themes

There are some themes that can be used in the `theme` and `finishedTheme` parameters. Click on the name to see a preview:

- [49ers](http://simple-countdown.herokuapp.com/?to=2023-01-31T19:15:00+01:00&title=Countdown%20Title%20Value&theme=49ers)
- [china](http://simple-countdown.herokuapp.com/?to=2023-01-31T19:15:00+01:00&title=Countdown%20Title%20Value&theme=china)
- [cola](http://simple-countdown.herokuapp.com/?to=2023-01-31T19:15:00+01:00&title=Countdown%20Title%20Value&theme=cola)
- [dark](http://simple-countdown.herokuapp.com/?to=2023-01-31T19:15:00+01:00&title=Countdown%20Title%20Value&theme=dark)
- [europe](http://simple-countdown.herokuapp.com/?to=2023-01-31T19:15:00+01:00&title=Countdown%20Title%20Value&theme=europe)
- [monokai](http://simple-countdown.herokuapp.com/?to=2023-01-31T19:15:00+01:00&title=Countdown%20Title%20Value&theme=monokai)
- [summer](http://simple-countdown.herokuapp.com/?to=2023-01-31T19:15:00+01:00&title=Countdown%20Title%20Value&theme=summer)
- [usa](http://simple-countdown.herokuapp.com/?to=2023-01-31T19:15:00+01:00&title=Countdown%20Title%20Value&theme=usa)
- [winter](http://simple-countdown.herokuapp.com/?to=2023-01-31T19:15:00+01:00&title=Countdown%20Title%20Value&theme=winter)

Themes are right now just appended in the `styles.css` file.

# Deployment

If you’re planning to run you own instance on heroku:
[![Deploy CircleBoard on Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

# Dashboard Display

Using a [Raspberry Pi3](https://www.raspberrypi.org) as permanent dashboard display is very easy. Setup the raspberrypi with standard noobs and use the pre-installed chrome to startup automatically and open the circleboard.

Example X config file:

```
# /home/pi/.config/lxsession/LXDE-pi/autostart

# deactivated default lines
#@lxpanel --profile LXDE-pi
#@pcmanfm --desktop --profile LXDE-pi
#@xscreensaver -no-splash
#@point-rpi

# now the new lines:
# disable sleep mode
@xset s off
@xset -dpms
@xset s noblank

# hide mouse cursor
# requires "unclutter" to be installed
#   sudo apt-get install unclutter
@unclutter -idle 0

# read about supported comamnd line arguemnts:
# https://peter.sh/experiments/chromium-command-line-switches/
@chromium-browser --noerrdialogs --incognito --disable-infobars --kiosk  http://simple-countdown.herokuapp.com/?to=2018-01-31T19:15:00+01:00&title=Big%20Party&finishedText=Dance&theme=winter&themeFinished=summer&locale=de_DE
```

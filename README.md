[![MIT License](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

Big countdown which is fully customizable via GET parameters written in pure simple vanilla javascript perfect to run in a dashboard display.

# Features

![Screenshot of Countdown in Action 2018-01-22](https://raw.githubusercontent.com/Ephigenia/countdown/master/screenshot.png)

- Countdown to a specific date & time including days, hours, minutes, seconds
- Custom title & finished message
- Big Responsive full-width display
- Variable Theme
- Dead Simple Code

# Demo

The latest version of this is running on http://simple-countdown.herokuapp.com/ where you set you’re own configuration via get parameters.

For example:
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

# read about supported comamnd line arguemnts:
# https://peter.sh/experiments/chromium-command-line-switches/
@chromium-browser --noerrdialogs --disable-session-crashed-bubble --disable-infobars --kiosk http://simple-countdown.herokuapp.com/?to=2018-01-31T20:15:00+01:00&title=Big%20Pary&finishedText=Party!&theme=winter&themeFinished=summer
```

# Ideas

- [ ] add `locale` parameter for localized date

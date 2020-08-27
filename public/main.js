var config = {
  title: '',
  theme: 'default',
  to: new Date((new Date()).getFullYear(), (new Date()).getMonth() + 1, (new Date).getDate()),
  finishedText: '00:00:00',
  finishedTheme: 'summer',
  dateFormat: 'LLLL',
  updateInterval: 1000,
  locale: 'en_US',
}

// parse GET parameters and use them
var params = new URLSearchParams(window.location.search);
config.title = params.get('title') || config.title;
config.theme = params.get('theme') || config.theme;
config.finishedTheme = params.get('finishedTheme') || config.finishedTheme;
config.finishedText = params.get('finishedText') || config.finishedText;
config.locale = params.get('locale') || config.locale;
if (params.get('to')) {
  config.to = moment(params.get('to')).toDate();
}

// set theme
function setTheme(name) {
  config.theme = name;
  document.body.className = 'theme-' + name;
}
function nextTheme() {
  var index = themes.indexOf(config.theme);
  if (index > themes.lenggth) {
    index = 0;
  } else {
    index++;
  }
  setTheme(themes[index]);
}
function previousTheme() {
  var index = themes.indexOf(config.theme);
  if (index === 0) {
    index = themes.length - 1;
  } else {
    index--;
  }
  setTheme(themes[index]);
}

document.onkeydown = function(e) {
  e = e || window.event;
  var shift = e.shiftKey;
  switch(e.keyCode) {
    case 37:
      // left arrow
      nextTheme();
      break;
    case 38:
      // up arrow
      if (shift) {
        config.to.setDate(config.to.getDate() + 1);
      } else {
        config.to.setHours(config.to.getHours() + 1);
      }
      break;
    case 39:
      // right arrow
      nextTheme();
      break;
    case 40:
      // down arrow
      if (shift) {
        config.to.setDate(config.to.getDate() - 1);
      } else {
        config.to.setHours(config.to.getHours() - 1);
      }
      break;
  }
  return true;
}

setTheme(config.theme);
moment.locale(config.locale);

// update title & target date display
document.getElementById('title').innerHTML = config.title;
if (config.title) {
  document.title = 'Countdown - ' + config.title;
}
document.getElementById('target').innerHTML = moment(config.to).format(config.dateFormat);

setInterval(() => {
  var now = moment();
  var diff = config.to - now;
  var days = moment(config.to).diff(moment(), 'days');
  var countdown = '';

  // with days?
  if (days > 0) {
    if (days > 999) {
      days = 999;
    }
    countdown = days + 'd&#8199;';
    document.getElementById('countdown').classList.className = '';
  } else {
    document.getElementById('countdown').classList.className = 'no-days';
  }

  // countdown target date & time reached?
  if (diff > 0) {
    countdown += moment(diff).utc().format('HH:mm:ss').replace(' ', '&#8199;');
  } else {
    setTheme(config.finishedTheme);
    countdown = config.finishedText;
  }

  // finally set the countdown value
  document.getElementById('countdown').innerHTML = countdown;
}, config.updateInterval);

var config = {
  title: '',
  theme: 'monokai',
  to: new Date(2030, 11, 24),
  dateFormat: 'LLLL',
  updateInterval: 1000
}

// parse GET parameters and use them
var params = new URLSearchParams(window.location.search);
config.title = params.get('title') || config.title;
config.theme = params.get('theme') || config.theme;
if (params.get('to')) {
  config.to = moment(params.get('to')).toDate();
}

document.body.className = 'theme-' + config.theme;

// update title & target date display
document.getElementById('title').innerHTML = config.title;
document.getElementById('target').innerHTML = moment(config.to).format(config.dateFormat);

setInterval(() => {
  var now = moment();
  var diff = config.to - now;
  var days = moment(config.to).diff(moment(), 'days');
  var countdown = '';
  if (days > 0) {
    if (days > 999) {
      days = 999;
    }
    countdown = days + 'd ';
  }
  if (diff > 0) {
    document.getElementById('countdown').classList.className = '';
    countdown += moment(diff).utc().format('HH:mm:ss');
  } else {
    document.getElementById('countdown').classList.className = 'no-days';
    countdown = '00:00:00'
  }
  document.getElementById('countdown').innerHTML = countdown;
}, config.updateInterval);

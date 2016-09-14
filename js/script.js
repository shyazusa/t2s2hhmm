'use strict';
window.addEventListener('load', function() {
  document.getElementById('hhmm').addEventListener('click', function() {
    const hhmm = document.getElementById('hhmm_form').value;
    const matches = hhmm.match(/([0-9]{2}):([0-9]{2})/);
    const sec = matches[1] * 60 * 60 + matches[2] * 60;
    document.getElementById('s_form').value = sec;
  });
  document.getElementById('s').addEventListener('click', function() {
    const sec = document.getElementById('s_form').value;
    const h = '' + (sec / 36000 | 0) + (sec / 3600 % 10 | 0);
    const m = '' + (sec % 3600 / 600 | 0) + (sec % 3600 / 60 % 10 | 0);
    const time = h + ':' + m;
    document.getElementById('hhmm_form').value = time;
  });
}, false);

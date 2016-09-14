window.addEventListener('load', function(eve) {
  document.getElementById('hhmm').addEventListener('click', function() {
    var hhmm = document.getElementById("hhmm_form").value;
    var matches = hhmm.match(/([0-9]{2}):([0-9]{2})/);
    var sec = matches[1] * 60 * 60 + matches[2] *60;
    document.getElementById("s_form").value = sec;
  });
  document.getElementById('s').addEventListener('click', function() {
    var sec = document.getElementById("s_form").value;
    var h = ""+(sec/36000|0)+(sec/3600%10|0)
    var m = ""+(sec%3600/600|0)+(sec%3600/60%10|0)
    var s = ""+(sec%60/10|0)+(sec%60%10)
    var time = h+":"+m;
    document.getElementById("hhmm_form").value = time;
  });
}, false);

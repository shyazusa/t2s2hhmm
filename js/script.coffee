window.addEventListener 'load', (eve) ->
  document.getElementById('hhmm').addEventListener 'click', ->
    hhmm = document.getElementById('hhmm_form').value
    matches = hhmm.match /([0-9]{2}):([0-9]{2})/
    if !matches[1] or !matches[2]
      alert 'hh:mmフォーマットでお願いします．'
    sec = matches[1] * 60 * 60 + matches[2] * 60
    document.getElementById('s_form').value = sec
  document.getElementById('s').addEventListener 'click', ->
    sec = document.getElementById('s_form').value
    h = "" + (sec / 36000 | 0) + (sec / 3600 % 10 | 0)
    m = "" + (sec % 3600 / 600 | 0) + (sec % 3600 / 60 % 10 | 0)
    time = "#{h}:#{m}"
    document.getElementById('hhmm_form').value = time
, false

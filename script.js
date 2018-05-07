<script type="text/javascript">
    $(document).ready(function() {
      var $feedItems = $('.feedItem');
      var i = 0;

      showFeedItem();
      if($feedItems.length == 0)
        timeout = 300000; // Set 5 minute timeout if no results are found
      else
        timeout = 120000; // Otherwise use a 2 minute interval
      feed = setInterval(showFeedItem,timeout);
      function showFeedItem()
      {
        $feedItems.addClass('hidden');
        $($feedItems[i]).removeClass('hidden');
        i++;
        if(i > $feedItems.length)
          location.reload(true);

      }
      var timerID = null
      var timerRunning = false
      startclock();
      function stopclock(){
          if(timerRunning)
              clearTimeout(timerID)
          timerRunning = false
      }
      function startclock(){
          stopclock();
          showtime();
      }

      function getMonthName(m)
      {
        months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        return months[m];
      }

      function getDayOfWeek(d)
      {
        days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return days[d];
      } 

      function showtime(){
          var now = new Date()
          var year = now.getFullYear();
          var month = now.getMonth();
          var dayOfWeek = now.getDay();
          var dayOfMonth = now.getDate();
          var hours = now.getHours()
          var minutes = now.getMinutes()
          var seconds = now.getSeconds()
          var timeValue = getDayOfWeek(dayOfWeek) + ' ' + getMonthName(month) + ' ' + dayOfMonth + ', ' + year + " " + ((hours > 12) ? hours - 12 : hours)
          timeValue  += ((minutes < 10) ? ":0" : ":") + minutes
          timeValue  += ((seconds < 10) ? ":0" : ":") + seconds
          timeValue  += (hours >= 12) ? " PM" : " AM"
          $('#clockspan').text(timeValue);
          timerID = setTimeout(showtime,1000)
          timerRunning = true
      }
    

    });
  </script>
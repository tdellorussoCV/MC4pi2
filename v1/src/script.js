jQuery(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/347e65e73ff7ed15/geolookup/conditions/q/IA/Cedar_Rapids.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  alert("Current temperature in " + location + " is: " + temp_f);
  }
  });
});

function clock();
            var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");
            var radius = canvas.height / 2;
            ctx.translate(radius, radius);
            radius = radius * 0.90
            setInterval(drawClock, 1000);

            function drawClock() {
              drawFace(ctx, radius);
              drawNumbers(ctx, radius);
              drawTime(ctx, radius);
            }

            function drawFace(ctx, radius) {
              var grad;
              ctx.beginPath();
              ctx.arc(0, 0, radius, 0, 2*Math.PI);
              ctx.fillStyle = 'white';
              ctx.fill();
              grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
              grad.addColorStop(0, '#333');
              grad.addColorStop(0.5, 'white');
              grad.addColorStop(1, '#333');
              ctx.strokeStyle = grad;
              ctx.lineWidth = radius*0.1;
              ctx.stroke();
              ctx.beginPath();
              ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
              ctx.fillStyle = '#333';
              ctx.fill();
            }

            function drawNumbers(ctx, radius) {
              var ang;
              var num;
              ctx.font = radius*0.15 + "px arial";
              ctx.textBaseline="middle";
              ctx.textAlign="center";
              for(num = 1; num < 13; num++){
                ang = num * Math.PI / 6;
                ctx.rotate(ang);
                ctx.translate(0, -radius*0.85);
                ctx.rotate(-ang);
                ctx.fillText(num.toString(), 0, 0);
                ctx.rotate(ang);
                ctx.translate(0, radius*0.85);
                ctx.rotate(-ang);
              }
            }

            function drawTime(ctx, radius){
                var now = new Date();
                var hour = now.getHours();
                var minute = now.getMinutes();
                var second = now.getSeconds();
                //hour
                hour=hour%12;
                hour=(hour*Math.PI/6)+
                (minute*Math.PI/(6*60))+
                (second*Math.PI/(360*60));
                drawHand(ctx, hour, radius*0.5, radius*0.07);
                //minute
                minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
                drawHand(ctx, minute, radius*0.8, radius*0.07);
                // second
                second=(second*Math.PI/30);
                drawHand(ctx, second, radius*0.9, radius*0.02);
            }

            function drawHand(ctx, pos, length, width) {
                ctx.beginPath();
                ctx.lineWidth = width;
                ctx.lineCap = "round";
                ctx.moveTo(0,0);
                ctx.rotate(pos);
                ctx.lineTo(0, -length);
                ctx.stroke();
                ctx.rotate(-pos);
            }
            
</script>
<script type="text/javascript">
  jQuery(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/347e65e73ff7ed15/geolookup/forecast/q/NJ/Tinton_Falls.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  //var temp_f = parsed_json['current_observation']['temp_f'];
  //alert("Current temperature in " + location + " is: ");
  }
  });
});
</script>
<div class="well">
  <canvas class="rounded" id="canvas" width="600" height="300" style="background-color: #0073B1"></canvas>  
</div> 
<!-- <a href='http://www.wunderground.com/cgi-bin/findweather/hdfForecast?query=07724&bannertypeclick=golfv2'><img src='http://weathersticker.wunderground.com/cgi-bin/banner/ban/wxBanner?zip=07724&bannertype=golfv2_cond&course=Suneagles Golf Club' border='1' alt='Click for forecast!' /></a> -->

function timeBar()
	{
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
	}
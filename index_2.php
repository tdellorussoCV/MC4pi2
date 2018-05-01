<!DOCTYPE html>
<html lang="en">
  <head>
  	<meta charset="utf-8" />
  	<meta name="viewport" content="width=device-width, initial-scale=1">
  	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  	<title>MC4 Pi</title>
  	<link href="style.css" rel="stylesheet" type="text/css">
  </head>

  <body>

  	 <table style="height:200px" align="center">
       <tr>
        <td>
        <img align="center" src="/images/Commvault.jpg" alt="Commvault" style="banner" height="75" width="450">
          <h1><center>MC4 Team KPI's</center></h1>
          <h2><center><?php echo date('Y-m-d H:i:s'); ?></center></h2>
        </td>
      </tr>
    </table>

    <iframe align="center" src="">
      <!DOCTYPE html>
      <html>
        <head>
          <title>Images</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <!-- Slideshow container -->
          <div class="slideshow-container">

            <!-- Full-width images with number and caption text -->
            <div align="center"class="mySlides fade">
              <!-- <div class="numbertext">1 / 3</div>  -->
              <img src="/slides/s_h04_hs200842.jpg" style="width:100%">
              <!-- <div class="text">Caption Text</div> -->
            </div>

            <div align="center"class="mySlides fade">
              <!--  <div class="numbertext">2 / 3</div> -->
              <img src="/slides/TedAnimal.jpg" style="width:65%" >
              <!-- <div class="text">Caption Two</div> -->
            </div>
            <div align="center" class="mySlides fade">
              <!-- <div class="numbertext">3 / 3</div>-->
              <img src="/slides/GoldenCrisps.jpeg" style="width:65%">
              <!-- <div class="text">Caption Three</div> -->
            </div>

            <!-- Next and previous buttons 
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
          </div>
          <br> -->

          <!-- The dots/circles -->
          <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span> 
            <span class="dot" onclick="currentSlide(2)"></span> 
            <span class="dot" onclick="currentSlide(3)"></span> 
          </div>

          <script>
          var slideIndex = 0;
          showSlides();

          function showSlides() {
              var i;
              var slides = document.getElementsByClassName("mySlides");
              var dots = document.getElementsByClassName("dot");
              for (i = 0; i < slides.length; i++) {
                 slides[i].style.display = "none";  
              }
              slideIndex++;
              if (slideIndex > slides.length) {slideIndex = 1}    
              for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex-1].style.display = "block";  
              dots[slideIndex-1].className += " active";
              setTimeout(showSlides, 10000); // Change image every 10 seconds
          }
          </script>
        </body>
      </html>




    </iframe>

  </body>
</html>

<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <!-- My CSS -->
    <link href="style.css" rel="stylesheet" type="text/css">
    <!-- Bootstrap CSS -->
<!--     <link href="bootstrap.css" rel="stylesheet" type="text/css"> -->
    <!-- Title -->
    <title>MC4 KPI's</title>
  </head>

  <body>

    <!-- Banner table -->
    
      <table style="height:200px" align="center">
          <tr>
            <td>
              <img align="center" src="/images/Commvault.jpg" alt="Commvault" style="banner" height="75" width="450">
              <span>
                <h1><center>MC4 Team KPI's</center></h1>
                <h2><center><?php echo date('Y-m-d H:i:s'); ?></center></h2>
              </span>
            </td>
          </tr>
      </table>
    
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
        -->
    </div>
    <br> 

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

    <!-- Optional JavaScript -->
     <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script> -->
    <!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
 -->
  </body>
</html>

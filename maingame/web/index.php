<?php
    //  sikrer sig brugeren er logget ind, så vises nedestående html
    session_start();
    if ($_SESSION['logged_in'] == true)
    { 
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" media="screen" href="style.css"/>
    <link rel="stylesheet" media="screen and (max-width: 960px)" href="small.css">
</head>
<body id="background-body">
  
<?php include 'includes/nav.php'?>

    <div class="container mobile">
        <div class="row">
            <div class="col-md-2">
                <div class="box" id="displays">
                    <p >Tid tilbage: <br> <span id="time-display"></span> Sekunder</p>
                    <div id="boxscore">Din score er: 0</div>
                      <br>
                      <p class="liv-display">You have <span id="liv"></span> Liv</p>
                    </div>
                    <div class="regler">
                      <h3 class="reglerheader">Regler</h3>
                      <p>Du har 3 liv, og 100 sekunder. <br> Saml mindst 10 point i hver bane, for at komme videre. Pas på de glubske Pacmans der er ude efter dig.</p>
                    </div>
                </div>
                <div class="col-md-8 mt-2">
                  <center>
                    <canvas width="805" height="525" id="canvas"></canvas>
                  </center>
                  <p class="col-12 text-center" id="end" style='color: #E0E4E4; font-family: gameplay-regular; font-size:48px;'></p>
                </div>
              </div>
              <button id="btn">START SPIL</button>
            </div>
            <div class="col-md-12 text-center mobiletext mt-5"> <h3>Dette spil kan desværre kun spilles på computer :(</h3></div>
          <script src="main.js"></script>
      </body>
</html>
<?php
    }
        else 
    {
        header("location: login.php");
    }
?>
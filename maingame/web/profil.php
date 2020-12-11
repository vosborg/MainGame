<?php
    //  sikrer sig brugeren er logget ind, så vises nedestående html
    session_start();
    if ($_SESSION['logged_in'] == true)
    { 
?>
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Document</title>
    </head>
    <body id="background-body">
        <?php 
            include 'includes/nav.php'
        ?>
        <?php 
            include 'includes/connect.php'
        ?>
 
        <?php 

            $brugernavn = $_SESSION['brugernavn'];

            if($_SESSION['logged_in']) { 

                $sql =  "SELECT * FROM users WHERE brugernavn = '". $brugernavn . "'";
                $result = mysqli_query($conn, $sql) or die("Query virker ikke");
                $bruger = mysqli_fetch_assoc($result); 
            } 
        ?>
        <div class="container">
            <div class="row justify-content-center fixed-bottom" >
                <div class="col-sm-4">
                    <div class="jumbotron" >
                        <div class="container">
                            <h4 class="text-center profil-text">Din profil</h1>
                            <br>
                            <p class="text-center">Username: <span> <?php echo $bruger['brugernavn']; ?>  </span></p>
                            <p class="text-center">E-mail: <span>  <?php echo $bruger['email']; ?>  </span></p>     
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </body>
</html>
<?php
    }
        else 
    {
        header("location: login.php");
    }
?>
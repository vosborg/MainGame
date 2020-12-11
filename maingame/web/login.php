<?php

    // Fejl beskeder
    $UserPassError = "";

    // Login form
    if (isset($_POST['submit'])) {
        require_once("includes/connect.php");
        // remove special characters
        // adding basic security (mysqli_real_escape_string) to avoid SQL injection (' or 0=0 #)
        $brugernavn = $conn->real_escape_string($_POST['brugernavn']); //den fjerne blanke karakterer, underlige tegn
        $kode = sha1($_POST['kode']); // Hasher kodeordet

        $read = "SELECT * FROM users WHERE brugernavn = '$brugernavn' AND kode = '$kode' LIMIT 1"; //selecter brugernavn og kodeord
        $result = $conn->query($read);
        $conn->close();
        // if the query is NOT returning anything there is no match in the database
        if (!$result->num_rows == 1)  // Tjekker om indtastede findes, hvis ikke de gør sendes understående echoo
        {
            $UserPassError = "<p style='color:red;'> Ugyldigt brugernavn og eller kode";
        } 
        else //Ellers starter den nedestående php kode
        {
            // start a PHP session
            
            session_start();
            $_SESSION['brugernavn'] = $brugernavn;
            $_SESSION['logged_in'] = true;
            //redirect and stop present code
            header("Location: index.php"); 
            exit();      
        }
    }
?>

<html>
    <head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
        <title>Login</title>
        <br>
        <br>
    </head>
    <body class="loginbody">
      
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-6">
                    <div class="jumbotron">
                        <div class="row">
                        <h4 class="col-12">Login</h4>
                        <p><span><?php echo "$UserPassError" ?></span></p>
                        <form class="col-md-12" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                            <input class="form-control" type="username" name="brugernavn" placeholder="Brugernavn">
                            <br>
                            <input class="form-control" type="password" name="kode" placeholder="Kodeord">
                            <br>
                            <div class="row">
                                <div class="col-6">
                            <input class="col-12" type="submit" name="submit" value="Login">
                            </div>
                            <div class="col-6">
                            <p>Har du ikke en bruger? 
                            <br>    
                            <a href="register.php">Opret en her</a></p>
                            </div>
                        </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
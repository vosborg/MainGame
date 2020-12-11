<?php

    //Fejl beskeder
    $navnError ="";

    //registration form
    if(isset($_POST['submit'])){
        require_once('includes/connect.php');
        //basic security (real_escape_string) avoids SQL injection (' or 0=0 #)
        $brugernavn = $conn->real_escape_string($_POST['brugernavn']);
        $email = $conn->real_escape_string($_POST['email']);
        $kode = sha1($_POST['kode']);
        //Check if username exist else
        $check = $conn->query("SELECT brugernavn from users WHERE brugernavn = '$brugernavn' LIMIT 1");
        if($check->num_rows == 1) {
            $navnError = "<p style='color:red;'> Brugernavn findes allerede";
        }
        else{
            $insert = "INSERT INTO users (brugernavn, email, kode) VALUE ('$brugernavn', '$email', '$kode')";
            if($conn->query($insert)){
                header("location:login.php");   
            }
        }
        //close connection
        $conn->close();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>User registration</title>
</head>
<body>
<div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="jumbotron">
                        <div class="row">
                            <form class="col-md-12" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                                <h4>Registrer dig her</h4>
                                <p><span><?php echo "$navnError"?></span></p>
                                <input class="form-control" type="username" name="brugernavn" placeholder="Brugernavn">
                                <br>
                                <input class="form-control" type="email" type="text" name="email" placeholder="Email">
                                <br>
                                <input class="form-control" type="password" type="text" name="kode" placeholder="Kode" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Skal indeholde 1 stort og 1 lille bogstav, 1 tal og bestå a 6 karakterer."required>
                                <p class="Kode-desc">Kodeordet skal indeholde mindst 1 tal, 1 Stort bogstav, 1 lille bogstav, og bestå af mindst 6 karakterer.</p>
                                <div class="row">
                                    <div class="col-md-6">
                                        <input class="col-md-12"  type="submit" name="submit" value="Registrer">
                                    </div>
                                    <div class="col-md-6">
                                        <p >Har du allerede en bruger? 
                                        <br>   
                                        <a href="login.php">Login her</a></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </body>
</html>
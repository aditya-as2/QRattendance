<?php
$insert = false;
if (isset($_POST['enrollno'])) {
    $server = "localhost";
    $username = "root";
    $password = "";

    $con = mysqli_connect($server, $username, $password);

    if (!$con) {
        die("Connection to this database failed due to" . mysqli_connect());
    }
    // echo "Connection successfull";

    $enrollno = $_POST['enrollno'];
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];

    $sql = "INSERT INTO `form`.`dbmsform` (`enrollno`, `fullname`, `email`, `dt`) VALUES ('$enrollno', '$fullname', '$email', current_timestamp());";
    // echo $sql;
    echo "<br>";
    if ($con->query($sql) == true) {
        // echo "Successfully inserted";
        $insert = true;
    } else {
        echo "Error: $sql <br> $con->error";
    }
    $con->close();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <!-- <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <title>Attendance Form</title>
    <link rel="stylesheet" type="text/css" href="form.css">
    <link rel="shortcut icon" href="img/form.png" type="image/x-icon">
    <script type="text/javascript" src="form.js"></script>
</head>

<body>
    <div id="timeoutbox"><p id="timeout"></p></div>
    <div id="form-body">
        <header class="header">
            <h1>Attendance Form</h1>
            <p>DBMS CS-502</p>
        </header>
        <div class="mainbox">
            <div id="date-time"></div>
            <?php
                if ($insert==true) {
                    echo  '<script type="text/javascript">
                    alert("Submitted successfully!");
                    window.location = "../form";
                    window.close();
                </script>';
                }
            ?>
            <div class="formbox">
                <form action="index.php" method="post">
                    <p id="req">* Required</p>
                    <p class="input-text" >Enter enrollment number<span>*</span></p>
                    <input type="text" name="enrollno" id="enroll" maxlength="12" placeholder="Your answer"
                        oninput="upperCase()" required>
                    <p class="input-text">Enter full name<span>*</span></p>
                    <input type="text" name="fullname" id="name" placeholder="Your answer" required>
                    <p class="input-text">Enter college e-mail address<span>*</span></p>
                    <input type="email" name="email" id="email" placeholder="Your answer" required>
                    <div id="locationbox">
                        <p id="location-head" > Your current location:&nbsp;</p>
                        <p id="location" ></p>
                    </div>
                    <div id="buttonbox">
                        <button class="btn" id="subbtn" type="submit">Submit</button>
                        <button class="btn" type="reset">Reset</button>
                    </div>
                </form>
            </div>
            <div id="note1">You can fill this form only once.</div>
            <div id="note2">Allow permission for location!</div>
        </div>
    </div>
    <footer>
        <p>Developed by Team Quadz (5th Sem CS-1 2022)</p>
    </footer>
</body>

</html>
            
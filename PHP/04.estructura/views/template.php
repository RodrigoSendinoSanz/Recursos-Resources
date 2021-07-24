<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template</title>
</head>
<body>
    <style>

                *{
                    font-family: "Sen",sans-serif;
                    font-weight: 100;
                }
                body{
                    background-color: #0f0e17;
                }
                h2{
                    font-size: 2em;
                    padding: 0.5em;
                    display: inline-block;
                    background: #ff8906;
                }
                header{
                position:relative;
                margin:auto;
                text-align:center;
                padding:5px;
                }

                nav{
                position:relative;
                margin:auto;
                width:100%;
                height:auto;
                background-image:url('https://c4.wallpaperflare.com/wallpaper/364/68/906/graffiti-wallpaper-preview.jpg'); 
                }

                nav ul{
                position:relative;
                margin:auto;
                width:50%;
                text-align:center;
                }

                nav ul li{
                display:inline-block;
                width:24%;
                line-height:50px;
                list-style: nome;
                }

                nav ul li a{
                color: #000;
                text-decoration:nome;
                }
                nav li a{
                    color: #fff;
                    text-decoration: none;
                    padding: 10px;
                }

                li a{
                    background: #ff8906;
                    box-shadow: 0px 0px 10px #000;

                }


                form{
                    min-width: 400px;
                    flex: 1;
                    text-align: center;
                    padding: 30px;
                    order: 5;
                }

                section{
                position:relative;
                padding:20px;
                }

                input{
                    width: 100%;
                    padding: 6px;
                    margin: 6px 0;
                    border: none;
                    border-bottom: 3px solid #ff8906;
                    background-color: transparent;
                    text-decoration: none;
                    color: #fff;
                    width: 50% ;
                }
                
                input:focus{
                    background: linear-gradient(to right,transparent, #e53170);
                    outline: none;
                    border-bottom: 3px solid #7f5af0;
                }

                input[type=submit]{
                    background-color: #7f5af0;
                    border: none;
                    color: white;
                    padding: 16px 32px;
                    text-decoration: none;
                    margin: 4px 2px;
                    cursor: pointer;
                }

                table {
                font-family: Arial, Helvetica, sans-serif;
                border-collapse: collapse;
                width: 100%;
                }

                td, th {
                border: 1px solid #ddd;
                padding: 8px;
                background-color: #a7a9be;
                text-align: center;
                }

                table tr:hover {background-color: #fff;}

                table th {
                padding-top: 12px;
                padding-bottom: 12px;
                text-align: left;
                background-color: #ff8906;
                color: white;
                }
                button {
                position: relative;
                background-color: #ff8906;
                border: none;
                font-size: 16px;
                color: #FFFFFF;
                padding: 20px;
                width: 100px;
                text-align: center;
                transition-duration: 0.4s;
                text-decoration: none;
                overflow: hidden;
                cursor: pointer;
                }

                button:after {
                content: "";
                background: #f1f1f1;
                display: block;
                position: absolute;
                padding-top: 300%;
                padding-left: 350%;
                margin-left: -20px !important;
                margin-top: -120%;
                opacity: 0;
                transition: all 0.8s
                }

                button:active:after {
                padding: 0;
                margin: 0;
                opacity: 1;
                transition: 0s
                }

    </style>
    <header>
    </header>
    <?php include("modules/navegation.php"); ?>
    <section>
    <?php 

        $mvc = new MvcController();
        $mvc -> enlacesPaginasController();	
    
    ?>
    </section>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?></title>

    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans" rel="stylesheet">

    <!-- bootstrap css -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <!-- style -->
    <link rel="stylesheet" href="assets/css/style.css">

    <!-- bootstrap js -->
    <!-- <script src="assets/js/bootstrap.min.js"></script> -->
    <!-- <script src="assets/js/popper.min.js"></script> -->

    <!-- scripts -->
    <script src="assets/js/scripts.js"></script>
</head>
<body>
    <header>
        <div class="container-fluid text-center">
            <div class="col-md-12 header">
                <div class="row">
                    <div class="col-md-3 logo">
                        <a href="#" class="ml-5">[Logo]</a>
                    </div>
                    <div class="col-md-6 title ">
                        <h1 class="mt-3">Bem Vindo ao Maju Online</h1>
                    </div>
                </div>
            </div>
        </div>
        
        <hr>
        
    </header>
    <?= $this->renderSection('main') ?>
    
    
    <footer class="text-center fixed-bottom bg-secondary">    
        <p>Maju Online &copy; - <?= date('Y') ?></p>
    </footer>

    <!-- jquery -->
    <script src="assets/js/jquery-3.6.0.min.js"></script>
</body>
</html>
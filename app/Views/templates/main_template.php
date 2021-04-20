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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

    <!-- style -->
    <link rel="stylesheet" href="assets/css/style.css">

    <!-- fontawesome -->
    <script src="https://kit.fontawesome.com/de432955b2.js" crossorigin="anonymous"></script>

    <!-- scripts -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

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
    
    <?= $this->renderSection('busca'); ?>
    
    <?= $this->renderSection('card'); ?>

    
    <footer class="text-center bg-secondary">    
        <p>Maju Online &copy; - <?= date('Y') ?></p>
    </footer>

    <script src="assets/js/scripts.js"></script>
</body>
</html>
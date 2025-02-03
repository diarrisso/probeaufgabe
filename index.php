<?php
    require_once './header/header.php';

        function includePageSection($file) {
            $filePath = './pages/' . $file . '.php';
            if (file_exists($filePath)) {
                include $filePath;
            } else {
                echo "<!-- $file sections not found -->";
            }
        }

        includePageSection('SlidePartner');
        includePageSection('Partner');
        includePageSection('Service');
        includePageSection('Newsletter');



    require_once './footer/footer.php';


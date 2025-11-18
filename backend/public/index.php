<?php
$configPath = __DIR__ . "/../config.ini";
$configData = [];

// Tenta carregar o arquivo INI
if (file_exists($configPath)) {
    // parse_ini_file() carrega o INI. O segundo argumento 'false' ou omitido 
    // é usado pois o arquivo INI não parece usar seções ([section]).
    $configData = parse_ini_file($configPath); 
}

$essentialConstants = [
    'DB_CONNECT', 'DBNAME', 'DBHOST', 'DBPORT', 'DBUSER', 'DBPASS', 
    'DB_CHARSET', 'RDBMS', 'DB_TRANSACTIONAL', 'DB_WORK_AROUND_FACTOR', 'CACHE_DB_METADATA',
    'APPLICATION_NAME', 'DEFAULT_ROUTE', 'DEFAULT_TIMEZONE', 'HANDLE_ERROR_TYPES', 'APPLICATION_LOG', 
    'PRIVATE_KEY', 'PUBLIC_KEY', 'ALLOW_CORS', 'MAX_LOG_ENTRIES'
];

foreach ($essentialConstants as $constantName) {
    if (isset($configData[$constantName]) && !defined($constantName)) {
        define($constantName, $configData[$constantName]);
    }
}

use \SplitPHP\System;


require_once __DIR__ . "/../core/kernel/class.system.php";
new System();
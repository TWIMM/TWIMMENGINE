<?php

return [
    'table_storage' => [
        'table_name' => 'doctrine_migration_versions',
        'version_column_name' => 'version',
        'version_column_length' => 191,
        'executed_at_column_name' => 'executed_at',
        'execution_time_column_name' => 'execution_time',
    ],
    // Add as many migrations for each domains
    'migrations_paths' => [
        // 'AppEngine\Migrations' => './AppEngine/Migrations',
        'app\AppEngine\Domains\AgencesDeVoyages\Migrations' => '../Migrations',
        //'AppEngine\Domains\AnotherDomain\Migrations' => './AppEngine/Domains/AnotherDomain/Migrations',
        // Add paths for other domains here...
    ],

    'all_or_nothing' => true,
    'transactional' => true,
    'check_database_platform' => true,
    'organize_migrations' => 'none',
    'connection' => null,
    'em' => null,
];

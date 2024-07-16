<?php

namespace app\AppEngine\Domains\Users\Config;

use Doctrine\Migrations\Configuration\EntityManager\ExistingEntityManager;
use Doctrine\Migrations\DependencyFactory;
use Doctrine\Migrations\Configuration\Migration\PhpFile;
use Doctrine\DBAL\DriverManager;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMSetup;
use Symfony\Component\Cache\Adapter\ArrayAdapter;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;

require_once "vendor/autoload.php";

$dbParams = require 'AppEngine/Domains/AgencesDeVoyages/Config/migrations-db.php'; // Adjust the path if necessary

// Define paths to your entity directories
$paths = ["AppEngine/Domains/AgencesDeVoyages/Entities"];
$isDevMode = true;

// Setup Doctrine ORM configuration
$cache = $isDevMode ? new ArrayAdapter() : new FilesystemAdapter();
$ORMConfig = ORMSetup::createAttributeMetadataConfiguration($paths, $isDevMode, null, $cache);

$connection = DriverManager::getConnection($dbParams);

// Setup Doctrine EntityManager
$entityManager = new EntityManager($connection, $ORMConfig);

// Setup Doctrine Migrations configuration
$config = new PhpFile('AppEngine/Domains/AgencesDeVoyages/Config/migrations.php'); // Adjust the path if necessary

// Setup Doctrine Migrations DependencyFactory
$dependencyFactory = DependencyFactory::fromEntityManager($config, new ExistingEntityManager($entityManager));


return $dependencyFactory;

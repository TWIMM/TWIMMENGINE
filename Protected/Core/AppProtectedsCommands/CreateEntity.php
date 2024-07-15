<?php

namespace App\Protected\Core\AppProtectedsCommands;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Filesystem\Filesystem;

class CreateEntity extends Command
{
    protected static $defaultName = 'create_entity';

    /**
     * Configure.
     */
    protected function configure()
    {
        parent::configure();
        $this->setName('create_entity');
        $this->setDescription('Create entity');
        $this->addArgument('name', InputArgument::REQUIRED, 'The name of the entity.');
        $this->addArgument('domain', InputArgument::REQUIRED, 'The name of the domain of entity.');

        $this->setHelp('Create an entity for your specified domain.');
    }

    /**
     * Execute command.
     *
     * @param InputInterface $input
     * @param OutputInterface $output
     *
     * @return int integer 0 on success, or an error code
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        // outputs multiple lines to the console (adding "\n" at the end of each line)
        $output->writeln([
            'User entity creation',
            '============>',
            '',
        ]);

        $entityName = $input->getArgument('name');
        $domainName = $input->getArgument('domain');

        $fileSystem = new Filesystem();

        // Example entity content
        $entityContent = <<<EOT
        <?php

        namespace App\Entity;

        use Doctrine\ORM\Mapping as ORM;

        /**
         * @ORM\Entity()
         */
        class $entityName
        {
            /**
             * @ORM\Id
             * @ORM\GeneratedValue
             * @ORM\Column(type="integer")
             */
            private \$id;

            // Example field
            /**
             * @ORM\Column(type="string", length=255)
             */
            private \$fieldName;

            public function getId(): ?int
            {
                return \$this->id;
            }

            public function getFieldName(): ?string
            {
                return \$this->fieldName;
            }

            public function setFieldName(string \$fieldName): self
            {
                \$this->fieldName = \$fieldName;

                return \$this;
            }
        }
        EOT;

        // Adjust the file path and handle file creation
        $domainPath =  $filePath = sprintf('AppEngine/Domains/%s', $domainName);

        $filePath = sprintf('AppEngine/Domains/%s/Entities/%s.php', $domainName, $entityName);

        if (!$fileSystem->exists($domainPath)) {
            $output->writeln("Domain '$domainName' don't exists.");
            return Command::FAILURE;
        }

        if (!$fileSystem->exists($filePath)) {
            $fileSystem->dumpFile($filePath, $entityContent);
            $output->writeln("Entity '$entityName' has been created successfully.");
        } else {
            $output->writeln("Entity '$entityName' already exists.");
        }

        return Command::SUCCESS;
    }
}

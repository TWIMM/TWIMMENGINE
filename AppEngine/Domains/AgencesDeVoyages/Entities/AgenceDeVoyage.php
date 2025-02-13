<?php

namespace app\AppEngine\Domains\AgencesDeVoyages\Entities;

use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;

#[Entity]
#[Table(name: 'users')]
class User
{
    #[Id]
    #[Column(type: 'integer')]
    #[GeneratedValue]
    private $id_user;

    #[Column(type: 'string', nullable: true)]
    private $username;

    public function setId(int $id_user)
    {
        $this->id_user = $id_user;
    }

    public function getId(): ?int
    {
        return $this->id_user;
    }

    public function setUsername(string $username): void
    {
        $this->username = $username;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }
}

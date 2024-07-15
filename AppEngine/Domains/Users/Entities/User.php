<?php

namespace  app\AppEngine\Domains\Users\Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 */
class User
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id_user;

    // Example field
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $fieldName;

    public function getId(): ?int
    {
        return $this->id_user;
    }

    public function getFieldName(): ?string
    {
        return $this->fieldName;
    }

    public function setFieldName(string $fieldName): self
    {
        $this->fieldName = $fieldName;

        return $this;
    }
}
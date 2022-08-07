<?php

namespace App\Entity;

use ApiPlatform\Core\Action\NotFoundAction;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CatalogRepository;
use Doctrine\ORM\Mapping as ORM;


#[ORM\Entity(repositoryClass: CatalogRepository::class)]
#[
    ApiResource(
        collectionOperations: [
            "get",
        ],
        itemOperations: [
            'get' => [
                'method' => 'GET',
                'read' => true,
                'output' => false,
                'controller' => NotFoundAction::class,
            ],
        ],
        attributes: ["pagination_enabled" => false])
]
class Catalog
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }
}

<?php

namespace App\Entity;

use ApiPlatform\Core\Action\NotFoundAction;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\GoodsOrderRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: GoodsOrderRepository::class)]
#[ApiResource(
    collectionOperations: [
        "get",
        "post"
    ],
    itemOperations: [
        'get' => [
            'method' => 'GET',
            'read' => true,
            'output' => false,
            'controller' => NotFoundAction::class,
        ],
    ],
    attributes: ["pagination_enabled" => false],
    normalizationContext: ['groups' => ['goodsOrders']]
)]
class GoodsOrder
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['goodsOrders'])]
    private ?int $id = null;

    #[Groups(['goodsOrders'])]
    #[ORM\ManyToMany(targetEntity: Goods::class, inversedBy: 'goodsOrders')]
    private Collection $goods;

    #[ORM\Column]
    #[Groups(['goodsOrders'])]
    private ?int $quantity = null;

    public function __construct()
    {
        $this->goods = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }


    /**
     * @return Collection<int, Goods>
     */
    public function getGoods(): Collection
    {
        return $this->goods;
    }

    public function addGood(goods $good): self
    {
        if (!$this->goods->contains($good)) {
            $this->goods->add($good);
        }

        return $this;
    }

    public function removeGood(goods $good): self
    {
        $this->goods->removeElement($good);

        return $this;
    }
}

<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\GoodsOrderRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GoodsOrderRepository::class)]
#[ApiResource(
    collectionOperations: [
        "get",
        "post"
    ],
    itemOperations: [],
)]
class GoodsOrder
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToMany(targetEntity: goods::class, inversedBy: 'goodsOrders')]
    private Collection $goods;

    public function __construct()
    {
        $this->goods = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, goods>
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

<?php

namespace App\Entity;

use ApiPlatform\Core\Action\NotFoundAction;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use App\Repository\GoodsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: GoodsRepository::class)]
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
        attributes: ["pagination_enabled" => false],
        normalizationContext: ['groups' => ['goods']]
    ),
    ApiFilter(SearchFilter::class, properties: [
        'catalog.id' => 'exact'
    ])
]
class Goods
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["goods", 'goodsOrders'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["goods", 'goodsOrders'])]
    private ?string $name = null;

    #[ORM\Column]
    #[Groups("goods")]
    private ?bool $hidden = null;

    #[ORM\Column]
    #[Groups(["goods", 'goodsOrders'])]
    private ?float $quantity = null;

    #[ORM\Column]
    #[Groups(["goods", 'goodsOrders'])]
    private ?float $regprice = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Catalog $catalog = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["goods", 'goodsOrders'])]
    private ?Measure $measure = null;

    #[ORM\ManyToMany(targetEntity: GoodsOrder::class, mappedBy: 'goods')]
    #[Groups("goods")]
    private Collection $goodsOrders;

    public function __construct()
    {
        $this->goodsOrders = new ArrayCollection();
    }

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

    public function isHidden(): ?bool
    {
        return $this->hidden;
    }

    public function setHidden(bool $hidden): self
    {
        $this->hidden = $hidden;

        return $this;
    }

    public function getQuantity(): ?float
    {
        return $this->quantity;
    }

    public function setQuantity(float $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getRegprice(): ?float
    {
        return $this->regprice;
    }

    public function setRegprice(float $regprice): self
    {
        $this->regprice = $regprice;

        return $this;
    }

    public function getCatalog(): ?catalog
    {
        return $this->catalog;
    }

    public function setCatalog(?catalog $catalog): self
    {
        $this->catalog = $catalog;

        return $this;
    }

    public function getMeasure(): ?measure
    {
        return $this->measure;
    }

    public function setMeasure(?measure $measure): self
    {
        $this->measure = $measure;

        return $this;
    }

    /**
     * @return Collection<int, GoodsOrder>
     */
    public function getGoodsOrders(): Collection
    {
        return $this->goodsOrders;
    }

    public function addGoodsOrder(GoodsOrder $goodsOrder): self
    {
        if (!$this->goodsOrders->contains($goodsOrder)) {
            $this->goodsOrders->add($goodsOrder);
            $goodsOrder->addGood($this);
        }

        return $this;
    }

    public function removeGoodsOrder(GoodsOrder $goodsOrder): self
    {
        if ($this->goodsOrders->removeElement($goodsOrder)) {
            $goodsOrder->removeGood($this);
        }

        return $this;
    }
}

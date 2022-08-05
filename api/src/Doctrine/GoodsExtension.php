<?php

namespace App\Doctrine;

use ApiPlatform\Core\Bridge\Doctrine\Orm\Extension\QueryCollectionExtensionInterface;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Util\QueryNameGeneratorInterface;
use Doctrine\ORM\QueryBuilder;
use App\Entity\Goods;

class GoodsExtension implements QueryCollectionExtensionInterface
{
    public function applyToCollection(QueryBuilder $queryBuilder, QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, string $operationName = null)
    {
        if ($resourceClass !== Goods::class) {
            return;
        }
        $rootAlias = $queryBuilder->getRootAliases()[0];
        $queryBuilder
            // return only non hidden goods.
            ->andWhere(sprintf('%s.hidden = :hidden', $rootAlias))
            // return only goods in stock.
            ->andWhere(sprintf('%s.quantity > :quantity', $rootAlias))
            ->setParameters(['hidden' => false, 'quantity' => 0]);
    }
}
<?php
namespace App\OpenApi;

use ApiPlatform\Core\OpenApi\Factory\OpenApiFactoryInterface;
use ApiPlatform\Core\OpenApi\OpenApi;

class OpenApiFactory implements OpenApiFactoryInterface
{
    private OpenApiFactoryInterface $decorated;

    public function __construct(OpenApiFactoryInterface $decorated)
    {
        $this->decorated = $decorated;
    }

    public function __invoke(array $context = []): OpenApi
    {
        $openApi = $this->decorated->__invoke($context);
        $goodsGetOnePath = $openApi->getPaths()->getPath('/api/goods/{id}');
        $goodsOrdersGetOnePath = $openApi->getPaths()->getPath('/api/goods_orders/{id}');
        $openApi->getPaths()->addPath('/api/goods/{id}', $goodsGetOnePath->withGet(null));
        $openApi->getPaths()->addPath('/api/goods_orders/{id}', $goodsOrdersGetOnePath->withGet(null));
        return $openApi;
    }
}
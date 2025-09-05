<?php


namespace App\Repositories\All\Products;

use App\Repositories\Base\BaseRepositoryInterface;

interface ProductInterface extends BaseRepositoryInterface
{
    public function findByCategory($categoryId);
}

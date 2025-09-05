<?php

namespace App\Repositories\All\Products;

use App\Models\Product;
use App\Repositories\Base\BaseRepository;

class ProductRepository extends BaseRepository implements ProductInterface
{
    public function __construct(Product $model)
    {
        parent::__construct($model);
    }

    public function findByCategory($categoryId)
    {
        return $this->model->where('category_id', $categoryId)->get();
    }
}

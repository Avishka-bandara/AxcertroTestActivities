<?php

namespace App\Repositories\All\Categories;

use App\Models\Category;
use App\Repositories\Base\BaseRepository;

class CategoryRepository extends BaseRepository implements CategoryInterface
{
    public function __construct(Category $model)
    {
        parent::__construct($model);
    }
}

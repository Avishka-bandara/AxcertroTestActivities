<?php
// app/Repositories/Base/BaseRepositoryInterface.php
namespace App\Repositories\Base;

interface BaseRepositoryInterface
{
    /**
     * Get all records.
     *
     * @return void
     */
    public function all($relations = []);
    public function findbyColumn($columns, $value, $relations);
    public function findbyId($id);
    public function create(array $attributes);
    public function update($id, array $attributes);
    public function delete($id);
}

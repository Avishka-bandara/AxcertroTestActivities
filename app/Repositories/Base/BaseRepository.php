<?php


namespace App\Repositories\Base;

use Illuminate\Database\Eloquent\Model;

class BaseRepository implements BaseRepositoryInterface
{

    protected $model;


    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    /**
     * Get all records.
     *
     * @return void
     */
    public function all($relations = [])
    {
        return $this->model->with($relations)->get();
    }
    /**
     * Get a record by its ID.
     *
     * @param mixed $id
     * @return Model
     */
    public function findByColumn($columns, $value, $relations)
    {
        return $this->model->with($relations)->where($columns, $value)->first();
    }
    /**
     * Get a record by its ID.
     *
     * @param [type] $id
     * @param array $relations
     * @return void
     */
    public function findbyId($id, $relations = [])
    {
        return $this->model->with($relations)->findOrFail($id);
    }
    /**
     * Create a new record.
     *
     * @param array $attributes
     * @return Model
     */
    public function create(array $attributes)
    {
        return $this->model->create($attributes);
    }
    /**
     * Update an existing record.
     *
     * @param mixed $id
     * @param array $attributes
     * @return Model
     */
    public function update($id, array $attributes)
    {
        $record = $this->findbyId($id);
        $record->update($attributes);
        return $record;
    }
    /**
     * Delete a record by its ID.
     *
     * @param mixed $id
     * @return void
     */
    public function delete($id)
    {
        return $this->model->destroy($id);
    }
}

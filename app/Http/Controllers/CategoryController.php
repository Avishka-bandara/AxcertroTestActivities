<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Repositories\All\Categories\CategoryInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categoryRepository = app()->make(CategoryInterface::class);
        $categories = $categoryRepository->all();
        return Inertia::render('Category/AddCategory', ['categories' => $categories]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $categoryRepository = app()->make(CategoryInterface::class);
        $request->validate([
            'name' => 'required|string|max:255',
        ]);
        // Category::create($request->all());

        $categoryRepository->create($request->all());
        return redirect()->back()->with('message', 'Category created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category) {}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        //
    }
}

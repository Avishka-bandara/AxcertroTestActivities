<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Repositories\All\Categories\CategoryRepository;
use App\Repositories\All\Products\ProductInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $productRepository = app()->make(ProductInterface::class);

        $products = ($productRepository->all('category'));
        return Inertia::render('Product/Product', ['products' => $products]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // dd(request());
        $productRepository = app()->make(ProductInterface::class);
        $productRepository->all();

        $categories = Category::all();
        return Inertia::render('Product/CreateProduct', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'brand_name' => 'required',
            'price' => 'required|numeric',
            'quantity' => 'required|numeric',
            'category_id' => 'required|exists:categories,id',
        ]);

        $productRepository = app()->make(ProductInterface::class);
        $productRepository->create($validated);
        return redirect(route('products.index'))->with('success', 'Product created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product) {}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {

        $productRepository = app()->make(ProductInterface::class);
        $categoryRepository = app()->make(CategoryRepository::class);

        $product = $productRepository->findByColumn('id', $product->id, ['category']);

        $categories = $categoryRepository->all();

        return Inertia::render('Product/EditProduct', ['product' => $product, 'categories' => $categories]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {

        $productRepository = app()->make(ProductInterface::class);
        $validated = $request->validate([
            'brand_name' => 'required',
            'price' => 'required|numeric',
            'quantity' => 'required|numeric',
            'category_id' => 'required|exists:categories,id',
        ]);
        $productRepository->update($product->id, $validated);
        return redirect(route('products.index'))->with('success', 'Product Updated Successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $productRepository = app()->make(ProductInterface::class);
        $productRepository->delete($product->id);
        return redirect(route('products.index'))->with('success', 'Product Deleted Successfully!');
    }
}

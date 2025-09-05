<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Repositories\All\Products\ProductInterface;
use App\Repositories\All\Products\ProductRepositoryInterface;
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
        // $products = Product::with('category')->latest()->get();
        return Inertia::render('Product/Product', ['products' => $products]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // dd(request());
        // $productRepository = app()->make(ProductInterface::class);
        // $productRepository->all();

        $categories = Category::all();
        return Inertia::render('Product/CreateProduct', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        $validated = $request->validate([
            'brand_name' => 'required',
            'price' => 'required|numeric',
            'quantity' => 'required|numeric',
            'category_id' => 'required|exists:categories,id',
        ]);
        // Product::create($validated);
        $productRepository = app()->make(ProductInterface::class);
        $productRepository->create($validated);
        return redirect(route('products.index'))->with('message', 'Product created successfully.');
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
        // $category_id = $product->category_id;
        // $categoryName = Category::where('id', $category_id)->first()->name;
        $categories = Category::all();
        return Inertia::render('Product/EditProduct', ['product' => $product, 'categories' => $categories]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'brand_name' => 'required',
            'price' => 'required|numeric',
            'quantity' => 'required|numeric',
            'category_id' => 'required|exists:categories,id',
        ]);
        $product->update($validated);
        return redirect(route('products.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect(route('products.index'));
    }
}

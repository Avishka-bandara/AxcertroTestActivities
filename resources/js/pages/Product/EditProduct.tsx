import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

type Product = {
    id: number;
    brand_name: string;
    price: string;
    quantity: string;
    created_at: string;
    category_id: number;
};

type Category = {
    id: number;
    name: string;
};

interface EditProductProps {
    categories: Category[];
    product: Product;
}

export default function EditProduct({ product, categories }: EditProductProps) {
    const { data, setData, put, errors } = useForm({
        brand_name: product.brand_name,
        price: product.price,
        quantity: product.quantity,
        category_id: categories.find((category) => category.id === product.category_id)?.id || '',
    });
    const { flash } = usePage().props as { flash?: { success?: string; error?: string } };
    const { delete: destroy } = useForm();

    useEffect(() => {
        if (flash?.success) toast.success(flash.success);
        if (flash?.error) toast.error(flash.error);
    }, [flash]);

    function submit(e: React.SyntheticEvent) {
        e.preventDefault();
        put(route('products.update', product.id));
    }
    function deleteProduct(e: React.SyntheticEvent) {
        e.preventDefault();
        if (confirm('Are you sure you want to delete this product?')) {
            destroy(route('products.destroy', product.id));
        }
    }

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center">
                    <Link href={route('products.index')}>
                        <h2 className="delay-10 mx-1 text-xl font-semibold leading-tight text-gray-800 transition ease-in hover:cursor-pointer hover:text-green-300">
                            Product
                        </h2>
                    </Link>
                    <span className="mx-2 text-gray-500">&rarr;</span>
                    <h2 className="delay-10 mx-1 text-xl font-semibold leading-tight text-green-500 transition ease-in hover:cursor-pointer">
                        Edit product
                    </h2>
                </div>
            }
        >
            <Head title="EditProduct" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit} className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <input
                                        type="text"
                                        className={`rounded-md border border-gray-300 p-2 ${errors.brand_name && 'ring-1 !ring-red-500'}`}
                                        placeholder="Brand Name"
                                        name="brand_name"
                                        value={data.brand_name}
                                        onChange={(e) => setData('brand_name', e.target.value)}
                                    />
                                    {errors.brand_name && <p className="mt-1 text-red-600">{errors.brand_name}</p>}
                                </div>
                                <div className="flex flex-col">
                                    <input
                                        type="text"
                                        className={`rounded-md border border-gray-300 p-2 ${errors.price && 'ring-1 !ring-red-500'}`}
                                        placeholder="Price"
                                        name="price"
                                        value={data.price}
                                        onChange={(e) => setData('price', e.target.value)}
                                    />
                                    {errors.price && <p className="mt-1 text-red-600">{errors.price}</p>}
                                </div>
                                <div className="flex flex-col">
                                    <input
                                        type="text"
                                        className={`rounded-md border border-gray-300 p-2 ${errors.quantity && 'ring-1 !ring-red-500'}`}
                                        placeholder="Quantity"
                                        name="quantity"
                                        value={data.quantity}
                                        onChange={(e) => setData('quantity', e.target.value)}
                                    />
                                    {errors.quantity && <p className="mt-1 text-red-600">{errors.quantity}</p>}
                                </div>
                                <div className="flex flex-col">
                                    <select
                                        name="category_id"
                                        id="category_id"
                                        className={`rounded-md border border-gray-300 p-2 ${errors.category_id && 'ring-1 !ring-red-500'}`}
                                        value={data.category_id}
                                        onChange={(e) => setData('category_id', e.target.value)}
                                    >
                                        <option>Select Category</option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.category_id && <p className="mt-1 text-red-600">{errors.category_id}</p>}
                                </div>

                                <button className="rounded-md bg-green-500 p-2 text-white">Update Product</button>
                                <Link href={route('products.destroy', product.id)}>
                                    <button
                                        onClick={deleteProduct}
                                        className="mx-5 rounded bg-red-500 p-2 px-3 text-white hover:bg-red-600 hover:text-white"
                                    >
                                        Delete
                                    </button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

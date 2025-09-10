import Loading from '@/Components/Loading';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

type Product = {
    id: number;
    brand_name: string;
    category: {
        name: string;
    };
    price: number;
    quantity: number;
    created_at: string;
};

interface ProductProps {
    products: Product[];
}

export default function Product({ products }: ProductProps) {
    // console.log(products);

    const { flash } = usePage().props as { flash?: { success?: string; error?: string } };
    const [loading, setLoading] = useState(false);
    const { url } = usePage();

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timeout);
    }, [url]);

    useEffect(() => {
        if (flash?.success) toast.success(flash.success);
        if (flash?.error) toast.error(flash.error);
    }, [flash]);

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center">
                    <h2 className="delay-10 mx-6 text-xl font-semibold leading-tight text-gray-800 transition ease-in hover:cursor-pointer hover:text-green-300">
                        Product
                    </h2>
                    <Link href={route('categories.index')}>
                        <button className="rounded-md border bg-green-400 px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-200 ease-out hover:bg-green-500">
                            Add Category
                        </button>
                    </Link>
                    <Link href={route('products.create')}>
                        <button className="mx-2 rounded-md border bg-green-400 px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-200 ease-out hover:bg-green-500">
                            Add Product
                        </button>
                    </Link>
                </div>
            }
        >
            <Head title="Product" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Id</th>
                                        <th className="px-4 py-2">Name</th>
                                        <th className="px-4 py-2">Category Name</th>
                                        <th className="px-4 py-2">Price</th>
                                        <th className="px-4 py-2">Quantity</th>
                                        <th className="px-4 py-2">Date</th>

                                        <th className="px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {loading ? (
                                        <tr>
                                            <td colSpan={7} className="py-6 text-center">
                                                <Loading />
                                            </td>
                                        </tr>
                                    ) : (
                                        (products ?? []).map((product) => (
                                            <tr key={product.id}>
                                                <td className="border-t border-gray-200 px-4 py-2">{product.id}</td>
                                                <td className="border-t border-gray-200 px-4 py-2">{product.brand_name}</td>
                                                <td className="border-t border-gray-200 px-4 py-2">{product.category.name}</td>
                                                <td className="border-t border-gray-200 px-4 py-2">{product.price}</td>
                                                <td className="border-t border-gray-200 px-4 py-2">{product.quantity}</td>
                                                <td className="border-t border-gray-200 px-4 py-2">
                                                    {new Date(product.created_at).toLocaleTimeString()}
                                                </td>
                                                <td className="flex border-t border-gray-200 px-4 py-2">
                                                    <Link href={route('products.edit', product.id)}>
                                                        <button className="rounded bg-green-400 p-2 px-3 text-white hover:bg-green-500 hover:text-white">
                                                            Edit
                                                        </button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

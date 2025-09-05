import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center">
                    <h2 className="delay-10 text-xl font-semibold leading-tight text-gray-800 transition ease-in hover:cursor-pointer hover:text-green-400">
                        Dashboard
                    </h2>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Id</th>
                                        <th className="px-4 py-2">Product Name</th>
                                        <th className="px-4 py-2">Price</th>
                                        <th className="px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {/* {products.map((product) => (
                                        <tr key={product.id}>
                                            <td className="border-t border-gray-200 px-4 py-2">{product.id}</td>
                                            <td className="border-t border-gray-200 px-4 py-2">{product.name}</td>
                                            <td className="border-t border-gray-200 px-4 py-2">${product.price}</td>
                                            <td className="border-t border-gray-200 px-4 py-2">
                                                <button className="mx-5 text-blue-500 hover:text-blue-700">Edit</button>
                                                <button className="text-red-500 hover:text-red-700">Delete</button>
                                            </td>
                                        </tr>
                                    ))} */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

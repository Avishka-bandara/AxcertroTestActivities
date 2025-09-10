import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Loading from '@/Components/Loading';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

type Category = {
    id: number;
    name: string;
};

interface CategoryProps {
    categories: Category[];
}

export default function AddCategory({ categories }: CategoryProps) {
    const { data, setData, post, errors } = useForm({
        name: '',
    });

    const [loading, setLoading] = useState(false);
    const { url } = usePage();

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timeout);
    }, [url]);

    function submit(e: React.SyntheticEvent) {
        e.preventDefault();
        post(route('categories.store'));
    }

    function reset() {
        setData('name', '');
    }
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center">
                    <h2 className="delay-10 text-xl font-semibold leading-tight text-gray-800 transition ease-in hover:cursor-pointer hover:text-green-400">
                        Add Category
                    </h2>
                </div>
            }
        >
            <Head title="Add Category" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="justify-center p-6 text-gray-900">
                            <form className="px-10" onSubmit={submit}>
                                <div className="mb-grid my-3 md:grid">
                                    <div>
                                        <InputLabel htmlFor="name" value="Category Name" />

                                        <TextInput
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            className="mt-1 block w-full"
                                            autoComplete="username"
                                            isFocused={true}
                                            onChange={(e) => setData('name', e.target.value)}
                                        />

                                        <InputError message={errors.name} className="mt-2" />
                                    </div>
                                </div>
                                <div className="mb-grid gap-4 md:grid">
                                    <div className="mb-grid grid-cols-2 gap-4 md:grid">
                                        <button
                                            onClick={reset}
                                            className="rounded-md border border-gray-300 bg-yellow-400 p-2 transition-all duration-150 hover:bg-yellow-500 hover:shadow-lg"
                                        >
                                            Reset
                                        </button>
                                        <button className="rounded-md border border-gray-300 bg-green-400 p-2 transition-all duration-150 hover:bg-green-500 hover:shadow-lg">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <table className="mt-6 w-full border-collapse bg-white text-center text-sm text-gray-500">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">ID</th>
                                <th className="px-4 py-2">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={2} className="px-4 py-2">
                                        <Loading />
                                    </td>
                                </tr>
                            ) : (
                                categories.map((category) => (
                                    <tr key={category.id} className="border-t border-gray-200">
                                        <td className="px-4 py-2">{category.id}</td>
                                        <td className="px-4 py-2">{category.name}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

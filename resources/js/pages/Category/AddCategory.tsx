import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AddCategory() {
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
                        <div className="p-6 text-gray-900">
                            <form action="">
                                <div className="mb-grid my-3 grid-cols-2 gap-4 md:grid">
                                    <div>
                                        <InputLabel htmlFor="email" value="Email" />

                                        <TextInput
                                            id="category"
                                            type="text"
                                            name="category"
                                            // value={data.category}
                                            className="mt-1 block w-full"
                                            autoComplete="username"
                                            isFocused={true}
                                            // onChange={(e) => setData('category', e.target.value)}
                                        />

                                        {/* <InputError message={errors.category} className="mt-2" /> */}
                                    </div>
                                </div>
                                <div className="mb-grid grid-cols-2 gap-4 md:grid">
                                    <div className="mb-grid grid-cols-2 gap-4 md:grid">
                                        <button
                                            type="submit"
                                            className="rounded-md border border-gray-300 bg-yellow-400 p-2 transition-all duration-150 hover:bg-yellow-500 hover:shadow-lg"
                                        >
                                            Reset
                                        </button>
                                        <button
                                            type="reset"
                                            className="rounded-md border border-gray-300 bg-green-400 p-2 transition-all duration-150 hover:bg-green-500 hover:shadow-lg"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

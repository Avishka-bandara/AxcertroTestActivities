export default function Loading() {
    return (
        <div className="flex items-center justify-center py-6">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-green-400" />
            {/* <span className="ml-2 text-gray-600">Loading...</span> */}
        </div>
    );
}

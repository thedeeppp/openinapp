export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
          Hey there! The main routes of this website are as follows:
        </h2>
        <div className="space-y-2">
          {['/auth/signin', '/upload', '/uploading', '/uploaded'].map((route, index) => (
            <h3 key={index} className="text-xl text-gray-700 dark:text-gray-300">
              {route}
            </h3>
          ))}
        </div>

        <p className="text-lg mt-6 text-gray-800 dark:text-gray-200">
          This is because it's a frontend-only website and does not use backend routes to switch pages.
        </p>
        <p className="text-lg mt-2 text-gray-800 dark:text-gray-200">
          Sorry for the inconvenience.
        </p>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen p-4">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Hey there! The main routes of this website are as follows:</h2>
        <h3 className="text-xl mb-2">/auth/signin</h3>
        <h3 className="text-xl mb-2">/upload</h3>
        <h3 className="text-xl mb-2">/uploading</h3>
        <h3 className="text-xl mb-2">/uploaded</h3>

        <p className="text-lg mt-6">
          This is because it's a frontend-only website and does not use backend routes to switch pages.
        </p>
        <p className="text-lg mt-2">Sorry for the inconvenience.</p>
      </div>
    </main>
  );
}

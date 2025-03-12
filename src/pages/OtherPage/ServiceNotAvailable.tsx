import PageMeta from "../../components/common/PageMeta";

export default function ServiceUnavailable() {
  return (
    <>
      <PageMeta
        title="503 Service Unavailable | Emndex Solution Ltd"
        description="The service is temporarily unavailable. Please try again later."
      />
      <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1">
        <div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
          <h1 className="mb-8 font-bold text-gray-800 text-title-md dark:text-white/90 xl:text-title-2xl">
            ERROR
          </h1>
          <img src="/assets/error/503.svg" alt="503" className="dark:hidden" />

          <p className="mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
            The service is currently unavailable. Please check back later.
          </p>
        </div>

        <p className="absolute text-sm text-center text-gray-500 -translate-x-1/2 bottom-6 left-1/2 dark:text-gray-400">
          &copy; {new Date().getFullYear()} - Emndex Solution Ltd
        </p>
      </div>
    </>
  );
}

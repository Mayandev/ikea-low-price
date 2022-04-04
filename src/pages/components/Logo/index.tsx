export default function Logo() {
  return (
    <div className="sm:px-16 xl:px-48 2xl:px-64 py-10 hidden sm:block">
      <div>
        <span className="bg-ikea-yellow dark:bg-dark-black dark:border-8 dark:border-ikea-yellow w-20 h-20 rounded-full inline-block" />
        <span className="bg-ikea-blue dark:bg-dark-black dark:border-8 dark:border-ikea-blue w-20 h-20 ml-4 inline-block" />
      </div>
      <h1 className="font-logo dark:text-white font-bold text-6xl inline-block tracking-wide px-2">
        IKEA
      </h1>
    </div>
  );
}

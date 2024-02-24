function LoadingSkeleton() {
  return (
    <div role="status" className="animate-pulse">
      {/* Pole s 6 prázdnými položkami. */}
      {Array.from({length: 6}, (_, index) => (
        <div
          key={index}
          className={`${index === 0 ? '!h-6' : 'h-4'} bg-gray-300 rounded-full dark:bg-gray-400 w-full mt-4`}
        ></div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default LoadingSkeleton;

// Převzato a upraveno podle:
// https://flowbite.com/docs/components/skeleton/

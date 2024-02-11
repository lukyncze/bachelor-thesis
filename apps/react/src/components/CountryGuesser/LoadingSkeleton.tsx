function LoadingSkeleton() {
  return (
    <div role="status" className="animate-pulse">
      {Array.from({length: 6}, (_, key) => (
        <div
          key={key}
          className={`${key === 0 ? '!h-6' : 'h-4'} bg-gray-300 rounded-full dark:bg-gray-400 w-full mt-4`}
        ></div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default LoadingSkeleton;

// Inspiration:
// https://flowbite.com/docs/components/spinner/

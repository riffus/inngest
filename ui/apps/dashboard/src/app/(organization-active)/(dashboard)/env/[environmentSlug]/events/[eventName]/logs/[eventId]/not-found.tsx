import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

export default function EventNotFound() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <div className="inline-flex items-center gap-2 text-yellow-600">
        <ExclamationCircleIcon className="h-4 w-4" />
        <h2 className="text-sm">Could not find the requested event</h2>
      </div>
    </div>
  );
}

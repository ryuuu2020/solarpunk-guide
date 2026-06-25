import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-display text-8xl font-bold text-moss/30">404</h1>
        <h2 className="font-display text-2xl font-semibold text-bark mt-4">Island Drifted Away</h2>
        <p className="font-body text-bark-light mt-3 max-w-md mx-auto">
          The floating island you're looking for hasn't been discovered yet. Maybe it drifted into another dimension with your airship.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 rounded-pill bg-moss text-white font-semibold text-sm hover:bg-moss-dark transition-colors"
        >
          Return to Base
        </Link>
      </div>
    </div>
  );
}

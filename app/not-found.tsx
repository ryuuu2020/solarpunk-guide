import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-display text-8xl font-bold text-moss/30">404</h1>
        <h2 className="font-display text-2xl font-semibold text-bark mt-4">页面飘走了</h2>
        <p className="font-body text-bark-light mt-3 max-w-md mx-auto">
          你寻找的浮岛似乎尚未被发现。或许它和飞船一起飘到了另一个维度。
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 rounded-pill bg-moss text-white font-semibold text-sm hover:bg-moss-dark transition-colors"
        >
          返回基地
        </Link>
      </div>
    </div>
  );
}

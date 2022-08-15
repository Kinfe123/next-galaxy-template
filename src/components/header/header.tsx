import Link from 'next/link';

import { SelectTheme } from './select-theme';

function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-50

        flex
        flex-none

        w-full
        h-[4rem]
        py-3

        mx-auto

        border-b
        border-gray-200

        backdrop-blur
        supports-backdrop-blur:bg-white/90

        dark:border-gray-800
        dark:supports-backdrop-blur:bg-gray-900/70
      "
    >
      <div
        className="
          flex
          items-center
          justify-between

          px-4
          sm:px-6

          w-full
          h-full
          mx-auto
          max-w-full

          lg:max-w-8xl
        "
      >
        <Link href="/" passHref>
          <a
            href="/"
            className="
              flex
              flex-row
              items-center
        
              font-bold
              text-gray-600

              dark:text-white
            "
          >
            🔮 next-docs
          </a>
        </Link>

        <SelectTheme />
      </div>
    </header>
  );
}

export default Header;

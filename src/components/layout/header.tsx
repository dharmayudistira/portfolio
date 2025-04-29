import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex justify-center items-center border-b">
      <div className="w-full py-4 container flex justify-between items-center">
        <p className="text-2xl text-white font-bold">Dharma&apos;s Portfolio</p>

        <div className="flex gap-4 text-primary-foreground">
          <Link href="/">Home</Link>
          <Link href="/playgrounds">Playgrounds</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

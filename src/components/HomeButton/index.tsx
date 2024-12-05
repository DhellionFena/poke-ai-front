"use client";

import Link from "next/link";

interface HomeButtonProps {
  text: string;
  navigation: string;
  navigationParams:string | null;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function HomeButton({
  text,
  navigation,
  navigationParams,
  onClick,
}: HomeButtonProps) {
  return (
    <Link
      onClick={onClick}
      href={{
        pathname: navigation,
        query: navigationParams,
      }}
      className="my-4 h-full w-full truncate rounded-md border-8 border-black bg-white px-8 py-12 text-center text-2xl text-black hover:border-red-600 hover:text-red-600"
    >
      {text}
    </Link>
  );
}

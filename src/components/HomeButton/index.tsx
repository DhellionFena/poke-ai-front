import Link from "next/link";

interface HomeButtonProps {
  text: string;
  navigation: string;
  navigationParams: any;
}

export default function HomeButton({
  text,
  navigation,
  navigationParams,
}: HomeButtonProps) {
  return (
    <Link
      href={{
        pathname: navigation,
        query: navigationParams,
      }}
      className="my-8 h-full w-full rounded-md border-8 border-black bg-white px-8 py-12 text-center text-2xl text-black hover:border-red-600 hover:text-red-600"
    >
      {text}
    </Link>
  );
}

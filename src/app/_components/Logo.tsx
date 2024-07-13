import Image from "next/image";
import Link from "next/link";
import logoImage from "../../../public/logo.png";

function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" className="flex items-center space-x-2 space-y-8">
        <Image
          src={logoImage}
          alt="Library Logo"
          width={120}
          height={40} // Adjust height as needed to maintain aspect ratio
          className="object-contain"
        />
        <span className="text-white font-bold">BLUE BOOK</span>
      </Link>
    </div>
  );
}

export { Logo };

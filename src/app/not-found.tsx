import Link from "next/link";
import notFoundImg from "../../public/not-found.png";
import Image from "next/image";

function NotFound() {
  return (
    <main className="flex items-center justify-center h-screen ">
      <div className="flex flex-col items-center justify-center w-full h-full ">
        <div className="flex-shrink-0">
          <Image
            src={notFoundImg}
            alt="not-found image"
            className="object-contain"
            // width={400}
            // height={300}
          />
        </div>
        <h1 className="text-3xl font-semibold mt-6">
          This page could not be found :(
        </h1>
        <button className='mt-6 p-5  bg-blue-500 text-white rounded hover:bg-blue-600  text-lg'>
        <Link
          href="/"
          className=" "
        >
          Go back home
        </Link>
        </button>
       
      </div>
    </main>
  );
}

export default NotFound;

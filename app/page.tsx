import Image from "next/image";
import Link from "next/link";
import { FaRegUser, FaFileSignature, FaPaperPlane } from "react-icons/fa6";
import { MdAdminPanelSettings, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";

export default function Home() {
  const features = [
    {
      icon: <FaFileSignature className="size-6 text-white" />,
      title: "Lorem Ipsum",
      description: "Dolor sit amet, consectetur adipiscing elit.",
      link: "#",
    },
    {
      icon: <MdAdminPanelSettings className="size-6 text-white" />,
      title: "Lorem Ipsum",
      description: "Sed do eiusmod tempor incididunt ut labore.",
      link: "#",
    },
    {
      icon: <GrTechnology className="size-6 text-white" />,
      title: "Lorem Ipsum",
      description: "Ut enim ad minim veniam, quis nostrud exercitation.",
      link: "#",
    },
    {
      icon: <FaPaperPlane className="size-6 text-white" />,
      title: "Lorem Ipsum",
      description: "Duis aute irure dolor in reprehenderit in voluptate.",
      link: "#",
    },
  ];

  return (
    <main className="flex flex-col h-screen">
      <header className="z-50 w-full bg-white border-b border-gray-200 text-sm py-3 dark:bg-neutral-800 dark:border-neutral-700">
        <nav className="max-w-[85rem] w-full mx-auto px-4 flex justify-between items-center sm:px-6 lg:px-8">
          <Image src={'/logo.svg'} alt="logo" width={130} height={130} />
          <Link href="/dashboard" className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500">
            <FaRegUser />
            Get Started
          </Link>
        </nav>
      </header>

      <div className="flex-grow relative overflow-hidden flex items-center before:absolute before:inset-0 before:bg-[url('/bg.jpg')] before:bg-no-repeat before:bg-cover before:opacity-40 before:-z-[1]">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text bg-gradient-to-tl from-blue-900 to-blue-600 text-transparent dark:text-neutral-200">
            Generate AI Content
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 dark:text-neutral-400">
            Generate high-quality content effortlessly — from blog posts to product descriptions — in seconds.
          </p>
          <Link href="/dashboard" className="mt-8 inline-block">
            <button className="cursor-pointer gap-x-3 bg-gradient-to-tl from-blue-800 to-primary hover:from-primary hover:to-blue-800 border border-transparent text-white text-sm font-medium rounded-md py-3 px-4 dark:focus:ring-offset-gray-800">
              Start Now
            </button>
          </Link>
        </div>
      </div>
   
      <div className="max-w-[85rem] mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.link}
                className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-6 dark:hover:bg-neutral-800 transition"
              >
                <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
                  {feature.icon}
                </div>
                <div className="mt-5">
                  <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-neutral-400">
                    {feature.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                    Learn more
                    <MdOutlineKeyboardArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
    </main>
  );
}

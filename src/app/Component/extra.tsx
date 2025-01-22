import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row bg-black p-5 md:px-20 lg:px-36">
        <div className="w-full md:w-1/2 text-white">
          <div className="mt-10 md:mt-16">
            <h3 className="text-[#FF9F0D] text-lg md:text-2xl mb-4">
              Why Choose Us
            </h3>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5">
              <span className="text-[#FF9F0D]">Ex</span>traordinary Taste
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-7">
              And Experienced
            </h1>
            <p className="text-gray-300 mb-8 text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/foodCatogary">
                <button className="text-white bg-orange-400 py-2 px-6 rounded text-lg focus:outline-none">
                  Show More
                </button>
              </a>
              <button className="flex items-center text-white py-2 px-6 border-2 border-white rounded text-lg focus:outline-none">
                <IoPlayOutline className="mr-2" />
                Watch Video
              </button>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/about2.jpg"
              alt="About Us Image 2"
              width={450}
              height={300}
              className="rounded-lg object-cover w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
            />
            <Image
              src="/about3.jpg"
              alt="About Us Image 3"
              width={450}
              height={300}
              className="rounded-lg object-cover w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
            />
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="flex justify-center py-5 bg-black">
        <Image
          src="/food1.jpg"
          alt="Experience"
          width={600}
          height={300}
          className="rounded-lg object-cover max-w-full"
        />
      </div>
    </>
  );
};

export default Home;

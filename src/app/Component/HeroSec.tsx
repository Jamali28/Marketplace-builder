import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";
 import upper from "../public/let.jpg";
 import lemon from "../../public/a.jpg";
 import yogurt from "../../public/b.jpg";
 import pasta from "../../public/c.jpg";
 import third from "../../public/d.jpg";
 import student from "../../public/e.jpg";
 import coffee from "../../public/Coffee.png";
 import person from "../../public/Pic1.jpg";

 export default function About() {
  return (
    <div>
  
      {/* Second Section: Content and Buttons */}
      <section className="text-white body-font bg-black">
        <div className="container mx-auto flex px-5 py-23 pl-2 items-center justify-center">
          {/* Left Text (takes 70% width) */}
          <div className="w-full md:w-7/10 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
              About us _____
            </h1>
            <p className="text-green-500 title-font text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-8 text-yellow-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
             <a href="/foodCatogary"> <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </button></a>
              <button className="ml-4 inline-flex text-white border-0 py-2 px-3 focus:outline-none rounded text-lg">
                <IoPlayOutline className="mr-2 text-white" /> {/* Icon on the left */}
                Watch video
              </button>
            </div>
          </div>

          {/* Right Images (takes 30% width) */}
          <div className="w-full md:w-3/10 flex p-2 flex-row-2 space-y-4 px-3 mt-10 ">
            <Image
              className="object-cover object-center w-[200px] h-32 md:h-40 rounded-lg"  // Responsive width and height
              alt="hero"
              src={"/coffe.jpg"}
              width={200}
              height={50}
              layout="intrinsic"
            />
            <div className="md:flex flex-col mt-10 gap-5  space-x-4">
              <Image
                className="object-cover object-center w-[200px] h-32 md:h-40 rounded-lg"
                alt="image2"
                src={"/b.jpg"}
                width={200}
              height={50}
                layout="intrinsic"
              />
              <Image
                className="object-cover object-center w-[200px] h-32 md:h-40 rounded-lg"
                alt="image3"
                src={"/c.jpg"}
                layout="intrinsic"
                width={100}
              height={100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Third Section: Why Choose Us */}
      <section className="text-black body-font font-thin bg-yellow-500">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <h1 className="text-black text-3xl font-bold mt-3 mb-6">Why Choose Us</h1>
          <p className="text-center mb-8 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <Image
            className="mb-10 object-cover object-center w-full md:w-3/4 lg:w-2/3 h-[300px] md:h-[400px] rounded-lg" // Responsive width and height
            alt="Why Choose Us"
            src={"/d.jpg"}
            width={1320}
            height={480}
          />
        </div>
      </section>

      {/* Fourth Section: Features */}
      <section className="text-white body-font bg-black">
        <div className="container px-3 py-20 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Feature 1 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-36 md:h-36 w-full object-cover object-center"
                  src={"/c.jpg"}
                  alt="Best Chef"
                  width={400}
                  height={100}
                  layout="intrinsic"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-yellow-500 mb-2 text-bold text-center">
                    BEST CHEF
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-36 md:h-36 w-full object-cover object-center"
                  src={"/d.jpg"}
                  alt="120 Item Food"
                  width={200}
                  height={400}
                  layout="intrinsic"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-yellow-500 mb-2 text-bold text-center">
                    120 Item Food
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-36 md:h-36 w-full object-cover object-center"
                  src={"/a.jpg"}
                  alt="Clean Environment"
                  width={200}
                  height={400}
                  layout="intrinsic"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-yellow-500 mb-2 font-[popins] text-bold text-center">
                    Clean Environment
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
import Link from "next/link";
import Image from "next/image";

export default function BlogDetails() {
  return (

    <div>
    <div className="relative w-screen h-[190px] mb-58 bg-black">
          {/* Background Image with 30% Opacity */}
          <div className="absolute inset-0 opacity-60">
            <Image
              src="/img.png"
              alt="background"
              layout="fill"
              objectFit="cover"
            />
          </div>
    {/* Main Header Section */}
    <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Blog Detail</h2>
          <p className="mt-4">
            <Link href="/" className="text-yellow-400">Home</Link> &gt; Blog Detail
          </p>
        </div>
      </section>
    
    </div>
    
    <>
      
      {/* Main Blog Content */}
      <div className="flex flex-col bg-white min-h-screen my-24 px-4 lg:px-8">
        <div className="w-full lg:w-3/4 mx-auto">
        
       <Image src={"/about1.jpg"} alt="tacos"  width={560} height={200} className="flex justify-center"/>
          {/* Blog Header */}
          <div className="flex mt-4 gap-2">
            <div className="cursor-pointer text-gray-600">📅 Calendar</div>
            <div className="cursor-pointer text-gray-600">👤 Admin</div>
          </div>

          {/* Blog Title */}
          <h1 className="font-bold text-xl md:text-2xl text-[#333] mt-6">
            10 Reasons To Do A Digital Detox Challenge
          </h1>

          {/* Blog Content */}
          <p className="text-[#4F4F4F] mt-4">
            Netus pretium tellus nulla commodo massa adipiscing in elementum magna...
          </p>
          <p className="text-[#4F4F4F] mt-4">
            Ac haca ullamcorper donec ante habi tasse donec imperdiet...
          </p>

          {/* Banner Section */}
          <div className="bg-[#FF9F0D] p-4 mt-8 rounded-md">
            <div className="flex items-center">
              <div className="mr-4 text-white">💬 Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
            </div>
          </div>

          {/* Additional Blog Content */}
          <p className="text-[#4F4F4F] mt-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam...
          </p>

          {/* Two-Column Layout (Text and Image) */}
          <div className="flex flex-col lg:flex-row mt-8 gap-4">
            <div className="lg:w-1/2">
              <p className="text-[#4F4F4F]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr...
              </p>
              <p className="text-[#4F4F4F] mt-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing...
              </p>
            </div>
            <div className="lg:w-1/2  h-60 flex items-center justify-center text-xl">
              {/* Placeholder for image */}
              <div className="text-center">
                <Image src={"/coffe.jpg"}
                alt="blog"
                width={395}
                height={350}
              /></div>
            </div>
          </div>

          {/* Footer Image Section */}
          <div className="mt-10 w-full bg-gray-200 h-60 flex items-center justify-center text-xl">
            {/* Placeholder for footer image */}
            <div className="text-center">
                <Image src={"/waf.jpg"}
                alt="food"
                width={400}
                height={650}
                /></div>
          </div>
        </div>

        {/* Comment Section */}
        <div className="w-full lg:w-3/4 mx-auto mt-10 px-4 lg:px-8">
          <h1 className="text-2xl font-bold">Comments - 03</h1>
          <div className="mt-4 space-y-4">
            {/* Placeholder for comments */}
            <div className="bg-gray-100 p-4 rounded-md">[Comment Placeholder]</div>
            <div className="bg-gray-100 p-4 rounded-md">[Comment Placeholder]</div>
            <div className="bg-gray-100 p-4 rounded-md">[Comment Placeholder]</div>
          </div>

          {/* Post a Comment Section */}
          <h1 className="text-xl font-bold border-b mt-10 pb-2">Post a Comment</h1>
          <div className="mt-4 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border px-4 py-2 w-full md:w-[48%] rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="border px-4 py-2 w-full md:w-[48%] rounded-md"
              />
            </div>
            <textarea
              placeholder="Write a Comment"
              className="border px-4 py-2 w-full h-32 rounded-md"
            ></textarea>
            <button className="bg-[#FF9F0D] text-white px-6 py-2 rounded-md hover:bg-white hover:text-[#FF9F0D] border border-[#FF9F0D] transition">
              Post a Comment
            </button>
          </div>
        </div>
      </div>
    </>
    </div>
  );
}
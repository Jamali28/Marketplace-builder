import react from "react";
import Image from "next/image";


const DessertDrink = ()=> {
    return(
        <main className="bg-white ">
            {/*Desserts */}
            <div className=" w-[1320px] h-[628px] flex flex-col lg:flex-row items-center justify-between">
                <div className="mt-16 ml-16">
                    <Image
                    src={"/our menu/dessert.png"}
                    alt="Dessert"
                    width={448}
                    height={628}/>
                </div>
                <div className="w-[760px] h-[628px] mt-20 mr-[30px] ml-16" >
                    <div className="item-left">
                    <Image className="text-[#ff9f0d]"
                    src={"/our menu/Coffee.png"}
                    alt="logo"
                    width={24}
                    height={24}/>
                    <h3 className="font-bold text-5xl text-[#333333] mt-4 ">Dessert</h3>
                    </div>
                    {/*First Menu */}
                    <div className="flex items-center justify-between text-2xl mt-6">
                        <h3 className="text-[#333333] font-bold text-left">Fig and lemon cake</h3>
                        <p className="text-[#ff9f0d] items-end">32$</p>
                    </div>
                    <div className="text-base text-left mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p className="text-[#4f4f4f]">Toasted French bread topped with romano, cheddar</p>
                        <p className="text-[#828282]">560 CAL</p>
                    </div>
                    {/*Secon Menu */}
                    <div className="flex items-center justify-between text-2xl mt-10">
                        <h3 className="text-[#ff9f0d] font-bold text-left">Creamy mascarpone cake</h3>
                        <p className="text-[#ff9f0d] items-end">35$</p>
                    </div>
                    <div className="text-base text-left mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p className="text-[#4f4f4f]">Gorgonzola, ricotta, mozzarella, taleggio</p>
                        <p className="text-[#828282]">700 CAL</p>
                    </div>
                    {/*third Menu */}
                    <div className="flex items-center justify-between text-2xl mt-10">
                        <h3 className="text-[#333333] font-bold text-left">Pastry, blueberries, lemon juicee</h3>
                        <p className="text-[#ff9f0d] items-end">14$</p>
                    </div>
                    <div className="text-base text-left mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p className="text-[#4f4f4f]">Ground cumin, avocados, peeled and cubed</p>
                        <p className="text-[#828282]">1000 CAL</p>
                    </div>
                    {/*Forth Menu */}
                    <div className="flex items-center justify-between text-2xl mt-10">
                        <h3 className="text-[#333333] font-bold text-left">Pain au chocolat</h3>
                        <p className="text-[#ff9f0d] items-end">35$</p>
                    </div>
                    <div className="text-base text-left mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p className="text-[#4f4f4f]">Spreadable cream cheese, crumbled blue cheese</p>
                        <p className="text-[#828282]">500 CAL</p>
                    </div>                    
                </div>                
            </div>
            {/*Drinks */}
            <div className=" w-[1320px] h-[628px] flex flex-col lg:flex-row items-center justify-between my-20">
                
                <div className="w-[760px] h-[628px] mt-16 mr-[30px] ml-16" >
                    <div className="item-left">
                    <Image className="text-[#ff9f0d]"
                    src={"/our menu/Coffee.png"}
                    alt="logo"
                    width={24}
                    height={24}/>
                    <h3 className="font-bold text-5xl text-[#333333] mt-4">Drinks</h3>
                    </div>
                    {/*First Menu */}
                    <div className="flex items-center justify-between text-2xl mt-6">
                        <h3 className="text-[#333333] font-bold text-left">Caffè macchiato</h3>
                        <p className="text-[#ff9f0d] items-end">32$</p>
                    </div>
                    <div className="text-base text-left mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p className="text-[#4f4f4f]">Toasted French bread topped with romano, cheddar</p>
                        <p className="text-[#828282]">560 CAL</p>
                    </div>
                    {/*Second Menu */}
                    <div className="flex items-center justify-between text-2xl mt-10">
                        <h3 className="text-[#4f4f4f] font-bold text-left">Aperol Spritz Capacianno</h3>
                        <p className="text-[#ff9f0d] items-end">43$</p>
                    </div>
                    <div className="text-base text-left mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p className="text-[#4f4f4f]">Gorgonzola, ricotta, mozzarella, taleggio</p>
                        <p className="text-[#828282]">700 CAL</p>
                    </div>
                    {/*third Menu */}
                    <div className="flex items-center justify-between text-2xl mt-10">
                        <h3 className="text-[#333333] font-bold text-left"> Caffe Latte Campuri</h3>
                        <p className="text-[#ff9f0d] items-end">14$</p>
                    </div>
                    <div className="text-base text-left mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p className="text-[#4f4f4f]">Ground cumin, avocados, peeled and cubed</p>
                        <p className="text-[#828282]">1000 CAL</p>
                    </div>
                    {/*Forth Menu */}
                    <div className="flex items-center justify-between text-2xl mt-10 ">
                        <h3 className="text-[#333333] font-bold text-left">Tormentoso BushTea Pintoage</h3>
                        <p className="text-[#ff9f0d] items-end">35$</p>
                    </div>
                    <div className="text-base text-left mt-4 border border-b-1 border-x-0 border-t-0 border-[#abd7be]">
                        <p className="text-[#4f4f4f]">Spreadable cream cheese, crumbled blue cheese</p>
                        <p className="text-[#828282]">500 CAL</p>
                    </div>                    
                </div>
                <div className="mt-16 ml-16">
                    <Image
                    src={"/our menu/drinks.png"}
                    alt="Drink"
                    width={448}
                    height={628}/>
                </div>
            </div>
        </main>
    )
};
export default DessertDrink;
import Link from "next/link";
import Image from "next/image";

import direct from "../../public/assets/image/categories/direct.svg";

import Pen from "../../public/assets/image/categories/pen.svg";
import Development from "../../public/assets/image/categories/development.svg";
import Professional from "../../public/assets/image/categories/paper.svg";
import Photography from "../../public/assets/image/categories/img_box.svg";
import Database from "../../public/assets/image/categories/database.svg";
import Business from "../../public/assets/image/categories/business.svg";
import Chart from "../../public/assets/image/categories/chart_pin.svg";
import Music from "../../public/assets/image/categories/music.svg";



const categoriesList = [
    {title:'Design', icon:Pen , href:'/categoty/href',  },
    {title:'Development', icon:Development , href:'/categoty/href',  },
    {title:'Professional ', icon:Professional , href:'/categoty/href',  },
    {title:'Photography', icon:Photography , href:'/categoty/href',  },

    {title:'Data ', icon:Database , href:'/categoty/href',  },
    {title:'Business', icon:Business , href:'/categoty/href',  },
    {title:'Marketing', icon:Chart , href:'/categoty/href',  },
    {title:'Music', icon:Music , href:'/categoty/href',  },

];

export default function Categories(){
    return (<div id="categories-links" className="pt-[5.9vw] pb-[8.3vw] mt-44 px-[7.91vw] ">
        <div className="flex flex-wrap ">
            {categoriesList.map((category,index)=><CategoryItem key={index} category={category} />)}
        </div>
    </div>);
}

function CategoryItem({category}){
    return (<div className="box-border w-[25%] grow-1 p-[0.8vw]">
        <Link href={category.href} >
            <div className="border-[#ffffff33] border-[1px] rounded-[0.78vw] h-[4.16vw] relative cursor-pointer hover:border-[#1858ce] duration-300 p-[0.7vw]">
                <div className="w-full h-full flex">
                    <div className="w-[2.76vw] h-[2.76vw] p-[0.44vw] ">
                        <div className="relative w-full h-full">
                            <Image fill src={category.icon.src} alt={category.title} />
                        </div>
                    </div>
                    <span className="block leading-[2.76vw] h-[2.76] px-[0.7vw] text-white font-inter font-[500] flex-1 text-[1.14vw]">{category.title}</span>
                    <div className="w-[2.76vw] h-[2.76vw] p-[0.44vw] bg-[#7F56D9] rounded-[0.26vw]">
                        <div className="relative w-full h-full">
                            <Image fill src={direct.src} alt={category.title} />
                        </div>
                    </div>

                </div>
            </div>
        </Link>
    </div>);
}
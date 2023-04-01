import Link from "next/link";
import Image from "next/image";

const categoriesList = [
    {title:'Design', icon:'/assets/image/categories/pen.svg' , href:'/categoty/href',  },
    {title:'Development', icon:'/assets/image/categories/development.svg' , href:'/categoty/href',  },
    {title:'Professional ', icon:'/assets/image/categories/paper.svg' , href:'/categoty/href',  },
    {title:'Photography', icon:'/assets/image/categories/img_box.svg' , href:'/categoty/href',  },

    {title:'Data ', icon:'/assets/image/categories/database.svg' , href:'/categoty/href',  },
    {title:'Business', icon:'/assets/image/categories/business.svg' , href:'/categoty/href',  },
    {title:'Marketing', icon:'/assets/image/categories/chart_pin.svg' , href:'/categoty/href',  },
    {title:'Music', icon:'/assets/image/categories/music.svg' , href:'/categoty/href',  },

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
                            <Image fill src={category.icon} alt={category.title} />
                        </div>
                    </div>
                    <span className="block leading-[2.76vw] h-[2.76] px-[0.7vw] text-white font-inter font-[500] flex-1 text-[1.14vw]">{category.title}</span>
                    <div className="w-[2.76vw] h-[2.76vw] p-[0.44vw] bg-[#7F56D9] rounded-[0.26vw]">
                        <div className="relative w-full h-full">
                            <Image fill src={'/assets/image/categories/direct.svg'} alt={category.title} />
                        </div>
                    </div>

                </div>
            </div>
        </Link>
    </div>);
}
import React from "react";
import Image from "next/image";



const About = () => {

return (
<div className=" flex flex-colunm text-white " >

        <Image
                src="/avatar.jpeg"
                alt="hero img"
                width={340}
                height={340}
                className="rounded-full my-20 ml-50"
              />
     <div className="my-20 w- pl-40">
    <h1 className="text-lg text-white pt-20 ">marina jolie</h1>
    <h5 className="mb-2 pt-">creative designer</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita nobis <br></br>modi voluptatem iure! Maxime, totam odio eligendi vel<br></br> tempore excepturi deserunt! Voluptatum aperiam quod rerum et quidem. Eos, illum.</p>
    </div>
</div>
);
}

export default About;
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Answer = () => {
  return (
    <section className=" text-gray-800 mb-8">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
       
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
          <details className="]">
            <summary className="py-2 text-[#03373D] outline-none cursor-pointer focus:underline">
              How does this posture corrector work?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Font: Inter Font weight: 400 Font size: 16pxpx Row height: 24px
                Letter spacing: 0% Align: Align left
              </p>
            </div>
          </details>
           <details>
            <summary className="py-2 text-[#03373D] outline-none cursor-pointer focus:underline">
            Is it suitable for all ages and body types?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Font: Inter Font weight: 400 Font size: 16pxpx Row height: 24px
                Letter spacing: 0% Align: Align left
              </p>
            </div>
          </details>
           <details>
            <summary className="py-2 text-[#03373D] outline-none cursor-pointer focus:underline">
            Does it really help with back pain and posture improvement?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Font: Inter Font weight: 400 Font size: 16pxpx Row height: 24px
                Letter spacing: 0% Align: Align left
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 text-[#03373D] outline-none cursor-pointer focus:underline">
              Does it have smart features like vibration alerts?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                aspernatur quae, eos explicabo odit minima libero veniam
                similique quibusdam doloribus facilis ipsa accusantium vel
                maiores corrupti! Libero voluptate a doloribus?
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 text-[#03373D] outline-none cursor-pointer focus:underline">
             How will I be notified when the product is back in stock?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                voluptates aspernatur dolores in consequatur doloremque
                inventore reprehenderit, consequuntur perspiciatis architecto.
              </p>
              <p>
                Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus
                autem eaque unde possimus quae.
              </p>
            </div>
          </details>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <button className="bg-[#CAEB66] btn rounded-2xl">See More FAQ’s</button>
        <FaArrowAltCircleRight size={30} />
      </div>
    </section>
  );
};

export default Answer;

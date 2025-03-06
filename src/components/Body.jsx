import React from 'react';

const Body = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-12">
      <p className="font-bold text-white text-2xl">Projects are how I learn...</p>
      <div className="sm:grid sm:grid-cols-4 sm:gap-20">
        <div className="flex flex-col justify-center items-center gap-10 md:pt-3 md:col-span-2">
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-center font-bold text-white text-xl">Luminum</p>
            <a href="https://6619ba510093cd0f11ed27d6--symphonious-dusk-96a4ed.netlify.app/"><img className="h-auto w-80 lg:w-96 lg:h-auto border border-red-600 rounded" alt="Project" src="./img/landingPage.png" /></a>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-center font-bold text-white text-xl">Signature Web</p>
            <a target="_blank" href="https://signature-web.netlify.app/"><img className="h-auto w-80 lg:w-96 lg:h-auto border border-red-600 rounded hover:bg-red-700 hover:rounded-2xl" alt="Project" src="./img/signatureWeb.png" /></a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 pt-10 md:col-span-2 md:pb-7 lg:pt-10">
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-center font-bold text-white text-xl ">Weekly Schedule</p>
            <a target="_blank" href="https://661df347ef9bcc7eab003020--animated-dusk-0c3ad3.netlify.app/"><img className="h-auto w-80 lg:w-96 lg:h-auto border border-red-600 rounded" alt="Project" src="./img/weeklySchedule.png" /></a>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-center font-bold text-white text-xl">Planet Shop</p>
            <a target="_blank" href="https://planet-shopvishwas.netlify.app/"><img className="h-auto w-80 lg:w-96 lg:h-auto border border-red-600 rounded" alt="Project" src="./img/planetShop.png" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

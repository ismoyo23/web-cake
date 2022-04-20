import React from "react";

// component
import { Images } from "../atoms/images";
import { Texts } from "../atoms/text";

export let ImagesBar = () => {
  return (
    <div className="w-[100%] flex justify-center conten-center items-center">
      <div className="absolute ">
        <Texts
          styles="font-bold text-[100px] text-white"
          label="Selamat Datang"
        />
        <Texts
          styles="font-semibold text-[20px] text-white text-center"
          label="Toko kue terlengkap, termurah banyak promo"
        />
      </div>
      <Images type="large" image={require("../../assets/cake1.jpg")} />
    </div>
  );
};

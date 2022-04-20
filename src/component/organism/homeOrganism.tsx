// containers
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// component
import { useTypedSelector } from "../../redux/hooks/useTypeSelector";
import { SlideMolecules } from "../molecules/slideMolecules";
import { ImagesBar } from "../molecules/imagesBar";
import { ListProduck } from "../molecules/listProduck";
import { Texts } from "../atoms/text";
import { getCake } from "../../redux/action/Cake";
import { deleteData } from "../../redux/action/DeleteCake";
import { updatedCake } from "../../redux/action/UpdateCake";
export let HomeOrganism = () => {
  let [title, setTitle] = useState<string>("");
  let [rating, setRating] = useState<string>("");
  let [image, setImage] = useState<string>("");

  let dispatch = useDispatch();
  useEffect(() => {
    data();
  }, []);

  let data = async () => {
    await dispatch(getCake());
  };
  let { cake } = useTypedSelector((state) => state.cakeData);

  let deleted = async (id: number) => {
    await dispatch(deleteData(id));
  };

  let updateData = async (id: number) => {
    await dispatch(updatedCake(id));
  };

  return (
    <>
      <ImagesBar />

      <Texts
        styles="font-bold text-[50px] mb-[20px] text-center"
        label="List Products"
      />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {cake.map((data: any, key: number) => {
          return (
            <ListProduck
              title={data.title}
              image={data.image}
              rating={data.rating}
              description={data.description}
              updated={() => updateData(data.id)}
              deleted={() => deleted(data.id)}
            />
          );
        })}
      </div>
      <Texts
        styles="font-bold text-[50px] mb-[20px] text-center"
        label="Populer"
      />
      <SlideMolecules />
    </>
  );
};

import React from "react";
import { Texts } from "../atoms/text";
import { Images } from "../atoms/images";
import { Buttons } from "../atoms/buttons";

interface ListProductProps {
  title: string;
  description: string;
  rating: string;
  image: string;
  updated: () => void;
  deleted: () => void;
}

export let ListProduck = ({
  title,
  description,
  rating,
  image,
  deleted,
  updated,
}: ListProductProps) => {
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg">
        <Images type="mini" image={image} />
        <div className="px-6 py-4">
          <Texts styles="font-bold text-xl mb-2" label={title} />
          <Texts styles="text-gray-700 text-base" label={description} />
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #rating {rating}
          </span>
          <div className="justify-between w-[400px]">
            <Buttons label="Delete" action={updated} />
            <Buttons label="Update" action={deleted} />
          </div>
        </div>
      </div>
    </>
  );
};

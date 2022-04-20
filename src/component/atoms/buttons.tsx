import React from "react";

interface ButtonProps {
  label: string;
  action: () => void;
}
export let Buttons = ({ label, action }: ButtonProps) => {
  return (
    <button onClick={action} className="w-[100px] h-[30px] bg-[red] rounded-lg">
      <p className="text-white">{label}</p>
    </button>
  );
};

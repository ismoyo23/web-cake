import React from "react";

interface TextsProps {
  label: string;
  styles: string;
}
export let Texts = ({ label, styles }: TextsProps) => {
  return (
    <>
      <p className={styles}>{label}</p>
    </>
  );
};

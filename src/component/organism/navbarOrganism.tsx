// container
import React, { ChangeEvent, useEffect } from "react";
import { useDispatch } from "react-redux";

// component
import { Buttons } from "../atoms/buttons";
import { addCake } from "../../redux/action/AddCake";
import { getCake } from "../../redux/action/Cake";
export let NavbarOrganism = () => {
  let [isOpen, setIsOpen] = React.useState(false);
  let [showModal, setShowModal] = React.useState(false);
  let [title, setTitle] = React.useState<string>("");
  let [rating, setRating] = React.useState<string>("");
  let [image, setImage] = React.useState([]);
  let [description, setDescription] = React.useState("");

  let dispatch = useDispatch();

  let uploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    setImage(event.target);
  };

  useEffect(() => {
    data();
  }, []);

  let data = async () => {
    await dispatch(getCake());
  };

  let saveData = () => {
    dispatch(addCake(title, rating, image, description));
    setShowModal(false);
    alert("Data di tambah");
    window.location.reload();
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Add Data</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Title
                    </label>
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Rating
                    </label>
                    <input
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Image
                    </label>
                    <input
                      onChange={(e) => uploadImage(e)}
                      type="file"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />

                    <label className="block text-black text-sm font-bold mb-1">
                      Description
                    </label>
                    <input
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <Buttons label="Save data" action={() => saveData()} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      <div>
        <nav className="bg-['white']">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      onClick={() => setShowModal(true)}
                      href="#"
                      className=" hover:bg-gray-700 text-['grey] px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Add cake
                    </a>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {isOpen == true ? (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  onClick={() => setShowModal(true)}
                  href="#"
                  className="hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Add cake
                </a>
              </div>
            </div>
          ) : null}
        </nav>
      </div>
    </>
  );
};

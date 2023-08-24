import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import Modal from "./Modal";
import nameToEmail from "../utils/nameToEmail";
const ProfileList = ({ selectedCat, catData, handleCatClick }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 m-10">
      {/* Modal component displaying information about the selected cat */}
      <Modal cat={selectedCat} />

      {/* List of cats displayed on the right */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        {/* Unordered list with gray divider between each item */}
        <ul role="list" className="divide-y divide-gray-200 h-64 overflow-auto">
          {/* Mapping each cat to a list item */}
          {catData.map((cat, index) => (
            <li
              key={index} // Using the index as the key
              className={`block cursor-pointer hover:bg-gray-200 ${
                selectedCat === cat ? "bg-gray-300" : ""
              }`}
            >
              {/* Calling handleCatClick function when the list item is clicked */}
              <div onClick={() => handleCatClick(cat)}>
                {/* Flex container with centered and evenly spaced items */}
                <div className="flex items-center justify-evenly px-4 py-4 sm:px-6">
                  {/* Left part of the list item containing the cat's image */}
                  <div className="flex-1 flex items-center">
                    <div>
                      <img
                        className={`h-12 w-12 rounded-full shadow-md object-cover`}
                        src={cat.image_link} 
                        alt=""
                      />
                    </div>
                    {/* Right part of the list item containing the cat's name */}
                    <div className="px-4">
                      <div>
                        <p className="text-sm font-medium text-indigo-600 truncate">
                          {cat.name}{" "}
                          {/*  the cat data has a 'name' property */}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                         <MailIcon
                            className="mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          /> 
                          <span className="truncate">
                            {nameToEmail(cat.name)}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ProfileList;

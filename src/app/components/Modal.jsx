import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import nameToEmail from "../utils/nameToEmail";
// This is a Modal component that takes in an cat array as a prop
const Modal = ({ cat }) => {
  return (
    /* The modal is a flex container with a column direction and a fixed width */
    <div
      className={`animate-fade-in flex flex-col md:w-96 md:h-104 border text-center bg-white rounded-2xl divide-y divide-gray-200`}
    >
      {/* The top part of the modal contains the cat's image, name, bio, title, and role */}
      <div className="flex-1 flex flex-col p-8">
        {/* The cat's image is displayed as a circle with a shadow effect */}
        <img
          className={`w-32 h-32 mx-auto rounded-full shadow-xl object-cover `}
          src={cat.image_link}
          alt=""
        />
        {/* The cat's name is displayed below the image in a larger font size */}
        <h3 className="mt-8 md:mt-12 text-gray-900 font-semibold text-lg">
          {cat.name}
        </h3>
        {/* The cat's bio is displayed below their name in a smaller font size */}
        <p className="text-sm mt-1 flex-col">Shedding: {cat.shedding}, General_health: {cat.general_health}, Playfulness: {cat.playfulness} </p>
        {/* The application title and role are displayed in a definition list */}
        <dl className="mt-1 flex flex-col justify-between">
          <dt className="sr-only">Origin</dt>
          <dd className="text-gray-500 text-sm">{cat.origin}</dd>
          <dt className="sr-only">Role</dt>
          <dd className="mt-3">
            {/* The role is displayed inside a badge with a background color that depends on the role */}
            <span
              className={`inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ring-1 ring-inset`}
            >
              Length: {cat.length}
            </span>
          </dd>
        </dl>
      </div>
      {/* The bottom part of the modal contains buttons for contacting the cat via email, phone, or LinkedIn */}
      <div>
        {/* The buttons are displayed in a row using flexbox */}
        <div className="flex divide-x divide-gray-200">
          {/* The first button is for sending an email to the cats */}
          <div className="flex-1 flex group">
            {/* The button contains an email icon and the text "Email" */}
            <a
              href={`mailto:${nameToEmail(cat.name)}`}
              className="gap-2 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
            >
              <MailIcon
                className="w-5 h-5 text-gray-400 transition-transform duration-300 transform-gpu group-hover:scale-125"
                aria-hidden="true"
              />
              <span>Email</span>
            </a>
          </div>
          {/* The second button is for calling the cat's phone number */}
          <div className="flex-1 flex group">
            {/* The button contains a phone icon and the text "Call" */}
            <a
              href={`tel:`}
              className="gap-2 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
            >
              <PhoneIcon
                className="w-5 h-5 text-gray-400 transition-transform duration-300 transform-gpu group-hover:scale-125 group-hover:rotate-12"
                aria-hidden="true"
              />
              <span>Call</span>
            </a>
          </div>
          {/* The third button is for visiting the cat's Instagram profile */}
          <div className="flex-1 flex group">
            {/* The button contains a Instagram icon and the text "Instagram" */}
            <a
              href={`instagram.com/`}
              className="gap-2 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
            >
              <i className="ci ci-instagram ci-lg transition-transform duration-300 transform-gpu group-hover:scale-125"></i>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// The Modal component is exported as the default export of this module
export default Modal;
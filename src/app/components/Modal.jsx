import { MailIcon, PhoneIcon } from "@heroicons/react/solid";

// This is a Modal component that takes in an application object as a prop
const Modal = ({ application }) => {
  return (
    // The modal is a flex container with a column direction and a fixed width
    <div
      key={application.applicant.email}
      className={`animate-fade-in flex flex-col w-80 md:w-96 md:h-104 border text-center bg-white rounded-2xl divide-y divide-gray-200`}
    >
      // The top part of the modal contains the applicant's image, name, bio, title, and role
      <div className="flex-1 flex flex-col p-8">
        // The applicant's image is displayed as a circle with a shadow effect
        <img
          className={`w-32 h-32 mx-auto rounded-full shadow-xl ${application.imageClass}`}
          src={application.applicant.imageUrl}
          alt=""
        />
        // The applicant's name is displayed below the image in a larger font size
        <h3 className="mt-8 md:mt-12 text-gray-900 font-semibold text-lg">
          {application.applicant.name}
        </h3>
        // The applicant's bio is displayed below their name in a smaller font size
        <p className="text-sm mt-1">{application.applicant.bio}</p>
        // The application title and role are displayed in a definition list
        <dl className="mt-1 flex flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-gray-500 text-sm">{application.title}</dd>
          <dt className="sr-only">Role</dt>
          <dd className="mt-3">
            // The role is displayed inside a badge with a background color that depends on the role
            <span
              className={`inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ring-1 ring-inset ${application.badgeClass}`}
            >
              {application.role}
            </span>
          </dd>
        </dl>
      </div>
      // The bottom part of the modal contains buttons for contacting the applicant via email, phone, or LinkedIn
      <div>
        // The buttons are displayed in a row using flexbox
        <div className="flex divide-x divide-gray-200">
          // The first button is for sending an email to the applicant
          <div className="flex-1 flex group">
            // The button contains an email icon and the text "Email"
            <a
              href={`mailto:${application.applicant.email}`}
              className="gap-2 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
            >
              <MailIcon
                className="w-5 h-5 text-gray-400 transition-transform duration-300 transform-gpu group-hover:scale-125"
                aria-hidden="true"
              />
              <span>Email</span>
            </a>
          </div>
          // The second button is for calling the applicant's phone number
          <div className="flex-1 flex group">
            // The button contains a phone icon and the text "Call"
            <a
              href={`tel:${application.applicant.telephone}`}
              className="gap-2 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
            >
              <PhoneIcon
                className="w-5 h-5 text-gray-400 transition-transform duration-300 transform-gpu group-hover:scale-125 group-hover:rotate-12"
                aria-hidden="true"
              />
              <span>Call</span>
            </a>
          </div>
          // The third button is for visiting the applicant's LinkedIn profile
          <div className="flex-1 flex group">
            // The button contains a LinkedIn icon and the text "LinkedIn"
            <a
              href={`linkedin.com/${application.applicant.linkedin}`}
              className="gap-2 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
            >
              <i className="ci ci-linkedin ci-lg transition-transform duration-300 transform-gpu group-hover:scale-125"></i>
              <span>Linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// The Modal component is exported as the default export of this module
export default Modal;

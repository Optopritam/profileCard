import { MailIcon, PhoneIcon } from "@heroicons/react/solid";

const Modal = ({ application }) => {
  return (
    <div
      key={application.applicant.email}
      className={`animate-fade-in flex flex-col w-80 md:w-96 md:h-104 border text-center bg-white rounded-2xl divide-y divide-gray-200`}
    >
      <div className="flex-1 flex flex-col p-8">
        <img
          className={`w-32 h-32 mx-auto rounded-full shadow-xl ${application.imageClass}`}
          src={application.applicant.imageUrl}
          alt=""
        />
        <h3 className="mt-8 md:mt-12 text-gray-900 font-semibold text-lg">
          {application.applicant.name}
        </h3>
        <p className="text-sm mt-1">{application.applicant.bio}</p>
        <dl className="mt-1 flex flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-gray-500 text-sm">{application.title}</dd>
          <dt className="sr-only">Role</dt>
          <dd className="mt-3">
            <span
              className={`inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ring-1 ring-inset ${application.badgeClass}`}
            >
              {application.role}
            </span>
          </dd>
        </dl>
      </div>
      <div>
        <div className="flex divide-x divide-gray-200">
          <div className="flex-1 flex group">
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
          <div className="flex-1 flex group">
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
          <div className="flex-1 flex group">
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

export default Modal;

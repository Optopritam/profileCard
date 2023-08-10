"use client";
import {
  CheckCircleIcon,
  ChevronRightIcon,
  MailIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import Modal from "./components/Modal";
const applications = [
  {
    applicant: {
      name: "Monkey D. Luffy",
      email: "luffy@example.com",
      telephone: "555-555-5555",
      bio: "I'm the captain of the Straw Hat Pirates on a journey to find One Piece",
      imageUrl:
        "https://e0.pxfuel.com/wallpapers/915/665/desktop-wallpaper-luffy-manga-badasse-thumbnail.jpg",
    },
    role: "Pirate Captain",
    badgeClass: "bg-red-50 text-red-700 ring-red-700/10",
    imageClass: "shadow-red-700/70",
  },
  {
    applicant: {
      name: "Nico Robin",
      email: "nico@example.com",
      telephone: "555-555-5445",
      bio: "I'm an archaeologist searching for the Rio Poneglyph",
      imageUrl:
        "https://i.pinimg.com/originals/a9/c5/3f/a9c53fa1ae331e1ae97c87cfc1e33c93.jpg",
    },
    role: "Archaeologist",
    badgeClass: "bg-purple-50  text-purple-700 ring-purple-700/10",
    imageClass: "shadow-purple-700/70",
  },
  {
    applicant: {
      name: "Roronoa Zoro",
      email: "roronoa@example.com",
      telephone: "4435-555-5555",
      bio: "I'm searching for the title of the world's greatest swordsman",
      imageUrl:
        "https://th.bing.com/th/id/OIP.TEXWQKiMZ3-2UugPpKowMAAAAA?pid=ImgDet&rs=1",
    },
    role: "Swordsman",
    badgeClass: "bg-green-50 text-green-700 ring-green-700/10",
    imageClass: "shadow-green-700/70",
  },
  {
    applicant: {
      name: "Sanji Vinsmoke",
      email: "sanji@example.com",
      telephone: "555-555-5555",
      bio: "I'm a chef and a member of the Straw Hat Pirates, searching for All Blue",
      imageUrl:
        "https://i.pinimg.com/originals/ad/83/67/ad8367f0ef5e6f02b0ba140131ca2eea.jpg",
    },
    role: "Chef",
    badgeClass: "bg-yellow-50 text-yellow-700 ring-yellow-700/10",
    imageClass: "shadow-yellow-700/70",
  },
];

export default function Example() {
  const [selectedApplication, setSelectedApplication] = useState(
    applications[0]
  );
  const handleLinkClick = (application) => {
    setSelectedApplication(application);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 m-10">
      <Modal application={selectedApplication} />
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200 h-64 overflow-auto">
          {applications.map((application) => (
            <li
              key={application.applicant.email}
              className={`block cursor-pointer hover:bg-gray-200 ${
                selectedApplication === application ? "bg-gray-300" : ""
              }`}
            >
              <div onClick={() => handleLinkClick(application)}>
                <div className="flex items-center justify-evenly px-4 py-4 sm:px-6">
                  <div className="flex-1 flex items-center">
                    <div>
                      <img
                        className={`h-12 w-12 rounded-full shadow-md ${application.imageClass}`}
                        src={application.applicant.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="px-4">
                      <div>
                        <p className="text-sm font-medium text-indigo-600 truncate">
                          {application.applicant.name}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <MailIcon
                            className="mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="truncate">
                            {application.applicant.email}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

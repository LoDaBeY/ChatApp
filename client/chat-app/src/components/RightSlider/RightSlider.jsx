import { LuPenSquare } from "react-icons/lu";
import { useSelector } from "react-redux";

import Users from "./Users";
import Search from "./Search";
import ThemeToggleWithLogOut from "./ThemeToggleWithLogOut";
import { useState } from "react";
import Modal from "../Modal";

export default function RightSlider({ Phone, setPhone }) {
  // @ts-ignore
  const { currentUser } = useSelector((state) => state.UserShop);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={`${
        Phone ? "hidden" : "block"
      } w-full text-xs md:text-base md:w-1/4 border-r border-border p-6  bg-[--SliderBG]  transition-all duration-300 ease-in-out relative overflow-hidden `}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={currentUser.profilePic}
            alt={currentUser.fullName}
            className="w-12 h-12 object-cover rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold text-[--UserName]">
              {currentUser.fullName || "User"}
            </h2>
            <p className="text-xs text-[--Text]">{currentUser.email}</p>
          </div>
        </div>

        <div className="cursor-pointer">
          <LuPenSquare
            onClick={() => setIsModalOpen(true)}
            size={20}
            className="text-[--Text]"
          />
        </div>
      </div>

      {/* Search Input */}
      <Search setPhone={setPhone} />

      {/* Border Line */}
      <div className="border-b border-border my-5"></div>

      {/* Users */}
      <Users setPhone={setPhone} />

      {/* Theme Toggle and Logout */}
      <ThemeToggleWithLogOut />

      {/* Modal */}
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

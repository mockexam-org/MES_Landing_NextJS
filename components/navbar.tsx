import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";

import { BellIcon, ProfileIcon } from "./icons";
import { ThemeSwitch } from "./theme-switch";

// Main Navbar Component
export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const [isDialogOpen, setIsDialogOpen] = useState(false); // Track dialog visibility
  const [password, setPassword] = useState(""); // Track password input
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false); // Track password validity
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false); // Track success dialog visibility
  const predefinedPassword = "123456"; // Predefined password

  const menuItems = ["ទំព័រដើម", "គោលបំណង", "អំពីយើង", "ទំនាក់ទំនង"];

  // Handle menu item click
  const handleMenuClick = (index: number) => {
    setActiveIndex(index); // Set the active index
  };

  // Handle password input change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === predefinedPassword) {
      setIsPasswordCorrect(true); // Correct password
      setIsDialogOpen(false); // Close the dialog
      setIsSuccessDialogOpen(true); // Open success dialog
      setIsLoggedIn(true); // Set login status to true
    } else {
      setIsPasswordCorrect(false); // Incorrect password
      alert("Incorrect password!");
    }
  };

  // Close the success dialog
  const closeSuccessDialog = () => {
    setIsSuccessDialogOpen(false); // Close success dialog
  };

  return (
    <div className="flex flex-col">
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent justify="start">
          <NavbarMenuToggle
            className={`sm:hidden ${isMenuOpen ? "Close menu" : ""}`} // Rotate icon when open
            onClick={() => setIsMenuOpen((prev) => !prev)} // Toggle the menu onClick
          />
          <NavbarBrand>
            <img
              src="/navbar_images/GIC - logo.png"
              alt=""
              width={111}
              height={36}
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={item} isActive={activeIndex === index}>
              <Link
                aria-current={activeIndex === index ? "page" : undefined}
                href="#"
                className={`h-[40px] w-auto min-w-[92px] rounded-[100px] items-center justify-center 
                  ${activeIndex === index ? "bg-blue-600 text-white" : " text-gray-800 hover:bg-blue-600 hover:text-white"} 
                  transition-colors`}
                onClick={() => handleMenuClick(index)}
              >
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          {!isLoggedIn ? (
            <>
              <NavbarItem className="hidden lg:flex">
                <Link href="#" onClick={() => setIsDialogOpen(true)}>
                  Login
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Button
                  as={Link}
                  color="primary"
                  href="#"
                  variant="flat"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Sign Up
                </Button>
              </NavbarItem>
            </>
          ) : (
            <>
              <NavbarItem>
                <ThemeSwitch />
              </NavbarItem>
              <NavbarItem>
                <BellIcon className="text-default-500 cursor-pointer" />
              </NavbarItem>
              <NavbarItem>
                <ProfileIcon className="text-default-500 cursor-pointer" />
              </NavbarItem>
            </>
          )}
        </NavbarContent>

        <NavbarMenu className={isMenuOpen ? "block" : "hidden"}>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={`w-full ${activeIndex === index ? "text-blue-600" : "text-gray-800"} transition-colors`}
                onClick={() => handleMenuClick(index)}
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>

        {/* Login / Sign Up Dialog */}
        {isDialogOpen && (
          <div className="dialog">
            <h2>Enter Password</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </label>
              <button type="submit">Submit</button>
            </form>
            <button onClick={() => setIsDialogOpen(false)}>Close</button>
          </div>
        )}

        {/* Success Dialog */}
        {isSuccessDialogOpen && (
          <div className="dialog">
            <h2>Success</h2>
            <p>Password is correct!</p>
            <button onClick={closeSuccessDialog}>Close</button>
          </div>
        )}

        {/* Simple Dialog Styling */}
        <style jsx>{`
          .dialog {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 999;
          }
          button {
            margin-top: 10px;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          button:hover {
            background-color: #0056b3;
          }
          input {
            margin-top: 10px;
            padding: 8px;
            width: 100%;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          h2 {
            margin-bottom: 10px;
          }
        `}</style>
      </Navbar>

      <div>
        <div className="px-[5%] sm:px-[8%] lg:px-[100px] py-[32px] h-auto w-full flex flex-col lg:flex-row md:justify-center justify-evenly items-center">
          <div className="flex flex-col text-center lg:text-left w-full lg:w-auto">
            <div className="head-topic text-[36px] sm:text-[42px] lg:text-[48px] font-semibold leading-[45px] sm:leading-[50px] lg:leading-[57px] max-w-[385px] sm:max-w-[450px] text-[#06598F]">
              សាកល្បងប្រលងចូលតិចណូ​និងរៀនត្រៀមដោយសេរី...!
            </div>
            <div className="body-topic w-full sm:w-[470px] text-[14px] sm:text-[18px] font-medium leading-[24px] sm:leading-[29px]">
              ប្រព័ន្ធប្រលងសាកល្បង​​
              ជាគេហទំព័រជំនួយដល់សិស្សានុសិស្ស​ដែលមានបំណងត្រៀមប្រលងចូលវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា។
            </div>
            <button className="start-btn w-full sm:w-auto max-w-[157px] h-[40px] rounded-2xl bg-[#06598F] gap-[8px] text-white mt-[16px] sm:mt-[24px]">
              សាកល្បងឥឡូវនេះ
            </button>
          </div>

          <div className="mt-[32px] sm:mt-0 w-full lg:w-auto">
            <img
              src="/navbar_images/Frame 638.png"
              alt=""
              className="w-full sm:w-[500px] lg:w-[800px] xl:w-[900px] h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

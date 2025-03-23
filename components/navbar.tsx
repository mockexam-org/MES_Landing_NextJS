'use client'
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
import Image from "next/image";
import LanguageSwitcher from "./NavBar/LanguageSwitch";

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
            <Image
              src="/navbar_images/MES_LOGO_WEB.png"
              alt=""
              width={150}
              height={40}
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
          <NavbarItem>
            <LanguageSwitcher/>
            {/* <ThemeSwitch/> */}
          </NavbarItem>
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
    </div>
  );
}

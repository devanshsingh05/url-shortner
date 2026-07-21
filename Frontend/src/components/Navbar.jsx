import React from "react";
import { Link } from "@tanstack/react-router";
import { User, LogOut, Link as LinkIcon } from "lucide-react";

const Navbar = (loginUser) => {
  const{user, onLogout, onLogin } = loginUser;
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo/Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <LinkIcon className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-800">
                URL Shortener
              </span>
            </div>
          </div>

          {/* Right side - User info or Login */}
          <div className="flex items-center space-x-4">
            {user ? (
              // User is logged in
              <div className="flex items-center space-x-3">
                {/* User Profile */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm font-medium text-gray-700">
                      {user.name || user.email}
                    </p>
                    <p className="text-xs text-gray-500">
                      {user.email && user.name ? user.email : "User"}
                    </p>
                  </div>
                </div>

                {/* Logout Button */}
                <button
                  onClick={onLogout}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            ) : (
              // User is not logged in
              <div className="flex items-center space-x-3">
                <Link
                  to="/auth"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

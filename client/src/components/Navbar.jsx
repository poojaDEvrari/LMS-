"use client"

import { Menu, GraduationCap } from "lucide-react"
import { useEffect } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import DarkMode from "@/DarkMode"
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "@radix-ui/react-dropdown-menu"
import { Link, useNavigate } from "react-router-dom"
import { useLogoutUserMutation } from "@/features/api/authApi"
import { toast } from "sonner"
import { useSelector } from "react-redux"

const Navbar = () => {
  const { user } = useSelector((store) => store.auth)
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation()
  const navigate = useNavigate()

  const logoutHandler = async () => {
    await logoutUser()
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "User log out.")
      navigate("/login")
    }
  }, [isSuccess])

  return (
    <div className="h-16 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/30 shadow-lg shadow-black/5 dark:shadow-black/20" />

      {/* Desktop */}
      <div className="relative max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full px-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-[#ED3500] to-[#FFD8D8] shadow-lg">
            <GraduationCap size={24} className="text-white" />
          </div>
          <Link to="/" className="group">
            <h1 className="font-extrabold text-2xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-[#ED3500] group-hover:to-[#FFD8D8] transition-all duration-300">
              Learning Management System
            </h1>
          </Link>
        </div>

        {/* User icons and dark mode icon */}
        <div className="flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#ED3500] to-[#FFD8D8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  <Avatar className="relative ring-2 ring-white/50 dark:ring-gray-700/50 transition-all duration-300 group-hover:ring-[#ED3500]/50">
                    <AvatarImage src={user?.photoUrl || "https://github.com/shadcn.png"} alt="@shadcn" />
                    <AvatarFallback className="bg-gradient-to-br from-[#ED3500] to-[#FFD8D8] text-white">
                      CN
                    </AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 shadow-xl">
                <DropdownMenuLabel className="text-gray-900 dark:text-white">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-200/50 dark:bg-gray-700/50" />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors">
                    <Link to="my-learning" className="w-full">
                      My learning
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors">
                    <Link to="profile" className="w-full">
                      Edit Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={logoutHandler}
                    className="hover:bg-red-500/10 dark:hover:bg-red-500/10 text-red-600 dark:text-red-400 transition-colors"
                  >
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                {user?.role === "instructor" && (
                  <>
                    <DropdownMenuSeparator className="bg-gray-200/50 dark:bg-gray-700/50" />
                    <DropdownMenuItem className="hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors">
                      <Link to="/admin/dashboard" className="w-full">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => navigate("/login")}
                className="bg-white/50 dark:bg-gray-800/50 border-white/30 dark:border-gray-700/30 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-700/70 transition-all duration-300"
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("/login")}
                className="bg-gradient-to-r from-[#ED3500] to-[#FFD8D8] hover:from-[#ED3500] hover:to-[#FF9999] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Signup
              </Button>
            </div>
          )}
          <div className="ml-2">
            <DarkMode />
          </div>
        </div>
      </div>

      {/* Mobile device */}
      <div className="relative flex md:hidden items-center justify-between px-4 h-full">
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-gradient-to-br from-[#ED3500] to-[#FFD8D8] shadow-md">
            <GraduationCap size={20} className="text-white" />
          </div>
          <h1 className="font-extrabold text-xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Learning Management System
          </h1>
        </div>
        <MobileNavbar user={user} />
      </div>
    </div>
  )
}

export default Navbar

const MobileNavbar = ({ user }) => {
  const navigate = useNavigate()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="rounded-full bg-white/50 dark:bg-gray-800/50 border-white/30 dark:border-gray-700/30 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-700/70 transition-all duration-300"
          variant="outline"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-l border-white/20 dark:border-gray-700/30 flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            <Link to="/">Learning Management System</Link>
          </SheetTitle>
          <DarkMode />
        </SheetHeader>
        <Separator className="mr-2 bg-gray-200/50 dark:bg-gray-700/50" />
        <nav className="flex flex-col space-y-4 mt-6">
          <Link
            to="/my-learning"
            className="p-3 rounded-xl bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all duration-300 backdrop-blur-sm border border-white/20 dark:border-gray-700/30"
          >
            My Learning
          </Link>
          <Link
            to="/profile"
            className="p-3 rounded-xl bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all duration-300 backdrop-blur-sm border border-white/20 dark:border-gray-700/30"
          >
            Edit Profile
          </Link>
          <button className="p-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 transition-all duration-300 backdrop-blur-sm border border-red-500/20 text-red-600 dark:text-red-400 text-left">
            Log out
          </button>
        </nav>
        {user?.role === "instructor" && (
          <SheetFooter className="mt-auto">
            <SheetClose asChild>
              <Button
                type="submit"
                onClick={() => navigate("/admin/dashboard")}
                className="w-full bg-gradient-to-r from-[#ED3500] to-[#FFD8D8] hover:from-[#ED3500] hover:to-[#FF9999] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Dashboard
              </Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}

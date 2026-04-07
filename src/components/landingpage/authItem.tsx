
import { Menu, MenuItem, MenuItems, MenuButton } from "@headlessui/react";
import { BellIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

export default function AuthItem(){

    return (

        <>  
            <Menu as="div" className="relative ml-3">
                <MenuButton
                type="button"
                className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="size-6" />
                </MenuButton>

                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-50 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                    <MenuItem>
                        <Link
                            href="/user-profile"
                            className="flex items-center h-15 px-5 py-4 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                        >
                            1 New Message
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="/messages"
                            className="flex items-center h-15 px-5 py-4 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                        >
                            4 Project Updates
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="#"
                            className="flex items-center h-15 px-5 py-4 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                        >
                            Task Mark as Done
                        </Link>
                    </MenuItem>
                </MenuItems>
            </Menu>

            <Menu as="div" className="relative ml-3">
                <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                    />
                </MenuButton>

                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                    <MenuItem>
                        <Link
                            href="/user-profile"
                            className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                        >
                            Your profile
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="/messages"
                            className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                        >
                            Messages
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="/leave-request"
                            className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                        >
                            Request a Leave
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                        >
                            Settings
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                        >
                            Sign out
                        </Link>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </>

    );

}
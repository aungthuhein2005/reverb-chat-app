import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { Button } from "./ui/button";
  import { User2 } from "lucide-react";
  import { Avatar, AvatarFallback } from "./ui/avatar";
import { useUser } from "@/context/UserContext";
import { Switch } from "./ui/switch";
import { Input } from "./ui/input";
import { ColorPicker } from "./color-picker";
import { useState } from "react";
  
  const UserProfileModel = () => {

    const {selectedUser} = useUser();
    const [color, setColor] = useState("#fff");

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="rounded-full p-3 shadow hover:shadow-lg transition duration-300">
            <User2 className="w-5 h-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] rounded-2xl shadow-2xl p-6 bg-white dark:bg-gray-800">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">User Information</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-4 border-b border-gray-300 dark:border-gray-700">
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16 shadow-md">
                <AvatarFallback className="text-lg font-bold bg-indigo-500 text-white">{selectedUser?.name.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200">{selectedUser?.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">@{selectedUser?.name}</p>
              </div>
            </div>
          </div>
          <ul className="space-y-3 py-4">
            <li className="flex justify-between text-gray-700 dark:text-gray-300">
              <span>Email:</span>
              <span className="font-medium">{selectedUser?.email}</span>
            </li>
            <li className="flex justify-between text-gray-700 dark:text-gray-300">
              <span>Notifications:</span>
              <span className="font-medium"> <Switch id="airplane-mode" /></span>
            </li>
            <li className="flex justify-between text-gray-700 dark:text-gray-300">
              <span>Change Theme:</span>
              {/* <Button variant="outline" size="sm" className="rounded-lg">Toggle</Button> */}
              {/* <Input type="color"/> */}
              <ColorPicker
          onChange={(v) => {
            setColor(v);
          }}
          value={color}
        />
            </li>
          </ul>
          <DialogFooter>
            <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg py-2 transition">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default UserProfileModel;
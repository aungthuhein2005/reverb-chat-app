import { Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Profile from "./profile"
import { useUser } from "@/context/UserContext"
import UserProfileModel from "./user-model";

export function TopBar() {

  const {selectedUser} = useUser();

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <h3>{selectedUser?.name}</h3>
      <div className="flex items-center space-x-4">
        {/* <Button variant="ghost" size="icon"> */}
          {/* <User className="h-5 w-5" /> */}
          <UserProfileModel/>
        {/* </Button> */}
      </div>
    </header>
  )
}


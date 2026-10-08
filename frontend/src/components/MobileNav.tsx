import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  return (
    <Sheet>
      {/*  this sheet trigger is used to open the mobile nav sheet, it is hidden on desktop and tablet viewports */}
      <SheetTrigger>
        <Menu className="text-orange-500"></Menu>
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-orange-500" />
              {user?.name}
            </span>
          ) : (
            <span>Welcome to getBites.com!</span>
          )}
        </SheetTitle>
      </SheetContent>
      <Separator />
      <SheetDescription className="flex flex-col gap-4">
        {isAuthenticated ? (
          <MobileNavLinks />
        ) : (
          <Button
            onClick={() => loginWithRedirect()}
            className="flex font-bold bg-orange-500"
          >
            Log In{" "}
          </Button>
        )}
      </SheetDescription>
    </Sheet>
  );
};

export default MobileNav;

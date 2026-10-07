import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      {/*  this sheet trigger is used to open the mobile nav sheet, it is hidden on desktop and tablet viewports */}
      <SheetTrigger>
        <Menu className="text-orange-500"></Menu>
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>Welcome to getBites.com!</SheetTitle>
      </SheetContent>
      <Separator />
      <SheetDescription className="flex">
        <Button className="flex-1 font-bold bg-orange-500">Log In </Button>
      </SheetDescription>
    </Sheet>
  );
};

export default MobileNav;

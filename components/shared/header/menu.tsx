import { ShoppingCart, UserIcon } from "lucide-react";

import Link from "next/link";

import ModeToggle from "@/components/shared/header/mode-toggle";
import { Button } from "@/components/ui/button";

const Menu = () => {
  return (
    <>
      <div className="flex justify-end gap-3">
        <nav className="hidden w-full max-w-xs gap-1 md:flex">
          <ModeToggle />
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart />
              Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href="/sign-in">
              <UserIcon />
              Sign In
            </Link>
          </Button>
        </nav>
      </div>
    </>
  );
};

export default Menu;

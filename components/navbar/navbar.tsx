import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "./main-nav";
import NavbarActions from "@/components/navbar/navbar-actions";
import getCategories from "@/actions/get-categories";
import UserMenu from "./UserMenu";
import { SeparatorHorizontal } from "lucide-react";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div>
      <div>
        <Container>
          <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center ">
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
              <p className="font-bold text-xl">Normic: Your Style</p>
            </Link>

            <NavbarActions />
            <UserMenu />
          </div>

          <div className="border-t  border-gray-300">
            <MainNav data={categories} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
// <div className="border-b">

//   <Container>
//     <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
//       <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
// <p className="font-bold text-xl">NORMIC</p>
//       </Link>
//       <MainNav data={categories} />
//       <NavbarActions />
//     </div>
//   </Container>
// </div>

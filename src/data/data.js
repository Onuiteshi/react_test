import { RiDashboardFill, RiWallet3Line } from "react-icons/ri";
import { TbUsers } from "react-icons/tb";
import { AiOutlineShoppingCart, AiOutlinePieChart } from "react-icons/ai";
import { BsBoxSeam, BsGear } from "react-icons/bs";
import { IoAnalytics } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";

const navItemsData = [
  {
    text: "Dashboard",
    icon: <RiDashboardFill />,
  },
  {
    text: "Products",
    icon: <BsBoxSeam />,
  },
  {
    text: "Shop",
    icon: <AiOutlineShoppingCart />,
  },
  {
    text: "Transactions",
    icon: <RiWallet3Line />,
  },
  {
    text: "Users",
    icon: <TbUsers />,
  },
  {
    text: "Analysis",
    icon: <IoAnalytics />,
  },
  {
    text: "Reports",
    icon: <AiOutlinePieChart />,
  },
  {
    text: "Investments",
    icon: <HiOutlineShoppingBag />,
  },
  {
    text: "Settings",
    icon: <BsGear />,
  },
];

export default navItemsData;

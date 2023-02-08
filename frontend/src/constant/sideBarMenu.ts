import {
  InboxStackIcon,
  ShoppingBagIcon,
  WalletIcon,
  BuildingStorefrontIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

export const sideBarMenu = [
  // {
  //   name: "Shipment",
  //   icon: InboxStackIcon,
  //   options: ["My Shipment", "Shipping Setting"],
  //   path: "/shipment",
  // },
  {
    name: "Product",
    icon: ShoppingBagIcon,
    options: ["My Product", "Add New Product"],
    path: "/products",
  },
  {
    name: "Setting",
    icon: Cog6ToothIcon,
    options: ["My Addresses", "Shop Setting", "Account"],
    path: "/setting",
  },
  {
    name: "Help",
    icon: QuestionMarkCircleIcon,
    options: ["Seller Service"],
  },
];

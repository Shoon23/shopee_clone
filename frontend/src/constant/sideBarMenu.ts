import {
  InboxStackIcon,
  ClipboardDocumentListIcon,
  ShoppingBagIcon,
  TagIcon,
  WalletIcon,
  ChartBarIcon,
  ArrowUpRightIcon,
  ChatBubbleLeftRightIcon,
  BuildingStorefrontIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
export const sideBarMenu = [
  {
    name: "Shipment",
    icon: InboxStackIcon,
    options: ["My Shipment", "Mass Ship", "Shipping Setting"],
  },
  {
    name: "Order",
    icon: ClipboardDocumentListIcon,
    options: ["My Orders", "Cancellation", "Return/Refund"],
  },
  {
    name: "Product",
    icon: ShoppingBagIcon,
    options: [
      "My Product",
      "Add New Product",
      "Product Violations",
      "Product Setting",
    ],
  },
  {
    name: "Marketing Centre",
    icon: TagIcon,
    options: ["Marketing Centre", "Shopee Ads", "Vouchers"],
  },
  {
    name: "Finance",
    icon: WalletIcon,
    options: ["My Income", "My Balance", "Bank Accounts", "Payment Setting"],
  },
  {
    name: "Data",
    icon: ChartBarIcon,
    options: ["Business Insights", "Account Health"],
  },
  {
    name: "Growth",
    icon: ArrowUpRightIcon,
    options: ["Prefered Seller"],
  },
  {
    name: "Customer Service",
    icon: ChatBubbleLeftRightIcon,
    options: ["Chat Assistant", "FAQ Assistant"],
  },
  {
    name: "Shop",
    icon: BuildingStorefrontIcon,
    options: [
      "Shop Rating",
      "Shop Profile",
      "Shop Decoration",
      "Shop Categories",
      "Media Space",
      "My Report",
    ],
  },
  {
    name: "Setting",
    icon: Cog6ToothIcon,
    options: ["My Addresses", "Shop Setting", "Account", "Partner Platform"],
  },
  {
    name: "Help",
    icon: QuestionMarkCircleIcon,
    options: ["Seller Service"],
  },
];

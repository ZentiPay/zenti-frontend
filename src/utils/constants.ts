import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const FEATURES = [
  {
    name: "Private",
    description: "Zenti Pay Private",
    icon: LockClosedIcon,
  },
  {
    name: "Compliant",
    description: "Zenti Pay Compliant",
    icon: CloudArrowUpIcon,
  },
  {
    name: "AI assistant",
    description: "Zenti Pay AI assistant",
    icon: ArrowPathIcon,
  },
];

const TEXT_VARIANTS = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export { FEATURES, TEXT_VARIANTS, CONTAINER_VARIANTS };

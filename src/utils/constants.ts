const FEATURES = [
  {
    name: "Low-cost",
    description: "Low volume-based fee, no additional monthly fees",
    icon: "/icons/cost.svg",
  },
  {
    name: "Fast",
    description: "Instant settlement, no chargebacks",
    icon: "/icons/fast.svg",
  },
  {
    name: "Easy-to-use",
    description: "AI assistants help manage your digital wallet and payments",
    icon: "/icons/easy.svg",
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

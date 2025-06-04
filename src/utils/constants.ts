const FEATURES = [
  {
    name: "Low-Cost Transactions",
    description: "Transact privately and directly within the trusted ZentiPay community. No expensive middlemen involved.",
    icon: "/icons/cost.svg",
  },
  {
    name: "Fast & Secure",
    description: "Enjoy quick, compliant transactions with verified users and built-in fraud protection.",
    icon: "/icons/fast.svg",
  },
  {
    name: "Easy-to-use",
    description: "Let AI assistant simplify your digital wallet management and streamline payments.",
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

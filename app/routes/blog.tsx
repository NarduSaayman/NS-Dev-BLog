import { AnimatePresence, motion } from "framer-motion";
import styles from "highlight.js/styles/github-dark-dimmed.css";
import { LinksFunction, Outlet, useLocation, useOutlet } from "remix";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function Blog() {
  const outlet = useOutlet();
  return (
    <div className="py-20 flex justify-center">
      <div
        className="
          py-10 rounded-lg shadow-2xl px-10 bg-gradient-to-bl from-green-50 via-blue-50 to-purple-50
          prose max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl sm:prose-base lg:prose-xl
          min-w-sm sm:min-w-2xl md:min-w-4xl lg:min-w-5xl
          "
      >
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key={useLocation().key}
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

import { Link, LoaderFunction, useLoaderData } from "remix";
import * as whatIsMdx from "./what-is-mdx.mdx";
import * as codeHighlighting from "./code-highlighting.mdx";
import * as animations from "./animations.mdx";
import { animate, motion } from "framer-motion";

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export const loader: LoaderFunction = () => {
  return [
    postFromModule(whatIsMdx),
    postFromModule(codeHighlighting),
    postFromModule(animations),
  ];
};

export default function BlogIndex() {
  const posts = useLoaderData();
  let direction = 1;

  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      key={"Blogs"}
    >
      <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}>
        <div className="mx-auto -mt-20 rounded-lg shadow-xl px-10 bg-gradient-to-br from-pink-400 via-red-400 to-yellow-400 z-0 py-5 w-6/12 text-center mb-8">
          <h1 style={{ marginBottom: "0px" }}>Blogs</h1>
        </div>
      </motion.div>
      <div className="p-1">
        <ul className="flex flex-col gap-4">
          {posts.map(
            (post: { slug: string; title: string; description: string }) => (
              <Link className="no-underline" key={post.slug} to={post.slug}>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -500 * (direction *= -1),
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  key={post.slug}
                >
                  <li
                    className="transition ease-in-out rounded-xl shadow-xl hover:shadow-xl hover:scale-105 pt-1 pb-10 px-5 
                bg-gradient-to-bl from-green-200 via-blue-200 to-purple-200
                hover:bg-gradient-to-tl hover:from-pink-200 hover:via-red-200 hover:to-yellow-200
              "
                  >
                    <motion.div
                      initial={{
                        x: -100 * -direction,
                        opacity: 0,
                      }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        x: { type: "spring", duration: 0.8, delay: 0.2 },
                        opacity: { delay: 0.2 },
                      }}
                    >
                      <h3 className="mt-1 hover:underline">{post.title}</h3>
                    </motion.div>
                    {post.description ? (
                      <p className="m-0 lg:m-0">{post.description}</p>
                    ) : null}
                  </li>
                </motion.div>
              </Link>
            )
          )}
        </ul>
      </div>
    </motion.div>
  );
}

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  // Check if there are no blogs
  if (data.length === 0) {
    return (
      <div className={styles.mainContainer}>
        <h1>No Blogs</h1>
      </div>
    );
  }

  return (
    <div className={styles.mainContainer}>
      {data.reverse().map((item) => {
        const date = new Date(item.createdAt);
        const formattedDate = `${
          date.getMonth() + 1
        }.${date.getDate()}.${date.getFullYear()}`;

        return (
          <Link
            href={`/blog/${item._id}`}
            className={styles.container}
            key={item.id}
          >
            <div className={styles.imageContainer}>
              <Image
                src={item.img}
                alt=""
                width={400}
                height={250}
                className={styles.image}
              />
              <div className={styles.createdAt}>
                <p>{formattedDate}</p>
              </div>
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;

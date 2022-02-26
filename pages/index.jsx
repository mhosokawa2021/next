import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import jpg from "../public/test01.jpg";
import Card from '../components/Card';

import { useState, useEffect } from "react";
import { db } from "../src/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postsCollectionRef = collection(db, "posts");
    getDocs(postsCollectionRef).then((querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
    // console.log(postsCollectionRef);
  }, []);

  return (
    <div className={styles.container}>
      <Layout title="Homeのページです">
        {/*プリティア javascript(ES6) Tabnine*/}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {posts.map((post, index) => {
              return (
                <Card
                  key={index}
                  date={post.date}
                  src={post.imageUrl}
                  title={post.title}
                  text={post.text}
                  url={post.url}
                />
              );
            })}
            <Card
              date="2022/2/12"
              src={jpg}
              title="Nextの授業"
              text="ここが本文です"
              url="https://" />
          </div>
        </div>


      </Layout>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

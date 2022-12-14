import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Vinnicyus Gracindo"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt nulla molestias quo dolorem error quidem voluptates, fugiat, deserunt aperiam impedit ipsam at non adipisci sed neque quos repellendus necessitatibus culpa."
          />
          <Post
            author="John Doe"
            content="New Post"
          />

          <Post
            author="Jane Doe"
            content="New Post"
          />
        </main>
      </div>
    </div>
  )
}


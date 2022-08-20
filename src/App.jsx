import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Vinnicyus Gracindo"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt nulla molestias quo dolorem error quidem voluptates, fugiat, deserunt aperiam impedit ipsam at non adipisci sed neque quos repellendus necessitatibus culpa."
      />
      <Post
        author="John Doe"
        content="New Post"
      />
    </div>
  )
}


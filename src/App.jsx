import { Post } from './Post';

export function App() {
  return (
    <div>
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


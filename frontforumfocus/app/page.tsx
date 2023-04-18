import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: inter }}>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Community Initiatives</a></li>
          <li><a href="#">Marketplace</a></li>
          <li><a href="#">Educational Resources</a></li>
        </ul>
      </nav>
      <main>
        <h1>Frontforumfocus</h1>
        <p>Welcome to Frontforumfocus, a platform that connects individuals and organizations working on sustainable development goals through community initiatives, marketplace and educational resources.</p>
        <div>
          <button onClick={() => setCount(count + 1)}>Click me</button>
          <p>You've clicked the button {count} times!</p>
        </div>
      </main>
      <footer>
        <p>&copy; 2022 Frontforumfocus. All rights reserved.</p>
      </footer>
    </div>
  );
}

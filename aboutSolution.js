```javascript
// pages/aboutSolution.js
import { useEffect, useState } from 'react';

export default function About() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      {user ? <p>Welcome, {user.name}!</p> : <p>Please log in.</p>}
    </div>
  );
}
```
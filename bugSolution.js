import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    const unsubscribe = onSnapshot(query, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    });

    return () => {
      unsubscribe(); // Unsubscribe when component unmounts
    };
  }, []);

  // ... rest of the component

  return (
    // ... JSX
  );
}

export default MyComponent;
const query = query(collection(db, 'users'), where('uid', '==', userId));

const unsubscribe = onSnapshot(query, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    // Access the document data here
    console.log(doc.data());
  });
});

// ... later, when you want to unsubscribe
unsubscribe();
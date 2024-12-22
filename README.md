# Firebase onSnapshot Unsubscribe Issue

This repository demonstrates a problem with the `onSnapshot` method in Firebase.  After calling `unsubscribe()`, the listener remains active, leading to potential memory leaks and unexpected behavior. The issue is resolved by ensuring proper unsubscribe handling within component lifecycle methods.
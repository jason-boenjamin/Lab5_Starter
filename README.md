# Lab 5 - Starter

### Names and Lab Members:
- Jason Boenjamin
- Brendon He
- Henry Tiet


## Github Pages
[expose](https://jason-boenjamin.github.io/Lab5_Starter/expose)
[explore](https://jason-boenjamin.github.io/Lab5_Starter/explore)

## Explore Pt 3. Unit Testing with Jest

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

- Not necessarily. A system/integration test would be better since we want to see the multiple components of the messaging system work together. As a unit test isolates code, it wouldn't fully test the interaction between components like the UI, network, and database.


2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

- This is a great scenario for a unit test. Checking for the max message length feature is a specific functionality that can be easily tested in unit tests. The test would have input restrictions and a feedback mechanism.
  

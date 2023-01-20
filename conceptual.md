### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JSON Web Token - sent from server with an AJAX request for browser to send future requests

- What is the signature portion of the JWT?  What does it do?
  Version of header and payload but it's signed with a SECRET KEY that only the user knows

- If a JWT is intercepted, can the attacker see what's inside the payload?
  reconstruct the header and payload code from the JWT

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  payload is the information that we want to store. We create a token using jwt.sign which holds the payload and the secret key. When we want to call this information, we need to use jwt.verify with the token AND the secret key to get the information released back to us 

- Compare and contrast unit, integration and end-to-end tests.
  Unit allows us to test a file function by function, easier to find bugs with specific functions. More time consuming 
  Integration allows us to check if a chunk of code is working in a local enviornment. Usually involved with API interactions
  End to End - Looking at the entire program from the user perspective. Good to finalizing a product, bad for singling out errors

- What is a mock? What are some things you would mock?
  A mock is simulating the input and output of a function without actually running through the full logic. We would want to use this when the object we are trying to test may have some dependencies of other objects. Mocking allows us to isolate the behavior of the one object 

- What is continuous integration?
Continuous integration is the practice of mergin in small code changes frequently rather than mergin in a large change at the end of a development cycle 

- What is an environment variable and what are they used for?
The enviornment variable dictates if we are in a development env or a testing env. Using this variable allows us to dictate if we want to be in our development database or testing database

- What is TDD? What are some benefits and drawbacks?
Test Driven Development - Write the tests for the features we want FIRST, then implement the features in a way so they will pass the testing

- What is the value of using JSONSchema for validation?
User data can fail and be removed quickly before it gets added to the database
Reduce the amount of code needed for processing data
to get a validation system that is easy to setup and maintain

- What are some ways to decide which code to test?
what code is necessary for completing the task/user story at hand

- What does `RETURNING` do in SQL? When would you use it?
Returning returns us a value that when saved to a variable can be used. We can use it to actually return JSON data, or we can return it to ensure the query even went through! 

- What are some differences between Web Sockets and HTTP?
HTTP you can recieve a response from the server per individual request. Once the response is sent, the connection is terminated. Web wockets keep a single persistent connection open while eliminating latency problems that arise

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I perfer using express. Although it seems pretty similar (flask/python, express/node/JS), express is much easier to troubleshoot and access databases in my opinion

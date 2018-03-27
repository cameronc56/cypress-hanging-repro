# cypress-hanging-repro

The bug: https://github.com/cypress-io/cypress/issues/1479

Steps to reproduce:

1. docker build --no-cache -t test/example-repro .

2. docker run -it -v /dev/shm:/dev/shm --ipc=host --security-opt seccomp:unconfined --rm test/example-repro:latest /bin/bash 

3. ./node_modules/.bin/cypress run --browser chrome (inside the container)

4. Wait for repro :) It'll take a while... im 5 for 7 on repro attempts. Its reprod on test 567, 283, 340, 241, and 378 out of 1000, and twice it ran all the tests without hanging. 


Notes:
I ran several of these simultaneously and saw 1 hang and the other one not, so I don't believe its a network hiccup

To continue isolating the problem I'm going to try and get this repository as small as possible, removing code and attempting to repro. 

# cypress-hanging-repro

The bug: https://github.com/cypress-io/cypress/issues/1479

Steps to reproduce:

1. /bin/bash build_docker.sh

2. docker run -it -v /dev/shm:/dev/shm --ipc=host --security-opt seccomp:unconfined --rm test/example-repro:latest /bin/bash 

3. ./node_modules/.bin/cypress run --browser chrome (inside the container)

4. Wait for repro :) It'll take a while... im 4 for 6 on repro attempts. Its reprod on test 567, 283, 340, and 378 out of 1000, and twice it ran all the tests without hanging. 


Notes:
I ran several of these simultaneously and saw 1 hang and the other one not, so I don't believe its a network hiccup

To continue isolating the problem I'm going to try and get this repository as small as possible... going to start by removing index.js+commands.js code, see if i can repro and go from there. 

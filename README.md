# cypress-hanging-repro

Steps to reproduce:

1. /bin/bash build_docker.sh

2. docker run -it -v /dev/shm:/dev/shm --ipc=host --security-opt seccomp:unconfined --rm test/example-repro:latest /bin/bash 

3. ./node_modules/.bin/cypress run --browser chrome (inside the container)

4. Wait for repro :) It'll take a while... im 4 for 6 on repro attempts. Its reprod on test 567, 283, 340, and 378 out of 1000, and twice it ran all the tests without hanging. 

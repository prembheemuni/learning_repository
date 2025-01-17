1. Isolated env for different versions of node and redis and pgres etc.
2. Image : blueprint that we can download from docker repository.
3. Container: an isolated env created when we run an docker image. We can run images by using docker.
4. There are two types of repository are there. Public like Docker hub. Private like ECR.
5. Docker pull node, this is how you download image .
6. Docker is a OS find of env. That helps you running your applications.
7. We do have images for OS also.
8. For example if we download and run node image it uses alpine image which is image of linux with 5mb storage. Images are made up of image's
9. Similarly on top of node image means using node image i can create my own application image.
10. We can add more layers of images.
11.  Different between Docker and virtual machine: 1. Os is made up of 3 components application layer, Os kernel, hardware.
12. Example of Operation system is Google meet is an application where javascript code runs and it interacts with Os kernel and kerel interacts with laptop hardware which is camera.
13. Virtual machine: It virtualizes the first 2 steps application layer and os kernel and it uses our hardware.
14. Docker virtualizes only application layer. It still uses your computer os kernal and hardware. That is why docker is smaller on size when it compared with VM.
15. Installation docker and docker desktop.
16. For installing pgres make sure you don't have pg on your pc.
17. Basic docker commands in daily life.
18. Docker pull postgress. It installs latest pg and you will see lot of layers downloading.
19. We can install specific version docker pull postgress:16.4.
20. Layers will be cached for quick pulling of images.
21. To run the image we need to fetch the id of the image . docker images will give all the images in the system.
22. Docker run imageid. We can see running containers on docker desktop or daemon .
23. If we run two redis image's with different version they'll run on same ports and there is no collision because docker containers are isolated with each other.
24. docker ps for listing running containers. -a for all containers.
25. Portmapping: we can map our localhost ports to the isolated container so that it differentiate between redis latest and old
26. docker run - p localhostPort:containerPort imageId
27. docker run -p 3005:6379 agfhek.
28. Basic docker commands
1. docker pull node : downloads all the layers and if there it caches
2. docker run node: it node is not there it downloads and runs
3. docker ps -a
4. docker run node -d. Gives id
5. docker stop containerID
6. docker start containerID. We already Created the container and setup all the port mappings. To Just run it again no need to do all things. Just docker start containerID
7. docker images
8. docker rmi imageId : fails if image is running in any of the containers
9. docker logs containerID, we can also see it on the desktop/ daemon
10. We can gave name to a docker container --name nodejsContainer. So we can use name instead of ID
11. docker logs containerName gives all logs printed
12. docker exec -it containerName /bin/bash will take us into the container
13. exit will exit us from docker container
14. -dit detached and interactive
15. -e key=value env variables passing

29. Docker network: example is postgress and pgadmin to connect postgress to pgadmin both should be same network
30. docker network create db-network, need to provide network name while running containers.
31. docker volume: while using pgres what happens is during the container the data also stores temporarily instead we can create our own volume and attach the volume to the container and provide the path where it finds the data, with this once you delete it, and try to run it , it picks data from the volume you created. To make data persistent use volumes
32. docker volume create pgdata
33. -v pgdata:var/lib/data
34. Docker compose: we can write all the above container creations and networks volumes in a yml file. So that it is easy for other's to read and run it instead of doing all the steps manually .
35. Docker compose is for running all the related containers by giving config in yml file.
36. docker compose -f ./filename up
37. In yml we can provide volume at the end which can take completely new or existing one
38. Upto now you just learned how to run existing images. Adding network to existing images  and adding volumes.  And using docker compose yml to run everything in single go.
39. Now we can create our own application docker image Dockerfile
40. Main idea is application Dockerfile is isolated apart from postgress and redis and other stuff. It's purely related to the application we built. Later we can connect them in a compose yaml.
41. Image creation use base image eg node create working directory. Copy everything to inside working directory. Expose the port Provide a start command.
42. Now we can modify our compose yml file which can also run our application using image id and remaining images also.
43. Advantage of docker is we can change our application id with demo/qa/dev/prod imageID and it can run very quickly.
44. How an application process works ( my thoughts) code is pushed to GitHub we run Jenkins on develop branch. Inside jenikins file we will just git pull the code and npm i stuff and build and importantly update the docker image by doing version bump to the dockerHub or repo.
45. One more way is copy the code copy the package file do npm i all these inside docker image. Jenikins just updates the image on the image repository
46. While working in local we need to built the image again and again when we make any changes. Local images are created and updated
47. Docker compose is mainly primarily used for local set up for the projects

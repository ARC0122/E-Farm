 1. docker information

        docker info

2. fetch image(linux os) into docker

        docker pull alpine

3. Display all images in docker

        docker images

4. Create container in docker

        docker run alpine sh

        Note: to check container details use following command

                    docker ps -a

5. Run container in docker

        docker run -d -it alpine sh

6. Execute linux version of image

        docker run -it alpine sh

    / # ls   

    .......

    / # exit

7. Change the name of container

        docker run -it --name=Mylinux alpine sh

        open new cmd pmpt window to check the name chnaged or not.

        cmd to stop container: docker stop Mylinux

8. Exit from container

        docker stop Mylinux

9. Remove container

        docker rm Mylinux

10. Remove image

        docker rmi -f alpine

     Note: to remove image, first remove all containers related to that image

----------------------------------------------------------------------------------------------
github.com/TheCurryMan/GitHubIntro
--------------------------------------------------------------------
*pull*
git init
git remote add origin //copy link
git remote show origin
git pull origin main
---------------------------------------------------------------------
*push*
git init
git remote add origin //copy link
ssh-keygen -t rsa -b 4094 -C "gmail"
      (gitkey)
git add gitkey
git add gitkey.pub
git remote show origin
git status
git commit -m 'massage'
git push -u origin master
----------------------------------------------------------------------
git init
git status
git config --global user.name 'abc'
git config --global user.email 'email'
git config --global --list
git add //filename
git commit -m 'massage'
git log
git log --oneline

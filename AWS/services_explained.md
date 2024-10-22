1. Elasric Compute Cloud (EC2) : It is a VM where we can configure RAM, ROM, We can use this as a server for web application.

2. Elastic Load Balancing : It distributes the load among different servers ensuring equal load to all the web servers configured.

3. Cloud watch : Collects Data / logs / metrics from each instance.

4. AutoScaliing : The data collected from Cloud watch will be passed to auto scalling, we can create polocies based on the input traffic and CPU utilisation and it will spin up new instances.

5. Elastic Beanstalk : Automatic auto scalling, Works like netlify and vercel 

6. Lambda : Function As A Service, aka serverless, in Lambda upload the code and choose the event when that should run, we need to create triggers, we need to pay only for the usage
![image](https://github.com/user-attachments/assets/d5ccad07-02ac-403e-a4ac-bdaf25035df2)

7. ECR Elastic Container Registery : it is repository for docker images, where we can upload our docker images.

8. ECS Elastic Container Service : It is responsible for pulling docker images from ECR and we can able to run the containers. and it will allocate VMs for the container and we able to start/stop/delete the containers, We can also connect tot the external services like load balancing. We can create a task inside ECS and we can run any number of Containers , Task is like a blue print

10. EKS Elastic kuberneties Service : For Running Containers in more effcient way.

11. Fargate : is a tool where containers behave like serverless.

12. Simple Storage Service S3: Where we can store any sort of data and it will return an object url for that resource.

13. Glacier is also one of the storage service.

14. Elastic Block storage : it has high throughtput and need more configuration from developers

15. Elastic File System

16. Dynamo DB : Document DB, fast, cheap, limited queries, no joins

17. Elastic Search : Full text search engine.

18. RDS : Provides Relational Databases with backups and scalling properties

19. Aurora DB: Amazon offers Aurora DB which can be 5x faster than myqsl psql and it can managed serverless also

20. Neptune is a graph database provided by Amazon

21. Elastic Cache :  Which can be used as in-memory database like redis and it is provided by amazon

22. TimeStream is a time based database

###

23. IAM Identity Access Manager: We can manage who has access to what.

24. Cognito : User Authentication Where it provides more options to the user to login via mobile , otp

25. SNS Simple Notification Service: With that Logged users we can able to send push notifications to the user

26. SES Simple Email Service : We can emails to the people 





The idea of a singleton is to have one instance that is used all through the codebase

Imagine thta twe have a database connection object that can be used to access the database. 

We would not want to create multiple connections to the database each time we want to query data. Thus we use one instance
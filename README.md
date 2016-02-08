# Node Web Service Manager 

Simple Node Service Manager is useful to create RESTful web services using Express and Node.js.

##Features :

    1. Environment setup (Like Development, QA, Production)
    2. API Versioning
    3. Basic Security
    4. Supports for HTTP request methods (GET, PUT, POST, DELETE)
    5. Host Web pages.


####1. Environment setup

    Web Service basics have to support multiple environments like development, QA, Production environment and Configured in the generic format.

    The `config.json` is helpful achieve the Environment setup.

```js

    {
        "DEV" : {
            "version" : "v3",
            "http": {
                "port" : 3000   
            },
            "auth" : "bypass"
        },

        "QA" : {
            "version" : "v2",
            "http" : {
                "port" : 80
            },
            "auth" : "required"
        },

        "PROD" : {
            "version" : "v1",
            "http" : {
                "port" : 80
            },
            "auth" : "required"
        }   
    }

```

####2. API Version

    Configure the API version number in the `config.json` based on the environments.

    The `config.json` is helpful achieve the API versioning to register web services based on the version number.

```js
    http://<webserver>/<version>/<webservice>        
```


####3. Basic Security

    Every RESTful Web services need the security and validation before going to hit the server business logic's. Node Web Service Manager helps to implement the basic security and validate the request headers.

    For the different environments, We can able to provide a different kind of security implementation using over security implementation.

        -   DEV environment is by-pass the security validation.
        -   QA and Production environments are required the security validation. 

    If it's QA and Production environments, Request Header must be.

        - authorization = "bybass"
        - content-type  = "application/json"
        - date          = "1454577924104"     - UTC time.


####4. Supports for HTTP request methods (GET, PUT, POST, DELETE)    

    Node Web Service Manager helps to support the four types of HTTP request methods.


####5. Host Web pages    

    Node Web Service Manager helps to host static web pages in the Node server with dynamic web title based on the environments.

![alt text][api_test_environment]

[api_test_environment]: https://github.com/vigneshuvi/node-webservice-manager/blob/master/public/images/api_test_environment.png


##How to run this node web service server?

    -   Need to install node.
    -   Open terminal and run the 'npm install' command to download the node modules.
    -   Setup the node environment based on NODE_ENV variable. (Like NODE_ENV=DEV, NODE_ENV=QA and NODE_ENV=PROD )
    -   Run the node server 'npm app.js' command.

##How to test the RESTful web service?

    -  If you set up the node environment is `DEV`, then you can directly test it from RESTful Client.

        http://localhost:3000/v1/sample             - Show All -  Fetch all based on request.
        http://localhost:3000/v1/sample:id="test"   - Show     -  Fetch based on request id. 
        http://localhost:3000/v1/sample:id="test"   - PUT      -  Update based on request id. 
        http://localhost:3000/v1/sample             - POST     -  Create based on request.
        http://localhost:3000/v1/sample:id="test"   - DELETE   -  Update based on request id.

___

#### Do you like it?

Do you like this repo? Share it on Twitter, Facebook, Google+ or anywhere you like so that more of us can use it and help. Thanks!

Created by [Vignesh](http://vigneshuvi.github.io/) 

![alt text][logo]

[logo]: https://github.com/vigneshuvi/vigneshuvi.github.io/blob/master/favicon.ico/android-icon-48x48.png

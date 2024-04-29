const express = require('express');
const createTerminus  = require('@godaddy/terminus')
const app = express();
const path = require('path')
const http = require('http')

// const admin = express();
const port = 4000;
app.use(express.json())
const fs = require('fs');
const api = require('./app');

app.get('/' , (req,res) => {
  // res.cookie("username" , 'abc' , {secure : true , httpOnly: true , expires : new Date(Date.now() + 60 * 60 * 1000)})
  res.send("cookie set")
})

const server = http.createServer(app)

function onSignal () {
  console.log('server is starting cleanup')
  // start cleanup of resource, like databases or file descriptors
}

async function onHealthCheck () {
  console.log("hello");
  // checks if the system is healthy, like the db connection is live
  // resolves, if health, rejects if not
  return "hello"
}

createTerminus(server, {
  signal: 'SIGINT',
  healthChecks: { '/healthcheck': onHealthCheck },
  onSignal
})

server.listen(3000)


// app.engine('ntl' , (filePath , options , callback) => {
//   // console.log('filePath :>> ', filePath);
//   // console.log('options :>> ', options);
//   // console.log('callback :>> ', callback);
//   fs.readFile(filePath , (err , content) => {
//     console.log(content.toString());
//     console.log(options.title);
//     const rendered = content.toString()
//     .replace('#title#', `<title>${options.title}</title>`)
//     .replace('#message#', `<h1>${options.message1}</h1>`)
//       console.log(rendered);
//     return callback(null, rendered)
//   })
// })


// app.set('view engine' , 'ntl')
// // app.engine('pug' , require('views'))
// app.get('/' , (req,res) => {
//   res.render('index' , {title : 'Hey' , message1 : 'Hello Everyone'})
// })










// app.set('views', './views') // specify the views directory

// app.get('/' , (req,res) => {
  //   console.log(req.get('Content-Type'));
  //   console.dir(res.headersSent)
  // console.dir(req.fresh)
  // console.dir(req.stale)
  // console.dir(app.path())
  // console.dir(admin.path())
  // console.dir(admin.mountpath);
  // console.dir(req.baseUrl);
  // console.dir(req.originalUrl);
  // res.send("hello world")
  // res.end()
// })


// app.use('/adm?in' , admin)







// app.use('/api' , api)
// console.dir(admin.mountpath);
// admin.get('/:name', (req, res) => {
//   console.log(admin.mountpath);
//   console.log(req.baseUrl) // /greet
//   console.log(req.params[0]);
//   res.send('Konichiwa!')
// })
// app.use('/admin' , admin)
// app.engine('pug' , require('pug').renderFile)

// admin.on('mount', (parent) => {
//   console.log('Admin Mounted')
//   console.log(parent) // refers to the parent app
// })

// app.get('/', function (req, res) {
//   res.format({
//       html: function () {
//           res.send('<p>Greetings from GeeksforGeeks</p>');
//       },
//       text: function () {
//           res.send('Greetings from GeeksforGeeks');
//       },
//       json: function () {
//           res.send({ message: 'Greetings from GeeksforGeeks' });
//       }
//   });
// });

// app.get('/user/:id', function (req, res, next) {
  //   console.log('Greetings from geeksforgeeks');
  //   next();
  // });
  
  // app.get('/user/:id/:name', function (req, res) {
  //   console.log(req.params.id);
  //   console.log('Once again greetings from geeksforgeeks');
  //   res.end();
  // });
  
  // app.param(['id','name'], function (req, res, next, id) {
  //   console.log('CALLED ONLY ONCE' , id , name );
  //   next();
  // });

// app.get('/', (req, res) => {
//   // res.render('index.pug')
//   res.send('hello world')
// })

// app.get('/user', (req, res) => {
//   console.log(req.query.id);
//   // res.render('index.pug')
//   res.send('hello world without param user')
// })


// app.get('/user/:id', (req, res) => {
//   // res.render('index.pug')
//   res.send('hello world with param user')
// })

// app.use('/admin', admin)
// app.disabled('api')

// app.enable('api') 
// console.log(app.disabled('api'));

// app.get('/api', (req, res, next) => {
//   console.log('Accessing the secret section ...')
//   next() // pass control to the next handler
// })



// const router = express.Router()
// var serveStatic = require('serve-static')

// const pug = require('pug');
// const path = require('path');
// const { options } = require('./Routes/app');
// const morgan = require('morgan');
// const api = require('./Routes/app')
// app.use(serveStatic('public' , {index : ['home.html', 'example.html']}))
// app.use(express.static('public'))
// app.locals.title = 'ap@gmail.com'
// console.dir(app.locals.title)
// app.use(morgan('dev'))
// app.set(express.static(path.join(__dirname , 'public' , 'images' , 'flower.jpeg')))

// app.get('/' , (req, res) => {
//   res.render('index')
// })



// admin.get('/' , (req,res) => {
//     console.log(admin.mountpath);
//     res.send('hello')
// })

// const secret = express()
// secret.get('/', (req, res) => {
//   console.log(secret.mountpath) 
//   res.send('Admin Secret')
// })

// admin.use('/secr*t', secret) 
// app.use(['/adm*n', '/manager'], admin)



// app.use('/admin' , admin)



// router.get('/', (req, res) => {
//   res.send('hello world')
// })








// app.set('/',path.join(__dirname, './views'))
// console.log(path.join(__dirname, 'views'));
// app.set('view engine' , 'pug')

// app.get('/' , (req, res) => {
//   app.render('index');
// })





// app.use(serveStatic('public/images', { index: ['flower.jpeg', 'flower.jp  '] }))
// const cookieParser = require('cookie-parser')
// const api = require('./Routes/app');
// app.use(express.json())
// const fs = require("node:fs")
// const bodyParser = require('body-parser');

// const methodOverride = require('method-override')
// app.use(cookieParser())
// app.set('views', path.join('./view', 'views'));
// app.use(
//     '/static',
//     express.static(path.join(__dirname, './view')),
//   );
// app.set(path.join(__dirname, './public/images'))
// app.set('view engine', 'pug')

// app.get('/', (req, res) => {
//     res.render('index')
// })




// app.set('view engine' , 'pug')
// app.get('/' , (req,res) => {
//   res.render('index')
// })


// app.use(morgan('tiny'));









// app.get('/', (req, res) => {
//   res.render('app.js', function (err, html) {
//     res.send(html)
//   })
// })
// app.post('/',async(req,res)=>{
//     console.log('req.body :>> ', req.body);
// })
// app.get('/userdata', (request, response) => {
//     response.send("hello world")
// })
// app.post('/abcd', (request, response) => {
//     response.send("Got a POST request")
// })
// app.patch('/ab+cd', (request, response) => {
//     response.send("Got a PUT request")
// })
// app.delete('/ab*cd', (req, res) => {
//     res.send('Got a DELETE request')
// })
// app.all('/secret', (req, res, next) => {
//     console.log('Accessing the secret section ...')
//     next() // pass control to the next handler
// })
// app.use(express.static('public'))

// app.get('/example/user', (req, res, next) => {
//     console.log('the response will be sent by the next function ...')
//     next()
//   }, (req, res) => {
//     res.send('Hello from user1!')
//   })

// const cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
// }

// const cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
// }

// const cb2 = function (req, res) {
//     res.send('Hello from C!')
// }

// app.get('/example/user', [cb0, cb1, cb2])


// app.route('/book')
//   .get((req, res) => {
//     res.send('Get a random book')
//   })
//   .post((req, res) => {
//     res.send('Add a book')
//   })
//   .put((req, res) => {
//     res.send('Update the book')
//   })

// router.use((req , res , next) => {
//     console.log('Time : ',Date.now());
// })

// app.use('/admin', api)



// app.post('/', (req, res) => {
//     console.log("home page");
//     // res.cookie('userData' , {name : "abc"})
//     res.send('Hello World!')
// })


// app.get('/', (req, res) => {
//   res.cookie('userData', { name: "abc" })
//   // res.send('Hello World!')

// })


// app.use('/user/:id', (req, res, next) => {
//     console.log('Request URL:', req.originalUrl)
//     res.send(req.params.id)
//     next()
//   }, (req, res, next) => {
//     console.log('Request Type:', req.method)
//     next()
//   })



// app.get('/user/:id', (req, res, next) => {
//     if (req.params.id === '0') next('route')
//     else next()
// }, (req, res, next) => {
//     res.send('regular')
// })
// app.use('/user/:id', (req, res, next) => {
//     res.send('other')
//     next()
// })


// const myLogger = function (req, res, next) {
//     console.log('LOGGED')
//     next()
// }



// app.get('/', (req, res ) => {
//     return res.sendStatus(200 , 'application/json' , {message : "get data successfully"})
//     // res.send('Hello World!')
// })
// Object.defineProperty(app.request, 'ip', {
//     configurable: true,
//     enumerable: true,
//     get () { return this.get('Client-IP') }
//   })

// app.response.sendStatus = function (statusCode, type, message) {
//     console.log("hello");
//     return this.contentType(type)
//         .status(statusCode)
//         .send(message)
// }


// app.use(myLogger)
// app.post('/' , (req, res) => {
//     res.send("post method")
// })
// app.get('/user/:id', (req, res, next) => {
//     res.send('special')
// })
// app.use('/', router)



// handler for the /user/:id path, which renders a special page
// router.get('/user/:id', (req, res, next) => {
//     console.log(req.params.id)
//     res.render('special (router)')
// })


// function logOriginalUrl(req, res, next) {
//   console.log('Request URL:', req.originalUrl)
//   next()
// }

// function logMethod(req, res, next) {
//   console.log('Request Type:', req.method)
//   console.log(req);
//   next()
// }

// const logStuff = [logOriginalUrl, logMethod]

// app.get('/end', (req, res, next) => {

// res.download('./views/index.pug')
// res.end('User Info')
// res.end({ some: 'json' });
// res.status(200).end()

// })
// app.get('/send', (req, res, next) => {

// res.download('./views/index.pug')
// res.send()
// res.send('hello world - ')
// res.send({ some: 'json' });

// })
// app.get('/json', (req, res) => {
// res.json(null)
// res.json({name : "abc"})
// return res.status(200).json({message : 'ok'})
// res.redirect(301 , '..')
// res.jsonp({ user: 'tobi' })
// app.set('jsonp callback name', 'cb')
// res.status(500).jsonp({ error: 'message' })
// })
// app.get('/user', (req, res) => {
//   res.send('get data')
// })
// function func(data){
//   return 'iolpmip'
// }
// app.get('/jsonp' , (req,res) => {
// res.jsonp(null)
// res.jsonp({name : "abc"})
//   return res.status(200).jsonp(func({message : 'ok'}))
// })

// app.response.sendStatus = function (statusCode, type, message) {
//     return this.contentType(type).status(statusCode).send(message)
// }

// app.get('/:name', (req, res, next) => {
//   const fileName = req.params.name;
//   const options = {
//     root: path.join(__dirname)
//   };
//   console.log(options.root);
//   res.sendFile(fileName, options)
// })

// app.get('/:name' , (req,res , next) => {
//   const file = req.params.name;
//  const options = {root : path.join(__dirname)}
//   res.sendFile(file , options)
// })


// app.get('/' , (req,res , next) => {
//   // console.log(req.params.id);
//   // res.status(200).json({message : "error not occur" })
//   // throw new Error('BROKEN')
//   fs.readFile('./helloo.txt', (err , data) => {
//     if(err){
//       next(err)
//     }else{
//       res.send("ok")
//     }
//   })
// })

// app.get('/', [
//   function (req, res, next) {
//      fs.readFile('./helloo.txt', 'utf-8', (err, data) => {
//       res.locals.data = data
//       next(err)
//     })
//   },
//   function (req, res, next) {
//     console.log('message :>> ' ,res.locals.data);
//     res.send(res.locals.data)
//   }
// ])

// app.get('/', (req, res, next) => {
// setTimeout(() => {
//   try {
//     throw new Error('BROKEN')
//   } catch (err) {
//     next(err)
//   }
// }, 100)

// Promise.resolve('ok').then(() => {
//   throw new Error('BROKEN')
// }).catch(next)
// })

// function errorHandler (err, req, res, next) {
//   if (res.headersSent) {
//     return next(err)
//   }

//   res.status(500)
//   res.render('error', { error: err })
// }

// app.get('/' , errorHandler , (err , req,res,next) => {
//   console.error("err.stack",err.stack);
//   res.send('ok')
// })

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.use(methodOverride())
// function clientErrorHandler (err, req, res, next) {
//   if (req.xhr) {
//     res.status(500).send({ error: 'Something failed!' })
//   } else {
//     next(err)
//   }
// }

// morgan.token('host', (req, res) => {
//   return req.host;
// })


// app.use(morgan(' :host'));
// morgan.token('hostname', function(req, res) {
//   return req.hostname;
//   });
// console.log(morgan);
// app.use(morgan('short'))
// app.use(morgan(":method  :status  :res[content-length] - :response-time ms :hostname :date")); \

// morgan.token('id' , function getId(req){
//   return req.id
// }) 

// var loggerFormat = ':id [:date[web]] " :method :url" :status :response-time ';

// app.use(morgan(loggerFormat, {
//   skip: function (req, res) {
//       return res.statusCode < 400
//   },
//   stream: process.stderr
// }));

// app.use(morgan(loggerFormat, {
//   skip: function (req, res) {
//       return res.statusCode >= 400
//   },
//   stream: process.stdout
// }));

// app.get('/',(req, res) => {
//   res.send("<h1>Hello world!</h1>");
// })
// app.route('/api').get((req,res) => {
//   res.send("hello")
// }).post((req,res) => {
//   res.send("world")
// })
// app.param('namee', function (req, res, next, namee) {
//   console.log('CALLED ONLY ONCE', namee);
//   next();
// });

// app.get('/:namee', function (req, res, next) {
//   console.log('Greetings from geeksforgeeks');
//   next()
// });

// app.get('/:namee', function (req, res) {
//   console.log('Greetings from geeksforgeeks2');
// });

// app.listen(port, () => {
//   console.log(`app listening on port http://localhost:${port}`);
// })


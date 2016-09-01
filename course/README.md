# Course Notes

### Asynchronous Programming

### express

- A Fast, unopinionated, minimalist web framework for Node.js
- Provides a robust set of features
- Many third-party middleware to extend its functionality

note: `__filename` and `__dirname` give you the full path to the file and directory for the current module.

#### morgan middleware
for logging. [more details](https://yq.aliyun.com/articles/2983)

### REST(Representational State Transfer)
REST is a style of software architecture for distributed hypermedia systems such as the World Wide Web.

It is a general concept.

It is a collection network architecture principles which outline how resources are defined and addressed.

For basic design priciples:
- Use HTTP methods explicitly
- Be stateless
- Expose directory structure-like URIs
- Transfer using XML, JSON or both

Exploits the use of the HTTP protocol beyond HTTP POST and HTTP GET
- HTTP PUT, HTTP DELETE
- Preserve Idempotence

Corresponding to the CRUD operations
- HTTP GET <->READ
- HTTP PST <->CREATE
- HTTP PUT <-> UPDATE
- HTTP DELETE <-> DELETE

### Express Generator
It is a quick scaffolding tool to generate an Express application skeleton.

### MongoDB
NoSQL database has become popular to address some challenges encountered with SQL databases.

Four broad categories of NoSQL databases:
- Document databases (e.g., MongoDB)
- Key-value databases (e.g., Redis)
- Column-family databases (e.g., Cassandra)
- Graph databases (e.g., Neo4)

### Mongoose ODM
Why Mongoose?
- MongoDB stores data in the form of documents
- No structure imposed on the document
  - Any document can be stored in any collection
  - Relies on developer's discipline to maintain the structure of the documents

If you want to explicitly support structure for documents that are inserted in a collection, then the Mongoose ODM would be the ideal choice.

- Mongoose ODM
    - Object Data Model
    - Object Document Mapping
    - Object relational mapping (ORM)
- Adds structure to MongoDB documents through schema

#### Mongoose Schema

- Schema:
    - Structure of the data to be stored
    - Defines all the fields of your document and their types(can do validation)
    - Schema types: String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array
- Schema is used to create a Model function

### Build an end-to-end REST API based server

### Basic Authentication
- Method for HTTP user agent to provide username and password with a request
- Sever can challenge a client to authenticate iteself
- Client needs to send the username and password in response

### HTTP Cookies
- Small piece of data sent from a web server and stored on the client side (服务端发送的一小块数据，存储在客户端)
- Each subsequent request from the client side should include the cookie in the request header (每个后续的客户端请求都应该在请求头中包括该cookie)

Cookies 被设计为一种可靠的机制，用作网站来记住一些状态信息（例如在在线购物网站中物品被加入购物车）或者记录用户的浏览活动（包括点击特定的按钮，登录，或者记录打开过的网页）。Cookie 也可以被用来记录任意信息，如用户上次在表单中输入的姓名，地址，密码，信用卡帐号等。

### Express Sessions
- Used to track user sessions
    - Combination of cookie with session id and server-side storage of information indexed by session id
    - Session information:
        - Stored by default in-memory(wiped out when server restarts)(后两种是解决服务器重启session信息丢失的办法)
        - Stored in permanent store on server side
        - Distributed session store if using multiple replicated servers

express session 的练习中不知道为什么postman上会有两个cookie，一个名字是session-id, 另一个是user。

"Cookies were originally introduced to provide a way for users to record items they want to purchase as they navigate throughout a website(a virtual shopping cart or shopping basket)", 而现在，用户购物车中的内容通常都存储在服务器的数据库中，而不是在客户端的cookie中。（这也就是老师提到的scalability的问题，不用去考虑需要跟踪的物品太多导致cookie太大）。为了跟踪用户和购物车的对应关系，服务端给客户端发送一个带有**unique session identifier**的cookie。Because cookies are sent to the server every time the user visits a new page on the website, which lets the server know which shopping cart to display to the user.

### Token based authentication


为什么别人主动修改token，服务器端就通过签名知道呢？这应该是个和密码学相关的问题。关键在于signature应该是根据token的前两段数据算出来的。

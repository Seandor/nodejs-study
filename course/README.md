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



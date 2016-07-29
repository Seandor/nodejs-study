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
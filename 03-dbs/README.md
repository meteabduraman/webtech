## About databases

Databases are also important parts of applications in general, most applications have at least one. It serves as the storage point of data the applications works with.

> Only the backend should interact directly with the database, it should not be accessed directly by the frontend. The proper dynamic should be: the *frontend* calls an *endpoint* of a backend API which performs a *database operation*

Both **relational** and **non-relational** databases are usable with backend API apps. We will use a **relational** one in the labs.

### Connecting to a DB

Multiple ways to connect to a DB, you can also use one from the cloud, similar to Google Firestore, but what we'll do is use a local file to store our data.

We'll use the `sequelize` ORM to handle everything related to the database, including the connection:

```js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '<location of your .db file>'
});
```

> [More on `sequelize`...](https://sequelize.org/)

### Queries and ORMs

Although a standard SQL query could be performed by the backend API, this is discouraged for simple queries. For any *database interaction* in our lab, we should use an **ORM**.

> [More about when to use an ORM vs. raw SQL queries...](https://xtawfik.medium.com/sql-vs-orm-choosing-the-right-tool-for-the-job-e0bc8c6fbe62)

An *ORM* translates the database tables into Objects, making them OOP-like. E.g. a table of Students (containing columns `id`, `name` and `group`) would be translated to a `class Student` which has properties `id`, `name` and `group`. This class would also contain methods to e.g. `findAll`, `findByPk` (find by primary key), `create` and `delete` a Student entry.

At this point, the `Student` class can be called a **model**.

The model needs to first be defined (equivalent to creating a table):
```js
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
    // connection details
});

const Student = sequelize.define('Student', {
    id: { primaryKey: true, DataTypes.STRING },
    name: DataTypes.STRING,
    group: DataTypes.STRING,
});
```
First time you define your model, you will need to `sync` it to the database (basically this will run all of the `CREATE TABLE` SQL statements for you):

```js
// this should run after your models are defined, but on your connection object
await sequelize.sync({ alter: true });
```

Then database interactions can be performed via the model:
```js
// SELECT * FROM STUDENTS;
await Student.findAll();

// SELECT * FROM STUDENTS WHERE id='some-id';
await Student.findByPk('some-id');

// INSERT INTO STUDENTS VALUES ('some-other-id', 'Ticu', '1');
await Student.create({ id: 'some-other-id', name: 'Ticu', group: '1' });

// DELETE FROM STUDENTS WHERE id='some-id';
const studentToDelete = await Student.findByPk('some-id');
await studentToDelete.destroy();

// UPDATE STUDENTS SET name='Nu mai e Ticu' WHERE id='some-id';
const studentToChangeName = await Student.findByPk('some-id');
studentToChangeName.name = 'Nu mai e Ticu';
await studentToChangeName.save();
```

> Notice all database interactions are async and need to be awaited

> If your table changes (aka something you'd have used `ALTER TABLE` for, you'll need to `sync` your database to the new model again)

### In the lab

We created another backend API which connected to a local database (`database.db` file) and implemented a GET endpoint which returned a list of all the database entries (aka `SELECT * FROM <table>`);

Checkout the code in [`index.js`](./index.js);

What we did is:
1. We created a new directory where our project will live
2. We opened the directory in VS Code
3. We ran `npm init` in the directory from a terminal, this will enable us to install dependencies and do version management on our app; skip providing the details it asks for by pressing <kbd>Enter</kbd> until a `package.json` file appears in the directory
4. We ran `npm install express`, this is the library we will use to build backend APIs with JavaScript
5. We ran `npm install sequelize sqlite3`, these are 2 dependencies which will allow us to connect to the database
6. We created a file called `database.db` in our directory to serve as a place to store/persist the data

After finishing the endpoints, we ran the app using `node index.js` in a terminal;


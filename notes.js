// ===============================================
// PostgreSQL - CREATE Database
// https://www.tutorialspoint.com/postgresql/postgresql_create_database.htm

createdb -h localhost -p 3000 -U yoshi testdb
password ****

\list or \l   (list all databases)
\dt           (list all tables in the current database)
\connect      (to switch databases)

\d            (show table)
\d tb_name    (show table with name 'tb_name')

SELECT * from tb_name (show table)

// ===============================================
// Node Hero - Node.js Database Tutorial
// postgres://YourUserName:YourPassword@localhost



// ===============================================
// How To Create, Remove, & Manage Tables in PostgreSQL on a Cloud Server
// https://www.digitalocean.com/community/tutorials/how-to-create-remove-manage-tables-in-postgresql-on-a-cloud-server

// How to Create a Table in PostgreSQL
CREATE TABLE user (
  user_id serial PRIMARY KEY,
  type varchar (50) NOT NULL,
  color varchar (25) NOT NULL,
  location varchar(25) check (location in ('north', 'south', 'west', 'east', 'northeast', 'southeast', 'southwest', 'northwest')),
  install_date date
  );


// NOTICE:  CREATE TABLE will create implicit sequence "pg_equipment_equip_id_seq" for serial column "pg_equipment.equip_id"
// NOTICE:  CREATE TABLE / PRIMARY KEY will create implicit index "pg_equipment_pkey" for table "pg_equipment"
// CREATE TABLE


// Deleting Tables in PostgreSQL
DROP TABLE playground_equip;
DROP TABLE IF EXISTS playground_equip;
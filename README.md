# ORM
- ORM stands for Object-Relational Mapping 
- A programming technique used in software development to convert data between incompatible type systems in object-oriented programming languages. 
- This technique creates a 'virtual object database' that can be used from within the programming language.
- ORMs are used to abstract the complexities of the underlying database into simpler, more easily managed objects within the code


### in short ORMS definition 
ORMs let you easily interact with your database without worrying too much about the underlying syntax (SQL language for)"

# How to add prisma in your project?

- create a new node project npm init -y
- Add prisma to your project npm install prisma typescript tsx @types/node --save-dev
- Optional if you want to add typescript to your project tsc --init
- add prisma to your project npx prisma
- intialize prisma project npx prisma init

# How do you create schemas
- Frist intialize your db url in .env file
- now in schema.prisma add your models

```prisma
model User {
  id Int @id @default(autoincrement())
  username String
  password String
  firstName String?
  lastName String?
}
```

# how to create migrations 
npx prisma migrate dev --name Initialize the schema


# how to generate Client/ Autogenrated Client
npx prisma generate
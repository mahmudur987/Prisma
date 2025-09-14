# hello-prisma

````markdown
# 🧠 Prisma ORM Notes for Dental Platform

This guide documents everything you need to know to get started with [Prisma ORM](https://www.prisma.io/) in a Node.js/TypeScript backend—ideal for powering a React-based platform for dentists.

---

## 📦 Project Initialization

### 1. Create Project & Install Dependencies

```bash
mkdir prisma-dental-app
cd prisma-dental-app
npm init -y
npm install prisma @prisma/client
```
````

For TypeScript:

```bash
npm install --save-dev typescript ts-node @types/node
npx tsc --init
```

### 2. Initialize Prisma

```bash
npx prisma init
```

This creates:

- `prisma/schema.prisma`
- `.env` for your database URL

### 3. Configure Database

In `.env`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/dentaldb"
```

### 4. Define Schema

```prisma
model Dentist {
  id        Int    @id @default(autoincrement())
  name      String
  specialty String
  email     String @unique
}
```

### 5. Run Migration

```bash
npx prisma migrate dev --name init
```

---

## 🧪 Inserting Data

### Single Record

```ts
await prisma.dentist.create({
  data: {
    name: "Dr. Ayesha",
    specialty: "Orthodontics",
    email: "ayesha@smileclinic.com",
  },
});
```

### Multiple Records

```ts
await prisma.dentist.createMany({
  data: [
    { name: "Dr. Karim", specialty: "Endodontics", email: "karim@clinic.com" },
    {
      name: "Dr. Nabila",
      specialty: "Pediatric Dentistry",
      email: "nabila@clinic.com",
    },
  ],
});
```

---

## 🔍 Finding Data

### Find by ID

```ts
await prisma.dentist.findUnique({
  where: { id: 1 },
});
```

### Find All

```ts
await prisma.dentist.findMany();
```

### Filter by Specialty

```ts
await prisma.dentist.findMany({
  where: { specialty: "Orthodontics" },
});
```

---

## ✏️ Updating Data

### Update by ID

```ts
await prisma.dentist.update({
  where: { id: 1 },
  data: {
    specialty: "Cosmetic Dentistry",
    email: "ayesha@cosmeticclinic.com",
  },
});
```

### Update Many

```ts
await prisma.dentist.updateMany({
  where: { specialty: "Orthodontics" },
  data: { specialty: "Advanced Orthodontics" },
});
```

---

## 🗑️ Deleting Data

### Delete by ID

```ts
await prisma.dentist.delete({
  where: { id: 1 },
});
```

### Delete Many

```ts
await prisma.dentist.deleteMany({
  where: { specialty: "Orthodontics" },
});
```

### Soft Delete (Recommended)

Update schema:

```prisma
model Dentist {
  id        Int     @id @default(autoincrement())
  name      String
  specialty String
  email     String  @unique
  deleted   Boolean @default(false)
}
```

Mark as deleted:

```ts
await prisma.dentist.update({
  where: { id: 1 },
  data: { deleted: true },
});
```

---

## 🔢 Sorting & Organizing

### Sort by Name

```ts
await prisma.dentist.findMany({
  orderBy: { name: "asc" },
});
```

### Sort by Multiple Fields

```ts
await prisma.dentist.findMany({
  orderBy: [{ specialty: "asc" }, { name: "desc" }],
});
```

### Pagination

```ts
await prisma.dentist.findMany({
  skip: 0,
  take: 10,
  orderBy: { name: "asc" },
});
```

---

## 🔍 Searching Data

### Basic Search

```ts
await prisma.dentist.findMany({
  where: {
    name: {
      contains: "Reza",
      mode: "insensitive",
    },
  },
});
```

### Full-Text Search (PostgreSQL)

Enable preview feature:

```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["fullTextSearchPostgres"]
}
```

Search query:

```ts
await prisma.post.findMany({
  where: {
    body: {
      search: "implant | orthodontics",
    },
  },
});
```

---

## 🧠 Tips

- Use Prisma Studio: `npx prisma studio` to visually inspect your data.
- Use `$transaction` for atomic operations.
- Prefer soft deletes for auditability.
- Combine `where`, `orderBy`, `skip`, and `take` for powerful queries.

---

## 📚 Resources

- [Prisma Docs](https://www.prisma.io/docs)
- [Prisma GitHub](https://github.com/prisma/prisma)
- [Full-Text Search Guide](https://www.prisma.io/docs/orm/prisma-client/full-text-search)

---

Happy coding! 🦷💻

```

---

Let me know if you'd like to add sections for deployment, API integration, or seeding strategies. I can help you tailor this even further for your GitHub repo.
```

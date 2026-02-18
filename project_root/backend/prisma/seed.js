// backend/prisma/seed.js

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const users = [
  {
    name: 'Regular User',
    email: 'user@example.com',
    role: 'user',
    password: 'user123',
  },
  {
    name: 'Cashier User',
    email: 'cashier@example.com',
    role: 'cashier',
    password: 'cashier123',
  },
  {
    name: 'Manager User',
    email: 'manager@example.com',
    role: 'manager',
    password: 'manager123',
  },
  {
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    password: 'admin123',
  },
];

async function seedUsers() {
  for (const u of users) {
    const existing = await prisma.user.findUnique({
      where: { email: u.email },
    });

    if (existing) {
      console.log(`User already exists: ${u.email}`);
      continue;
    }

    const hashedPassword = await bcrypt.hash(u.password, 10);

    const user = await prisma.user.create({
      data: {
        name: u.name,
        email: u.email,
        role: u.role,
        password: hashedPassword,
        isActive: true,
      },
    });

    console.log(`Created ${u.role}: ${user.email}`);
  }
}

seedUsers()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });

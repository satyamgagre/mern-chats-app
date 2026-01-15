import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  
  {
    email: "aarti.sharma@example.com",
    fullName: "Aarti Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    email: "priya.patel@example.com",
    fullName: "Priya Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    email: "neha.verma@example.com",
    fullName: "Neha Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    email: "anjali.singh@example.com",
    fullName: "Anjali Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    email: "kavya.iyer@example.com",
    fullName: "Kavya Iyer",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    email: "pooja.mehta@example.com",
    fullName: "Pooja Mehta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    email: "shruti.nair@example.com",
    fullName: "Shruti Nair",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    email: "riya.chatterjee@example.com",
    fullName: "Riya Chatterjee",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/17.jpg",
  },

  {
    email: "rahul.sharma@example.com",
    fullName: "Rahul Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    email: "amit.patel@example.com",
    fullName: "Amit Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    email: "rohit.verma@example.com",
    fullName: "Rohit Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    email: "vikas.singh@example.com",
    fullName: "Vikas Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    email: "arjun.malhotra@example.com",
    fullName: "Arjun Malhotra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    email: "suresh.reddy@example.com",
    fullName: "Suresh Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    email: "manish.kapoor@example.com",
    fullName: "Manish Kapoor",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/16.jpg",
  },
];


const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
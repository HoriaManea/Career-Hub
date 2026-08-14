# 💼 Career-Hub

> A modern job board built with React 19, TanStack Query, Redux Toolkit, Tailwind CSS, shadcn/ui, and Supabase.

**Career-Hub** is a modern job board designed to connect job seekers with companies through a clean, responsive, and intuitive platform.

The project focuses on building a realistic, production-oriented React application while exploring modern state management, server-state management, authentication, database integration, and reusable UI architecture.

---

## ✨ Features

Career-Hub is being built to provide a complete job-search experience:

* 🔎 Search and discover job opportunities
* 🎯 Filter and browse available jobs
* 👤 User profiles
* 📄 Job applications
* 💼 Job posting and management
* 🏢 Company profiles
* 🔐 Authentication
* 📊 Application management
* 📱 Responsive interface

> 🚧 Features are being implemented progressively as the project develops.

---

## 🛠️ Tech Stack

### Frontend

* ⚛️ **React 19** — UI development
* 🔄 **TanStack Query** — server-state management, caching and data fetching
* 🗃️ **Redux Toolkit** — client-side state management
* 🎨 **Tailwind CSS** — styling
* 🧩 **shadcn/ui** — reusable and accessible UI components

### Backend & Database

* ⚡ **Supabase** — backend platform
* 🐘 **PostgreSQL** — relational database
* 🔐 **Supabase Auth** — authentication
* 🔌 **Supabase API** — database and backend communication

---

## 🏗️ Architecture

Career-Hub separates **server state** from **client state** to keep the application predictable and maintainable.

```text
                    Career-Hub
                        │
            ┌───────────┴───────────┐
            │                       │
       React 19                UI Layer
            │
      ┌─────┴─────┐
      │           │
 Redux Toolkit  TanStack Query
      │           │
 Client State  Server State
                  │
                  ▼
               Supabase
                  │
                  ▼
             PostgreSQL
```

---

## 🎯 Goals

The main goals of Career-Hub are to:

* Build a realistic job-board application
* Practice modern React 19 development
* Understand client-state and server-state management
* Work with Supabase and PostgreSQL
* Implement authentication and user management
* Build reusable and accessible components
* Create a responsive UI
* Maintain a clean and scalable architecture
* Follow production-oriented development practices

---

## 🗺️ Roadmap

* [ ] Project setup
* [ ] UI foundation
* [ ] Supabase integration
* [ ] Authentication
* [ ] User profiles
* [ ] Job listings
* [ ] Job search
* [ ] Job filtering
* [ ] Job details
* [ ] Job applications
* [ ] Company profiles
* [ ] Employer dashboard
* [ ] Application management
* [ ] Responsive design
* [ ] Testing
* [ ] Production deployment

---

## 📸 Screenshots

Screenshots will be added as the application develops.

---

## 🚧 Status

**In development**

Career-Hub is currently under active development. Features, architecture, and implementation details may evolve as the project grows.

---

## 💻 Built With

**React 19 · TanStack Query · Redux Toolkit · Tailwind CSS · shadcn/ui · Supabase · PostgreSQL**

---


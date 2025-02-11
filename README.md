# TeamTrackr

![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-6.0.5-orange)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4)

A modern and efficient **team and task management system** built with React, Vite, and Tailwind CSS. TeamTrackr allows **admins** to manage team members, assign tasks, and track progress, while **team members** can view their assigned tasks and update their status.

---

## Features

- **Admin Dashboard**:
  - Assign tasks to team members.
  - View all tasks and their statuses.
- **Team Member Dashboard**:
  - View assigned tasks.
  - Update task status (e.g., "Active", "Completed", etc).
- **Task Management**:
  - Admins can assign tasks to specific team members.
  - Team members can update task statuses.
- **Persistent Data**:
  - Uses **localStorage** to persist team member and task data.
- **State Management**:
  - Built with **React Context API** for efficient state management.
- **Modern UI**:
  - Designed with **Tailwind CSS** for a clean and responsive interface.
- **Fast Development**:
  - Powered by **Vite** for lightning-fast builds and hot module replacement (HMR).

---

## Technologies Used

- **Frontend**: React
- **State Management**: React Context API
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Build Tool**: Vite
- **Data Persistence**: localStorage
- **Linting**: ESLint

---

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/TeamTrackr.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd TeamTrackr
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the app.

---

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run lint`: Runs ESLint to check for code issues.
- `npm run preview`: Previews the production build locally.

---

## Usage

### Admin Dashboard
- **Assign Tasks**: Admins can assign tasks to specific team members with a title, description, and deadline.
- **View Tasks**: Admins can see all tasks and their current statuses.

### Team Member Dashboard
- **View Assigned Tasks**: Team members can see tasks assigned to them.
- **Update Task Status**: Team members can update the status of their tasks (e.g., "Failed", "Active", "Completed").

---

## Data Persistence

The application uses **localStorage** to persist team member and task data. This ensures that data is retained even after the browser is refreshed or closed.

---

## State Management

The **React Context API** is used to manage global state, such as team member and task data, across the application. This provides a clean and efficient way to share state between components.

---

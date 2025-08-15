# Clinic Management Dashboard

This is a comprehensive, role-based clinic management dashboard built from scratch using React, Vite, and modern CSS. The application provides tailored views for different clinic staff members, ensuring they have the right information at the right time.

## Features

-   **Role-Based Dashboards:** Four distinct dashboards for Admins, Receptionists, Doctors, and Nurses.
-   **Interactive UI:** Rich, interactive components including charts, tables, modals, and search functionality.
-   **Dark Mode:** A toggleable dark mode for user comfort.
-   **Responsive Design:** The layout is designed to work across various devices.

### Admin Dashboard
-   High-level overview of clinic performance.
-   Metrics for revenue, sales, patient acquisition, and staff utilization.
-   Charts for visualizing trends.
-   Identification of operational bottlenecks.

### Receptionist Dashboard
-   Tools for managing daily patient flow.
-   Interactive appointment schedule with a details viewer.
-   Waitlist and emergency management.
-   On-the-spot appointment booking form.

### Doctor Dashboard
-   A physician-centric view for managing patient consultations.
-   A daily patient queue with reasons for visit.
-   One-click access to detailed patient medical histories.
-   An alert system for emergencies and new lab reports.

### Nurse Dashboard
-   A workflow-oriented interface for nurses.
-   Tools for patient triage and vitals tracking.
-   A schedule for medications due.
-   An overview of room and bed availability.

## Tech Stack

-   **Framework:** React 19
-   **Build Tool:** Vite
-   **Routing:** React Router
-   **Charting:** Recharts
-   **Icons:** React Icons
-   **Styling:** Plain CSS with CSS Variables for theming.

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository.**
2.  **Navigate to the `clinic-dashboard` directory:**
    ```sh
    cd clinic-dashboard
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
4.  **Start the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

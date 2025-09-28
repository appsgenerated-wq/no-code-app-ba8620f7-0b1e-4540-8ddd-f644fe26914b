# FoodFleet - A Manifest-powered Food App

This is a complete food discovery and ordering application built with React and powered exclusively by Manifest. It provides a seamless experience for users to browse restaurants, view menus, and for owners to manage their establishments.

## Features

- **User Authentication**: Secure sign-up and login for customers and restaurant owners.
- **Restaurant Listings**: Publicly browse all available restaurants.
- **Restaurant Management**: Authenticated users can create and manage their own restaurants (update/delete operations available via the Admin Panel).
- **Menu Management**: Owners can add and update menu items for their restaurants through the Admin Panel.
- **Order System**: Customers can place orders (future implementation).
- **Role-Based Access**: Clear separation of permissions between customers, owners, and admins.
- **Automatic Admin Panel**: A built-in admin interface for managing all data, users, and files.

## Getting Started

### 1. Prerequisites

- Node.js and npm
- A Manifest account and a running backend instance.

### 2. Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment:**
    The application is configured to connect to your Manifest backend automatically. The backend URL is populated in `src/constants.js` during deployment.

4.  **Run the application:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

### 3. Accessing the Admin Panel

The Manifest backend provides a powerful, auto-generated admin panel.

- **URL**: `${config.BACKEND_URL}/admin`
- **Admin Login**: `admin@manifest.build`
- **Admin Password**: `admin`

From the admin panel, you can:
- Manage `Users`, `Restaurants`, `MenuItems`, and `Orders`.
- Manually create data and test relationships.
- Upload images for restaurants and menu items.
- Manage user roles and permissions.

### 4. Demo User

To quickly test the application from a customer's perspective, use the 'Try Demo' button on the landing page.

- **Demo Login**: `customer@manifest.build`
- **Demo Password**: `password`

# TodoSphere

## Introduction
TodoSphere is a modern task management application that helps users keep track of their tasks efficiently. It features dynamic animations, persistent storage, and categorized task views.

## Features
- Animated title and description for a smooth UI experience.
- Add, update, toggle, and delete todos.
- Persistent data storage using localStorage.
- Filtered views for pending and completed tasks.
- Context API for state management.
- Responsive design with Tailwind CSS.

## Installation

### Prerequisites
Ensure you have Node.js and npm installed on your system.

### Steps to Install and Run
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

## File Structure

```
/src
│── App.js               # Main application file
│── contexts/TodoContext # Context API for managing todo state
│── components/          # Component folder containing Layout, AllTodo, PendingTodo, and CompleteTodo
│── styles/App.css       # Application styling
│── index.js             # Entry point of the application
```

## Usage
- Add a new todo item.
- Mark an item as completed.
- Edit or delete todos.
- Navigate between different todo views.

## Technologies Used
- React
- React Router
- Context API
- Tailwind CSS

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add a new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, please contact [Your Name] at [your-email@example.com].


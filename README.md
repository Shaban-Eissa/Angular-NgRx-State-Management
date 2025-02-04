# Angular NgRx State Management

This is a demo project showcasing the use of **NgRx** for state management in **Angular**. The project demonstrates the flow of actions, reducers, effects, and selectors with a real-world application, focusing on CRUD operations.

## Features

- **CRUD operations** (Create, Read, Update, Delete) for posts
- **NgRx state management** for handling actions, reducers, and effects
- Integration with a **JSON server** backend for storing and fetching posts
- **Reactive UI** using Angular with Tailwind CSS for styling

## Tech Stack

- **Angular**: Frontend framework
- **NgRx**: State management library for Angular
- **JSON Server**: Fake REST API for backend operations
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Node.js & npm**: JavaScript runtime and package manager

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Shaban-Eissa/Angular-NgRx-State-Management.git
   cd Angular-NgRx-State-Management
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   ng serve
   ```

4. Start the JSON server:
   ```bash
   json-server --watch db.json --port 3000
   ```

5. The Angular app will be running at http://localhost:4200, and the JSON Server will be running at http://localhost:3000.

## Usage
1. Create Post: Add a new post by filling in the title and body fields, then clicking "Create Post".
2. Edit Post: Click on "Edit" to modify a post.
3. Delete Post: Click on "Delete" to remove a post from the list.

## Project Structure
1. src/app: Contains the Angular app's components, services, and state management files
2. actions: Define actions to dispatch in the app
3. effects: Handle side effects like API calls
4. reducers: Manage state updates based on actions
5. selectors: Extract pieces of the state to pass to the components
6. models: Define the data structure (e.g., Post model)
7. components: Contains UI components like PostListComponent

## Contributing
1. Fork the repository
2. Create a new branch (git checkout -b feature-name)
3. Commit your changes (git commit -am 'Add new feature')
4. Push to the branch (git push origin feature-name)
5. Create a new Pull Request

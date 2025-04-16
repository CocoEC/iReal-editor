# iReal-editor
A web viewer/editor for iRealPro chord charts.

> [!NOTE]
> It does not work yet.

This project is a web application built using ASP.NET for the backend and React for the frontend. Below are the instructions for setting up and running the project.

## Getting Started

### Prerequisites

- .NET SDK (version 5.0 or later)
- Node.js (version 14 or later)
- npm (Node package manager)

### Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   ```

2. **Install the backend dependencies:**
   Navigate to the project directory and run:
   ```
   dotnet restore
   ```

3. **Install the frontend dependencies:**
   Navigate to the `ClientApp` directory and run:
   ```
   npm install
   ```

4. **Run the ASP.NET application:**
   From the root project directory, run:
   ```
   dotnet run
   ```

5. **Run the React application:**
   In a new terminal, navigate to the `ClientApp` directory and run:
   ```
   npm start
   ```

### Usage

- The ASP.NET backend will be available at ~~`http://localhost:5000`~~ (or the port specified in `Properties/launchSettings.json`).
- The React frontend will be available at `http://localhost:3000`.

### Cleaning up

To remove all compiled files:

In the root directory:
```bash
rm -rf ClientApp/build
dotnet clean
```

To remove installed frontend dependencies:
```bash
rm -rf ClientApp/node_modules
```

## Roadmap

- [ ] Implement a placeholder song editor
- [ ] Implement a way to open iRealPro HTML files
- [ ] Implement a way to export iRealPro HTML files

> [!Note]
> This project is not affiliated or related to iRealPro.

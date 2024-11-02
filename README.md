
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CleverCoin</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <h1>CleverCoin 💰</h1>
        <p>CleverCoin is a dynamic web application designed to simplify expense tracking for individuals and organizations.</p>
    </header>

    <section id="features">
        <h2>🌟 Features</h2>
        <ul>
            <li><strong>User Authentication:</strong> Secure sign-up and login with role-based access control.</li>
            <li><strong>Expense Management:</strong> Create, update, and delete expenses and categories, complete with receipt uploads.</li>
            <li><strong>Dashboard Insights:</strong> Visual representations of your spending patterns with pie charts and bar graphs.</li>
            <li><strong>Custom Reports:</strong> Generate reports based on date ranges and categories for in-depth analysis.</li>
        </ul>
    </section>

    <section id="objectives">
        <h2>🎯 Objectives</h2>
        <ol>
            <li>Make expense tracking effortless and enjoyable.</li>
            <li>Provide insights to help users manage their finances effectively.</li>
            <li>Facilitate easy expense entry and categorization.</li>
            <li>Empower users with detailed reports for informed decision-making.</li>
        </ol>
    </section>

    <section id="tech-stack">
        <h2>🛠️ Tech Stack</h2>
        <ul>
            <li><strong>Client:</strong> React, Redux, react-bootstrap, Material Icons, tsparticles</li>
            <li><strong>Server:</strong> Node.js, Express.js</li>
            <li><strong>Database:</strong> MongoDB</li>
        </ul>
    </section>

    <section id="getting-started">
        <h2>🚀 Getting Started</h2>
        <h3>Run Locally</h3>
        <ol>
            <li>Clone the project:
                <pre>
                <code>
                git clone https://github.com/yourusername/CleverCoin
                cd CleverCoin
                </code>
                </pre>
            </li>
            <li>Install dependencies for frontend:
                <pre>
                <code>
                cd frontend
                npm install
                </code>
                </pre>
            </li>
            <li>Install dependencies for backend:
                <pre>
                <code>
                cd backend
                npm install
                </code>
                </pre>
            </li>
            <li>Start the servers:
                <ul>
                    <li>Frontend:
                        <pre>
                        <code>
                        npm start
                        </code>
                        </pre>
                    </li>
                    <li>Backend:
                        <pre>
                        <code>
                        npm run dev
                        </code>
                        </pre>
                    </li>
                </ul>
            </li>
        </ol>
        <h3>Environment Variables</h3>
        <p>Create a <code>.env</code> file in the backend directory and add:</p>
        <pre>
        <code>
        MONGO_URL=Your MongoDB Connection String
        PORT=Your Port Number
        </code>
        </pre>
    </section>

    <section id="live-demo">
        <h2>🌐 Live Demo</h2>
        <ul>
            <li><a href="https://main.d1sj7cd70hlter.amplifyapp.com/" target="_blank">CleverCoin Live Website</a></li>
            <li><a href="https://expense-tracker-app-three-beryl.vercel.app/" target="_blank">Vercel Link</a></li>
        </ul>
    </section>

    <section id="screenshots">
        <h2>📷 Screenshots</h2>
        <img src="path/to/dashboard_screenshot.png" alt="Dashboard Screenshot" />
        <img src="path/to/expense_entry_screenshot.png" alt="Expense Entry Screenshot" />
    </section>

    <footer>
        <p>&copy; 2024 CleverCoin. All rights reserved.</p>
    </footer>
</body>
</html>

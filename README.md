# Soluciona+

## Overview

Soluciona+ is a **ticket management system** designed to connect users who need help with those who can provide assistance. It allows users to create support tickets, categorize issues, and collaborate with others to find solutions efficiently.

## Features

- 📝 **Ticket Creation:** Users can submit tickets requesting assistance.
- 📂 **Categorization:** Tickets can be organized by topic or priority.
- 💬 **Collaborative Support:** Other users can respond and help resolve issues.
- ✉️ **Email Notifications:** Users receive notifications in their emails
- 📊 **Dashboard:** Overview of open, pending, and resolved tickets.

## Technologies Used

- **Frontend:** React + Vite + Shadcn/ui
- **Backend:** Fastify
- **Database:** PostgreSQL + Prisma
- **Authentication:** JWT-based authentication
- **SMTP:** Nodemailer

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/viniciusbavosa/SolucionaPlus.git

   <!--  To initialize the frontend server-->
      cd frontend
      pnpm install
      pnpm run dev

   <!--  To initialize the backend server-->
      cd backend
      pnpm install
      pnpm run server

   <!--  To visualize prisma database-->
      cd backend
      pnpm run prisma
   ```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

MIT License

Copyright (c) 2025 Tale Elements

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

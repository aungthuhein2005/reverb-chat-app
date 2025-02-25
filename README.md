# Reverb Chat App

## 🚀 Features
- Real-time chat using Laravel Reverb
- User authentication and authorization
- React-based responsive frontend
- Broadcasting events for instant message delivery
- Message history and notifications
- Scalable architecture for handling multiple users
## 🛠️ Technology Stack
### ⚙️ Backend (Laravel + Reverb)
- Laravel Framework
- Laravel Reverb (WebSocket Broadcasting)
- Laravel Sanctum (Authentication)
- MySQL (Database)
### 💻 Frontend (React)
- React.js
- Axios (API requests)
- Tailwind CSS & Shadcn UI (Styling)
- WebSocket Client (Real-time communication)
### 📂 Project Structure

.
/reverb-chat-app
├── /frontend       # React App for UI
│   ├── public/
│   ├── src/
│   ├── package.json
│
├── /backend        # Laravel Backend
│   ├── app/
│   ├── routes/
│   ├── config/
│   ├── composer.json
│
├── .gitignore
├── README.md
└── docker-compose.yml  # (Optional for Docker setup)


## ⚙️ Installation Guide
### 🔗 Clone the Repository
```bash
git clone https://github.com/aungthuhein2005/reverb-chat-app.git
cd reverb-chat-app
```
### 🔧 Backend Setup (Laravel with Reverb)
1. Navigate to the Backend Directory:
```bash
cd backend
```
2. Install Dependencies:
```bash
composer install
```
3. Set Up Environment Configuration:
```bash
cp .env.example .env
php artisan key:generate
```
4. Configure Database and Broadcasting in `.env`:

```
BROADCAST_DRIVER=reverb
REVERB_APP_ID=your-app-id
REVERB_APP_KEY=your-app-key
REVERB_APP_SECRET=your-app-secret
REVERB_HOST=127.0.0.1
REVERB_PORT=6001
```
5. Run Migrations:
```bash
php artisan migrate
```
6. Install and Start Laravel Reverb:
```bash
php artisan reverb:start
```
7. Serve the Laravel Backend:
```bash
php artisan serve
```
### 🌐 Frontend Setup (React)
1. Navigate to the Frontend Directory:
```bash
cd ../frontend
```
2. Install Dependencies:
```bash
npm install
```
3. Configure Broadcasting in Frontend:
```
REACT_APP_REVERB_HOST=127.0.0.1
REACT_APP_REVERB_PORT=6001
REACT_APP_REVERB_KEY=your-app-key
```
4. Start the React Development Server:
```bash
npm start
```
---
## ✅ Usage
1. Run Backend (Laravel):
```bash
php artisan serve
```
2. Start Broadcasting Server:
```bash
php artisan reverb:start
```
3. Run Frontend (React):
```bash
npm start
```
4. Register and log in to start chatting in real-time.
## 📜 License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
## 🙌 Acknowledgements
- [Laravel](https://laravel.com/)
- [Laravel Reverb](https://laravel.com/docs/11.x/broadcasting#reverb-driver)
- [React](https://reactjs.org/)

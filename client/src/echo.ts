import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

const token = localStorage.getItem("token");
const echo = new Echo({
    broadcaster: "reverb",
        key: "wm5w9dcfa4nn9db3goyg",
        wsHost: "localhost",
        wsPort: 8080,
        forceTLS: false,
        encrypted: false,
        enabledTransports: ["ws", "wss"],
        authEndpoint: "http://127.0.0.1:8000/broadcasting/auth",
        auth: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
})

export default echo;
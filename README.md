Perfect 👍 **Fetching users from an API** is *the* best beginner React project.
---

## 🎯 What we’ll build (Beginner Project)

👉 A page that:

* Fetches users from an API
* Shows **Name, Email**
* Uses **useEffect + useState**
* No fancy CSS

API we’ll use (free & easy):
👉 `https://jsonplaceholder.typicode.com/users`

---

## 🧠 Concepts you’ll learn

* `useState` → store users
* `useEffect` → call API
* `fetch()` → get data
* `map()` → show list

---


## 🧠 Understand Slowly (Important)

### 1️⃣ State

```js
const [users, setUsers] = useState([]);
```

👉 Stores users from API

---

### 2️⃣ useEffect

```js
useEffect(() => { ... }, []);
```

👉 Runs **once** when page loads

---

### 3️⃣ fetch

```js
fetch(URL)
  .then(res => res.json())
  .then(data => setUsers(data));
```

👉 Get → convert → store

---

### 4️⃣ map

```js
users.map(user => ...)
```

👉 Loop over users array

---

## 🔌 Step 3: Use Component in `App.jsx`

```jsx
import Users from "./Nodes/Users";

function App() {
  return (
    <div>
      <h1>Fetch Users API</h1>
      <Users />
    </div>
  );
}

export default App;
```

---

## ✅ Output You’ll See

```
Fetch Users API

Users List
Name: Leanne Graham
Email: Sincere@april.biz
----------------------
...
```

---

## 🚨 Common Beginner Mistakes (Avoid these)

❌ Forget `[]` in useEffect → infinite loop
❌ Forget `key` in map
❌ Try to `map` before data arrives

---


You’re doing great 💪 Keep going!


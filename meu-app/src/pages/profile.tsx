import { useState } from "react"

export default function Profile() {

  const [user, setUser] = useState({
    name: "João",
    email: "joao@email.com"
  })

  const handleChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>

      <h1>Perfil</h1>

      <input
        name="name"
        value={user.name}
        onChange={handleChange}
      />

      <input
        name="email"
        value={user.email}
        onChange={handleChange}
      />

    </div>
  )
}
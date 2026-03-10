import { useState } from "react"

type Props = {
  user: {
    name: string
    email: string
  }
}

export default function UserProfile({ user }: Props) {

  const [data, setData] = useState(user)

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>

      <h2>Perfil</h2>

      <label>Nome</label>
      <input
        name="name"
        value={data.name}
        onChange={handleChange}
      />

      <label>Email</label>
      <input
        name="email"
        value={data.email}
        onChange={handleChange}
      />

    </div>
  )
}
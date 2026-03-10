import { useRouter } from "next/router"
import { useState } from "react"

export default function Login() {

  const router = useRouter()
  const [name, setName] = useState("")

  function handleLogin() {

    localStorage.setItem("user", name)

    router.push("/")
  }

  return (
    <div style={{ padding: 40 }}>

      <h1>Login</h1>

      <input
        placeholder="nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Entrar
      </button>

    </div>
  )
}
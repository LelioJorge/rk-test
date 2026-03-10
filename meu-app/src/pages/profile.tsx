import { useState } from "react"
import { useRouter } from "next/router"

export default function Profile() {

  const router = useRouter()

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  function handleLogin(e: any) {
    e.preventDefault()

    const validName = "admin"
    const validPassword = "1234"

    if (name === validName && password === validPassword) {

      localStorage.setItem("user", JSON.stringify({ name }))

      const redirectItem = localStorage.getItem("redirectItem")

      if (redirectItem) {
        localStorage.removeItem("redirectItem")
        router.push(`/item/${redirectItem}`)
      } else {
        router.push("/")
      }

    } else {
      setError("Nome ou senha inválidos")
    }
  }

  return (

    <div style={{ padding: 20 }}>

      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button type="submit">
          Entrar
        </button>

      </form>

      {error && <p>{error}</p>}

    </div>
  )
}
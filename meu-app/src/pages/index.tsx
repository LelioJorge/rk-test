import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { GetStaticProps } from "next"
import { Item } from "../features/items/types"
import { items } from "../features/items/data"
import ItemCard from "../features/items/ItemCard"
import styles from "../styles/Home.module.css"

type Props = {
  items: Item[]
}

export default function Home({ items }: Props) {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const user = localStorage.getItem("user")

    if (!user) {
      router.push("/login")
    } else {
      setIsLoading(false)
    }

  }, [])

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <div className={styles.container}>

      <h1>Produtos</h1>

      <div className={styles.grid}>
        {items.map((item) => (
          <ItemCard key={item.slug} item={item} />
        ))}
      </div>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      items
    }
  }
}
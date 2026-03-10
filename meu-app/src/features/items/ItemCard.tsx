import { Item } from "./types"
import { useRouter } from "next/router"
import styles from "../../styles/Home.module.css"

export default function ItemCard({ item }: { item: Item }) {

  const router = useRouter()

  function handleClick() {
    router.push(`/item/${item.slug}`)
  }

  const fruitColor = styles[item.slug]

  return (
    <div
      className={`${styles.card} ${fruitColor}`}
      onClick={handleClick}
    >

      <div style={{ fontSize: "40px" }}>
        {item.image}
      </div>

      <h2>{item.title}</h2>

      <p>{item.description}</p>

    </div>
  )
}
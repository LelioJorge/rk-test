import Link from "next/link"
import { Item } from "./types"

export default function ItemCard({ item }: { item: Item }) {
  return (
    <div>
      <img src={item.image} alt={item.title} width="200" />

      <h2>{item.title}</h2>

      <p>{item.description}</p>

      <Link href={`/items/${item.slug}`}>
        Ver detalhes
      </Link>
    </div>
  )
}
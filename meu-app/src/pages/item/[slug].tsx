import { GetServerSideProps } from "next"
import { items } from "../../features/items/data"
import { Item } from "../../features/items/types"

type Props = {
  item: Item
}

export default function ItemDetail({ item }: Props) {
  return (
    <div>
      <h1>{item.title}</h1>

      <img src={item.image} width="400" />

      <p>{item.details}</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  const item = items.find(
    (i) => i.slug === params?.slug
  )

  return {
    props: {
      item
    }
  }
}
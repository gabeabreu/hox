type Props = {
  text: string
}

export default function Filter({text}: Props) {
  return <p className="button">{text}</p>;
}

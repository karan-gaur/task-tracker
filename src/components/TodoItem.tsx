interface TodoItemProps {
    item: string
    index: number
}

export default function TodoItem({ item, index }: TodoItemProps) {
    return <h3 key={index}>{item}</h3>
}
type StringLabel = { label: string }
type NumberLabel = { label: number }
type Id = { id: string }

type Label<T> = T extends number ? NumberLabel : StringLabel

function generate_id<T extends string | number | Id>(val: T): Label<T> {
    if (typeof val === "object" && "id" in val) {
        return {
            label: val.id
        } as Label<T>
    }
    return {
        label: val
    } as Label<T>
}

declare const elem: string | number
const yz = generate_id(elem)

const hz = generate_id({ id: "1"})
const xz = generate_id(1)

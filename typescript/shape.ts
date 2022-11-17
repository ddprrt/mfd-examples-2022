type Circle = { kind: "circle", r: number }
type Triangle = { kind: "triangle", x: number, y: number }
type Square = { kind: "square", x: number }
type Rectangle = { kind: "rectangle", x: number, y: number }
type Ellipsis = { kind: "ellipsis", a: number, b: number }

type Shape = Circle | Square | Triangle | Rectangle

type ShapeKind = Shape["kind"]

type GroupedShapes = {
    [K in Shape["kind"]]: Extract<Shape, { kind: K }>[]
}

function assert_never(input: never) {
    throw Error("This can never happen!!!!111111eleven")
}

function better_area(shape: Shape) {
    switch(shape.kind) {
        case "circle": return Math.PI * shape.r * shape.r
        case "square": return shape.x * shape.x
        case "triangle": return (shape.x * shape.y) / 2
        case "rectangle": return (shape.x * shape.y)
        default: 
            assert_never(shape)
    }
}
better_area({
    kind: "circle",
    r: 10
})

function area(shape: Shape) {
    if("r" in shape) {
        return Math.PI * shape.r * shape.r
    } else if("x" in shape && "y" in shape) {
        return (shape.x * shape.y) / 2 // :-/
    } else {
        return (shape.x * shape.x)
    }
}
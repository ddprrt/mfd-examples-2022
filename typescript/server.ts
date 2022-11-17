const app = {
    get
}

type Trim<T extends string> = T extends ` ${infer Rest}` ? Trim<Rest> :
    T extends `${infer Rest} ` ? Trim<Rest> : T

type Trimmed = Trim<"        hello           ">

type ParsePathParameters<T extends string> = 
    T extends `${string}/:${infer Param}/${infer Rest}` 
        ? Param | ParsePathParameters<`/${Rest}`> :
    T extends `${string}/:${infer Param}` ? Param : never

type X = ParsePathParameters<"/user/:userid/:orderid">

function get<T extends string>(path: T, callback:(req: Record<ParsePathParameters<T>, string>) => void) {

}

app.get("/user/:userid/:orderId", function(req) {
    console.log(req.userid, req.orderId)
})
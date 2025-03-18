let map = new Map()

map.set("nome", "Isabella Cristine Cesar Martins")
map.set("idade", 22)
map.set("ALTURA",1,71)

console.log(map.get("nome"))
console.log(map.has("idade"))

console.log(map.size)

map.forEach((valor, chave)=>{
    console.log(`${chave}: ${valor}`)
})

map.clear()
console.log(map.size)
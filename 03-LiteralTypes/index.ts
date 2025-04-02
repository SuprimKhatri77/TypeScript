// const myName: "slash" = "slash"

// let myName1 = "slash"


// type userRole = "guest" | "admin" | "member"
// let userRole: userRole = "admin"


type userRole = "guest" | "member"| "admin"

type User = {
    userName: string
    role: userRole
}

const users: User[] = [
    { userName: "mike", role:"admin" },
    { userName: "jake", role:"member" },
    { userName: "bob", role:"guest" },
]


function fetchUserDetail(userName: string): User {
    const user = users.find((user) => user.userName === userName)
    if(!user){
        throw new Error(`user with username "${userName}" not found.`)
    }
    return user
}

console.log(fetchUserDetail("mike"))
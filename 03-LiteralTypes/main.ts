type UserInfo = {
    id: number,
    userName: string,
    role: "member" | "contributor" | "admin"
}

type UpdatedUser = Partial<UserInfo>
let nextUserId = 1

const operators: UserInfo[] = [
    { id: nextUserId++ , userName: "John Doe", role: "member" },
    { id: nextUserId++, userName: "Jane Smith", role: "contributor" },
    { id: nextUserId++, userName: "alice_jones", role: "admin" },
    { id: nextUserId++, userName: "charlie_brown", role: "member" },
]


function updateUserId(id: number, updates: UpdatedUser){
    const user = operators.find((operator) => operator.id === id)
    if(!user){
        throw new Error("user not found")
    }
    return Object.assign(user, updates)
}

// console.log(updateUserId(1,{ userName: "new_john_doe"}))

function addNewUser(newUser: Omit<UserInfo, "id">): UserInfo{
    const user: UserInfo = {
        id: nextUserId++,
        ...newUser
    }
    operators.push(user)
    return user
}

addNewUser({userName: "Next js", role:"admin"})

console.log(operators);

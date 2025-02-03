const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getPerson() {
    const res = await fetch(`${API_URL}/person`, { cache: "no-store" });
    const users = await res.json();
    return users;
}

const Person = async () => {
    const users = await getPerson();

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user: { id: number; name: string }) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Person
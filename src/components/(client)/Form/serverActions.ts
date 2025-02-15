"use server";

export async function loginUser(formData: FormData) {
    const login = formData.get("login");
    const password = formData.get("password");

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users?login=${login}&password=${password}`);
        const data = await response.json();

        if (response.ok) {
            return { user: data, message: `✅ Успешный вход, ${data.name}` };
        } else {
            return { user: null, message: `❌ ${data.error}` };
        }

    } catch (error) {
        console.error("Ошибка запроса:", error);
        return { user: null, message: "⚠️ Ошибка сервера" };
    }
}


export async function registerUser(formData: FormData) {
    const name = formData.get("name");
    const login = formData.get("login");
    const password = formData.get("password");

    return { user: { name, login, password }, message: "все гуд" };
}
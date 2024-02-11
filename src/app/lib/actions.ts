export async function getUsers(query: string, currentPage: number) {
  let users: any[] = [];
  try {
    const url = `http:/localhost:3000/api/user?query=${encodeURIComponent(query)}&currentPage=${encodeURIComponent(currentPage)}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    users = [...users, await response.json()];
  } catch (error) {
    console.error('Error Fetching user:', error);
  }
  return users[0];
}

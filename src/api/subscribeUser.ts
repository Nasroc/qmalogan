const subscribeUser = async (email: string) => {
  if (!email) throw new Error("Invalid email");

  const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (response.status !== 204) {
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Failed to subscribe');
    }
  }

  return await response.json();
};

export default subscribeUser;

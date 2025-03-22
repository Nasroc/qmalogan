const subscribeUser = async (email: string) => {
  const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (response.status === 204) {
    // ✅ Handle empty response (no content)
    return;
  }

  // ✅ Check if response is JSON before parsing
  const data = response.headers.get('content-type')?.includes('application/json')
    ? await response.json()
    : null;

  if (!response.ok) {
    throw new Error(data?.error || 'Failed to subscribe');
  }

  return data;
};

export default subscribeUser;
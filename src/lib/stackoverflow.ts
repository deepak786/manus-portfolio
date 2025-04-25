export async function getStackOverflowReputation(userId: string): Promise<number | null> {
  try {
    // Using Stack Exchange API to fetch user reputation
    const response = await fetch(
      `https://api.stackexchange.com/2.3/users/${userId}?site=stackoverflow&filter=!-*jbN0CeyJHb`,
      {
        next: { revalidate: 3600 } // Revalidate every hour
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch StackOverflow reputation');
    }
    
    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
      throw new Error('User not found');
    }
    
    return data.items[0].reputation;
  } catch (error) {
    console.error('Error fetching StackOverflow reputation:', error);
    return null;
  }
}

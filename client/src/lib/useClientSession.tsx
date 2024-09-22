
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function useClientSession() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/session', { withCredentials: true });
        setSession(data);
        console.log(data, "Hook")
      } catch (error) {
        console.error('Error fetching session:', error);
        setSession(null);
      } finally {
        setLoading(false);
      }
    };
    

    fetchSession();
  }, []);

  return { session, loading };
}

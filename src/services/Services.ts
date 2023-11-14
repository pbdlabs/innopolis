
export type LoginApiResponse = {
    success: boolean;
    message?: string;
};


const baseUrl = 'http://localhost:6000/';

export const getLogin = async (email: string, password: string): Promise<LoginApiResponse> => {
    const apiUrl = `${baseUrl}api/login`;
  
    console.log('aaaaa')
    
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_id: email,
          password: password,
        }),
      });

      console.log('aaaaa',response)
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return { success: false, message: 'Login failed' };
      }
    } catch (error) {

      return { success: false, message: `Error during login: ${error instanceof Error ? error.message : 'Unknown error'}` };

    }
  };
  
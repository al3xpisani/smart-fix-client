type AppSetting = {
  theme: string;
  language: string;
};

type User = {
  id: string;
  name: string;
  username: string;
};

export const getUserSetting = (): Promise<AppSetting> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        theme: 'festival',
        language: 'en',
      });
    }, 4000);
  });
};

export const getUserById = async (id: string): Promise<User> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();
  return user;
};

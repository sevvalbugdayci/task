export const fetchUsers = async () => {
    const response = await fetch("http://localhost:3001/users");
    if (!response.ok) {
      throw new Error("User could not be loaded");
    }
    return response.json();
  };
  
  export const fetchMenuItems = async () => {
    const response = await fetch("http://localhost:3001/menuItems");
    if (!response.ok) {
      throw new Error("Items Not Found");
    }
    return response.json();
  };
  
  export const fetchTableData = async () => {
    const response = await fetch("http://localhost:3001/tableData");
    if (!response.ok) {
      throw new Error("No Data");
    }
    return response.json();
  };
  
  export const createUser = async (username: string, email: string, password: string) => {
    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
  
    if (!response.ok) {
      throw new Error("Error");
    }
  
    return response.json();
  };
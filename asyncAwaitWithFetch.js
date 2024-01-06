async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // or with Axios
  
  import axios from 'axios';
  
  async function fetchData() {
    try {
      const response = await axios.get('https://api.example.com/data');
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
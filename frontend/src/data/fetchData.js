import axios from "axios";
const fetchData = async (url) => {
    const getJobs = await axios.get(url);
     return getJobs
}
export { fetchData }

// 'http://localhost:4000/api/jobs'
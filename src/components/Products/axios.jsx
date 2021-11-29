import _axios from "axios";

const axios = (baseURL) => {
    const instance = _axios.create({
        baseURL: baseURL || "http://54.65.248.67:8080",
        timeout: 5000
    });
    return instance;
}

export {axios}
export default axios();
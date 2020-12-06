import axios from "axios";
import constants from "../Shares/constants";

const APIEmployees = {
  get: () => axios.get(constants.url),
};

export default APIEmployees;

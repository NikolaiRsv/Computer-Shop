import { requestFactory } from "./requests.js";

const baseUrl = "http://localhost:3030";

const url = `${baseUrl}/data/computers`;

export const computerServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const result = await request.get(url);
    const computers = Object.values(result);

    return computers;
  };

  const getOne = async (computerId) => {
    const result = await request.get(`${url}/${computerId}`);

    return result;
  };
  const create = async (computerData) => {
    const result = await request.post(url, computerData);

    return result;
  };

  const edit = (computerId, data) => request.put(`${url}/${computerId}`, data);

  const deleteComputer = (computerId) => request.delete(`${url}/${computerId}`);

  return {
    getAll,
    getOne,
    create,
    edit,
    delete: deleteComputer,
  };
};

import { fetchUtils, DataProvider } from "react-admin";

const apiUrl = "http://localhost:8080";
const httpClient = fetchUtils.fetchJson;

const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const url = `${apiUrl}/${resource}`;
    const { json } = await httpClient(url);
    return {
      data: json,
      total: json.length,
    };
  },

  getOne: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url);
    return {
      data: json[0] || json,
    };
  },

  create: async (resource, params) => {
    const url = `${apiUrl}/${resource}`;
    let options = {
      method: "POST",
      body: JSON.stringify(params.data),
    };

    // Special handling for tickets which returns the created data
    if (resource === "tickets") {
      options = {
        ...options,
        method: "POST",
        body: JSON.stringify(params.data),
      };
      const { json } = await httpClient(url, options);
      return {
        data: { ...params.data, id: json.id || params.data.id },
      };
    } else {
      // For events and users which return a message string
      await httpClient(url, options);
      return {
        data: { ...params.data, id: params.data.id },
      };
    }
  },

  update: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return {
      data: json,
    };
  },

  delete: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    await httpClient(url, {
      method: "DELETE",
    });
    return {
      data: params.previousData,
    };
  },

  getMany: async (resource, params) => {
    const url = `${apiUrl}/${resource}?ids=${params.ids.join(",")}`;
    const { json } = await httpClient(url);
    return {
      data: json,
    };
  },
};

export default dataProvider;

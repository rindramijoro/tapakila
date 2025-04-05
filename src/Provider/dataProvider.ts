import { fetchUtils, DataProvider } from "react-admin";

const apiUrl = "http://localhost:8081/admin";
const httpClient = fetchUtils.fetchJson;

const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page = 1, perPage = 10 } = params.pagination || {};
    const url = `${apiUrl}/${resource}`;

    const { json } = await httpClient(url);

    const start = (page - 1) * perPage;
    const end = start + perPage;
    const paginatedData = json.slice(start, end);

    return {
      data: paginatedData,
      total: json.length,
    };
  },


  getOne: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url);
    console.log("API Response:", json);
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

    if (resource === "tickets") {
      const { json } = await httpClient(url, options);
      return {
        data: { ...params.data, id: json.id || params.data.id } as ResultRecordType,
      };
    } else {
      await httpClient(url, options);
      return {
        data: { ...params.data, id: params.data.id } as ResultRecordType,
      };
    }
  },


  update: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url, {
      method: "PATCH",
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

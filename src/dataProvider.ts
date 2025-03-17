import {DataProvider, fetchUtils} from  "react-admin"

const api_url = "http://localhost:3001";

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const page = params.pagination?.page || 1;
    const perPage = params.pagination?.perPage || 10;
    const field = params.sort?.field || "id";
    const order = params.sort?.order || "ASC";

    const response = await fetchUtils.fetchJson(
        `${api_url}/${resource}?_page=${page}&_limit=${perPage}&_sort=${field}&_order=${order}`
    );
    return {
        data: response.json,
        total : parseInt(response.headers.get("x-total-count") || "", 10),
    };
  }
};


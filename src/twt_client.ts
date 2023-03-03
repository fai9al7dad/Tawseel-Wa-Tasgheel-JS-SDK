import axios from "axios";

export class TWTClient {
  private collection: string = "";

  model(collection: string) {
    this.collection = collection;
    return this;
  }

  async create(data: any) {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/" + this.collection,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (e) {
      return "error:" + e;
    }
  }

  async getById(id: string) {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/" + this.collection + "/" + id
      );
      return response.data;
    } catch (e) {
      return "error:" + e;
    }
  }

  async getFirst({ filter }: { filter?: string }) {
    await this.getList({ page: 1, limit: 1, filter: filter }).then((data) => {
      return data;
    });
  }

  async getList({
    page = 1,
    limit = 10,
    filter,
  }: {
    page?: number;
    limit?: number;
    filter?: string;
  }) {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/" +
          this.collection +
          "?page=" +
          page +
          "&limit=" +
          limit +
          "&filter=" +
          JSON.stringify(filter)
      );
      return response.data;
    } catch (e) {
      return "error:" + e;
    }
  }

  async update({ id, data }: { id: string; data: any }) {
    try {
      const response = await axios.put(
        "http://localhost:8000/api/" + this.collection + "/" + id,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (e) {
      return "error:" + e;
    }
  }

  async delete({ id }: { id: string }) {
    try {
      const response = await axios.delete(
        "http://localhost:8000/api/" + this.collection + "/" + id
      );
      return response.data;
    } catch (e) {
      return "error:" + e;
    }
  }
}

import axios from "axios";
export class TWTClient {
  private collection: string = "";

  model(collection: string) {
    this.collection = collection;
    return this;
  }

  async create(data) {
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

  async getById(id) {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/" + this.collection + "/" + id
      );
      return response.data;
    } catch (e) {
      return "error:" + e;
    }
  }

  async getFirst({ filter }) {
    await this.getList({ page: 1, limit: 1, filter: filter }).then((data) => {
      return data;
    });
  }

  async getList({ page = 1, limit = 10, filter }) {
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

  async update({ id, data }) {
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

  async delete({ id }) {
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

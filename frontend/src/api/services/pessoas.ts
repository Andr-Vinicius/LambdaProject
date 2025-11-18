import { Pessoa } from "@/types/pessoa";
import axiosInstance from "../axiosIstance";        

export const getPessoas = () =>
  axiosInstance
  .get("site/home/")
  .then((res) => {
          return res.data;
  })
  .catch((error) => {
          console.log(error);
          throw error;
  });

  export const getPessoaById = (id: number): Promise<Pessoa> => {
      return axiosInstance
        .get<Pessoa>("site/home/" + id)
        .then((res) => {
            return res.data as Pessoa;
        })
  }

export const createPessoa = (data) => {
  axiosInstance
    .post("site/home/", data)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
  }

export const updatePessoa = (id: number, data: Pessoa): Promise<Pessoa> => {
  return axiosInstance
    .put<Pessoa>(`site/home/${id}`, data)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error("Erro ao atualizar Pessoa:", error);
      throw error;
    });
};
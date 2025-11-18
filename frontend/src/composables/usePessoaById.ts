import { ref, onMounted } from "vue";
import { Pessoa } from "@/types/pessoa";
import {getPessoaById } from "@/api/services/pessoas";

export const usePessoaById = (id: number) => {
    const pessoa = ref<Pessoa | null>(null);
    const loading = ref(false);
    const error = ref<string | null>(null);


    const fetchPessoaById = async () => {  
        try {
            const data = await getPessoaById(id);
            if (data !== null) {
                pessoa.value = data
            }
        } catch (err) {

        } finally {
            
         }
        /*loading.value = true;
        error.value = null;

        console.log("ID no service:", id);
        return getPessoaById(id)
        .then((data: Pessoa) => {
                pessoa.value = data;

        }).catch((err) => {
            error.value = "Failed to fetch pessoas.";
        }).finally(() => {
            loading.value = false;
        });*/
    }

    onMounted(() => {
        fetchPessoaById();
    });

    return {pessoa, loading, error, fetchPessoaById};
}
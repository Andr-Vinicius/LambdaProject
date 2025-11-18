import { ref, onMounted } from "vue";
import { Pessoa } from "@/types/pessoa";
import {createPessoa} from "@/api/services/pessoas";

export const useCreatePessoas = (data) => {
    const pessoa = ref<Pessoa>(null);
    const loading = ref(false);
    const error = ref<string | null>(null);


    const postPessoa = () => {  
        loading.value = true;
        error.value = null;

        return createPessoa(data)
        .then((data: Pessoa) => {
                pessoa.value = data;

        }).catch((err) => {
            error.value = "Failed to fetch pessoas.";
        }).finally(() => {
            loading.value = false;
        });
    }

    onMounted(() => {
        postPessoa();
    });

    return {pessoa, loading, error, postPessoa};
}
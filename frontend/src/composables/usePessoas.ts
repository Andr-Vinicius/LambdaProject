import { ref, onMounted } from "vue";
import { Pessoa } from "@/types/pessoa";
import { getPessoas} from "@/api/services/pessoas";

export const usePessoas = (id: number) => {
    const pessoas = ref<Pessoa[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);


    const fetchPessoas = () => {  
        loading.value = true;
        error.value = null;

        return getPessoas()
        .then((data) => {
                pessoas.value = data;

        }).catch((err) => {
            error.value = "Failed to fetch pessoas.";
        }).finally(() => {
            loading.value = false;
        });
    }

    onMounted(() => {
        fetchPessoas();
    });

    return {pessoas, loading, error, fetchPessoas};
}
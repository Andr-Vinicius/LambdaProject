<script setup>
import { useRoute, useRouter } from 'vue-router';
import { usePessoaById } from '@/composables/usePessoaById';
import { ref } from 'vue';
import { updatePessoa } from '@/api/services/pessoas';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import { Button } from 'primevue';

const route = useRoute();
const router = useRouter();

const id = route.params.id;

const { pessoa, loading, error, fetchPessoaById } = usePessoaById(Number(id));

const submitForm = async () => {
    if (!pessoa.value) return; 

    try {
        const pessoaAtualizada = await updatePessoa(Number(id), pessoa.value); 
        alert("Pessoa atualizada com sucesso:", pessoaAtualizada);
        router.push("/");
    } catch (e) {
        console.error("Falha ao tentar editar");
    }
};

</script>

<template>
    <div v-if="loading">
        Carregando dados da pessoa...
    </div>

    <div v-else-if="pessoa" class="form-class">
        <form @submit.prevent="submitForm">
            <h1 style="text-align: center; margin-bottom: 2rem;">Editar Pessoa</h1>
            <label class="label" for="nome">Nome: </label>
            <InputText class="input" id="nome" v-model="pessoa.nome" placeholder="Seu Nome Completo" fluid />
            <label class="label" for="idade">Idade: </label>
            <InputNumber class="input" v-model="pessoa.idade" inputId="integeronly" fluid />
            <div class="button-container">
                <Button type="submit" label="Editar" class="p-button-sm p-button-outlined submit-button" style="width: 50%;" />
            </div>
            
        </form>
    </div>

    
    <div v-else>
        Não foi possível carregar os dados da pessoa ou ID inválido.
    </div>
</template>

<style>
    form{
        width: 20rem;
        display: block;
        margin: 5rem;
    }

    .button-container{
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }


    .input{
        margin-bottom: 2rem;
    }

    .label{
        margin-bottom: 10rem;
    }

    .form-class{
        display: flex;
        justify-content: center;
        align-items: center;    
    }
    


</style>
<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import { createPessoa } from '@/api/services/pessoas';
import { Button } from 'primevue';
import { useRouter } from 'vue-router';

const pessoa = ref({
    nome: null,
    idade: null,
});

const router = useRouter();

const submitForm = () => {
    createPessoa(pessoa.value);
    alert('Pessoa cadastrada com sucesso!');
    router.push('/');
};
</script>

<template>
    <div class="form-class">
        <form @submit.prevent="submitForm">
            <h1 style="text-align: center; margin-bottom: 2rem;">Cadastro de Pessoa</h1>
            <label class="label" for="nome">Nome: </label>
            <InputText class="input" id="nome" v-model="pessoa.nome" placeholder="Seu Nome Completo" fluid />
            <label class="label" for="idade">Idade: </label>
            <InputNumber class="input" v-model="pessoa.idade" inputId="integeronly" fluid />
            <div class="button-container">
                <Button type="submit" label="Cadastrar" class="p-button-sm p-button-outlined submit-button" style="width: 50%;" />
            </div>
            
        </form>
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
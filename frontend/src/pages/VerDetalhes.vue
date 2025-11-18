<script setup>
    
  import Column from 'primevue/column';
  import { DataTable } from 'primevue';
  import Card from 'primevue/card';
    
        
  import { useRoute } from 'vue-router';
  import { usePessoaById } from '@/composables/usePessoaById';
        
        
  const router = useRoute();
  
  const id = router.params.id;
  const { pessoa, loading, error, fetchPessoaById } = usePessoaById(Number(id));

     
</script>

<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh">
    <template v-if="loading">
      <Card style="width: 25rem; text-align: center;">
        <template #title>Carregando...</template>
        <template #content>
          <p>Aguarde enquanto os dados são carregados.</p>
        </template>
      </Card>
    </template>

    <template v-else-if="pessoa">
      <Card style="width: 25rem; min-height: 15rem; overflow: hidden; text-align: center;">
        <template #title>ID correspondente: {{ pessoa.id }}</template>
        <template #content>
          <div class="card-class">
            <p class="m-0">Nome: {{ pessoa.nome }}</p>
            <p class="m-0">Idade: {{ pessoa.idade }}</p>
          </div>
        </template>
      </Card>
    </template>
    
    <template v-else>
      <Card style="width: 25rem; text-align: center;">
        <template #title>Erro ou Pessoa Não Encontrada</template>
        <template #content>
          <p v-if="error">Ocorreu um erro ao carregar os dados: {{ error.message }}</p>
          <p v-else>Nenhum registro encontrado com o ID {{ id }}.</p>
        </template>
      </Card>
    </template>

  </div>
</template>

<style>
  .card-class {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2em;
  }


</style>
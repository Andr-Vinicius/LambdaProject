<script setup>
    import { usePessoas } from '@/composables/usePessoas';
    import Column from 'primevue/column';
    import { DataTable } from 'primevue';
    import Button from 'primevue/button';

  const { pessoas, loading, error, fetchPessoas } = usePessoas();
  console.log(pessoas);

</script>

<script>

</script>

<template>
    <DataTable :value="pessoas" tableStyle="min-width: 50rem, min-height: 20rem">
        <Column field="id" header="ID" style="width: 34%">{pessoas.id}</Column>
        <Column field="nome" header="Nome" style="width: 33%"></Column>
        <Column field="idade" header="Idade" style="width: 33%"></Column>
        <Column style="width: 50%">
            <template #body="props">       
                <RouterLink style="width: 100%;" :to="`/${props.data.id}`">
                    <Button label="Ver" class="p-button-sm p-button-outlined" style="width: 100%" />
                </RouterLink>
            </template>
        </Column>
        <Column style="width: 50%">
            <template #body="props">       
                <RouterLink style="width: 100%;" :to="`/editarPessoa/${props.data.id}`">
                    <Button label="Editar" class="p-button-sm p-button-outlined" style="width: 100%" />
                </RouterLink>
            </template>
        </Column>
        
        
    
    </DataTable>
</template>


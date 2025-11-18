<template>
  <header class="app-header">
    <div class="header-logo">
      <span class="logo-text">Projeto Lambda</span>
    </div>
    <nav class="header-nav">
      <RouterLink to="/">Início</RouterLink>
      <RouterLink to="/cadastrarPessoa">Cadastrar</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #3f51b5; /* Cor primária */
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
}

.header-nav a {
  color: white;
  text-decoration: none;
  margin-left: 1.5rem;
  transition: color 0.3s;
}

.header-nav a:hover {
  color: #ffc107; /* Amarelo */
}
</style>
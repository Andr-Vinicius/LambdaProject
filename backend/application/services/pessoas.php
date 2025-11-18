<?php

namespace application\services;

use \SplitPHP\Service;
use \SplitPHP\DAO;

class Pessoas extends Service {

    // Listar Pessoas
    public function list()
    {
        $dao = $this->getDao("pessoas");
        return $dao->find();
    }
    // Ver Detalhes
    public function findOne($id)
    {
     $results = $this->getDao('pessoas')
      ->filter('id')->equalsTo($id)
      ->first();
      return $results;
    }
    // Criar uma nova Pessoa
    public function create($data){
      echo "Os dados recebidos foram: ". $data;
      return $this->getDao('pessoas')->insert($data);
    }
    // Editar uma Pessoa
    public function update($id, $data){
      return $this->getDao('pessoas')
      ->filter('id')->equalsTo($id)
      ->update($data);
    }
}

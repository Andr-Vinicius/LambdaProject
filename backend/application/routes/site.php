<?php

namespace application\routes;

use \SplitPHP\Request;
use \SplitPHP\WebService;

class Site extends WebService
{
  public function init()
  {
    $this->setAntiXsrfValidation(false);

    // Home Page Endpoints:
      // Listagem
      $this->addEndpoint('GET', '/home', function(Request $req){
      $filters = $req->getBody();
      $dataPeoples = $this->getService('pessoas')->list($filters);

      return $this->response
        ->withStatus(200)
        ->withData($dataPeoples); 
    });

      // Ver Detalhes de uma Pessoa
      $this->addEndpoint('GET', '/home/?id?', function(Request $req){
      $id = $req->getRoute()->params['id'];
      $dataPerson = $this->getService('pessoas')->findOne($id);

      return $this->response
        ->withStatus(200)
        ->withData($dataPerson); 
    });

       // Criar uma nova Pessoa
    $this->addEndpoint('POST', '/home', function(Request $req){
      $formData = $req->getBody();
      if (is_string($formData)) {
          $formData = json_decode($formData, true);
      }

      if (empty($formData)) {
          return $this->response
            ->withStatus(400)
            ->withData(['error' => 'Dados inválidos ou corpo da requisição vazio.']);
      }
      $newData = $this->getService('pessoas')->create($formData);
     
      return $this->response
        ->withStatus(201)
        ->withData($formData);
    });

    // Editar uma Pessoa
    $this->addEndpoint('PUT', '/home/?id?', function(Request $req, $id){
      $formData = $req->getBody();
      if (is_string($formData)) {
          $formData = json_decode($formData, true);
      }

      if (empty($formData)) {
          return $this->response
            ->withStatus(400)
            ->withData(['error' => 'Dados inválidos ou corpo da requisição vazio.']);
      }
      $newData = $this->getService('pessoas')->update($id, $formData);
     
      return $this->response
        ->withStatus(201)
        ->withData($formData);
    });
  }
}

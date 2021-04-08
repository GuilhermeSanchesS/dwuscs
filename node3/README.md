<h1 align="center">Atividade 7</h1>
<h5 align="center" style="color: red;">REVISÃO NODE-3 USCS</h5>
<p align="center">Projeto realizado durante a aulas de Desenvolvimento para Web</p>

<p align="center">
 <a href="#-sobre">Sobre</a> •
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-insomnia">Insomnia</a> 
</p>

# 📖 Sobre

<p>Implemente as funções para consultar: todos os professores que o tipo de contrato inicie com "in"; todos os professores que o tipo de contrato inicie com "det"; o nome e a carga horária de todos os professores com carga horária em um intervalo cujo valor mínimo e máximo chegam por parâmetro; o nome, nível e a letra de todos os professores com tipo de contrato indeterminado; o nome e a carga horária de todo professor com letra de a até m. Considere que o professor tem os seguintes dados: código (string), nome completo (string), nível (inteiro - 1,2 ou 3), letra (string), cpf (string), data de nascimento (date), data de admissão (date), data de início (date), data de fim (date), tipo de contrato (string: determinado ou indeterminado), link para o lattes (string) e carga horária(inteiro). A data de fim para novos professores deve estar vazia (string de comprimento zero).</p>

<p>Implemente uma função que permita alterar: apenas a letra de um professor cujo código e a nova letra são enviados por parâmetro; apenas o nível de um professor cujo código e a novo nível são enviados por parâmetro. Considere que o professor tem os seguintes dados: código(string), nome completo (string), nível, (inteiro - 1,2 ou 3), letra (string), cpf (string), data de nascimento (date), data de admissão (date), data de início (date), data de fim (date), tipo de contrato (string: determinado ou indeterminado), link para o lattes (string) e carga horária.</p>

<p>Implemente uma função que permita remover: um professor cujo código é enviado por parâmetro; todos os professores cuja carga horária é igual a zero. Considere que o professor tem os seguintes dados: código(string), nome completo (string), nível, (inteiro - 1,2 ou 3), letra (string), cpf (string), data de nascimento (date), data de admissão (date), data de início (date), data de fim (date), tipo de contrato (string: determinado ou indeterminado), link para o lattes (string) e carga horária.</p>

<h1>🛠 Tecnologias</h1>

- Back-end:
  - [Express](https://expressjs.com/pt-br/)
  - [Nodemon](https://nodemon.io/)
  - [MongoDB Compass](https://www.mongodb.com/try/download/compass)

# Insomnia

Para relazar o teste utilize [ARQUIVO JSON](https://github.com/GuilhermeSanchesS/dwuscs/blob/main/node2/Insomnia_2021-04-02.json)

<p>Função GET </p>

<p align="center">
  <a href="https://github.com/GuilhermeSanchesS/dwuscs/blob/main/file/Node_2_REVISAO_GET.PNG">
    <img src="https://raw.githubusercontent.com/GuilhermeSanchesS/dwuscs/main/file/Node_2_REVISAO_GET.PNG"  alt="GET" />
  </a>
</p>

<p>Função POST </p>

<p align="center">
  <a href="https://github.com/GuilhermeSanchesS/dwuscs/blob/main/file/Node_2_REVISAO_POST_1.PNG">
    <img src="https://raw.githubusercontent.com/GuilhermeSanchesS/dwuscs/main/file/Node_2_REVISAO_POST_1.PNG"  alt="POST 1" />
  </a>
  <a href="https://github.com/GuilhermeSanchesS/dwuscs/blob/main/file/Node_2_REVISAO_POST_2.PNG">
    <img src="https://raw.githubusercontent.com/GuilhermeSanchesS/dwuscs/main/file/Node_2_REVISAO_POST_2.PNG"  alt="POST 2" />
  </a>
</p>

<p>Função PUT </p>

<p align="center">
  <a href="https://github.com/GuilhermeSanchesS/dwuscs/blob/main/file/Node_2_REVISAO_UPDATE.PNG">
    <img src="https://raw.githubusercontent.com/GuilhermeSanchesS/dwuscs/main/file/Node_2_REVISAO_UPDATE.PNG"  alt="PUT" />
  </a>
</p>
<p>Função DELETE </p>

<p align="center">
  <a href="https://github.com/GuilhermeSanchesS/dwuscs/blob/main/file/Node_2_REVISAO_DELETE.PNG">
    <img src="https://raw.githubusercontent.com/GuilhermeSanchesS/dwuscs/main/file/Node_2_REVISAO_DELETE.PNG"  alt="DELETE" />
  </a>
</p>
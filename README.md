![Cadastro de alunos01](https://user-images.githubusercontent.com/50173813/136715127-9245d8f8-8c3d-4eea-9a9e-c6f67a16b13b.png)

# Sistema de cadastro de alunos com Bootstrap e Node.JS
 Ssistema de cadastro simples, com backend em Node.JS e frontend com Bootstrap, o sistema é capaz de ler, cadastrar, atualizar e deletar alunos de um sistema de registo, este que não utiliza de uum banco de dados.
 
# Funcionalidades
**Cadastro de Aluno**
O frontend organiza os dados e envia por um método POST para o backend que gera uum ID para o aluno e armazena os dados em um JSON dentro de um Array:

![Cadastro de alunos02](https://user-images.githubusercontent.com/50173813/136715128-fcb79425-5425-4e97-ab5d-55e687224c58.png)

**Excluir Aluno**
O sistema tem uma medida de segurança caso tenha ocorrido apenas um missclick na opção de exclusão, um modal abre e pergunta ao usuário se pretende realmente excluir o aluno, caso o pedido de excluusão seja confirmado, um fetch com método DELETE é enviado para o Backend com o ID do Aluno respectivo:

![Cadastro de alunos03](https://user-images.githubusercontent.com/50173813/136715129-638fe922-49cf-4148-a86b-7f9addb25989.png)

**Atualizar Aluno**
Ao pedir para atualizar os dados, o sistema faz uma requisição dos dados do aluno específico para o Backend e ao ser atualizado, o frontend faz uma requisição de método PUT para o backend para atualizar a lista de estudantes:

![Cadastro de alunos04](https://user-images.githubusercontent.com/50173813/136715130-a1b5b2c2-c9cc-42c8-bf29-b9fd87133527.png)

# Mais sobre o projeto
O objetivo é conctar em um banco já existente, criar os modelos e fazer um gerenciamento rapido. 
Muito util para fabricas de software, que se tem uma esteira de procução, normalmente se iniciando pelos requisitos e criação do banco de dados.

Neste exemplo é utilizad uma tabela de usuários, para teste no prisma2

# Comandos principais do prisma

Cria as migragions a partir do <code>schema.prisma</code>:

<code>npx prisma migrate save --experimental</code>

Executa as migrations no banco de dados:

<code>npx prisma migrate up --experimental</code>

Executa o prisma studio para visualizar os dodos do banco:

<code>npx prisma studio --experimental</code>

Cria os models no <code>schema.prisma</code> a partir de um banco existente:

<code>npx prisma introspect</code>

Ref: [prisma.io](https://www.prisma.io/docs/)

# Phansite — Persona 5 Royal

Um site de fã inspirado no **Phantom Aficionado Website**, conhecido como **Phansite**, de *Persona 5 Royal*. Desenvolvido como um projeto de aprendizado de HTML, CSS e JavaScript, para compartilhar com amigos.

## A inspiração

No jogo, o Phansite é um espaço dedicado aos **Phantom Thieves**, onde o público demonstra apoio ao grupo, comenta suas ações e envia pedidos. A opinião pública sobre os protagonistas faz parte da narrativa, e a votação do site representa essa relação.

Este projeto busca recriar um pouco dessa atmosfera com a identidade visual marcante de Persona: preto, vermelho, branco, letras recortadas e elementos inclinados.

## O que o site oferece

- Votação com as opções **Sim** e **Não**.
- Barra e porcentagem atualizadas conforme os votos.
- Comentários apresentados com o nome **Anon**.
- Salvamento local dos votos e comentários.
- Layout adaptado para computadores e celulares.
- Logo e pôsteres decorativos inspirados em Persona 5.

## Tecnologias

- **HTML:** estrutura e conteúdo.
- **CSS:** aparência, recortes, efeitos e adaptação às telas.
- **JavaScript:** votação, comentários e salvamento.
- **GitHub Pages:** publicação do site.

## Como funciona o salvamento

Nesta versão, os dados são armazenados com `localStorage`, no navegador de cada visitante.

Isso significa que votos e comentários permanecem após atualizar a página, mas **não são compartilhados entre pessoas, dispositivos ou navegadores**. Apagar os dados do site no navegador também remove esses registros.

A votação começa sem votos. A porcentagem exibida representa a proporção de respostas **Sim** sobre o total de respostas.

## Como executar

Baixe os arquivos do repositório e abra o `index.html` no navegador.

Mantenha esta estrutura para que os estilos, scripts e imagens carreguem corretamente:

```text
phansite/
├── index.html
├── style.css
├── script.js
├── README.md
└── imagens/
```

## Próximos passos

- Conectar o site ao Supabase.
- Compartilhar votos e comentários entre visitantes.
- Definir regras para votação e moderação dos comentários.

## Créditos

Projeto de fã, sem vínculo oficial com a Atlus ou a Sega.

Persona 5 Royal, os Phantom Thieves e os elementos visuais utilizados pertencem aos seus respectivos titulares. As imagens são usadas como referências e decoração neste projeto de aprendizado.

# Projeto Pixels Art

Este projeto é uma aplicação web interativa para desenhar em uma grade de pixels. O objetivo é permitir que os usuários criem desenhos pixel por pixel, escolhendo cores de uma paleta e aplicando-as em uma grade de pixels.

## Tecnologias Utilizadas

- **HTML5**: Utilizado para estruturar o conteúdo da página.
- **CSS3**: Utilizado para estilizar os elementos da página.
- **JavaScript**: Utilizado para adicionar interatividade à página, permitindo aos usuários selecionar cores, pintar pixels e salvar seus desenhos.
- **LocalStorage**: Utilizado para salvar e recuperar os desenhos dos usuários.

## Requisitos do Projeto

1. **Paleta de Cores**: A página contém o título "Paleta de Cores" e uma paleta com quatro opções de cores.
2. **Quadro de Pixels**: A página contém um quadro de pixels 5x5; cada pixel do quadro possui 40px de largura e 40px de altura e uma borda preta sólida de 1px de espessura.
3. **Seleção de Cor**: Os usuários podem selecionar uma cor na paleta de cores clicando nela.
4. **Preenchimento de Pixel**: Os usuários podem preencher um pixel do quadro com a cor selecionada na paleta de cores clicando nele.
5. **Limpeza do Quadro**: A página contém um botão que, quando clicado, deixa todos os pixels do quadro com a cor branca.
6. **Geração de Cores Aleatórias**: A página contém um botão que, quando clicado, gera quatro cores aleatórias para a paleta de cores.
7. **Salvamento e Recuperação de Desenho**: Os usuários podem salvar seu desenho atual no localStorage clicando em um pixel, e o quadro é recuperado a partir do que foi salvo no localStorage ao recarregar a página.

## Requisitos Bônus

8. **Definição do Tamanho do Quadro**: A página contém um input para que os usuários possam definir o tamanho do quadro de pixels.
9. **Limitação do Tamanho do Quadro**: O quadro não pode ser definido com menos de 5 ou mais de 50 pixels.
10. **Manutenção do Tamanho do Quadro**: O tamanho do quadro é mantido ao recarregar a página usando localStorage.

## Conclusão

Este projeto foi excelente oportunidade para praticar e demonstrar habilidades em HTML, CSS e JavaScript. Ele permite a aplicação prática de conceitos como manipulação do DOM, uso de eventos, armazenamento local e desenvolvimento orientado a requisitos. Além disso, o projeto também oferece aos usuários uma ferramenta divertida e criativa para criar arte pixel por pixel.

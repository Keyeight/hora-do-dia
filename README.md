# Horas do Dia

Esse projeto simples oferece uma experiência visual agradável ao mostrar a hora do dia de acordo com a imagem de fundo correspondente (indicando se é de manhã, tarde ou noite). 
O projeto é construído em **HTML**, **CSS** e **JavaScript**. Abaixo estão as principais informações sobre a estrutura e funcionamento do código.

## Estrutura do Projeto

#### Arquivos Principais

- **index.html:** Contém a estrutura HTML para a página, incluindo tags para o cabeçalho, corpo e rodapé.
- **style.css:** Define o estilo da página, configurando a aparência dos elementos HTML.
- **script.js:** Implementa a lógica em JavaScript para exibir a hora atual e atualizar a imagem correspondente.

#### Pastas e Recursos

**img:** Contém as imagens utilizadas para representar as diferentes fases do dia (manhã, tarde e noite).

#### Estilo (style.css)

- **body:** Configura o estilo básico da página, definindo a cor de fundo e a fonte.
- **header, section, footer, div, img:** Estiliza os elementos específicos da página, como cabeçalho, seção, rodapé, divs e imagens.

#### Funcionamento (script.js)

- **load():** Função principal chamada no carregamento da página.

    - Inicializa variáveis para manipular elementos HTML.
    - Define a função **_atualizarTempo()_** para exibir a hora e atualizar a imagem correspondente.
    - Chama **_atualizarTempo()_** inicialmente para exibir a hora na página carregada.
    - Atualiza a cada segundo usando **_setInterval(atualizarTempo, 1000)_**.
    - **_atualizarTempo():_** Obtém a hora atual, exibe na página e seleciona a imagem correspondente com base na hora.
    - Define a cor de fundo da página de acordo com a fase do dia.

#### Rodapé

Exibe o nome do autor e o ano de criação.

### _Observações_

- As imagens utilizadas estão na pasta **img** e são trocadas de acordo com a fase do dia.

- A função *load()* é chamada quando o corpo da página está carregado.

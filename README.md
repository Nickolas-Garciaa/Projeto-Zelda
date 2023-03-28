# Projeto-Zelda
É um programa de um site que fala sobre o jogo chamado zelda com uma descrição sobre ele mesmo, nele tem 10 imagens que ao clicar nelas elas alteram.<p>
Como fiz e progamei esse site?<p>
Comecei fazendo um codigo basico em  html com o nome de zelda.html,  com tags basicas de um site: html, head e body. <p>
No head eu linkei com css, no body o codigo de mudar as imagens e linkei com o javascript.<p>
Agora no css eu mudei a cor do fundo usando o background-color, mudei a fonte e o alinhamento do meu texto usando font-family e text-align, mudei tambem o alinhamento da minha imagem usando  width, height e margin-left<p>
Criei uma pasta para armazenar as 10 imagens que iram mudar <p>
No javascript eu pegeui a referência do elemento do html chamado "imagem" usando o codigo document.getElementById(), depois disso usando o Math.random() pego um numero aleatorio entre 0 a 1, usando a função Math.trunc() crio um numero aleatorio entre 0 e 9, O número inteiro resultante é armazenado na variável trocar, usando o src no elemento de imagem html com um nome arquivo de imagem gerado aleatório a partir da concatenação da string "img/zelda" com o número aleatório armazenado em trocare extensão de arquivo ".jpg". Assim, ele exibe uma imagem diferente aleatoriamente quando a função é executada.
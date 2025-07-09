document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById('app');

  // Insere o CSS dentro de um <style> no <head>
  const style = document.createElement('style');
  style.textContent = `
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }
    .btn-group a {
      background-color:  #0431B4;
      color: white;
      padding: 10px 20px;
      text-align: justify;
      text-decoration: none;
      display: block;
      font-size: 16px;
      margin: 4px 0;
      cursor: pointer;
      border-radius: 4px;
      width: 200px;
    }
    .btn-group a:hover {
      background-color: #0B3861;
    }
    .btn-group2 a {
      background-color:  #4CAF50;
      color: white;
      padding: 10px 20px;
      text-align: justify;
      text-decoration: none;
      display: block;
      font-size: 16px;
      margin: 4px 0;
      cursor: pointer;
      border-radius: 4px;
      width: 200px;
    }
    .btn-group2 a:hover {
      background-color: #3e8e41;
    }
    #container {
      display: flex;
      flex-direction: row;
    }
    #canal-lista {
      overflow-y: auto;
      border-left: 0px solid #333;
    }
    .categoria {
      border-bottom: 1px solid #444;
    }
    .categoria-titulo {
      background-color:  #0431B4;
      color: white;
      padding: 10px 20px;
      text-align: justify;
      text-decoration: none;
      display: block;
      font-size: 16px;
      margin: 4px 0;
      cursor: pointer;
      border-radius: 4px;
      width: 200px;
    }
    .categoria-titulo:hover {
      background-color: #0B3861;
    }
    .categoria-itens {
      display: none;
      padding-left: 10px;
      width: 200px;
    }
    .canal-item {
      padding: 10px;
      border-bottom: 1px solid #444;
      cursor: pointer;
      width: 200px;
    }
    .canal-item:hover,
    .canal-item.ativo {
      background: #0431B4;
    }
    #player-container {
      width: 700px;
      height: 460px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #000;
    }
    #player {
      width: 700px;
      height: 460px;
    }
    #voltar-topo {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #333;
      color: white;
      border: none;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      font-size: 20px;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
      z-index: 999;
      display: none;
      transition: opacity 0.3s;
    }
    .btn-group a,
    .btn-group2 a {
      background-color: #0431B4;
      color: white;
      padding: 10px 20px;
      text-align: justify;
      text-decoration: none;
      display: block;
      font-size: 16px;
      margin: 4px 0;
      cursor: pointer;
      border-radius: 4px;
    }
    .btn-group2 a {
      background-color: #4CAF50;
    }
    .btn-group a:hover {
      background-color: #0B3861;
    }
    .btn-group2 a:hover {
      background-color: #3e8e41;
    }
    .imagem-fixada {
      position: fixed;
      top: 10px;
      right: 10px;
      z-index: 999;
    }
    .imagem-fixada img {
      width: 160px;
      height: 100%;
      border: 0px solid #fff;
    }
    .canal-item a {
      color: white;
      text-decoration: none;
    }
  `;
  document.head.appendChild(style);

  // Conteúdo HTML que vai para dentro da div#app
  const htmlContent = `
    <div class="btn-group2">
      <a href="https://canaissattv.blogspot.com/p/guia-de-programacao.html"  target="epg">GUIA TV</a> 
    </div>
    
    <br>
    
    <div class="categoria-titulo">TNT</div>
    <div class="categoria-itens">
      <div class="canal-item">
        <div style="cursor: pointer;" onclick="location.href='https://futemax.food/canal/tnt-ao-vivo-em-hd/'" target="_self">OPÇÃO 1</div>
      </div>
      <div class="canal-item">
        <div style="cursor: pointer;" onclick="location.href='https://supertvaovivo.fans/tnt-ao-vivo/'" target="_self">OPÇÃO 2</div>
      </div>
    </div>
    
    <div class="categoria-titulo">Sportv</div>
    <div class="categoria-itens">
      <div class="canal-item">
        <div style="cursor: pointer;" onclick="location.href='https://futemax.food/canal/sportv-ao-vivo-em-hd/'" target="_self">OPÇÃO 1</div>
      </div>
      <div class="canal-item">
        <div style="cursor: pointer;" onclick="location.href='https://supertvaovivo.fans/sportv-online/'" target="_self">OPÇÃO 2</div>
      </div>
    </div>
    
    <div class="categoria-titulo">ESPN</div>
    <div class="categoria-itens">
      <div class="canal-item">
        <div style="cursor: pointer;" onclick="location.href='https://futemax.food/canal/espn-ao-vivo-em-hd/'" target="_self">OPÇÃO 1</div>
      </div>
      <div class="canal-item">
        <div style="cursor: pointer;" onclick="location.href='https://supertvaovivo.fans/espn-ao-vivo-gratis/'" target="_self">OPÇÃO 2</div>
      </div>
    </div>
    
    <div class="categoria-titulo">Discovery</div>
    <div class="categoria-itens">
      <div class="canal-item">
        <div style="cursor: pointer;" onclick="location.href='https://futemax.food/canal/discovery-channel-ao-vivo-em-hd/'" target="_self">OPÇÃO 1</div>
      </div>
      <div class="canal-item">
        <div style="cursor: pointer;" onclick="location.href='https://supertvaovivo.fans/discovery-channel-ao-vivo-gratis/'" target="_self">OPÇÃO 2</div>
      </div>
    </div>
    
    <div class="categoria-titulo">Animal Planet</div>
    <div class="categoria-itens">
      <div class="canal-item">
        <div style="cursor: pointer;" onclick="location.href='https://futemax.food/canal/animal-planet-ao-vivo-em-hd/'" target="_self">OPÇÃO 1</div>
      </div>
      <div class="canal-item">
        <div style="cursor: pointer;" onclick="location.href='https://supertvaovivo.fans/animal-planet-ao-vivo/'" target="_self">OPÇÃO 2</div>
      </div>
    </div>
    
    <div class="categoria-titulo">Multishow</div>
    <div class="categoria-itens">
      <div class="canal-item">
        <div style="cursor: pointer;" onclick="location.href='https://futemax.food/canal/multishow-ao-vivo-em-hd/'" target="_self">OPÇÃO 1</div>
      </div>
      <div class="canal-item">
        <div style="cursor: pointer;" onclick="location.href='https://supertvaovivo.fans/multishow-ao-vivo/'" target="_self">OPÇÃO 2</div>
      </div>
    </div>

    <div class="categoria-titulo">Combate</div>
    <div class="categoria-itens">
      <div class="canal-item">
        <div style="cursor: pointer;" onclick="location.href='https://futemax.food/canal/combate-ao-vivo-em-hd/'" target="_self">OPÇÃO 1</div>
      </div>
      <div class="canal-item">
        <div style="cursor: pointer;" onclick="location.href='https://supertvaovivo.fans/combate-ao-vivo/'" target="_self">OPÇÃO 2</div>
      </div>
    </div>
    
    <div class="btn-group">
      <a href="https://canais.redeitv.com.br/canal/urban-docs">Urban Docs</a>
      <a href="https://tvsat05.blogspot.com/p/istv.html">TELEMUNDO</a>
      <a href="https://cnnportugal.iol.pt/direto">CNN Portugal</a>

      <a href="https://supertvaovivo.fans/sportv-2-online/">Sportv 2</a>
      <a href="https://supertvaovivo.fans/assistir-globo-news-ao-vivo-gratis/">GloboNews</a>
      <a href="https://supertvaovivo.fans/gnt-ao-vivo/">GNT</a>
      <a href="https://supertvaovivo.fans/e-entertainment-ao-vivo/">E!</a>
      
      <a href="https://supertvaovivo.fans/arte-1-ao-vivo/">Arte 1</a>
      <a href="https://supertvaovivo.fans/discovery-home-health-ao-vivo/">Home & Health</a>
      
      <a href="https://supertvaovivo.fans/espn-2-ao-vivo/">ESPN 2</a>
      <a href="https://supertvaovivo.fans/band-sports-ao-vivo/">BandSports</a>
      <a href="https://supertvaovivo.fans/band-news/">BandNews</a>
      
      <a href="https://supertvaovivo.fans/history-channel/">History</a>
      <a href="https://supertvaovivo.fans/history-2-ao-vivo/">History 2</a>
      
      
      
      
      <a href="https://supertvaovivo.fans/mtv-ao-vivo-brasil/">MTV</a>
      <a href="https://supertvaovivo.fans/universal-channel/">Universal</a>
      <a href="https://supertvaovivo.fans/warner-channel-ao-vivo/">Warner</a>
      <a href="https://supertvaovivo.fans/sony/">Sony</a>
      <a href="https://supertvaovivo.fans/axn/">AXN</a>
      
      
      
      
      <a href="https://canais.redeitv.com.br/canal/central-tv-brasil">Central TV</a>
      <a href="https://supertvaovivo.fans/amc/">AMC</a>
      <a href="https://supertvaovivo.fans/megapix/">Megapix</a>
      <a href="https://supertvaovivo.fans/space/">Space</a>
      
      
      <a href="https://supertvaovivo.fans/telecine-premium/">Telecine Premium</a>
      
      <a href="https://supertvaovivo.fans/hbo-ao-vivo-gratis/">HBO</a>
      <a href="https://supertvaovivo.fans/hbo-2/">HBO 2</a>
      
    </div>

  `;

  // Adiciona o conteúdo HTML dentro da div#app
  app.innerHTML = htmlContent;

  // Código para abrir/fechar categorias
  document.querySelectorAll(".categoria-titulo").forEach(titulo => {
    titulo.addEventListener("click", () => {
      const divItens = titulo.nextElementSibling;
      const estaAberto = divItens.style.display === "block";
      document.querySelectorAll(".categoria-itens").forEach(c => c.style.display = "none");
      divItens.style.display = estaAberto ? "none" : "block";
    });
  });

  // Alerta informativo
  alert("RECOMENDÁVEL ACESSAR PELO APP 'WEB VIDEO CASTER'");
  alert("ATRAVÉS DO APP 'WEB VIDEO CASTER', NA FUNÇÃO 'IPTV', A LISTA DE CANAIS TAMBÉM PODE SER ACESSADA PELO LINK: 'https://abre.ai/mKVH'");

  // history.replaceState para limpar #
  history.replaceState(null, null, "/#");
});

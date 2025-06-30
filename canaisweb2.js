document.addEventListener("DOMContentLoaded", function () {
  // Estilo
  const estilo = document.createElement("style");
  estilo.textContent = `
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    .btn-group a, .btn-group2 a {
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
      width: 200px;
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

    #player-container,
    #player {
      width: 700px;
      height: 460px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #000;
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
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      z-index: 999;
      display: none;
      transition: opacity 0.3s;
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
  document.head.appendChild(estilo);

  // HTML principal
  const html = `
    <div class="btn-group2">
      <a href="https://canaissattv.blogspot.com/p/guia-de-programacao.html" target="epg">GUIA TV</a>
    </div><br>

    <div class="categoria-titulo">TNT</div>
    <div class="categoria-itens">
      <div class="canal-item"><div onclick="location.href='https://supertvaovivo.io/tnt-ao-vivo/'">LINK 1</div></div>
      <div class="canal-item"><div onclick="location.href='https://futemax.food/canal/tnt-ao-vivo-em-hd/'">LINK 2</div></div>
    </div>

    <div class="categoria-titulo">Sportv</div>
    <div class="categoria-itens">
      <div class="canal-item"><div onclick="location.href='https://supertvaovivo.io/sportv-online/'">LINK 1</div></div>
      <div class="canal-item"><div onclick="location.href='https://futemax.food/canal/sportv-ao-vivo-em-hd/'">LINK 2</div></div>
    </div>

    <div class="categoria-titulo">ESPN</div>
    <div class="categoria-itens">
      <div class="canal-item"><div onclick="location.href='https://supertvaovivo.io/espn-ao-vivo-gratis/'">LINK 1</div></div>
      <div class="canal-item"><div onclick="location.href='https://futemax.food/canal/espn-ao-vivo-em-hd/'">LINK 2</div></div>
    </div>

    <div class="categoria-titulo">Discovery</div>
    <div class="categoria-itens">
      <div class="canal-item"><div onclick="location.href='https://supertvaovivo.io/discovery-channel-ao-vivo-gratis/'">LINK 1</div></div>
      <div class="canal-item"><div onclick="location.href='https://futemax.food/canal/discovery-channel-ao-vivo-em-hd/'">LINK 2</div></div>
    </div>

    <div class="categoria-titulo">Animal Planet</div>
    <div class="categoria-itens">
      <div class="canal-item"><div onclick="location.href='https://supertvaovivo.io/animal-planet-ao-vivo/'">LINK 1</div></div>
      <div class="canal-item"><div onclick="location.href='https://futemax.food/canal/animal-planet-ao-vivo-em-hd/'">LINK 2</div></div>
    </div>

    <div class="categoria-titulo">Multishow</div>
    <div class="categoria-itens">
      <div class="canal-item"><div onclick="location.href='https://supertvaovivo.io/multishow-ao-vivo/'">LINK 1</div></div>
      <div class="canal-item"><div onclick="location.href='https://futemax.food/canal/multishow-ao-vivo-em-hd/'">LINK 2</div></div>
    </div>

    <div class="btn-group">
      <a href="https://supertvaovivo.io/canal-off/">Off</a>
      <a href="https://supertvaovivo.io/assistir-sportv-3-ao-vivo-gratis/">Sportv 3</a>
      <a href="https://supertvaovivo.io/sportv-2-online/">Sportv 2</a>
      <a href="https://supertvaovivo.io/assistir-globo-news-ao-vivo-gratis/">GloboNews</a>
      <a href="https://supertvaovivo.io/gnt-ao-vivo/">GNT</a>
      <a href="https://supertvaovivo.io/e-entertainment-ao-vivo/">E!</a>
      <a href="https://supertvaovivo.io/tlc-ao-vivo/">TLC</a>
      <a href="https://supertvaovivo.io/arte-1-ao-vivo/">Arte 1</a>
      <a href="https://supertvaovivo.io/discovery-home-health-ao-vivo/">Home & Health</a>
      <a href="https://supertvaovivo.io/hgtv-ao-vivo/">HGTV</a>
      <a href="https://supertvaovivo.io/espn-2-ao-vivo/">ESPN 2</a>
      <a href="https://supertvaovivo.io/band-sports-ao-vivo/">BandSports</a>
      <a href="https://supertvaovivo.io/band-news/">BandNews</a>
      <a href="https://canais.redeitv.com.br/canal/urban-docs">Urban Docs</a>
      <a href="https://supertvaovivo.io/discovery-theater/">Discovery Theater</a>
      <a href="https://supertvaovivo.io/discovery-world/">Discovery World</a>
      <a href="https://supertvaovivo.io/history-channel/">History</a>
      <a href="https://supertvaovivo.io/history-2-ao-vivo/">History 2</a>
      <a href="https://supertvaovivo.io/discovery-turbo-ao-vivo/">Discovery Turbo</a>
      <a href="https://supertvaovivo.io/discovery-science-ao-vivo/">Discovery Science</a>
      <a href="https://supertvaovivo.io/discovery-kids-ao-vivo/">Discovery Kids</a>
      <a href="https://supertvaovivo.io/cartoon-network-ao-vivo-gratis/">Cartoon Network</a>
      <a href="https://supertvaovivo.io/adult-swim-tv/">Adult Swim</a>
      <a href="https://supertvaovivo.io/bis-ao-vivo/">Bis</a>
      <a href="https://supertvaovivo.io/mtv-ao-vivo-brasil/">MTV</a>
      <a href="https://supertvaovivo.io/universal-channel/">Universal</a>
      <a href="https://supertvaovivo.io/warner-channel-ao-vivo/">Warner</a>
      <a href="https://supertvaovivo.io/sony/">Sony</a>
      <a href="https://tvsat05.blogspot.com/p/istv.html">TELEMUNDO</a>
      <a href="https://cnnportugal.iol.pt/direto">CNN Portugal</a>
      <a href="https://supertvaovivo.io/axn/">AXN</a>
      <a href="https://supertvaovivo.io/tnt-novelas/">TNT Novelas</a>
      <a href="https://supertvaovivo.io/tnt-series-ao-vivo/">TNT Series</a>
      <a href="https://supertvaovivo.io/comedy-central-ao-vivo-gratis/">Comedy Central</a>
      <a href="https://supertvaovivo.io/ae-mundo/">A&E</a>
      <a href="https://supertvaovivo.io/investigacao-discovery/">Discovery ID</a>
      <a href="https://canais.redeitv.com.br/canal/central-tv-brasil">Central TV</a>
      <a href="https://supertvaovivo.io/amc/">AMC</a>
      <a href="https://supertvaovivo.io/megapix/">Megapix</a>
      <a href="https://supertvaovivo.io/space/">Space</a>
      <a href="https://supertvaovivo.io/cinemax/">Cinemax</a>
      <a href="https://supertvaovivo.io/studio-universal/">Studio Universal</a>
      <a href="https://supertvaovivo.io/paramount-channel/">Paramount</a>
      <a href="https://supertvaovivo.io/telecine-premium/">Telecine Premium</a>
      <a href="https://supertvaovivo.io/telecine-action/">Telecine Action</a>
      <a href="https://supertvaovivo.io/telecine-touch/">Telecine Touch</a>
      <a href="https://supertvaovivo.io/telecine-fun/">Telecine Fun</a>
      <a href="https://supertvaovivo.io/telecine-pipoca/">Telecine Pipoca</a>
      <a href="https://supertvaovivo.io/telecine-cult/">Telecine Cult</a>
      <a href="https://supertvaovivo.io/hbo-ao-vivo-gratis/">HBO</a>
      <a href="https://supertvaovivo.io/hbo-2/">HBO 2</a>
      <a href="https://supertvaovivo.io/hbo-plus/">HBO+</a>
      <a href="https://supertvaovivo.io/hbo-family/">HBO Family</a>
      <a href="https://supertvaovivo.io/hbo-signature/">HBO Signature</a>
      <a href="https://supertvaovivo.io/hbo-pop/">HBO Pop</a>
      <a href="https://supertvaovivo.io/hbo-mundi/">HBO Mundi</a>
      <a href="https://supertvaovivo.io/hbo-xtreme-online/">HBO Xtreme</a>
    </div>

    <div class="categoria-titulo">Combate</div>
    <div class="categoria-itens">
      <div class="canal-item"><div onclick="location.href='https://supertvaovivo.io/combate-ao-vivo/'">LINK 1</div></div>
      <div class="canal-item"><div onclick="location.href='https://futemax.food/canal/combate-ao-vivo-em-hd/'">LINK 2</div></div>
    </div>
  `;
  document.body.innerHTML += html;

  // Função toggle das categorias
  document.querySelectorAll(".categoria-titulo").forEach(titulo => {
    titulo.addEventListener("click", () => {
      const divItens = titulo.nextElementSibling;
      const estaAberto = divItens.style.display === "block";
      document.querySelectorAll(".categoria-itens").forEach(c => c.style.display = "none");
      divItens.style.display = estaAberto ? "none" : "block";
    });
  });

  // Alerts
  alert("RECOMENDÁVEL ACESSAR PELO APP 'WEB VIDEO CASTER'");
  alert("ATRAVÉS DO APP 'WEB VIDEO CASTER', NA FUNÇÃO 'IPTV', A LISTA DE CANAIS TAMBÉM PODE SER ACESSADA PELO LINK: 'https://abre.ai/mKVH'");

  // Remover hash da URL
  history.replaceState(null, null, "/#");
});

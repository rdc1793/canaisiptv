
import m3u8

def reproduzir_links_m3u8(links):
    for link in links:
        try:
            playlist = m3u8.load(link)
            # Aqui você pode inserir o código para reproduzir o conteúdo da playlist
            # Por exemplo, se for uma transmissão ao vivo, você pode usar um player compatível com HLS
            # Se for uma lista de arquivos de vídeo, você pode baixar e reproduzir os arquivos.
            return link  # Retorna o link reproduzido se for bem-sucedido
        except Exception as e:
            continue  # Continua para o próximo link em caso de erro
    return None  # Retorna None se nenhum link for reproduzido com sucesso

# Recebe a lista de links m3u8 como argumento de linha de comando
if __name__ == "__main__":
    import sys
    links_m3u8 = sys.argv[1:]
    link_reproduzido = reproduzir_links_m3u8(links_m3u8)
    if link_reproduzido:
        print(link_reproduzido)

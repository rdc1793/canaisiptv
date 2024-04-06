import requests
import m3u8

def reproduzir_links_m3u8(links):
    for link in links:
        try:
            playlist = m3u8.load(link)
            print("Reproduzindo:", link)
            # Aqui você pode inserir o código para reproduzir o conteúdo da playlist
            # Por exemplo, se for uma transmissão ao vivo, você pode usar um player compatível com HLS
            # Se for uma lista de arquivos de vídeo, você pode baixar e reproduzir os arquivos.
            return link  # Retorna o link reproduzido se for bem-sucedido
        except Exception as e:
            print("Erro ao reproduzir:", link)
            print("Detalhes do erro:", e)
            continue  # Continua para o próximo link em caso de erro
    return None  # Retorna None se nenhum link for reproduzido com sucesso


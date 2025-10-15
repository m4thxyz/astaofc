#!/bin/bash

# Cores
NOCOLOR='\033[0m'
RED='\033[1;38;5;196m'
GREEN='\033[1;38;5;46m'
ORANGE='\033[1;38;5;208m'
BLUE='\033[1;38;5;45m'
PURPLE='\033[1;38;5;93m'
CYAN='\033[1;38;5;51m'
YELLOW='\033[1;38;5;226m'
WHITE='\033[1;38;5;255m'

LAST_METHOD_FILE="./operacao/last_method.txt"
QR_SESSION_FOLDER="./database/ASTAFREE-QR"

start_bot() {
local method=$1
echo "$method" > "$LAST_METHOD_FILE"

while true; do
if [ "$method" = "qr" ]; then
printf "\n${CYAN}🚀 Iniciando conexão via QR-CODE...\n${BLUE}»»»»»»»»»»»»»»»»»»»»${NOCOLOR}\n\n"
node start.js --qr
else
printf "\n${ORANGE}🔑 Iniciando conexão via Código...\n${BLUE}»»»»»»»»»»»»»»»»»»»»${NOCOLOR}\n\n"
node start.js --code
fi
printf "${YELLOW}⚠️ O bot foi encerrado. Reiniciando em 3 segundos...${NOCOLOR}\n"
sleep 3
done
}

auto_start() {
if [ -d "$QR_SESSION_FOLDER" ]; then
if [ -f "$LAST_METHOD_FILE" ]; then
METHOD=$(cat "$LAST_METHOD_FILE")
if [ "$METHOD" = "qr" ]; then
printf "${CYAN}Conexão detectada.\n"
printf "${WHITE}Método de conexão usado anteriormente: ${GREEN}QR-CODE${NOCOLOR}\n"
printf "${BLUE}Ligando ASTA V5 com QR-CODE...${NOCOLOR}\n\n"
start_bot "qr"
exit
elif [ "$METHOD" = "code" ]; then
printf "${CYAN}Conexão detectada.\n"
printf "${WHITE}Método de conexão usado anteriormente: ${ORANGE}CÓDIGO${NOCOLOR}\n"
printf "${BLUE}Ligando ASTA V5 com Código...${NOCOLOR}\n\n"
start_bot "code"
exit
fi
fi
else
printf "${RED}⚠️ Pasta do QR Code do bot (conexão com o WhatsApp) não encontrada.${NOCOLOR}\n"
printf "${YELLOW}🔄 Irei redirecionar ao menu de conexão.${NOCOLOR}\n"
printf "${CYAN}❔ Se precisar de suporte, use a opção 3 no menu.${NOCOLOR}\n\n"
fi
}

show_menu() {
printf "${WHITE}╭──────────────────────────────────────────────────╮\n"
printf "│ ${YELLOW}🌌 O que deseja fazer? ${WHITE} │\n"
printf "${WHITE}╰──────────────────────────────────────────────────╯\n"

printf "${WHITE}╭──────────────────────────────────────────────────╮\n"
printf "│ ${CYAN}🚀 1) ${GREEN}Conectar via QR-CODE ${WHITE} │\n"
printf "${WHITE}╰──────────────────────────────────────────────────╯\n"

printf "${WHITE}╭──────────────────────────────────────────────────╮\n"
printf "│ ${CYAN}🔑 2) ${GREEN}Conectar via Código ${WHITE} │\n"
printf "${WHITE}╰──────────────────────────────────────────────────╯\n"

printf "${WHITE}╭──────────────────────────────────────────────────╮\n"
printf "│ ${CYAN}🛟 3) ${GREEN}Chamar Suporte (WhatsApp) ${WHITE} │\n"
printf "${WHITE}╰──────────────────────────────────────────────────╯\n"

printf "${WHITE}╭──────────────────────────────────────────────────╮\n"
printf "│ ${RED}💔 0) ${GREEN}Sair do Sistema ${WHITE} │\n"
printf "${WHITE}╰──────────────────────────────────────────────────╯\n\n"

printf "${PURPLE}❯❯ ${YELLOW}Digite sua escolha: ${NOCOLOR}"
}

auto_start

while true; do
show_menu
read -r choice
case "$choice" in
1)
start_bot "qr"
;;
2)
start_bot "code"
;;
3)
printf "\n${CYAN}💬 Abrindo suporte:\n${BLUE}»»»»»»»»»»»»»»»»»»»»\n"
printf "${WHITE}🔗 ${PURPLE}https://wa.me/558396494937?text=suporte\n\n"
printf "${YELLOW}📋 Dica: Pressione CTRL+Click no link para abrir!${NOCOLOR}\n"
;;
0)
printf "\n${RED}⏹️ Encerrando sessão...${NOCOLOR}\n"
break
;;
*)
printf "\n${RED}⚠️ Opção inválida! Por favor, tente novamente.${NOCOLOR}\n"
;;
esac
printf "\n${WHITE}Pressione ENTER para continuar...${NOCOLOR}"
read -r
done

printf "\n${GREEN}🎉 Obrigado por usar o ASTA-MD! ${PURPLE}Volte sempre! 🌟\n${NOCOLOR}"
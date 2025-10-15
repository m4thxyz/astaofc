const cmd_termux = (prefix) => {
return `
*_Primeira coisa... Instale o termux:_*
https://www.mediafire.com/file/0npdmv51pnttps0/com.termux_0.119.1-119_minAPI21(arm64-v8a,armeabi-v7a,x86,x86_64)(nodpi)_apkmirror.com.apk/file

*_Após instalado, configure ele com os comandos abaixo:_*

1.
pkg upgrade -y && pkg update -y && pkg install nodejs -y && pkg install nodejs-lts -y && pkg install ffmpeg -y && pkg install wget -y && pkg install git -y

2.
termux-setup-storage

E permite.

4.
cd /sdcard

5.
git clone https://github.com/m4thxyz/astaofc

6.
sh astaup.sh
`
}

exports.cmd_termux = cmd_termux

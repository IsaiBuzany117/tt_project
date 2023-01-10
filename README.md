
# Trabajo Terminal 2021-B066 - "Prototipo web para la gestión de expedientes médicos utilizando una cadena de bloques"




## Authors

- Buzany Ramírez Oscar Isai 
- Ordoñez Castro Dayann 
- Santamaria Arcos Diana  




## Instalación

### Instalación de WSL2

1. Abrir una terminal de windows en modo administrador.
2. Escribir el siguiente comando
```
wsl --install
```
Dar enter y seguir las instrucciones. 

3. Instalar una distribución Linux que se encuentre disponible en la tienda de aplicaciones de Microsoft.
4. Reiniciar la computadora para poder iniciar la instalación de Ubuntu y configurar un usuario usuario.
5. Ejecutar la aplicación Ubuntu, debe abrirse una terminal del sistema operativo linux instalado
6. Seguir las instrucciones para asignar un usuario y su contraseña.
7. Listo. WSL2 ya esta instalado.

### Instalación de Docker
1. Descargar el instalador de Docker de la [pagina principal](https://docs.docker.com/desktop/install/windows-install/#start-docker-desktop)
2. Dar doble click en el instalador.
3. Cuando se solicite, seleccionar WSL2 como back-end.
4. Sigue las instrucciones del instalador.
5. Cuando la Instalación sea exitosa, dar click en **Close** para continuar con el proceso de Instalación.
### Instalación de MongoDB
1. Abrir una terminal de Linux.
2. Escribir el siguiente comando: 
```
sudo apt update
```
3. Instalar mongodb con el siguiente comando:
```
sudo apt-get install mongodb
```
4. Escribir el siguiente comando para ubicarnos en la raíz del sistema operativo:
```
cd /
```
5. Crear un archivo db dentro del directorio data con el siguiente comando:
```
sudo mkdir -p data/db
```
6. Dar permisos de *escritura* al archivo db creado en el paso anterior con el siguiente comando:
```
sudo chown -R `id -un` data/db
```
7. Iniciar mongodb con el siguiente comando:
```
mongod
```
## Instalar Hyperledger Fabric
1. Escribimos el siguiente comando:
```
curl -sSLO https://raw.githubusercontent.com/hyperledger/fabric/main/scripts/install-fabric.sh && chmod +x install-fabric.sh
```
2. Corremos el script **install.sh**
```
./install-fabric.sh -h
Usage: ./install-fabric.sh [-f|--fabric-version <arg>] [-c|--ca-version <arg>] <comp-1> [<comp-2>] ... [<comp-n>] ...
        <comp>: Component to install one or more of  d[ocker]|b[inary]|s[amples]. If none specified, all will be installed
        -f, --fabric-version: FabricVersion (default: '2.4.4')
        -c, --ca-version: Fabric CA Version (default: '1.5.5')
```
3. Necesitaremos la versión 2.2.1 de fabric, asi que escribimos el siguiente comando:
```
./install-fabric.sh --fabric-version 2.2.1
```
4. Esperar a que finalice la instalación.

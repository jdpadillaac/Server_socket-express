import { Usuario } from "./usuario";



export class UsuariosLista {

    private lista: Usuario[] = [];

    constructor() {

    }

    public agregarUsuario(usuario: Usuario) {
        this.lista.push(usuario);

        console.log(this.lista);
        return usuario;
        
    }


    public actualizarNombre(id: string, nombre: string){
        for(let usuario of this.lista) {
            if(usuario.id === id){
                usuario.nombre = nombre;
                break;
            }
        }

        console.log('Actualizando usuario');
        console.log(this.lista);
    }

    public getLista() {
        return this.lista;
    }

    public getUsuario(id: string) {
        return this.lista.find(usuario => {
            return usuario.id === id;
        })
    } 

    public getUsuariosEnSala(sala: string) {
        return this.lista.filter(  usuario => usuario.sala === sala )
    }

    public borrarUsuario(id: string) {
        const tempUser = this.getUsuario(id);
        this.lista = this.lista.filter( usuario => usuario.id !== id );
        return tempUser;
    }
}
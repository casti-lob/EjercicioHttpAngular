export interface ResponseUsers {
    ok:       boolean;
    usuarios: Usuario[];
    total:    number;
}

export interface ResponseUser {
    ok:       boolean;
    usuario: Usuario[];
    total:    number;
}

export interface Usuario {
    role:   string;
    email:  string;
    nombre: string;
    uid:    string;
}

export interface Task {
    estado?: boolean,
    pago?: boolean,
    cedula : Number,
    name : String,
    monto : Number,
    correo : String,
    fecha?: Date,
    cc?: Number
}

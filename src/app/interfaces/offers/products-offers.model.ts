export interface ProductOfferModel {
    id                      : number;
    nombre                  : string;
    marca                   : string;
    descripcion             : string;
    detalles                : string;
    peso                    : string;
    ancho                   : string;
    alto                    : string;
    largo                   : string;
    imagen                  : string;
    elementos_recomendados  : number;
    fecha_registro          : string;
    sku                     : string;
    activo                  : number;
    convertida              : number;
    unique_id               : string;
    marca_autoparte         : number;
    subsubcategoria         : number;
}
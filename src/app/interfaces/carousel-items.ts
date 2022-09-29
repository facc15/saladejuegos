export interface CarouselItems {
    id: number;
    titulo?:{
      primero: string;
      segundo: string;
    };
    subtitulo?: string;
    link?: string;
    foto: string;
    orden?: number;
    marginLeft?: number;

}

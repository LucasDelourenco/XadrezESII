export type TipoPeca = 'p' | 't' | 'c' | 'b' | 'q' | 'k' | 'P' | 'T' | 'C' | 'B' | 'Q' | 'K'

export interface Peca {
    tipo: TipoPeca;
    img: string;
}
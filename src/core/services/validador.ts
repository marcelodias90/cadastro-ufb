

export class validador {

    static isStringValida(props: string, props1?: string, props2?: string, props3?: string, props4?: number) {
        if (props === null || props === '') {
            
            return false
        }
        if (props1 === null || props1 === '') {
            return false
        }
        if (props2 === null || props2 === '') {
            return false
        }
        if (props3 === null || props3 === '') {
            return false
        }
        if (props4 === null || props4 > 0) {
            return false
        }
        else {
            return true
        }
    }
    static pessoaValida(props: string, props1?: string, props2?: number, props3?: string, props4?: string) {
        if (props === null || props === '') {
            
            return false
        }
        if (props1 === null || props1 === '') {
            return false
        }
        if (props2 === null || props2 > 0) {
            return false
        }
        if (props3 === null || props3 === '') {
            return false
        }
        if (props4 === null || props4 === '') {
            return false
        }
    
        else {
            return true
        }
    }

   
}
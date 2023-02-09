

export class validador {

    static isStringValida(props: string, props1?: string, props2?: string) {
        if (props === null || props === '') {

            return false
        }
        if (props1 === null || props1 === '') {
            return false
        }
        if (props2 === null || props2 === '') {
            return false
        }
        else {
            return true
        }
    }
}
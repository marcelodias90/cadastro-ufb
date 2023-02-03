

export class validador {

    static isStringValida(props: string, props1?: string) {
        if (props === null || props === '') {

            return false
        } if (props1 === null || props1 === '') {
            return false
        }
        else {
            return true
        }
    }
}
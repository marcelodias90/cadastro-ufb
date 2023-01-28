export default function Footer() {
    return (
        <div className={`flex  justify-end m-5 absolute bottom-0 right-0 `}>
            <footer>
                <span>
                    Desenvolvido por <a href="https://www.linkedin.com/in/marcelo-dias-b098ab229/" className={`hover:bg-blue-500 hover:text-gray-50`}> Marcelo
                        <span className="text-red-500 "> D</span>ias
                    </a>
                </span>
                <hr />
            </footer>
        </div>

    )
}
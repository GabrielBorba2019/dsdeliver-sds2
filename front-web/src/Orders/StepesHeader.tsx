function StepesHeader() {
    return(
        <header className="orders-steps-container">
            <div className="orders-steps-content">
                <h1 className="steps-title">
                    SIGA AS <br /> ETAPAS
                    <ul className="steps-items">
                        <li>
                            <span className="steps-number">1</span>
                            Selecione os produtos e localização.
                        </li>
                        <li>
                            <span className="steps-number">1</span>
                            Depois clique em <strong>"ENVIAR PEDIDO"</strong>
                        </li>
                    </ul>
                </h1>

            </div>
        </header>
    )
}

export default StepesHeader;
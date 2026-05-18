function Settings() {
    return (
        <section className="page-section">
            <h2>Configurações</h2>
            <div className="info-list">
                <label>
                    <input type="checkbox" defaultChecked />
                    Receber avisos acadêmicos
                </label>
                <label>
                    <input type="checkbox" />
                    Receber lembretes de boletos
                </label>
            </div>
        </section>
    );
}

export default Settings;
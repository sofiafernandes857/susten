// src/FormComponent.js
import React, { useState } from 'react';
import './carros3D.css'; // Importar o CSS personalizado
import '../../variaveis.css';

const Formulario = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do formulário:', formData);
        // Aqui você pode adicionar lógica para enviar os dados
    };

    return (
        <div className="form-container">
            {/* Título fora do contêiner do formulário */}
            <h1>Compartilhe sua <span>ideia!</span></h1>
            
            {/* Contêiner separado para o formulário */}
            <div className="form-box"> 
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensagem">Descreva a sua ideia</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows="4"
                            value={formData.mensagem}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Formulario;

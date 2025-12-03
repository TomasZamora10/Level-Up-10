// Archivo: src/Components/AlertMessage.tsx
import React from 'react';

export interface AlertMessageProps {
    type: 'success' | 'error' | 'info';
    message: string;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ type, message }) => {
    
    // Estilos basados en el tema oscuro (Neon Green, Accent Blue)
    const getAlertStyle = (alertType: string): React.CSSProperties => {
        let backgroundColor = '#1E90FF1A'; // Info (Accent Blue, 10% opacidad)
        let borderColor = '#1E90FF';
        
        if (alertType === 'success') {
            backgroundColor = '#39FF141A'; // Success (Neon Green, 10% opacidad)
            borderColor = '#39FF14';
        } else if (alertType === 'error') {
            backgroundColor = '#FF57331A'; // Error (Rojo)
            borderColor = '#FF5733';
        }

        return {
            backgroundColor,
            borderColor,
            color: '#FFFFFF',
            fontWeight: 'bold',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px',
            border: '1px solid',
            textAlign: 'left'
        };
    };
    
    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';

    return (
        <div style={getAlertStyle(type)}>
            <span style={{marginRight: '10px'}}>{icon}</span>
            {message}
        </div>
    );
};

export default AlertMessage;
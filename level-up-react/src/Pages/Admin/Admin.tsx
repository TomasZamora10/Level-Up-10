// Archivo: src/Pages/Admin/Admin.tsx

import React, { useState } from 'react';
import AdminLayout, { type AdminView } from '../../Components/Admin'; // CORREGIDO
import PagAdminProductosList from './AdminProductosList'; 
import PagAdminProductosCRUD from './AdminProductosCRUD'; 
import PagAdminDashboard from './AdminDashboard'; 

const PlaceholderView: React.FC<{ view: AdminView }> = ({ view }) => (
    <div className="p-4" style={{ color: '#D3D3D3', border: '1px solid yellow', borderRadius: '8px' }}>
        <h2 style={{ color: '#FF5733' }}>Página en Construcción 🚧</h2>
        <p>La vista **{view.toUpperCase()}** (Órdenes, Usuarios, Reportes, etc.) será implementada en la siguiente etapa del proyecto.</p>
    </div>
);


const PagAdmin: React.FC = () => {
// ... (resto del código sin cambios)
    const [currentAdminView, setCurrentAdminView] = useState<AdminView>('dashboard');
    const [currentProductCode, setCurrentProductCode] = useState<string | undefined>(undefined);

    const handleNavigate = (view: AdminView, productCode?: string) => {
// ... (resto del código sin cambios)
        setCurrentAdminView(view);
        setCurrentProductCode(productCode);
    };

    const renderAdminContent = () => {
        switch (currentAdminView) {
            case 'dashboard':
                return <PagAdminDashboard />;
            case 'productosList':
                return <PagAdminProductosList onNavigate={handleNavigate} />;
            case 'nuevoProducto':
                return <PagAdminProductosCRUD type="nuevo" onNavigate={handleNavigate} />; 
            case 'editarProducto':
                return <PagAdminProductosCRUD 
                           type="editar" 
                           code={currentProductCode} 
                           onNavigate={handleNavigate} 
                       />;
            default:
                return <PlaceholderView view={currentAdminView} />;
        }
    };

    return (
        <AdminLayout 
            currentView={currentAdminView} 
            onViewChange={handleNavigate}
        >
            {renderAdminContent()}
        </AdminLayout>
    );
};

export default PagAdmin;